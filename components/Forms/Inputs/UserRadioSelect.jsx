/* eslint-disable no-nested-ternary */
import React from 'react';
import styled from 'styled-components';
import {
  string, node, shape,
} from 'prop-types';

import { Field } from 'formik';

const UserRadioSelect = ({
  name,
  children,
  value,
  errors,
  touched,
}) => (
  <StyledRadioInput>
    <StandardRadioInput
      type="radio"
      name={name}
      value={value}
      errors={errors[name] ? errors[name] : null}
      touched={touched[name] ? touched[name] : null}
    />
    <p>{children}</p>
    <StyledCustomRadio />
  </StyledRadioInput>
);

const StyledRadioInput = styled.label`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: 19rem;
  height: 5.5rem;
  cursor: pointer;
  background-color: white;
  border: 1px solid #808080; 
  border-radius: 2px;
`;

const StyledCustomRadio = styled.span`
  height: 1.6rem;
  width: 1.6rem;
  border-radius: 10px;
  margin: auto 1.6vw;
  border: 1px solid #808080;
`;

const StandardRadioInput = styled(Field)`
  position: absolute;
  opacity: 0;
  width: 0px;
  height: 0px;

  &:checked ~ ${StyledCustomRadio} {
    hheight: 1.6rem;
  width: 1.6rem;
  border-radius: 10px;
  margin: auto 1.6vw;
  border: 5px solid #808080;
  }
`;

// const UserRadioSelectContainer = styled.div`
//   width: 100%;
// `;

// const StyledLabel = styled.label`
//   display: flex;
//   position: relative;
//   flex-direction: column-reverse;
//   & span {
//     font-size: 1.6rem;
//     transition: 0.2s;
//     margin-bottom: 1rem;
//     font-weight: bold;
//   }
// `;

// const StandardInput = styled(Field)`
//   background-color: white;
//   border: ${(props) => props.errors && props.touched
//     ? '0.1rem solid red'
//     : props.touched
//       ? '0.1rem solid #49C562'
//       : '0.1rem solid #d3d4d8'};
//   border-radius: 0.3rem;
//   width: 100%;
//   height: ${(props) => props.type === 'textarea' ? '20rem' : '4rem'};
//   padding-left: 1rem;
//   font-size: 1.6rem;

//   &:focus {
//     outline: none;
//     border-color: blue; /* temp color */
//   }
// `;

// const ErrorContainer = styled.div`
//   height: 1.5rem;
//   display: flex;
//   align-items: center;
//   justify-content: flex-end;
//   margin-top: 0.5rem;
//   color: blue; /* temp color */
// `;

// const ErrorMss = styled(ErrorMessage)`
//   color: red;
//   font-size: 1.4rem;
// `;

UserRadioSelect.defaultProps = {
  // placeholder: null,
  // disabled: false,
  // autofocus: false,
  errors: {},
  touched: {},
};

UserRadioSelect.propTypes = {
  name: string.isRequired,
  value: string.isRequired,
  children: node.isRequired,
  // placeholder: string,
  // disabled: bool,
  // autofocus: bool,
  errors: shape(),
  touched: shape(),
};

export default UserRadioSelect;
