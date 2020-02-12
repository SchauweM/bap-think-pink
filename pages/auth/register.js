import React from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { func } from 'prop-types';
import UserInput from '../../components/Forms/Inputs/UserInput';

import { withTranslation } from '../../utils/i18n';
import { useAuth } from '../../hooks/useAuth';

const Register = ({ t }) => {
  console.log(t);
  const auth = useAuth();

  const RegisterSchema = Yup.object().shape({
    firstName: Yup.string()
      .min(2, 'Too short')
      .max(50, 'Too long')
      .required('Voornaam is verplicht'),
    lastName: Yup.string()
      .min(2, 'Too short')
      .max(50, 'Too long')
      .required('Familienaam is verplicht'),
    email: Yup.string()
      .email('Invalid email.')
      .required('Please fill in your email.'),
    password: Yup.string()
      .min(8, 'Wachtwoord moet minstens 8 karakters lang zijn.')
      .required('Please fill in your password'),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('password')], 'Wachtwoord komt niet overeen')
      .required('Verifiëer jouw wachtwoord.'),
  });

  const disableHandler = (errors, touched) => {
    if (Object.entries(errors).length === 0 && !(Object.entries(touched).length === 0)) {
      return false;
    }
    return true;
  };

  const RegisterHandler = (values) => {
    auth.signup(values);
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
          <h1>Register Account</h1>
          <Formik
            initialValues={{
              firstName: '',
              lastName: '',
              email: '',
              password: '',
              confirmPassword: '',
            }}
            validationSchema={RegisterSchema}
            onSubmit={(values) => {
              RegisterHandler(values);
            }}
          >
            {({ errors, touched }) => {
              const disabled = disableHandler(errors, touched);
              return (
                <Form>
                  <UserInput
                    errors={errors}
                    touched={touched}
                    type="text"
                    name="firstName"
                    placeholder="Michaël"
                  >
                    First Name
                  </UserInput>
                  <UserInput
                    errors={errors}
                    touched={touched}
                    type="text"
                    name="lastName"
                    placeholder="Schauwers"
                  >
                    Last Name
                  </UserInput>
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
                    placeholder=""
                  >
                    Password
                  </UserInput>
                  <UserInput
                    errors={errors}
                    touched={touched}
                    type="password"
                    name="confirmPassword"
                    placeholder=""
                  >
                    Confirm password
                  </UserInput>
                  <button type="submit" disabled={disabled}>Sign up</button>
                </Form>
              );
            }}
          </Formik>
          {/* <button type="button" onClick={() => auth.signinWithGoogle()}>Sign In with Google</button>
          <button type="button" onClick={() => auth.signinWithFacebook()}>Sign In with Facebook</button> */}
        </>
      )}
    </>
  );
};

Register.propTypes = {
  t: func.isRequired,
};

Register.getInitialProps = async () => (
  {
    namespacesRequired: ['common'],
  }
);

export default withTranslation('common')(Register);
