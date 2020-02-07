import React from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { func } from 'prop-types';
import UserInput from '../Inputs/UserInput';

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

  // const disableHandler = (errors, touched) => {
  //   if (Object.entries(errors).length === 0 && !(Object.entries(touched).length === 0)) {
  //     return false;
  //   }
  //   return true;
  // };

  return (
    <>
      <h1>Step 1</h1>
      <Formik
        initialValues={formData}
        validationSchema={TeamNameSceme}
        onSubmit={(values) => {
          setFormData(values);
          nextStep();
        }}
      >
        {({ errors, touched }) => (
          <Form>
            <UserInput
              errors={errors}
              touched={touched}
              type="text"
              name="teamName"
            >
              Teamname
            </UserInput>
            <UserInput
              errors={errors}
              touched={touched}
              type="text"
              name="motivation"
            >
              Motivation
            </UserInput>
            <button type="submit">Continue</button>
          </Form>
        )}
      </Formik>
    </>
  );
};

TeamNameForm.propTypes = {
  nextStep: func.isRequired,
  formData: func.isRequired,
  setFormData: func.isRequired,
};

export default TeamNameForm;
