/* eslint-disable jsx-a11y/media-has-caption */
import React, { createRef, useState } from 'react';
import Webcam from 'react-webcam';
import styled from 'styled-components';
import { string } from 'prop-types';
import loadFirebaseClient from '../../../utils/firebase';
import 'firebase/firestore';
import 'firebase/storage';
import { useAuth } from '../../../hooks/useAuth';
import renderVideo from '../../../utils/render';

import VideoFormLayout from '../../Layout/VideoFormLayout';
import Header from '../../Layout/Header';
import Button from '../Inputs/Button';
import Loader from '../../Loader';


const GenerateVideo = ({ teamId }) => {
  const [imageData, setImageData] = useState();
  const [btnState, setButtonState] = useState('Generate video');
  const [btnDisabled, setButtonDisabled] = useState(true);
  const [renderState, setRenderState] = useState(false);
  const [videoData, setVideoData] = useState();

  const { user } = useAuth();
  const firebase = loadFirebaseClient;
  const imageUploadRef = firebase.storage().ref(`images/${teamId}/${user.uid}/face.jpg`);
  // const imageRef = storageRef.child('face.png');
  // const imagesRef = storageRef.cild(`${teamId}/${user.uid}/face.png`);

  const videoConstraints = {
    width: 178,
    height: 256,
    facingMode: 'user',
  };

  console.log('Team: ', teamId);
  console.log('User: ', user.uid);

  const webcam = createRef();

  const capture = () => {
    setImageData(webcam.current.getScreenshot());
    setButtonDisabled(false);
  };

  const resetCapture = () => {
    setImageData();
    setButtonDisabled(true);
  };

  const handleShowVideo = () => {
    setRenderState(false);
    firebase.storage()
      .ref(`videos/${teamId}/1.mp4`)
      .getDownloadURL()
      .then((url) => {
        setVideoData(url);
      });
  };

  const handleUploadImage = (e) => {
    e.preventDefault();
    setButtonState('Uploading photo');
    setButtonDisabled(true);
    imageUploadRef.putString(imageData, 'data_url')
      .then(() => {
        renderVideo(teamId, user.uid)
          .then((res) => {
            res.on('created', () => setRenderState(true));
            res.on('finished', () => handleShowVideo());
          });
      });

    // imageUploadRef.putString(imageData, 'data_url')
    //   .then((snapshot) => {
    //     snapshot.ref.getDownloadURL()
    //       .then((getDownloadURL) => {
    //         console.log(getDownloadURL);
    //         renderVideo(getDownloadURL, teamId);
    //       });
    //   });
  };

  const disableHandler = () => btnDisabled;

  return (
    <VideoFormLayout>
      <FormLeft>
        <p>Logo</p>
        <FormContentWrapper role="main">
          <Header
            title="Wordt het gezicht van jouw team!"
            text="Dit is jouw gepersonaliseerde promovideo, hier ga jij een hoofdrol spelen in het verhaal waarom jij meer teamgenoten nodig hebt. Selecteer een foto voor jouw karakter."
          />
          <CharacterWrapper>
            { imageData ? <StyledPreview src={imageData} />
              : (
                <StyledWebcam
                  audio={false}
                  ref={webcam}
                  screenshotFormat="image/jpeg"
                  videoConstraints={videoConstraints}
                />
              )}
          </CharacterWrapper>
          <ButtonContainer>
            { !imageData ? (
              <>
                <Button onClick={capture}>Capture photo</Button>
                <Button onClick={capture}>Select a photo</Button>
              </>
            ) : (
              <Button onClick={resetCapture}>Take new photo</Button>
            )}
          </ButtonContainer>
          <SubmitWrapper>
            <Button disabled={disableHandler()} onClick={(e) => handleUploadImage(e)}>{btnState}</Button>
          </SubmitWrapper>
        </FormContentWrapper>
      </FormLeft>
      <FormRight>
        <VideoContainer>
          <VideoWrapper>
            {renderState && (
              <>
                <Loader />
                <LoadingText>Bezig met video verwerken, dit kan even duren...</LoadingText>
              </>
            )}
            {videoData && (
            <video width="541" height="304" controls>
              <source src={videoData} type="video/mp4" />
            </video>
            )}
          </VideoWrapper>
        </VideoContainer>
        {/* {videoData && (
          <ButtonContainer>
            <Button>Share on Facebook</Button>
          </ButtonContainer>
        )} */}
      </FormRight>
    </VideoFormLayout>
  );
};

const FormLeft = styled.section`
  overflow-y: auto;
  width: 45vw;
  padding: 3rem;
  background-color: white;
`;

const FormRight = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow-y: hidden;
  width: 55vw;
  background: url('/static/global/assets/images/noise_V2.png') repeat, #112130;
  background-attachment: fixed;
  background-size: 9rem, auto;
`;

const FormContentWrapper = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: initial;
  max-width: 45rem;
  margin: 8rem auto 0;
  width: 100%;
  height: auto;
`;

const CharacterWrapper = styled.div`
  background: url('/static/global/assets/images/characters/empty_char.svg') no-repeat;
  width: 37.7rem;
  height: 34.2rem;
  padding: 5rem 8.6rem;
`;

const StyledWebcam = styled(Webcam)`
  width: 17.8rem;
  height: 25.6rem;
  border-radius: 50%;
`;

const StyledPreview = styled.img`
  width: 17.8rem;
  height: 25.6rem;
  border-radius: 50%;
`;

const ButtonContainer = styled.div`
  margin-top: 5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  & button {
    margin-bottom: 0;
  }
`;

const SubmitWrapper = styled.div`
  margin-top: 2.8rem;
  display: flex;
  justify-content: flex-end;
`;

const VideoContainer = styled.div`
  background: url('/static/global/assets/images/characters/video-bg.svg') no-repeat;
  max-width: 54.1rem;
  max-height: 44.1rem;
  width: 100%;
  height: 100%;
`;

const VideoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 54.1rem;
  height: 30.4rem;
`;

const LoadingText = styled.p`
  margin-top: 1rem;
  font-size: 1.8rem;
  color: white;
`;

GenerateVideo.propTypes = {
  teamId: string.isRequired,
};

export default GenerateVideo;
