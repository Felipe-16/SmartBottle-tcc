import React from 'react';
import styled from 'styled-components';

const ContainerAtividade = ({ name, cor }) => {
    return (
      <CenteredContainer>
        <StyledContainer cor={cor}>
          <Text>{name}</Text>
        </StyledContainer>

      </CenteredContainer>
    );
  };
  
  export default ContainerAtividade;


const StyledContainer = styled.div`
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  background-color: ${props => props.cor};
  border-radius: 10px;
  width: 95%;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 24px;
`;

const CenteredContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  //height: 100vh; /* 100% da altura da janela de visualização */
`;



const Text = styled.p`
  font-size: 21px;
  color: white;
`;


