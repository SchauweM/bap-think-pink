import React, { useState } from 'react';
import { func } from 'prop-types';
import useRequireAuth from '../../hooks/useRequireAuth';

import Loading from '../../components/Loader';
import TeamNameForm from '../../components/Forms/CreateTeamForm/TeamNameForm';
import TeamDetailForm from '../../components/Forms/CreateTeamForm/TeamDetailForm';
import CheckFormData from '../../components/Forms/CreateTeamForm/CheckFormData';
import GenerateVideo from '../../components/Forms/CreateTeamForm/GenerateVideo';
import InviteForm from '../../components/Forms/CreateTeamForm/InviteForm';
import Success from '../../components/Forms/CreateTeamForm/Success';

import { withTranslation } from '../../utils/i18n';

// eslint-disable-next-line consistent-return
const Create = ({ t }) => {
  console.log(t);
  const auth = useRequireAuth();
  const [currentStep, setCurrentStep] = useState(6);
  const [teamId, setTeamId] = useState('qz0dbcEvIBS7mMad74hI');
  const [formData, setFormData] = useState({
    teamName: 'WeRun against cancer',
    motivation: 'We hate cancer.',
    type: 'business',
    businessName: 'Wegroup NV',
    businessPhoto: '',
    website: 'https://wegroup.be',
    facebook: 'https://facebook.com/wegroup.be',
    twitter: '',
  });
  const [videoData, setVideoData] = useState();

  const nextStep = () => {
    setCurrentStep(currentStep + 1);
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  if (!auth) {
    return <Loading />;
  }

  switch (currentStep) {
    case 1:
      return (
        <TeamNameForm
          formData={formData}
          setFormData={setFormData}
          nextStep={nextStep}
        />
      );
    case 2:
      return (
        <TeamDetailForm
          formData={formData}
          setFormData={setFormData}
          nextStep={nextStep}
          prevStep={prevStep}
        />
      );
    case 3:
      return (
        <CheckFormData
          formData={formData}
          nextStep={nextStep}
          prevStep={prevStep}
          setTeamId={setTeamId}
        />
      );
    case 4:
      return (
        <GenerateVideo
          teamId={teamId}
          formData={formData}
          videoData={videoData}
          setVideoData={setVideoData}
          nextStep={nextStep}
        />
      );
    case 5:
      return (
        <InviteForm
          teamId={teamId}
          videoData={videoData}
          nextStep={nextStep}
        />
      );
    case 6:
      return (
        <Success
          teamId={teamId}
          videoData={videoData}
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
