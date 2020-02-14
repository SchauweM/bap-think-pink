import React from 'react';
import { func, shape } from 'prop-types';
import styled from 'styled-components';
import loadFirebaseClient from '../../utils/firebase';
import 'firebase/firestore';

import Nav from '../../components/Layout/Nav';
import Goal from '../../components/Teams/Goal';
import Button from '../../components/Forms/Inputs/Button';
import { withTranslation } from '../../utils/i18n';

const Detail = ({ t, teamData }) => {
  console.log(t);
  console.log('Teams: ', teamData);
  teamData.forEach((team) => {
    console.log('Team: ', team.name);
  });

  return (
    <>
      <DetailHeader>
        <Container>
          <Nav />
          <h1>Welkom bij, BAP tegen kanker!</h1>
          <HeaderImagesWrapper>
            <HeaderImage src="/static/global/assets/images/characters/detail-header/4.svg" />
            <HeaderImage src="/static/global/assets/images/characters/detail-header/5.svg" />
            <HeaderImage src="/static/global/assets/images/characters/detail-header/1.svg" />
            <HeaderImage src="/static/global/assets/images/characters/detail-header/3.svg" />
            <HeaderImage src="/static/global/assets/images/characters/detail-header/2.svg" />
          </HeaderImagesWrapper>
        </Container>
      </DetailHeader>
      <DetailContent>
        <Container>
          <DetailContentWrapper>
            <VerhaalWrapper>
              <VerhaalTitel>Ons verhaal</VerhaalTitel>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse vulputate nunc sed risus elementum, eget tincidunt quam molestie. Aliquam pellentesque id odio non ullamcorper.
              </p>
            </VerhaalWrapper>
            <DonateWrapper>
              <DonateTitel>
                Doneer jij voor onze race?
              </DonateTitel>
              <DonateSubText>We zouden het erg appreciëren :)
              </DonateSubText>
              <Goal />
              <DonateSelectionWrapper>
                <p>Doneer:</p>
                <ButtonWrapper>
                  <Button>€100</Button>
                  <Button>€40</Button>
                  <Button>€5</Button>
                </ButtonWrapper>
              </DonateSelectionWrapper>
              <DonationsWrapper>
                <DonationsTitle>BAP tegen kanker zou graag de 25 doneurs
                  hartelijk willen bedanken!
                </DonationsTitle>
                <DonationsTile>
                  <DonationsTitle>Thomas Habets </DonationsTitle>
                  <DonationsTitle>€100</DonationsTitle>
                </DonationsTile>
                <DonationsTile>
                  <DonationsTitle>Thomas Habets </DonationsTitle>
                  <DonationsTitle>€100</DonationsTitle>
                </DonationsTile>
                <DonationsTile>
                  <DonationsTitle>Thomas Habets </DonationsTitle>
                  <DonationsTitle>€100</DonationsTitle>
                </DonationsTile>
              </DonationsWrapper>
            </DonateWrapper>
          </DetailContentWrapper>
        </Container>
      </DetailContent>
    </>
  );
};

const Container = styled.div`
   width: 104rem;
   margin: 0 auto;
`;

const DetailHeader = styled.div`
  background: url('/static/global/assets/images/background/bush-right.png'), url('/static/global/assets/images/background/bush-left.png'), url('/static/global/assets/images/noise_V2.png'), #112130;
  background-attachment: absolute, fixed;
  background-repeat: no-repeat, no-repeat, repeat;
  background-size: auto, auto, 9rem, auto;
  background-position 100% -900%, 0% -200%;

  h1{
    color: white;
    font: ubuntu;
    font-weight: bold;
    font-size: 3.3rem;
    text-align: center;
  }
`;

const HeaderImagesWrapper = styled.div`
  margin-top: 10rem;
  display:flex;
  justify-content: center;
`;

const HeaderImage = styled.img`
`;

const DetailContent = styled.div`
  padding: 5rem 0;
`;

const DetailContentWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  h2{
    font: ubuntu;
    font-weight: bold;
    font-size: 2.6rem;
  }
`;

const VerhaalWrapper = styled.div`
  max-width: 35%;
`;

const VerhaalTitel = styled.h2`
  margin-bottom: 5rem;
`;

const DonateSubText = styled.p`
  margin-bottom: 3rem;
`;

const DonateTitel = styled.h2`
  margin-bottom: 0.5rem;
`;

const DonateWrapper = styled.div`
  max-width: 45%;
`;

const DonateSelectionWrapper = styled.div`
  margin: 3rem 0;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 1rem 0 3rem 0;
  
`;

const DonationsWrapper = styled.div`
  div:nth-child(even) {
    background: rgba(17, 33, 48, 0.1);
  }
`;

const DonationsTitle = styled.p`
  font-size: 1.8rem;
  font-weight: bold;
  padding: 1rem;
`;

const DonationsTile = styled.div`
 display:flex;
 justify-content: space-between;
 align-items: center;
 height: 5rem;
`;


Detail.propTypes = {
  t: func.isRequired,
  teamData: shape({}).isRequired,
};

Detail.getInitialProps = async () => {
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

export default withTranslation('common')(Detail);
