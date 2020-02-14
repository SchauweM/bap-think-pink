import React from 'react';
import styled from 'styled-components';
import { func, shape } from 'prop-types';
import { Formik, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

import FormLayout from '../../Layout/FormLayout';
import UserInput from '../Inputs/UserInput';
import UserRadioSelect from '../Inputs/UserRadioSelect';
import SubmitButton from '../Inputs/SubmitButton';
import PrevButton from '../Inputs/PrevButton';
import Header from '../../Layout/Header';

const TeamDetailForm = ({
  formData, setFormData, nextStep, prevStep,
}) => {
  const TeamDetailSceme = Yup.object().shape({
    type: Yup.string().required('Gelieve één van de volgende opties te selecteren.'),
    businessName: Yup.string()
      .min(1, 'Too short')
      .max(45, 'Too long'),
    website: Yup.string()
      .url('Not a valid website')
      .min(8, 'Too short')
      .max(100, 'Too long'),
    facebook: Yup.string()
      .url('Not a valid facebook page')
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
    <FormLayout>
      <Header
        title={`Hey, ${formData.teamName}!`}
        text="We hebben nog enkele gegevens nodig voor jouw team compleet is. Deze kan je ook later nog wijzigen."
      />
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
              <RadioWrapper>
                <RadioSelectContainer>
                  <UserRadioSelect
                    errors={errors}
                    touched={touched}
                    image="/static/global/assets/images/icons/support/familie.svg"
                    name="type"
                    id="family"
                    value="family"
                  >
                    Familie en vrienden
                  </UserRadioSelect>
                  <UserRadioSelect
                    errors={errors}
                    touched={touched}
                    image="/static/global/assets/images/icons/support/bedrijf.svg"
                    name="type"
                    id="business"
                    value="business"
                  >
                    Bedrijf of organisatie
                  </UserRadioSelect>
                </RadioSelectContainer>
              </RadioWrapper>
              <ErrorContainer>
                <ErrorMss name="type" component="p" />
              </ErrorContainer>
              <UserInput
                errors={errors}
                touched={touched}
                type="text"
                name="businessName"
                placeholder="Think-Pink"
              >
                Wat is de naam van het bedrijf of de vereniging? (Optioneel)
              </UserInput>
              <UserInput
                errors={errors}
                touched={touched}
                type="text"
                name="website"
                placeholder="https://think-pink.be"
              >
                Website url (optioneel)
              </UserInput>
              <UserInput
                errors={errors}
                touched={touched}
                type="text"
                name="facebook"
                placeholder="https://facebook.com/ThinkPinkBelgie"
              >
                Facebook url (optioneel)
              </UserInput>
              <UserInput
                errors={errors}
                touched={touched}
                type="text"
                name="twitter"
                placeholder="@thinkpinkinfo"
              >
                Twitter handle (optioneel)
              </UserInput>
              <ButtonWrapper>
                <PrevButton onClick={(e) => back(e)}>Vorige stap</PrevButton>
                <SubmitButton disabled={disabled}>Bevestig gegevens</SubmitButton>
              </ButtonWrapper>
            </Form>
          );
        }}
      </Formik>
    </FormLayout>
  );
};

const RadioSelectContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

const RadioWrapper = styled.div`
  display: flex;
  justify-content: space-between;
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

const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

TeamDetailForm.propTypes = {
  nextStep: func.isRequired,
  prevStep: func.isRequired,
  formData: shape({}).isRequired,
  setFormData: func.isRequired,
};

export default TeamDetailForm;
