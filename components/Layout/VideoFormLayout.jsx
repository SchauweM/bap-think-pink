import React from 'react';
import styled from 'styled-components';
import { node } from 'prop-types';

const VideoFormLayout = ({ children }) => {
  console.log(children);
  return (
    <MainFormLayout>
      {children}
    </MainFormLayout>
  );
};

const MainFormLayout = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
`;

VideoFormLayout.propTypes = {
  children: node.isRequired,
};

export default VideoFormLayout;
