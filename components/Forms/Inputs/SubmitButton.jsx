import React from 'react';
import styled from 'styled-components';
import { string, bool } from 'prop-types';

const SubmitButton = (props) => {
  const {
    children,
    disabled,
  } = props;
  return (
    <Btn type="submit" disabled={disabled}>{children}</Btn>
  );
};

const Btn = styled.button`
  display: flex;
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

SubmitButton.propTypes = {
  children: string.isRequired,
  disabled: bool,
};

SubmitButton.defaultProps = {
  disabled: false,
};

export default SubmitButton;
