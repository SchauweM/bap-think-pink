import React from 'react';
import { func, shape } from 'prop-types';
import styled from 'styled-components';
import loadFirebaseClient from '../../utils/firebase';
import 'firebase/firestore';

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
            <h1>Team Overzicht</h1>
          </Container>
        </Header>
        <Content>
          <Container>
            <OverviewTiles>
              <Tile />
              <Tile />
              <Tile />
              <Tile />
              <Tile />
              <Tile />
              <Tile />
              <Tile />
            </OverviewTiles>
          </Container>
        </Content>
      </OverviewWrapper>
    </>
  );
};

const Container = styled.div`
   max-width: 104rem;
   margin: 0 auto;
`;

const OverviewWrapper = styled.div`
 
`;

const Header = styled.div`
  background: url('/static/global/assets/images/noise_V2.png'), #112130;
  background-attachment: fixed;
  background-size: 9rem, auto;
`;

const Content = styled.div`
`;

const OverviewTiles = styled.div`
  background: white;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
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
