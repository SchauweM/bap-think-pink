import React from 'react';
import Router from 'next/router';
import Link from 'next/link';
import styled from 'styled-components';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { func } from 'prop-types';

import AuthLayout from '../../components/Layout/AuthLayout';
import UserInput from '../../components/Forms/Inputs/UserInput';
import SubmitButton from '../../components/Forms/Inputs/SubmitButton';

import { withTranslation } from '../../utils/i18n';
import { useAuth } from '../../hooks/useAuth';
import Header from '../../components/Layout/Header';

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

  if (auth.user) {
    setTimeout(() => {
      Router.push('/team/overview');
    }, 5000);
    return (
      <AuthLayout>
        <Header
          title="You're signed in."
          text="We're redirecting you."
        />
      </AuthLayout>
    );
  }

  return (
    <AuthLayout register>
      <Header
        title="Maak nu zelf jouw team aan"
        text="Met een Think Pink account kan je gemakkelijk en snel inschrijven voor evenementen, shoppen in de Think Pink shop en word je op de hoogte gehouden van je deelname aan evenementen."
      />
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
              <LoginWrapper>
                <SubmitButton type="submit" disabled={disabled}>Sign up</SubmitButton>
                <p>Al een account? <Link href="/auth/login">Meld je aan</Link></p>
              </LoginWrapper>
            </Form>
          );
        }}
      </Formik>
    </AuthLayout>
  );
};

const LoginWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

Register.propTypes = {
  t: func.isRequired,
};

Register.getInitialProps = async () => (
  {
    namespacesRequired: ['common'],
  }
);

export default withTranslation('common')(Register);
