import React from 'react';
import styled, { keyframes } from 'styled-components';

const Loader = () => {
  console.log('Loading...');

  return (
    <StyledLoader />
  );
};

const spin = keyframes`
  0% { 
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const StyledLoader = styled.div`
  border: .8rem solid #f3f3f3;
  border-top: .8rem solid #112130;
  border-radius: 50%;
  width: 8rem;
  height: 8rem;
  animation: ${spin} 2s linear infinite;
`;

export default Loader;
