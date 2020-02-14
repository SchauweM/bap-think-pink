import React from 'react';
import { func, shape } from 'prop-types';
import styled from 'styled-components';
import loadFirebaseClient from '../../utils/firebase';
import 'firebase/firestore';

import Nav from '../../components/Layout/Nav';
import { withTranslation } from '../../utils/i18n';
import Button from '../../components/Forms/Inputs/Button';

const About = () => (
  <>
    <AboutWrapper>
      <Header>
        <Container>
          <Nav />
          <HeaderContent>
            <HeaderTitle>Race for the Cure Europa</HeaderTitle>
            <HeaderSub>Wat is ons doel</HeaderSub>
            <HeaderText>Bij race for the cure doen we ons best om er voor te zorgen dat mensen met borstkanker, genaamd lotgenoten, een hart onder de riem te steken. </HeaderText>
            <HeaderSub>Hoe kan jij helpen</HeaderSub>
            <HeaderText>Jij kan helpen door mee te doen aan de Race for The cure! Door mee te doen laat jij zien aan jouw lotgenoten dat jullie er zijn om te helpen en bewust bezig zijn met hun situatie.  Ook al het geld dat wordt ingezameld wordt direct terug geïnversteerd in onderzoek en verzorging voor mensen met borstkanker.</HeaderText>
          </HeaderContent>
        </Container>
      </Header>
      <Content>
        <Container>
          <ActiviteitenSection>
            <ContentTitle>
              Onze activiteiten
            </ContentTitle>
            <ContentText>
              Elk jaar staat oktober wereldwijd in het teken van borstkanker. De Race for the Cure®, die traditioneel plaatsvindt op de laatste zondag van september, vormt de start van deze sensibiliseringsmaand.
              Dit jaar, op zondag 27 september, vindt de Race for the Cure® opnieuw plaats op Linkeroever in Antwerpen. Op het menu staan 3 km wandelen of 6 km lopen in een unieke sfeer. Ons gezondheidsdorp vol animatie maakt er een familiaal gebeuren van. Dankzij de Kids for the Cure® en de Dogs for the Cure® gaat het werkelijk om een event waarop iedereen zich welkom voelt.
            </ContentText>
            <Button>Doe mee</Button>
          </ActiviteitenSection>
          <OpbrengstSection>
            <ContentTitle>
              Wat gebeurt er met de opbrengsten
            </ContentTitle>
            <ContentText>
              Met de opbrengst van de Race for the Cure worden zorgprojecten voor borstkankerpatiënten gesteund in de steden en de regio waar de Race doorgaat. In samenwerking met ziekenhuizen en lotgenotengroepen wordt bekeken waar we het meest nuttige ondersteuning kunnen bieden. De aankoop van een pruik, het organiseren van revalidatieprojecten, een beter onthaal in de ziekenhuizen, psychologische steun aan patiënten,…
            </ContentText>
            <Button>Bezoek Think Pink</Button>
          </OpbrengstSection>
        </Container>
      </Content>
    </AboutWrapper>
  </>
);

const Container = styled.div`
   max-width: 104rem;
   margin: 0 auto;
`;

const AboutWrapper = styled.div`
`;

const Header = styled.div`
  background: url('/static/global/assets/images/background/finish.png'), url('/static/global/assets/images/noise_V2.png'), #112130;
  background-attachment: absolute, fixed;
  background-repeat: no-repeat, repeat;
  background-size: auto, 9rem, auto;
  padding-bottom: 5rem;
  background-position 30% 100%;
`;

const HeaderContent = styled.div`
  max-width: 40rem;
  margin: 0 5rem 0 auto;
`;

const HeaderTitle = styled.h1`
  color: white;
  font: ubuntu;
  font-weight: bold;
  font-size: 3rem;
  margin-bottom: 5rem;
`;

const HeaderSub = styled.h2`
  color: white;
  font: ubuntu;
  font-weight: bold;
  font-size: 2rem;
  margin-bottom: 3rem;
`;

const HeaderText = styled.p`
  color: white;
  margin-bottom: 3rem;
`;

const ActiviteitenSection = styled.section`
  margin-bottom: 3rem;
  max-width: 60rem;
  margin-top: 5rem;
`;

const OpbrengstSection = styled.section`
  margin-bottom: 3rem;
  max-width: 60rem;
  margin-left: auto;
  margin-top: 5rem;
`;


const ContentTitle = styled.h1`
  font: ubuntu;
  font-weight: bold;
  font-size: 3rem;
  margin-bottom: 5rem;
`;

const ContentText = styled.p`
  margin-bottom: 3rem;
`;

const Content = styled.div`
  background: white;
`;

About.propTypes = {
  t: func.isRequired,
  teamData: shape({}).isRequired,
};

About.getInitialProps = async () => {
  const firebase = loadFirebaseClient;
  const db = firebase.firestore();

  const result = await new Promise((resolve, reject) => {
    db.collection('teams').get().then(
      (snapshot) => {
        const data = [];
        snapshot.forEach((doc) => {
          // data[doc.id] = doc.data();
          data.push({ id: doc.id, ...doc.data() });
          console.log('Data: ', data);
        });
        resolve(data);
      },
    ).catch((error) => {
      reject(new Error(error));
    });
  });


  return {
    namespacesRequired: ['common'],
    teamData: result,
  };
};

export default withTranslation('common')(About);
