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
import Button from '../../components/Forms/Inputs/Button';
import Header from '../../components/Layout/Header';

import { withTranslation } from '../../utils/i18n';
import { useAuth } from '../../hooks/useAuth';

const Login = ({ t }) => {
  console.log(t);
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
      console.log(auth.errors);
    }
  };

  if (auth.user) {
    setTimeout(() => {
      Router.push('/team/create');
    }, 3000);
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
    <AuthLayout>
      <Header
        title="Maak nu zelf jouw team aan"
        text="Meld je aan met jouw Think-Pink account."
      />
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
              <LoginWrapper>
                <SubmitButton type="submit" disabled={disabled}>Aanmelden</SubmitButton>
                <p>Geen account? <Link href="/auth/register">Registreer je hier</Link></p>
              </LoginWrapper>
            </Form>
          );
        }}
      </Formik>
      <SocialLoginWrapper>
        <Or>Of gebruik</Or>
        <Button onClick={() => auth.signinWithGoogle()}>Aanmelden met Google</Button>
        <Button onClick={() => auth.signinWithFacebook()}>Aanmelden met Facebook</Button>
      </SocialLoginWrapper>
    </AuthLayout>
  );
};

const SocialLoginWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 3.6rem;
`;

const Or = styled.p`
  text-align: center;
  margin-bottom: 3.6rem;

  &::before {
    display: inline-block;
    content: "";
    border-top: .1rem solid black;
    width: 30%;
    margin-right: 1rem;
    transform: translateY(-.5rem);
  }

  &::after {
    display: inline-block;
    content: "";
    border-top: .1rem solid black;
    width: 30%;
    margin-left: 1rem;
    transform: translateY(-.5rem);
  }
`;

const LoginWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

Login.propTypes = {
  t: func.isRequired,
};

Login.getInitialProps = async () => (
  {
    namespacesRequired: ['common'],
  }
);

export default withTranslation('common')(Login);
