import React, {
  useState, useEffect, useContext, createContext,
} from 'react';
import { shape } from 'prop-types';
import loadFirebaseClient from '../utils/firebase';
import 'firebase/auth';

const authContext = createContext();
const firebase = loadFirebaseClient;

export const useAuth = () => useContext(authContext);

function useProvideAuth() {
  const [user, setUser] = useState(null);

  const signin = (email, password) => firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then((response) => {
      setUser(response.user);
      return response.user;
    });

  const signinWithGoogle = () => firebase
    .auth()
    .signInWithPopup(new firebase.auth.GoogleAuthProvider())
    .then((response) => {
      setUser(response.user);
      return response.user;
    });

  const signinWithFacebook = () => firebase
    .auth()
    .signInWithPopup(new firebase.auth.FacebookAuthProvider())
    .then((response) => {
      setUser(response.user);
      return response.user;
    });

  const signup = (email, password) => firebase
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .then((response) => {
      setUser(response.user);
      return response.user;
    });

  const signout = () => firebase
    .auth()
    .signOut()
    .then(() => {
      setUser(false);
    });

  const sendPasswordResetEmail = (email) => firebase
    .auth()
    .sendPasswordResetEmail(email)
    .then(() => true);

  const confirmPasswordReset = (code, password) => firebase
    .auth()
    .confirmPasswordReset(code, password)
    .then(() => true);

  useEffect(() => {
    // eslint-disable-next-line no-shadow
    const unsubscribe = firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(false);
      }
    });

    return () => unsubscribe();
  }, []);

  return {
    user,
    signin,
    signinWithGoogle,
    signinWithFacebook,
    signup,
    signout,
    sendPasswordResetEmail,
    confirmPasswordReset,
  };
}

export function ProvideAuth({ children }) {
  const auth = useProvideAuth();
  return <authContext.Provider value={auth}>{children}</authContext.Provider>;
}

ProvideAuth.propTypes = {
  children: shape({}).isRequired,
};
