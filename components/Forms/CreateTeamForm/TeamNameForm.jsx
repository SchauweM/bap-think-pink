import React from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { func, shape } from 'prop-types';

import FormLayout from '../../Layout/FormLayout';
import UserInput from '../Inputs/UserInput';
import UserInputTextArea from '../Inputs/UserInputTextArea';
import SubmitButton from '../Inputs/SubmitButton';
import Header from '../../Layout/Header';

const TeamNameForm = ({ formData, setFormData, nextStep }) => {
  const TeamNameSceme = Yup.object().shape({
    teamName: Yup.string()
      .min(1, 'Too short')
      .max(35, 'Too long')
      .required('Team name is required'),
    motivation: Yup.string()
      .min(10, 'Your motivation seems a bit short')
      .max(2000, 'Your motivation seems a bit long')
      .required('Motivation is required'),
  });

  const disableHandler = (errors) => {
    if (Object.entries(errors).length === 0) {
      return false;
    }
    return true;
  };

  return (
    <FormLayout>
      <Header title="Vertel ons over jouw team!" text="Deze gegevens kan je later nog altijd aanpassen." />
      <Formik
        initialValues={formData}
        validationSchema={TeamNameSceme}
        onSubmit={(values) => {
          setFormData(values);
          nextStep();
        }}
      >
        {({ errors, touched }) => {
          const disabled = disableHandler(errors);
          return (
            <Form>
              <UserInput
                errors={errors}
                touched={touched}
                type="text"
                name="teamName"
                placeholder=""
              >
                Naam van jouw team
              </UserInput>
              <UserInputTextArea
                errors={errors}
                touched={touched}
                type="text"
                name="motivation"
                placeholder="Vertel meer over jou team en waarom jij en team aanmaakt."
              >
                Motivatie
              </UserInputTextArea>
              <SubmitButton disabled={disabled}>Bevestig gegevens</SubmitButton>
            </Form>
          );
        }}
      </Formik>
    </FormLayout>
  );
};

TeamNameForm.propTypes = {
  nextStep: func.isRequired,
  formData: shape({}).isRequired,
  setFormData: func.isRequired,
};

export default TeamNameForm;
