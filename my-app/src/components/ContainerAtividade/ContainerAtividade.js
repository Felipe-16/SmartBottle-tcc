import React from 'react';
import styled from 'styled-components';

const ContainerAtividade = ({ name, cor, corTitulo, espacamento }) => {
    return (
        <StyledContainer 
        cor={cor}
        espacamento={espacamento}
        >
          <Text corTitulo= {corTitulo}>
            {name}
          </Text>
        </StyledContainer>

    );
  };
  
  export default ContainerAtividade;


const StyledContainer = styled.div`
  margin-left: 104px;
  margin-bottom: 34px;
  margin-top: ${props=>props.espacamento};
  height: 20px;
  display: inline-flex;
  padding: 12px 40px;
  justify-content: center;
  align-items: center;
  gap: 40px;
  border-radius: 20px;
  background: ${props => props.cor};
  display: inline-flex;
`;



const Text = styled.p`
  color: ${props => props.corTitulo};
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;

