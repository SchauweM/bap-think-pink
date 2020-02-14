import React from 'react';
import { useRouter } from 'next/router';
import { func } from 'prop-types';

// import FormLayout from '../../Layout/FormLayout';
// import Header from '../../Layout/Header';

import { withTranslation } from '../../utils/i18n';

const Video = ({ t }) => {
  console.log(t);
  const router = useRouter();

  console.log('Team ID: ', router.query.team);

  return (
    <div>Hello Video</div>
  );
};

Video.propTypes = {
  t: func.isRequired,
};

Video.getInitialProps = async () => (
  {
    namespacesRequired: ['common'],
  }
);

export default withTranslation('common')(Video);
