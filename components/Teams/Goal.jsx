import React from 'react';
import styled from 'styled-components';

const Goal = () => (
  <GoalWrapper>
    <AmountPogressWrapper>
      <AmountPogress />
    </AmountPogressWrapper>
    <GoalAmountWrapper>
      <GoalAmount>300</GoalAmount>
      <GoalAmount>500</GoalAmount>
    </GoalAmountWrapper>
  </GoalWrapper>

);

const GoalAmountWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  font: ubuntu;
  font-weight: bold;
  font-size: 1.8rem;
  margin-bottom: 0.5rem;
`;

const GoalAmount = styled.p`

`;


const GoalWrapper = styled.div`

`;

const AmountPogressWrapper = styled.div`
  content: " ";
  clear:both;
  width: 100%;
  height: 1.5rem;
  background: rgba(17, 33, 48, 0.2);
  margin-bottom: 1rem;
`;

const AmountPogress = styled.div`
  content: " ";
  clear:both;
  width: ${300 / 500 * 100}%;
  height: 1.5rem;
  background: #112130;
`;

Goal.propTypes = {

};

export default Goal;
