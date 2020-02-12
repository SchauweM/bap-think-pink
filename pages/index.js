import React from 'react';
import { func } from 'prop-types';
import styled from 'styled-components';

import { withTranslation } from '../utils/i18n';

const Home = ({ t }) => {
  console.log(t);

  return (
    <Container>
      <Whatever>Hello Thomas</Whatever>
    </Container>
  );
};

const Container = styled.div`
  background-color: blue;
`;

const Whatever = styled.p`
  color: white;
`;

Home.propTypes = {
  t: func.isRequired,
};

Home.getInitialProps = async () => ({
  namespacesRequired: ['common'],
});

export default withTranslation('common')(Home);
