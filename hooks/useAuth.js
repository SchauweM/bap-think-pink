import React, {
  useState, useEffect, useContext, createContext,
} from 'react';
import { shape } from 'prop-types';
import loadFirebaseClient from '../utils/firebase';
import 'firebase/auth';
import 'firebase/firestore';

const authContext = createContext();
const firebase = loadFirebaseClient;

export const useAuth = () => useContext(authContext);

function useProvideAuth() {
  const [user, setUser] = useState(null);
  const [errors, setErrors] = useState();

  const signin = (email, password) => firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then((response) => {
      setUser(response.user);
      return response.user;
    }).catch((error) => setErrors({ error }));

  const signinWithGoogle = () => firebase
    .auth()
    .signInWithPopup(new firebase.auth.GoogleAuthProvider().addScope('email'))
    .then((response) => {
      setUser(response.user);
      return response.user;
    }).catch((error) => {
      setErrors(error);
      console.log(errors);
    });

  const signinWithFacebook = () => firebase
    .auth()
    .signInWithPopup(new firebase.auth.FacebookAuthProvider().addScope('email'))
    .then((response) => {
      setUser(response.user);
      return response.user;
    });

  const signup = (data) => firebase
    .auth()
    .createUserWithEmailAndPassword(data.email, data.password)
    .then((response) => {
      firebase
        .firestore()
        .collection('users')
        .doc(response.user.uid).set({
          firstName: data.firstName,
          lastName: data.lastName,
        });
      setUser(response.user);
      return response.user;
    });
    // .then((response) => {
    //   // setUser(response.user);
    //   // return response.user;
    //   console.log(response);
    // }).catch((error) => console.log(error));

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
    errors,
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
