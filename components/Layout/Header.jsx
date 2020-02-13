import React from 'react';
import styled from 'styled-components';
import { string } from 'prop-types';

const Header = ({ title, text }) => (
  <StyledHeader>
    <Title>{title}</Title>
    <Subtitle>{text}</Subtitle>
  </StyledHeader>
);

const StyledHeader = styled.header`
  margin-bottom: 5.8rem;
`;

const Title = styled.h1`
  font-size: 3.1rem;
  font-family: 'Ubuntu', Helvetica, Arial, sans-serif;
  margin-bottom: 1rem;
`;

const Subtitle = styled.p`
  font-size: 1.8rem;
`;

Header.propTypes = {
  title: string.isRequired,
  text: string.isRequired,
};

export default Header;
