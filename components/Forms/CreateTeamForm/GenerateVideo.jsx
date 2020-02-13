import React, { useRef, useCallback } from 'react';
import Webcam from 'react-webcam';
import styled from 'styled-components';
import { string } from 'prop-types';
import FormLayout from '../../Layout/FormLayout';
import Header from '../../Layout/Header';

// import FormLayout from '../../Layout/FormLayout';
// import Header from '../../Layout/Header';


const GenerateVideo = ({ teamId }) => {
  console.log('Team ID: ', teamId);

  const videoConstraints = {
    width: 178,
    height: 256,
    facingMode: 'user',
  };

  const webcam = useRef(null);

  // const capture = useCallback(
  //   () => {
  //     const imageSrc = webcam.current.getScreenshot();
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
        <StyledWebcam
          audio={false}
          ref={webcam}
          screenshotFormat="image/jpeg"
          videoConstraints={videoConstraints}
        />
      </CharacterWrapper>
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

GenerateVideo.propTypes = {
  teamId: string.isRequired,
};

export default GenerateVideo;
