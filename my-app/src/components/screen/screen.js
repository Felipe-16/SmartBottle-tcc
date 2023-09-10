import React from 'react';
import styled from 'styled-components';

const Screen = ({ children }) => {
  return (
    <Tela>
      {children}
    </Tela>
  );
};

const Tela = styled.div`
  min-height: 100vh;
  width: 100%;
  padding:0;
  background-color: ${(props) => props.theme.backgroundColor};
`;

export default Screen;
