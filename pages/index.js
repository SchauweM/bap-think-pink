import React from 'react';
import { func } from 'prop-types';
import styled, { keyframes } from 'styled-components';
import { Controller, Scene } from 'react-scrollmagic';

import { withTranslation } from '../utils/i18n';

const Home = ({ t }) => {
  console.log(t);
  return (
    <ContainerWrapper>
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
          <TextWrapper xPos="-10" yPos="0" color="white">
            <Title>Borstkanker...</Title>
            <Text>Voor de meesten is dit te vergelijken met een lange, eindeloze en vooral eenzame val.</Text>
          </TextWrapper>
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
        <BushWrapper>
          <BushLWrapper>
            {/* <Controller>
            <Scene duration={600} classToggle="sweep" triggerElement=".leafLAnim" indicators>
              {(progress, event) => (
                <div className="test">Pin Test {event.type} {progress}</div>
              )}
            </Scene>
          </Controller> */}
            <Controller>
              <Scene classToggle={['.test', 'sweep']} triggerElement="#leafTrigger" reverse={false} indicators>
                <>
                  <LeafLAnim translateX="15" translateY="57">
                    <LeafL className="test" className="test" duration=".85s" src="static/global/assets/images/onboarding/leaf11L.png" />
                  </LeafLAnim>
                  <LeafLAnim translateX="30" translateY="47">
                    <LeafL className="test" duration=".8s" src="static/global/assets/images/onboarding/leaf10L.png" />
                  </LeafLAnim>
                  <LeafLAnim translateX="20" translateY="40">
                    <LeafL className="test" duration=".75s" src="static/global/assets/images/onboarding/leaf9L.png" />
                  </LeafLAnim>
                  <LeafLAnim translateX="5" translateY="50">
                    <LeafL className="test" duration=".7s" src="static/global/assets/images/onboarding/leaf8L.png" />
                  </LeafLAnim>
                  <LeafLAnim translateX="10" translateY="32">
                    <LeafL className="test" duration=".65s" src="static/global/assets/images/onboarding/leaf7L.png" />
                  </LeafLAnim>
                  <LeafLAnim translateX="15" translateY="35">
                    <LeafL className="test" duration=".6s" src="static/global/assets/images/onboarding/leaf6L.png" />
                  </LeafLAnim>
                  <LeafLAnim translateX="40" translateY="30">
                    <LeafL className="test" duration=".55s" src="static/global/assets/images/onboarding/leaf5L.png" />
                  </LeafLAnim>
                  <LeafLAnim translateX="5" translateY="28">
                    <LeafL className="test" duration=".5s" src="static/global/assets/images/onboarding/leaf4L.png" />
                  </LeafLAnim>
                  <LeafLAnim translateX="0" translateY="30">
                    <LeafL className="test" duration=".45s" src="static/global/assets/images/onboarding/leaf3L.png" />
                  </LeafLAnim>
                  <LeafLAnim translateX="0" translateY="15">
                    <LeafL className="test" duration=".4s" src="static/global/assets/images/onboarding/leaf2L.png" />
                  </LeafLAnim>
                  <LeafLAnim translateX="5" translateY="10">
                    <LeafL className="test" duration=".45s" src="static/global/assets/images/onboarding/leaf1L.png" />
                  </LeafLAnim>
                </>
              </Scene>
            </Controller>
            <LeafTrigger id="leafTrigger" />
            <TextWrapper xPos="0" yPos="0" color="white">
              <Title>Een lange tocht</Title>
              <Text>Het is alsof je de hele wereld moet doorreizen in je eentje. Kilometers ver, weken, maanden, jaren land ben je onderweg zonder een einde in zicht.</Text>
            </TextWrapper>
          </BushLWrapper>
          <BushRWrapper>
            {/* <Controller>
            <Scene duration={600} classToggle="sweep" triggerElement=".leafLAnim" indicators>
              {(progress, event) => (
                <div className="test">Pin Test {event.type} {progress}</div>
              )}
            </Scene>
          </Controller> */}
            <Controller>
              <Scene classToggle={['.test', 'sweep']} triggerElement="#leafTrigger" reverse={false} indicators>
                <>
                  <LeafTrigger id="leafTrigger" />
                  <LeafLAnim translateX="15" translateY="53">
                    <LeafL className="test" duration=".85s" src="static/global/assets/images/onboarding/leaf11L.png" />
                  </LeafLAnim>
                  <LeafLAnim translateX="33" translateY="47">
                    <LeafL className="test" duration=".8s" src="static/global/assets/images/onboarding/leaf10L.png" />
                  </LeafLAnim>
                  <LeafLAnim translateX="10" translateY="42">
                    <LeafL className="test" duration=".75s" src="static/global/assets/images/onboarding/leaf9L.png" />
                  </LeafLAnim>
                  <LeafLAnim translateX="3" translateY="53">
                    <LeafL className="test" duration=".7s" src="static/global/assets/images/onboarding/leaf8L.png" />
                  </LeafLAnim>
                  <LeafLAnim translateX="10" translateY="27">
                    <LeafL className="test" duration=".65s" src="static/global/assets/images/onboarding/leaf7L.png" />
                  </LeafLAnim>
                  <LeafLAnim translateX="15" translateY="35">
                    <LeafL className="test" duration=".6s" src="static/global/assets/images/onboarding/leaf6L.png" />
                  </LeafLAnim>
                  <LeafLAnim translateX="10" translateY="30">
                    <LeafL className="test" duration=".55s" src="static/global/assets/images/onboarding/leaf5L.png" />
                  </LeafLAnim>
                  <LeafLAnim translateX="5" translateY="28">
                    <LeafL className="test" duration=".5s" src="static/global/assets/images/onboarding/leaf4L.png" />
                  </LeafLAnim>
                  <LeafLAnim translateX="0" translateY="30">
                    <LeafL className="test" duration=".45s" src="static/global/assets/images/onboarding/leaf3L.png" />
                  </LeafLAnim>
                  <LeafLAnim translateX="0" translateY="15">
                    <LeafL className="test" duration=".4s" src="static/global/assets/images/onboarding/leaf2L.png" />
                  </LeafLAnim>
                  <LeafLAnim translateX="5" translateY="10">
                    <LeafL className="test" duration=".45s" src="static/global/assets/images/onboarding/leaf1L.png" />
                  </LeafLAnim>
                </>
              </Scene>
            </Controller>
          </BushRWrapper>
        </BushWrapper>
        <IceWrapperAchter>
          <IceBackground zPos="0" src="static/global/assets/images/onboarding/achterkant-ice.png" />
        </IceWrapperAchter>
        <IceWrapperVoor>
          <IceForground zPos="5" src="static/global/assets/images/onboarding/voorkant-ice.png" />
        </IceWrapperVoor>
        <TextWrapper xPos="-5" yPos="200" color="black">
          <Title>Maar</Title>
          <Text>Sommige reizen denken we alleen te moeten doorstaan, maar dit is niet het geval. Race for the Cure is hier om het tegendeel te bewijzen. </Text>
        </TextWrapper>
        <CityWrapper>
          <CityPeace src="static/global/assets/images/onboarding/huizen_links_voor.png" />
          <CityPeace src="static/global/assets/images/onboarding/finish.png" />
          <CityPeace src="static/global/assets/images/onboarding/huizen_rechts_voor.png" />
        </CityWrapper>
      </Container>

    </ContainerWrapper>
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
 100% {transform: rotate(-3deg);}
`;

const LeafTrigger = styled.div`
  transform: translateY(-40rem);
`;


const Deel1 = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
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
  transform-origin: 100%;
  transform: translateY(80vh) translateZ(4rem) scale(.5);
`;

const BushLWrapper = styled.div`
  margin-left: -15rem;
  margin-top: 20rem;
`;

const BushRWrapper = styled.div`
  margin-right: -15rem;
  margin-top: -10rem;
  transform: scaleX(-1);
`;

const LeafLAnim = styled.div`
  position: absolute;
  transform: translate(${(props) => props.translateX}rem, ${(props) => props.translateY}rem)};
  position: absolute;
  .sweep{
    animation: ${leafSweep} 2${(props) => props.duration}s cubic-bezier(0.205, 0.450, 0.465, 1)  0${(props) => props.duration}s 1 alternate, ${livingLeaf} 4${(props) => props.duration}s ease-in  2${(props) => props.duration}s infinite alternate;
  }
`;

const LeafL = styled.img`
  transform-origin: top left;
  transform: rotate(30deg);
`;

const IceWrapperVoor = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  transform-origin: 100%;
  transform: translateY(0) translateZ(4rem) scale(.5);  
`;

const IceWrapperAchter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  transform-origin: 100%;
  transform: translateY(0) translateZ(3.5rem) scale(.5);
`;

const IceBackground = styled.img`
  position: absolute;
  top: 330vh;
`;

const IceForground = styled.img`
  position: absolute;
  top: 340vh;
`;


const CityPeace = styled.img`
`;
const CityWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin-top:200vh;
  padding-top: 50vh;
  transform: translateX(-65rem) translateY(25rem) translateZ(-6rem) scale(1.8);
`;

const Container = styled.div`
  width: 100%;
  height: 100%;
  overflow-x: hidden;
  overflow-y: scroll;
  perspective: 8rem;
  perspective-origin: 100%;

  background: url(static/global/assets/images/onboarding/noise_V2.png),
  linear-gradient(
    184.99deg,
    #192d3f 71.59%,
    #091119 102.36%
  );

  background-size: 8rem;
`;

const ContainerWrapper = styled.div`
  background-attachment: fixed, scroll;
  background-size: 6rem, auto;
  height: 100vh;

`;

const Title = styled.p`
    font-family: ubuntu;
    weight: bold;
    font-size: 3rem;
    text-aling: center;
`;


const Text = styled.p`
  text-aling: center;
`;

const TextWrapper = styled.div`

  color: white;
  position: absolute;
  margin-left: 50vw;
  max-width: 25rem;
  transform: translate(${(props) => props.xPos}rem, ${(props) => props.yPos}vh)};
`;


// inser javascript

Home.propTypes = {
  t: func.isRequired,
};

Home.getInitialProps = async () => ({
  namespacesRequired: ['common'],
});

export default withTranslation('common')(Home);
