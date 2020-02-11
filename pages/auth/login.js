import React, { useState } from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { func } from 'prop-types';
import UserInput from '../../components/Forms/Inputs/UserInput';

import { withTranslation } from '../../utils/i18n';
import { useAuth } from '../../hooks/useAuth';

// eslint-disable-next-line consistent-return
const Login = ({ t }) => {
  console.log(t);
  const [errorSending, setErrorSending] = useState(false);
  const auth = useAuth();

  const SignInSchema = Yup.object().shape({
    email: Yup.string()
      .email('Invalid email.')
      .required('Please fill in your email.'),
    password: Yup.string()
      .required('Please fill in your password'),
  });

  const disableHandler = (errors, touched) => {
    if (Object.entries(errors).length === 0 && !(Object.entries(touched).length === 0)) {
      return false;
    }
    return true;
  };

  const loginHandler = (values) => {
    const { email, password } = values;
    auth.signin(email, password);
    if (auth.errors) {
      setErrorSending(auth.errors);
    }
  };

  return (
    <>
      {auth.user ? (
        <>
          <button type="button" onClick={() => auth.signout()}>Sign Out</button>
          <p>Hello {auth.user.displayName}</p>
        </>
      ) : (
        <>
          <p>Hello Guest</p>
          <Formik
            initialValues={{
              email: '',
              password: '',
            }}
            validationSchema={SignInSchema}
            onSubmit={(values) => {
              loginHandler(values);
            }}
          >
            {({ errors, touched }) => {
              const disabled = disableHandler(errors, touched);
              return (
                <Form>
                  <UserInput
                    errors={errors}
                    touched={touched}
                    type="email"
                    name="email"
                    placeholder="example@email.com"
                  >
                    Email
                  </UserInput>
                  <UserInput
                    errors={errors}
                    touched={touched}
                    type="password"
                    name="password"
                    placeholder="password"
                  >
                    Password
                  </UserInput>
                  {(errorSending) ? <p>error</p> : null}
                  <button type="submit" disabled={disabled}>Sign in with email</button>
                </Form>
              );
            }}
          </Formik>
          <button type="button" onClick={() => auth.signinWithGoogle()}>Sign In with Google</button>
          <button type="button" onClick={() => auth.signinWithFacebook()}>Sign In with Facebook</button>
        </>
      )}
    </>
  );
};

Login.propTypes = {
  t: func.isRequired,
};

Login.getInitialProps = async () => (
  {
    namespacesRequired: ['common'],
  }
);

export default withTranslation('common')(Login);
