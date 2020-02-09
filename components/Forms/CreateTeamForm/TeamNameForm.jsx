import React from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { func, shape } from 'prop-types';
import UserInput from '../Inputs/UserInput';
import UserInputTextArea from '../Inputs/UserInputTextArea';

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

  const disableHandler = (errors, touched) => {
    if (Object.entries(errors).length === 0 && !(Object.entries(touched).length === 0)) {
      return false;
    }
    return true;
  };

  return (
    <>
      <h1>Vertel ons over jouw team!</h1>
      <p>Deze gegevens kan je later nog altijd aanpassen.</p>
      <Formik
        initialValues={formData}
        validationSchema={TeamNameSceme}
        onSubmit={(values) => {
          setFormData(values);
          nextStep();
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
              <button type="submit" disabled={disabled}>Bevestig gegevens</button>
            </Form>
          );
        }}
      </Formik>
    </>
  );
};

TeamNameForm.propTypes = {
  nextStep: func.isRequired,
  formData: shape({}).isRequired,
  setFormData: func.isRequired,
};

export default TeamNameForm;
