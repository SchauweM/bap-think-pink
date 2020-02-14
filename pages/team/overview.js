import React from 'react';
import Link from 'next/link';
import { func, shape } from 'prop-types';
import styled from 'styled-components';
import loadFirebaseClient from '../../utils/firebase';
import 'firebase/firestore';

import Nav from '../../components/Layout/Nav';
import { withTranslation } from '../../utils/i18n';
import Tile from '../../components/Layout/Tile';

const Overview = ({ t, teamData }) => {
  console.log(t);
  console.log('Teams: ', teamData);
  teamData.forEach((team) => {
    console.log('Team: ', team.name);
  });

  return (
    <>
      <OverviewWrapper>
        <Header>
          <Container>
            <Nav />
            <StyledHeader>Team Overzicht</StyledHeader>
          </Container>
        </Header>
        <Content>
          <Container>
            <OverviewTiles>
              <Link href="/team/detail">
                <a>
                  <Tile
                    name="BAP tegen kanker"
                  />
                </a>
              </Link>
            </OverviewTiles>
          </Container>
        </Content>
      </OverviewWrapper>
    </>
  );
};

const StyledHeader = styled.h1`
  color: white;
  text-align: center;
  font-size: 3.1rem;
  font-family: 'Ubuntu', Helvetica, Arial, sans-serif;
`;

const Container = styled.div`
   max-width: 104rem;
   margin: 0 auto;
`;

const OverviewWrapper = styled.div`
`;

const Header = styled.div`
  background: url('/static/global/assets/images/background/eyes.svg'), url('/static/global/assets/images/noise_V2.png'), #112130;
  background-attachment: absolute, fixed;
  background-repeat: no-repeat, repeat;
  background-size: auto, 9rem, auto;
  background-position: 95% 100%;
  padding-bottom: 6rem;
`;

const Content = styled.div`
`;

const OverviewTiles = styled.div`
  background: white;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: 5rem;
`;

Overview.propTypes = {
  t: func.isRequired,
  teamData: shape({}).isRequired,
};

Overview.getInitialProps = async () => {
  const firebase = loadFirebaseClient;
  const db = firebase.firestore();

  const result = await new Promise((resolve, reject) => {
    db.collection('teams').get().then(
      (snapshot) => {
        const data = [];
        snapshot.forEach((doc) => {
          console.log(('DOC: ', doc));
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

export default withTranslation('common')(Overview);
