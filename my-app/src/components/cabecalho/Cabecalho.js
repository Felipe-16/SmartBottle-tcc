import React from 'react';
import styled from 'styled-components';
import { useThemeContext } from '../../contexts/themes';
import SvgGrande from './components/svgGrande';
import SvgPequeno from './components/svgPequeno';

const Cabecalho = () => {
  const { changeTheme, themeMode } = useThemeContext();
  return (
    <Header>
      <Label>Mesas dos SmartBottles</Label>
      <DivSvg>
        <SvgContainer>
        <SvgGrande />
        </SvgContainer>
        <SvgContainerSmall>
          <ButtonWithoutBackground onClick={changeTheme}>
            <SvgPequeno themeMode={themeMode}/>
          </ButtonWithoutBackground>
        </SvgContainerSmall>
      </DivSvg>
    </Header>
  );
};

export default Cabecalho;

const Header = styled.header`
  background-color: ${(props) => props.theme.backgroundColor};
  display: flex;
  justify-content: space-between;
  align-items: center; /* Centraliza verticalmente */
  text-align: center;
`;

const Label = styled.a`
  margin-left: 104px;
  color: ${(props) => props.theme.textColor};
  font-size: 40px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin-top: 60px;
`;

const DivSvg = styled.div`
  display: flex;
  align-items: center; /* Centraliza verticalmente */
  gap: 32px; /* Espaçamento entre os SVGs */
  margin-top: 53px;
  margin-right: 182px;
`;

const SvgContainer = styled.div`
  width: 56px; /* Largura do primeiro SVG */
  height: 56px; /* Altura do primeiro SVG */
  color: ${(props) => props.theme.textColor};
`;

const SvgContainerSmall = styled.div`
  width: 32px; /* Largura do segundo SVG menor */
  height: 32px; /* Altura do segundo SVG menor */
`;

const ButtonWithoutBackground = styled.button`
  background: none; /* Remove o background */
  border: none; /* Remove a borda */
  padding: 0; /* Remove o espaçamento interno */
  cursor: pointer; /* Adicione um cursor ao passar o mouse */
`;