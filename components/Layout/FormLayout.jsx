import React from 'react';
import styled from 'styled-components';
import { node } from 'prop-types';
import Nav from './Nav';

const FormLayout = ({ children }) => {
  console.log(children);
  return (
    <MainFormLayout>
      <FormLeft>
        <img src="/static/global/assets/images/logo.png" alt="Think Pink" />
        <FormContentWrapper role="main">
          {children}
        </FormContentWrapper>
      </FormLeft>
      <FormRight>
        <NavWrap>
          <Nav />
        </NavWrap>
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
  background: url('/static/global/assets/images/background/huis.png') bottom right, url('/static/global/assets/images/noise_V2.png'), #112130;
  background-repeat: no-repeat, repeat;
  background-size: 65%, auto;
  mix-blend-mode: normal;
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

const NavWrap = styled.div`
  transform: translateX(-15rem);
`;

FormLayout.propTypes = {
  children: node.isRequired,
};

export default FormLayout;
