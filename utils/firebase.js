import * as firebase from 'firebase/app';

import clientCredentials from '../credentials/client';

function loadFirebaseClientside() {
  if (!firebase.apps.length) {
    firebase.initializeApp(clientCredentials);
  }
  return firebase;
}

export default loadFirebaseClientside();
