import React from 'react';
import Router from 'next/router';
import Link from 'next/link';
import styled from 'styled-components';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { func } from 'prop-types';

import UserInput from '../../components/Forms/Inputs/UserInput';
import FormLayout from '../../components/Layout/FormLayout';

import { withTranslation } from '../../utils/i18n';
import { useAuth } from '../../hooks/useAuth';
import SubmitButton from '../../components/Forms/Inputs/SubmitButton';
import Button from '../../components/Forms/Inputs/Button';

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
    }, 5000);
    return (
      <p>You&apos;re already signed in - redirecting you.</p>
    );
  }

  return (
    <FormLayout>
      <Header>
        <Title>Maak nu zelf jouw team aan.</Title>
        <Subtitle>Meld je aan met jouw Think-Pink account.</Subtitle>
      </Header>
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
    </FormLayout>
  );
};

const Header = styled.header`
  margin-bottom: 5.8rem;
`;

const Title = styled.h1`
  font-size: 3.1rem;
  font-family: 'Ubuntu', Helvetica, Arial, sans-serif;
  margin-bottom: 1rem;
`;

const Subtitle = styled.p`
  font-size: 1.8rem;
`;

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
