import React from 'react';
import styled from 'styled-components';
import { node } from 'prop-types';

const FormLayout = ({ children }) => {
  console.log(children);
  return (
    <MainFormLayout>
      <FormLeft>
        <a href="https://www.think-pink.be/nl/" target="_blank"><img src="/static/global/assets/images/logo.png" /></a>
        <FormContentWrapper role="main">
          {children}
        </FormContentWrapper>
      </FormLeft>
      <FormRight>
        Blabla
      </FormRight>
    </MainFormLayout>
  );
};

const MainFormLayout = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
`;

const FormLeft = styled.section`
  overflow-y: auto;
  width: 45vw;
  padding: 3rem;
  background-color: white;
`;

const FormRight = styled.section`
  overflow-y: hidden;
  width: 55vw;
  background: url('/static/global/assets/images/noise_V2.png') repeat, #112130;
  background-attachment: fixed;
  background-size: 9rem, auto;
`;

const FormContentWrapper = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: initial;
  max-width: 45rem;
  margin: 8rem auto 0;
  width: 100%;
  height: auto;
`;

FormLayout.propTypes = {
  children: node.isRequired,
};

export default FormLayout;
