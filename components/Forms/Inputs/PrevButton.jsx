import React from 'react';
import styled from 'styled-components';
import { string, func } from 'prop-types';

const PrevButton = (props) => {
  const {
    children,
    onClick,
  } = props;
  return (
    <Btn type="button" onClick={onClick}>{children}</Btn>
  );
};

const Btn = styled.button`
  &:hover {
    cursor: pointer;
    text-decoration: underline;
  }

  &:focus {
    outline: none;
  }
`;

PrevButton.propTypes = {
  children: string.isRequired,
  onClick: func.isRequired,
};

export default PrevButton;
