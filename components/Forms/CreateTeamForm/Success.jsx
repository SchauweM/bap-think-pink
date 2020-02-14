/* eslint-disable jsx-a11y/media-has-caption */
import React from 'react';
import styled from 'styled-components';
import { string } from 'prop-types';

import VideoFormLayout from '../../Layout/VideoFormLayout';
import Header from '../../Layout/Header';

const Success = ({ teamId, videoData }) => {
  console.log('Team: ', teamId);

  return (
    <VideoFormLayout>
      <FormLeft>
        <p>Logo</p>
        <FormContentWrapper role="main">
          <Header
            title="Je vrienden zijn uitgenodigd!"
            text="Ze hebben allemaal een bericht gekregen per mail."
          />
          <Header
            title="Maak het officieel!"
            text="Deel aan de rest van de wereld wat zij kunnen doen voor Think Pink in de strijd tegen borstkanker. Deel het op Facebook en daag je vrienden publiek uit, ik wed dat ze geen nee kunnen zeggen. 😉"
          />
        </FormContentWrapper>
      </FormLeft>
      <FormRight>
        <VideoContainer>
          <VideoWrapper>
            {videoData && (
            <video width="541" height="304" autoPlay controls>
              <source src={videoData} type="video/mp4" />
            </video>
            )}
          </VideoWrapper>
        </VideoContainer>
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

Success.propTypes = {
  teamId: string.isRequired,
  videoData: string.isRequired,
};

export default Success;
