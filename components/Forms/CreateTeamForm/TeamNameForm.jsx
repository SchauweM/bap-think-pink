import React from 'react';
import { func } from 'prop-types';

const TeamNameForm = ({ nextStep }) => {
  const saveAndContinue = (e) => {
    e.preventDefault();
    nextStep();
  };

  return (
    <>
      <h1>Step 1</h1>
      <button type="button" onClick={(e) => saveAndContinue(e)}>Next step</button>
    </>
  );
};

TeamNameForm.propTypes = {
  nextStep: func.isRequired,
};

export default TeamNameForm;
