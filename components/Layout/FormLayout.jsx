import React from 'react';
import styled from 'styled-components';
import { node } from 'prop-types';

const FormLayout = ({ children }) => {
  console.log(children);
  return (
    <MainFormLayout>
      <FormLeft>
        <p>Logo</p>
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
  background: url('/static/global/images/noise_V2.png') repeat, #112130;
  background-attachment: fixed;
  background-size: 6rem, auto;
`;

const FormContentWrapper = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 45rem;
  margin: 0 auto;
  width: 100%;
  height: 98%;
`;

FormLayout.propTypes = {
  children: node.isRequired,
};

export default FormLayout;
