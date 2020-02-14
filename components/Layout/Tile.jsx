import React from 'react';
import styled from 'styled-components';
import { string, func } from 'prop-types';
import Goal from '../Teams/Goal';

const Tile = (props) => {
  const {
    children,
    onClick,
  } = props;
  return (
    <TileWrapper>
      <Title>Team naam moet lang kunnen maar mag op 2  of 3 </Title>
      <Thumb src="/static/global/assets/images/characters/thumb_overview.svg" />
      <Goal />
      <StatsWrapper>
        <Icon src="/static/global/assets/images/icons/flags/belgium.png" />
        <Value>België - Antwerpen</Value>
      </StatsWrapper>
      <StatsWrapper>
        <Icon src="/static/global/assets/images/icons/support/members_amount.png" />
        <Value>3 Teamleden</Value>
      </StatsWrapper>
    </TileWrapper>
  );
};

const TileWrapper = styled.div`
  display: flex;
  width: 23rem;
  padding: 1rem;
  margin: 1.25rem;
  border-radius: 0.3rem;

  flex-direction: column;
  
  transition: box-shadow 0.1s, transform 0.2s;
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);

  :hover{
    box-shadow: 0px 0px 7px rgba(0, 0, 0, 0.20);
    transform: scale(1.01);
  }
  
  :active{
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.0);
    transform: scale(0.99);
  }
`;

const Title = styled.p`
  font: ubuntu;
  font-weight: bold;
  font-size: 1.8rem;
  min-height: 7rem;
  margin-bottom: 1rem;
  color: #112130;
`;

const Thumb = styled.img`
  width: 100%;
  height: 15rem;
  margin-bottom: 1rem;
`;

const StatsWrapper = styled.div`
  display: flex;
  margin-bottom: 1rem;
`;

const Value = styled.p`

`;

const Icon = styled.img`
  margin-right: 1rem;
`;

Tile.propTypes = {
  children: string.isRequired,
  onClick: func.isRequired,
};

export default Tile;
