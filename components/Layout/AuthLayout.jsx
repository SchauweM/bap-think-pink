import React from 'react';
import styled from 'styled-components';
import { node, bool } from 'prop-types';
import Nav from './Nav';

const AuthLayout = ({ children, register }) => {
  console.log(children);
  return (
    <MainAuthLayout>
      <FormLeft>
        <Logo href="https://www.think-pink.be/nl/" target="_blank"><img src="/static/global/assets/images/logo.png" alt="Think Pink" /></Logo>
        <FormContentWrapper register={register} role="main">
          {children}
        </FormContentWrapper>
      </FormLeft>
      <FormRight>
        <NavWrap>
          <Nav />
        </NavWrap>
      </FormRight>
    </MainAuthLayout>
  );
};

const Logo = styled.a`
  position: fixed;
  margin-top: 1rem;
`;


const MainAuthLayout = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
`;

const NavWrap = styled.div`
  transform: translateX(-15rem);
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
  background: url('/static/global/assets/images/background/auth.svg'), url('/static/global/assets/images/noise_V2.png'), #112130;
  background-attachment: absolute, fixed;
  background-repeat: no-repeat, repeat;
  background-size: auto, 9rem, auto;
  background-position: 50% 100%;
  mix-blend-mode: normal;
`;

const FormContentWrapper = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: ${(props) => props.register ? `initial` : `center`};
  max-width: 45rem;
  margin: ${(props) => props.register ? `8rem auto 0` : `0 auto`};
  width: 100%;
  height: ${(props) => props.register ? `auto` : `96%`};
`;

AuthLayout.defaultProps = {
  register: false,
};

AuthLayout.propTypes = {
  children: node.isRequired,
  register: bool,
};

export default AuthLayout;
