import React, { createRef, useState } from 'react';
import Webcam from 'react-webcam';
import styled from 'styled-components';
import { string } from 'prop-types';
import loadFirebaseClient from '../../../utils/firebase';
import 'firebase/firestore';
import 'firebase/storage';
import { useAuth } from '../../../hooks/useAuth';

import FormLayout from '../../Layout/FormLayout';
import Header from '../../Layout/Header';
import Button from '../Inputs/Button';


const GenerateVideo = ({ teamId }) => {
  const [imageData, setImageData] = useState();

  const { user } = useAuth();
  const firebase = loadFirebaseClient;
  const imageUploadRef = firebase.storage().ref(`images/${teamId}/${user.uid}/face.png`);
  // const imageRef = storageRef.child('face.png');
  // const imagesRef = storageRef.cild(`${teamId}/${user.uid}/face.png`);

  const videoConstraints = {
    width: 178,
    height: 256,
    facingMode: 'user',
  };

  const webcam = createRef();

  const capture = () => {
    setImageData(webcam.current.getScreenshot());
  };

  const resetCapture = () => {
    setImageData();
  };

  const handleUploadImage = (e) => {
    e.preventDefault();

    // const image = new Image();
    // image.src = imageData;

    // console.log(image);

    imageUploadRef.putString(imageData, 'data_url')
      .then(() => {
        console.log('Uploaded Image');
      });

    // firebase
    //   .firestore()
    //   .collection('teams')
    //   .doc(teamId)
    //   .add({
    //     teamName: formData.teamName,
    //     motivation: formData.motivation,
    //     type: formData.type,
    //     businessName: formData.businessName,
    //     businessPhoto: formData.businessPhoto,
    //     website: formData.website,
    //     facebook: formData.website,
    //     twitter: formData.twitter,
    //     members: [
    //       { user: user.uid },
    //     ],
    //     videos: [
    //       { video: '' },
    //       { video: '' },
    //       { video: '' },
    //       { video: '' },
    //       { video: '' },
    //     ],
    //   })
  };

  const disableHandler = () => {
    if (imageData) {
      return false;
    }
    return true;
  };

  // const capture = useCallback(
  //   () => {
  //     const imageSrc = webcam.current.getScreenshot();
  //     console.log(imageSrc);
  //   },
  //   [webcam],
  // );

  return (
    <FormLayout>
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
        <Button disabled={disableHandler()} onClick={(e) => handleUploadImage(e)}>Generate video</Button>
      </SubmitWrapper>
    </FormLayout>
  );
};


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

GenerateVideo.propTypes = {
  teamId: string.isRequired,
};

export default GenerateVideo;
