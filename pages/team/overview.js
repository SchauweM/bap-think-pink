import React from 'react';
import { func, shape } from 'prop-types';
import loadFirebaseClient from '../../utils/firebase';
import 'firebase/firestore';

import { withTranslation } from '../../utils/i18n';

const Overview = ({ t, teamData }) => {
  console.log(t);
  console.log('Teams: ', teamData);
  teamData.forEach((team) => {
    console.log('Team: ', team.name);
  });

  return (
    <>
      <h1>Team Overzicht</h1>
      {teamData.map((team) => <p>Hello {team.name}</p>)}
    </>
  );
};

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
