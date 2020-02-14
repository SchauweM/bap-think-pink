import React from 'react';
import styled from 'styled-components';
// import Router from 'next/router';
import { func, shape } from 'prop-types';
import loadFirebaseClient from '../../../utils/firebase';
import 'firebase/firestore';
import { useAuth } from '../../../hooks/useAuth';

import FormLayout from '../../Layout/FormLayout';
import Button from '../Inputs/Button';
import PrevButton from '../Inputs/PrevButton';
import Header from '../../Layout/Header';

const CheckFormData = ({
  formData, prevStep, nextStep, setTeamId,
}) => {
  const { user } = useAuth();
  const firebase = loadFirebaseClient;

  const handleCreateTeam = (e) => {
    e.preventDefault();

    firebase
      .firestore()
      .collection('teams')
      .add({
        teamName: formData.teamName,
        motivation: formData.motivation,
        type: formData.type,
        businessName: formData.businessName,
        businessPhoto: formData.businessPhoto,
        website: formData.website,
        facebook: formData.website,
        twitter: formData.twitter,
        members: [
          { user: user.uid },
        ],
        videos: [
          { video: '' },
          { video: '' },
          { video: '' },
          { video: '' },
          { video: '' },
        ],
      }).then((res) => {
        firebase
          .firestore()
          .collection('users')
          .doc(user.uid)
          .set({
            team: res.id,
          }, { merge: true })
          .then(() => {
            setTeamId(res.id);
            // Router.push({
            //   pathname: '/video',
            //   query: { team: res.id },
            // });
          })
          .then(() => {
            nextStep();
          });
      });
  };

  const back = (e) => {
    e.preventDefault();
    prevStep();
  };

  return (
    <FormLayout>
      <Header
        title="Controleer nog even jouw gegevens!"
        text="Indien er iets niet klopt kan je naar een vorige stap gaan om deze te wijzigen. Je kan deze gegevens later ook nog steeds aanpassen via jouw team pagina."
      />
      <ReturnRow>
        <StyledReturn>
          <StyledLabel>Teamnaam</StyledLabel>
          <StyledValue>{formData.teamName}</StyledValue>
        </StyledReturn>
        <StyledReturn>
          <StyledLabel>Naam bedrijf of vereniging</StyledLabel>
          <StyledValue>{formData.businessName}</StyledValue>
        </StyledReturn>
      </ReturnRow>
      <ReturnRow>
        <StyledReturn>
          <StyledLabel>Website</StyledLabel>
          <StyledValue>{formData.website}</StyledValue>
        </StyledReturn>
        <StyledReturn>
          <StyledLabel>Facebook</StyledLabel>
          <StyledValue>{formData.facebook}</StyledValue>
        </StyledReturn>
      </ReturnRow>
      <ReturnRow full>
        <StyledReturn full>
          <StyledLabel>Motivatie</StyledLabel>
          <StyledValue>{formData.motivation}</StyledValue>
        </StyledReturn>
      </ReturnRow>
      {/* {
        formData.forEach((data) => {
          return <p>{data}</p>;
        })
      } */}
      <ButtonWrapper>
        <PrevButton onClick={(e) => back(e)}>Prev step</PrevButton>
        <Button onClick={(e) => handleCreateTeam(e)}>Create Team</Button>
      </ButtonWrapper>
    </FormLayout>
  );
};

const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const ReturnRow = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 2rem;
`;

const StyledReturn = styled.div`
  width: ${(props) => props.full ? '100%' : '45%'};
`;

const StyledLabel = styled.p`
  font-size: 1.4rem;
`;

const StyledValue = styled.p`
  font-weight: 500;
`;

CheckFormData.propTypes = {
  prevStep: func.isRequired,
  nextStep: func.isRequired,
  setTeamId: func.isRequired,
  formData: shape({}).isRequired,
};

export default CheckFormData;
