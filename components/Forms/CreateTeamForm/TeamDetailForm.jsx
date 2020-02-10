import React from 'react';
import styled from 'styled-components';
import { func, shape } from 'prop-types';
import { Formik, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import UserInput from '../Inputs/UserInput';
import UserRadioSelect from '../Inputs/UserRadioSelect';

const TeamDetailForm = ({
  formData, setFormData, nextStep, prevStep,
}) => {
  const TeamDetailSceme = Yup.object().shape({
    type: Yup.string().required('Gelieve één van de volgende opties te selecteren.'),
    businessName: Yup.string()
      .min(1, 'Too short')
      .max(45, 'Too long'),
    website: Yup.string()
      .min(8, 'Too short')
      .max(100, 'Too long'),
    facebook: Yup.string()
      .min(8, 'Too short')
      .max(100, 'Too long'),
    twitter: Yup.string()
      .min(8, 'Too short')
      .max(100, 'Too long'),
  });

  const back = (e) => {
    e.preventDefault();
    prevStep();
  };

  const disableHandler = (errors) => {
    if (Object.entries(errors).length === 0) {
      return false;
    }
    return true;
  };

  console.log(formData.type);
  return (
    <>
      <h1>Hey, {formData.teamName}!</h1>
      <p>We hebben nog enkele gegevens nodig voor jouw team compleet is. Deze kan je ook later nog wijzigen.</p>
      <Formik
        initialValues={formData}
        validationSchema={TeamDetailSceme}
        onSubmit={(values) => {
          setFormData(values);
          nextStep();
        }}
      >
        {({ errors, touched }) => {
          const disabled = disableHandler(errors);
          return (
            <Form>
              <RadioSelectContainer>
                <UserRadioSelect
                  errors={errors}
                  touched={touched}
                  name="type"
                  id="family"
                  value="family"
                >
                  Familie en vrienden
                </UserRadioSelect>
                <UserRadioSelect
                  errors={errors}
                  touched={touched}
                  name="type"
                  id="business"
                  value="business"
                >
                  Bedrijf of organisatie
                </UserRadioSelect>
              </RadioSelectContainer>
              <ErrorContainer>
                <ErrorMss name="type" component="p" />
              </ErrorContainer>
              <UserInput
                errors={errors}
                touched={touched}
                type="text"
                name="businessName"
                placeholder=""
              >
                Wat is de naam van het bedrijf of de vereniging? (Optioneel)
              </UserInput>
              <UserInput
                errors={errors}
                touched={touched}
                type="text"
                name="website"
                placeholder=""
              >
                Website url (optioneel)
              </UserInput>
              <UserInput
                errors={errors}
                touched={touched}
                type="text"
                name="facebook"
                placeholder=""
              >
                Facebook url (optioneel)
              </UserInput>
              <UserInput
                errors={errors}
                touched={touched}
                type="text"
                name="twitter"
                placeholder="@"
              >
                Twitter handle (optioneel)
              </UserInput>
              <button type="button" onClick={(e) => back(e)}>Vorige stap</button>
              <button type="submit" disabled={disabled}>Bevestig gegevens</button>
            </Form>
          );
        }}
      </Formik>
    </>
  );
};

const RadioSelectContainer = styled.div`
  display: flex;
`;

const ErrorContainer = styled.div`
  height: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-top: 0.5rem;
  color: blue; /* temp color */
`;

const ErrorMss = styled(ErrorMessage)`
  color: red;
  font-size: 1.4rem;
`;

TeamDetailForm.propTypes = {
  nextStep: func.isRequired,
  prevStep: func.isRequired,
  formData: shape({}).isRequired,
  setFormData: func.isRequired,
};

export default TeamDetailForm;
