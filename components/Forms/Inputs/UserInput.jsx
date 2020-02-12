/* eslint-disable no-nested-ternary */
import React, { useState } from 'react';
import styled from 'styled-components';
import {
  string, node, bool, shape,
} from 'prop-types';

import { Field, ErrorMessage } from 'formik';
import { detect } from 'detect-browser';

const UserInput = ({
  type,
  name,
  children,
  placeholder,
  disabled,
  autofocus,
  errors,
  touched,
}) => {
  const browser = detect();
  const [focus, setFocus] = useState();
  const [iconRight, setIconRight] = useState('1rem');

  const handleFocus = () => {
    setFocus(true);
    switch (browser.name) {
      case 'safari':
        setIconRight('3.5rem');
        break;
      case '':
        setIconRight('3.5rem');
        break;
      default:
        setIconRight('1rem');
        break;
    }
  };

  return (
    <UserInputContainer>
      <StyledLabel
        onFocus={() => handleFocus()}
        onBlur={() => setFocus(false)}
        htmlFor={name}
      >
        <StandardInput
          id={name}
          disabled={disabled}
          type={type}
          name={name}
          errors={errors[name] ? errors[name] : null}
          touched={touched[name] ? touched[name] : null}
          autoFocus={autofocus}
          placeholder={placeholder === null ? '\u00A0' : placeholder}
        />
        <span>{children}</span>
        {errors[name] && touched[name] ? (
          <Icon
            focus={focus}
            right={iconRight}
            browser={browser.name}
            src="/static/global/assets/images/icons/validation/validation-error.svg"
            alt="error"
          />
        ) : touched[name] ? (
          <Icon
            focus={focus}
            right={iconRight}
            browser={browser.name}
            src="/static/global/assets/images/icons/validation/validation-checkmark.svg"
            alt="ok"
          />
        ) : null}
      </StyledLabel>
      <ErrorContainer>
        <ErrorMss name={name} component="p" />
      </ErrorContainer>
    </UserInputContainer>
  );
};

const UserInputContainer = styled.div`
  width: 100%;
`;

const StyledLabel = styled.label`
  display: flex;
  position: relative;
  flex-direction: column-reverse;
  & span {
    font-size: 1.6rem;
    transition: 0.2s;
    margin-bottom: 1rem;
  }
`;

const StandardInput = styled(Field)`
  background-color: white;
  border: ${(props) => props.errors && props.touched
    ? '0.1rem solid red'
    : props.touched
      ? '0.1rem solid #49C562'
      : '0.1rem solid #d3d4d8'};
  border-radius: 0.3rem;
  width: 100%;
  height: 4rem;
  padding-left: 1rem;
  font-size: 1.6rem;

  &:focus {
    outline: none;
    border-color: blue; /* temp color */
  }
`;

const ErrorContainer = styled.div`
  height: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-top: 0.5rem;
  color: blue; /* temp color */
`;

const ErrorMss = styled(ErrorMessage)`
  color: red;
  font-size: 1.4rem;
`;

const Icon = styled.img`
  position: absolute;
  right: ${(props) => (props.focus ? props.right : '1rem')};
  bottom: 1.3rem;
  transition: 0.2s;
`;

UserInput.defaultProps = {
  placeholder: null,
  disabled: false,
  autofocus: false,
  errors: {},
  touched: {},
};

UserInput.propTypes = {
  type: string.isRequired,
  name: string.isRequired,
  children: node.isRequired,
  placeholder: string,
  disabled: bool,
  autofocus: bool,
  errors: shape(),
  touched: shape(),
};

export default UserInput;
