import React from 'react';
import { func } from 'prop-types';
import styled, { keyframes } from 'styled-components';
import { Controller, Scene } from 'react-scrollmagic';

import { withTranslation } from '../utils/i18n';

const Home = ({ t }) => {
  console.log(t);
  return (
    <Container>
      <Deel1>
        <WolkWrapper>
          <Wolk
            src="static/global/assets/images/onboarding/wolk2.png"
            width="325"
            height="236"
            delay="-10s"
            duration="150s"
          />
          <Wolk
            src="static/global/assets/images/onboarding/wolk3.png"
            width="359"
            height="270"
            delay="-180s"
            duration="220s"
          />
          <Wolk
            src="static/global/assets/images/onboarding/wolk4.png"
            width="456"
            height="375"
            delay="-10s"
            duration="220s"
          />
        </WolkWrapper>
        <Whatever black>Hello Thomas</Whatever>
        <WolkWrapper>
          <Wolk
            src="static/global/assets/images/onboarding/wolk1.png"
            width="427"
            height="287"
            delay="-10s"
            duration="220s"
          />
          <Wolk
            src="static/global/assets/images/onboarding/wolk2.png"
            width="325"
            height="236"
            delay="-120s"
            duration="250s"
          />

          <Wolk
            src="static/global/assets/images/onboarding/wolk5.png"
            width="626"
            height="422"
            delay="-40s"
            duration="200s"
          />
          <Wolk
            src="static/global/assets/images/onboarding/wolk6.png"
            width="259"
            height="218"
            delay="-100s"
            duration="190s"
          />
        </WolkWrapper>
      </Deel1>
      <BushWrapper id="bushWrapper">
        <BushLWrapper>
          <Controller>
            <Scene duration={600} classToggle="sweep" triggerElement=".leafLAnim" indicators>
              {(progress, event) => (
                <div className="test">Pin Test {event.type} {progress}</div>
              )}
            </Scene>
          </Controller>
          <LeafLAnim duration=".85s">
            <LeafL translateX="15" translateY="57" src="static/global/assets/images/onboarding/leaf11L.png" />
          </LeafLAnim>
          <LeafLAnim duration=".8s">
            <LeafL translateX="30" translateY="47" src="static/global/assets/images/onboarding/leaf10L.png" />
          </LeafLAnim>
          <LeafLAnim duration=".75s">
            <LeafL translateX="20" translateY="40" src="static/global/assets/images/onboarding/leaf9L.png" />
          </LeafLAnim>
          <LeafLAnim duration=".7s">
            <LeafL translateX="5" translateY="50" src="static/global/assets/images/onboarding/leaf8L.png" />
          </LeafLAnim>
          <LeafLAnim duration=".65s">
            <LeafL translateX="10" translateY="32" src="static/global/assets/images/onboarding/leaf7L.png" />
          </LeafLAnim>
          <LeafLAnim duration=".6s">
            <LeafL translateX="15" translateY="35" src="static/global/assets/images/onboarding/leaf6L.png" />
          </LeafLAnim>
          <LeafLAnim duration=".55s">
            <LeafL translateX="40" translateY="30" src="static/global/assets/images/onboarding/leaf5L.png" />
          </LeafLAnim>
          <LeafLAnim duration=".5s">
            <LeafL translateX="5" translateY="28" src="static/global/assets/images/onboarding/leaf4L.png" />
          </LeafLAnim>
          <LeafLAnim duration=".45s">
            <LeafL translateX="0" translateY="30" src="static/global/assets/images/onboarding/leaf3L.png" />
          </LeafLAnim>
          <LeafLAnim duration=".4s">
            <LeafL translateX="0" translateY="15" src="static/global/assets/images/onboarding/leaf2L.png" />
          </LeafLAnim>
          <LeafLAnim duration=".45s">
            <LeafL translateX="5" translateY="10" src="static/global/assets/images/onboarding/leaf1L.png" />

          </LeafLAnim>


        </BushLWrapper>
        <BushR src="static/global/assets/images/onboarding/bush-right.png" />
      </BushWrapper>
      <IceWrapper>
        <IceBackground zPos="0" src="static/global/assets/images/onboarding/achterkant-ice.png" />
        <IceForground zPos="5" src="static/global/assets/images/onboarding/voorkant-ice.png" />
      </IceWrapper>
      {/* <CityWrapper>
        <CityPeace src="static/global/assets/images/onboarding/huizen_links_voor.png" />
        <CityPeace src="static/global/assets/images/onboarding/finish.png" />
        <CityPeace src="static/global/assets/images/onboarding/huizen_rechts_voor.png" />
      </CityWrapper> */}
    </Container>
  );
};

const wolkenLoop = keyframes`
 from {transform: translateX(100vw);}
 to {transform: translateX(-50vw);}
`;

const leafSweep = keyframes`
 0% {transform: rotate(30deg);}
 100% {transform: rotate(0deg);}
`;

const livingLeaf = keyframes`
 0% {transform: rotate(0);}
 100% {transform: rotate(-1deg);}
`;


const Deel1 = styled.div`
  height: 90vh;
`;

const WolkWrapper = styled.div`
  display: flex;
  flex-direction: row;
  height: 45vh;
`;
const Wolk = styled.img`
  animation: ${wolkenLoop} ${(props) => props.duration} linear infinite;
  animation-delay: ${(props) => props.delay};
  transform-origin: 0;
  position: absolute;
`;

const BushWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`;

const BushLWrapper = styled.div`
  margin-left: -15rem;
`;

const LeafLAnim = styled.div`
  
  animation: ${livingLeaf} 4${(props) => props.duration} ease-in infinite alternate;
  position: absolute;

  .sweep{
    animation: ${livingLeaf} 4${(props) => props.duration} ease-in infinite alternate, ${leafSweep} 0${(props) => props.duration} ease-out;
  }
`;

const LeafL = styled.img`
  position: absolute;
  
  transform: translate(${(props) => props.translateX}rem, ${(props) => props.translateY}rem);
  transform-origin: top left;
`;

const BushR = styled.img`
  display: block;
`;

const IceWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  overflow-x: hidden;
  overflow-y: visible;
  perspective: 8rem;
  perspective-origin: 100%;
  display: flex;
`;

const IceBackground = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  transform: translateZ(0);
`;

const IceForground = styled.img`
  margin-top: auto;
  margin-bottom: 50px;

  transform-origin: 100%;
  transform: translateZ(1rem) scale(0.9);
`;


const CityPeace = styled.img`
  margin: 0 -20rem;
`;
const CityWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`;

const Container = styled.div`
  background: url(static/global/assets/images/onboarding/noise_V2.png),
    linear-gradient(
      184.99deg,
      #cd5f16 1.87%,
      #e19832 8.03%,
      #f1da8b 13.87%,
      #a7caed 22%,
      #6c90b2 28.32%,
      #3e5974 51.25%,
      #192d3f 71.59%,
      #091119 102.36%
    );
  background-attachment: fixed, scroll;
  background-size: 6rem, auto;
  min-height: 300vh;
  max-width: 100vw;
  margin: 0 auto;
`;

const Whatever = styled.p`
  color: white;
`;

// inser javascript

Home.propTypes = {
  t: func.isRequired,
};

Home.getInitialProps = async () => ({
  namespacesRequired: ['common'],
});

export default withTranslation('common')(Home);
