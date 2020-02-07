import React, { useState } from 'react';
import { func } from 'prop-types';

import TeamNameForm from '../../components/Forms/CreateTeamForm/TeamNameForm';
import TeamDetailForm from '../../components/Forms/CreateTeamForm/TeamDetailForm';


import { withTranslation } from '../../utils/i18n';

// eslint-disable-next-line consistent-return
const Create = ({ t }) => {
  console.log(t);

  const [currentStep, setCurrentStep] = useState(1);

  const nextStep = () => {
    setCurrentStep(currentStep + 1);
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  switch (currentStep) {
    case 1:
      return (
        <TeamNameForm
          nextStep={nextStep}
        />
      );
    case 2:
      return (
        <TeamDetailForm
          nextStep={nextStep}
          prevStep={prevStep}
        />
      );
    default:
      break;
  }
};

Create.propTypes = {
  t: func.isRequired,
};

Create.getInitialProps = async () => ({
  namespacesRequired: ['create'],
});

export default withTranslation('create')(Create);
