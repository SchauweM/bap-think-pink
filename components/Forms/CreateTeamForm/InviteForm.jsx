/* eslint-disable jsx-a11y/media-has-caption */
import React, { useState } from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import styled from 'styled-components';
import { string, func, shape } from 'prop-types';

import VideoFormLayout from '../../Layout/VideoFormLayout';
import Header from '../../Layout/Header';
import UserInput from '../Inputs/UserInput';
import SubmitButton from '../Inputs/SubmitButton';

const InviteForm = ({
  teamId, videoData, nextStep, formData,
}) => {
  console.log('Team: ', teamId);

  const [inputList, setInputList] = useState([]);

  const EmailSchema = Yup.object().shape({
    email_1: Yup.string()
      .email(),
    email_2: Yup.string()
      .email(),
    email_3: Yup.string()
      .email(),
  });

  const disableHandler = (errors) => {
    if (Object.entries(errors).length === 0) {
      return false;
    }
    return true;
  };

  return (
    <VideoFormLayout>
      <FormLeft>
        <p>Logo</p>
        <FormContentWrapper role="main">
          <Header
            title="Nodig jouw vrienden uit"
            text="Deze video dient als uitnodiging om mee te doen aan jou team! Als je teamleden toevoegt zullen ze per mail een uitnodiging krijgen."
          />
          <Formik
            initialValues={formData}
            validationSchema={EmailSchema}
            onSubmit={(values) => {
              console.log(values);
              nextStep();
            }}
          >
            {({ errors, touched }) => {
              const disabled = disableHandler(errors);

              const addInputField = () => {
                setInputList(inputList.concat(
                  <UserInput
                    errors={errors}
                    touched={touched}
                    type="email"
                    name="email_1"
                    placeholder="example@think-pink.be"
                  >
                    Email van teamlid
                  </UserInput>,
                ));
              };

              return (
                <Form>
                  <UserInput
                    errors={errors}
                    touched={touched}
                    type="email"
                    name="email_1"
                    placeholder="example@think-pink.be"
                  >
                    Email van teamlid
                  </UserInput>
                  {inputList}
                  <AddInputButton type="button" onClick={addInputField}>Voeg toe</AddInputButton>
                  <ButtonWrapper>
                    <SubmitButton disabled={disabled}>Bevestig gegevens</SubmitButton>
                  </ButtonWrapper>
                </Form>
              );
            }}
          </Formik>
        </FormContentWrapper>
      </FormLeft>
      <FormRight>
        <VideoContainer>
          <VideoWrapper>
            {videoData && (
            <video width="541" height="304" autoPlay controls>
              <source src={videoData} type="video/mp4" />
            </video>
            )}
          </VideoWrapper>
        </VideoContainer>
      </FormRight>
    </VideoFormLayout>
  );
};

const FormLeft = styled.section`
  overflow-y: auto;
  width: 45vw;
  padding: 3rem;
  background-color: white;
`;

const FormRight = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow-y: hidden;
  width: 55vw;
  background: url('/static/global/assets/images/noise_V2.png') repeat, #112130;
  background-attachment: fixed;
  background-size: 9rem, auto;
`;

const FormContentWrapper = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: initial;
  max-width: 45rem;
  margin: 8rem auto 0;
  width: 100%;
  height: auto;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const VideoContainer = styled.div`
  background: url('/static/global/assets/images/characters/video-bg.svg') no-repeat;
  max-width: 54.1rem;
  max-height: 44.1rem;
  width: 100%;
  height: 100%;
`;

const VideoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 54.1rem;
  height: 30.4rem;
`;

const AddInputButton = styled.button`
  width: 100%;
  height: 4rem;
  border: 1px dashed #112130;
  border-radius: 0.3rem;
  margin-bottom: 5rem;
  text-align: center;
  transition: .2s ease;

  &:hover {
    cursor: pointer;
    border: none;
    color: white;
    background-color: #112130;
  }
`;

InviteForm.propTypes = {
  teamId: string.isRequired,
  formData: shape({}).isRequired,
  nextStep: func.isRequired,
  videoData: string.isRequired,
};

export default InviteForm;
