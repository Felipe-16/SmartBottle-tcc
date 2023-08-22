import React from 'react';
import styled from 'styled-components';

const ContainerTitulo = ({ titulo, icon, login }) => {
    return (
      <StyledAppBar>
        <IconContainer>
          <Icon className={icon}></Icon>
          <Title>{titulo}</Title>
        </IconContainer>
      </StyledAppBar>
    );
  };
  
  export default ContainerTitulo;

  const StyledAppBar = styled.div`
  background: linear-gradient(
    to bottom right,
    #4f9dff, /* Substitua pela sua cor primária mais clara */
    #0041b3 /* Substitua pela sua cor primária mais escura */
  );
  display: flex;
  justify-content: center; /* Centraliza horizontalmente */
  align-items: center; /* Centraliza verticalmente */
  height: 60px; /* Defina uma altura para o AppBar */
`;

const IconContainer = styled.div`
  display: flex;
  align-items: center;
`;

const Icon = styled.i`
  color: #ffffff; /* Cor do ícone */
  font-size: 24px;
`;

const Title = styled.h1`
  font-size: 32px;
  color: #ffffff; /* Cor do título */
  margin-left: 8px;
`;



