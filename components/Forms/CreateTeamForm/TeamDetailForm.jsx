import React from 'react';
import { func } from 'prop-types';

const TeamDetailForm = ({ nextStep, prevStep }) => {
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
      <h1>Step 2</h1>
      <button type="button" onClick={(e) => back(e)}>Prev step</button>
      <button type="button" onClick={(e) => saveAndContinue(e)}>Next step</button>
    </>
  );
};

TeamDetailForm.propTypes = {
  nextStep: func.isRequired,
  prevStep: func.isRequired,
};

export default TeamDetailForm;
