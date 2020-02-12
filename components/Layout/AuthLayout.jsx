import React from 'react';
import styled from 'styled-components';
import { node, bool } from 'prop-types';

const AuthLayout = ({ children, register }) => {
  console.log(children);
  return (
    <MainAuthLayout>
      <FormLeft>
        <p>Logo</p>
        <FormContentWrapper register={register} role="main">
          {children}
        </FormContentWrapper>
      </FormLeft>
      <FormRight>
        Blabla
      </FormRight>
    </MainAuthLayout>
  );
};

const MainAuthLayout = styled.div`
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