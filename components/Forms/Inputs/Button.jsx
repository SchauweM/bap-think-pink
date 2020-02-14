import React from 'react';
import styled from 'styled-components';
import { string, bool, func } from 'prop-types';

const Button = (props) => {
  const {
    children,
    disabled,
    onClick,
  } = props;
  return (
    <Btn type="button" onClick={onClick} disabled={disabled}>{children}</Btn>
  );
};

const Btn = styled.button`
  display: flex;
  align-self: center;
  justify-content: center;
  background-color: #112130;
  color: white;
  font-size: 1.6rem;
  padding: 1.5rem 2.5rem 1.2rem;
  min-width: 15rem;
  height: 4.5rem;
  width: auto;
  border-radius: .5rem;
  border: none;
  transition: all .2s linear;

  &:last-of-type {
    margin-bottom: 0;
  }

  &:hover {
    cursor: pointer;
    background-color: #284057;
    text-decoration: none;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.16);
  }

  &:focus {
    outline: none;
  }

  :disabled {
    background-color: #D9D8DC;
    &:hover {
      cursor: auto;
    }
  }
`;

Button.propTypes = {
  children: string.isRequired,
  disabled: bool,
  onClick: func.isRequired,
};

Button.defaultProps = {
  disabled: false,
};

export default Button;
