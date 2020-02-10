import React from 'react';
import { func, shape } from 'prop-types';

const CheckFormData = ({ formData, nextStep, prevStep }) => {
  // const {
  //   teamName, motivation, companyName, type,
  //   businessName, businessPhoto, website,
  //   facebook, twitter,
  // } = formData;
  console.log(formData);

  const saveAndContinue = (e) => {
    e.preventDefault();
    nextStep();
  };

  const back = (e) => {
    e.preventDefault();
    prevStep();
  };

  return (
    <>
      <h1>Controleer nog even jouw gegevens!</h1>
      <p>Indien er iets niet klopt kan je naar een vorige stap gaan om deze te wijzigen. Je kan deze gegevens later ook nog steeds aanpassen via jouw team pagina.</p>
      <button type="button" onClick={(e) => back(e)}>Prev step</button>
      <button type="button" onClick={(e) => saveAndContinue(e)}>Next step</button>
    </>
  );
};

CheckFormData.propTypes = {
  nextStep: func.isRequired,
  prevStep: func.isRequired,
  formData: shape({}).isRequired,
};

export default CheckFormData;
