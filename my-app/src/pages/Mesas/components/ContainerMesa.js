import React from 'react';
import styled from 'styled-components';

const ContainerMesa = ({ mesa, temperatura, status }) => {
  return (
    <CaixaLi>
      <DivTitulo>
        <Titulo>{mesa}</Titulo>
      </DivTitulo>
      <Media />
      <CaixaTexto>
        <DescricaoMesas>Temp: {temperatura}</DescricaoMesas>
        <DescricaoMesas>Status: {status}</DescricaoMesas>
      </CaixaTexto>
    </CaixaLi>
  );
};

export default ContainerMesa;

const CaixaLi = styled.li`
  display: inline-block;
  list-style: none;
  width: 30%;
  vertical-align: top;
  margin: 1.5% 1.5%;
  box-sizing: border-box;
  box-shadow: 0px 2px 23px #26395338;
  border-radius: 25px;
`;

const DivTitulo = styled.div`
  background-color: gray;
  padding: 0;
  text-align: center;
`;

const Titulo = styled.h2`
  margin: 0;
  padding: 10px;
  font-weight: bolder;
  color: white; /* Cor do texto do título */
`;

const Media = styled.div`
  background: url("https://th.bing.com/th/id/OIP.BMWsryGKGD_9dVViNV1a3AHaE6?pid=ImgDet&rs=1") center/cover;
  height: 150px;
  width: auto;
`;

const CaixaTexto = styled.div`
  background-color: #F0F8FF; /* Cor de fundo das informações */
  padding: 10px;
  border-radius: 0 0 5px 5px;
`;

// const DescricaoAbrigo = styled.p`
//   font-size: var(--descricao);
//   color: var(--primary);
//   margin-bottom: 10px;
// `;

const DescricaoMesas = styled.p`
  font-size: 24px; /* Mantém o tamanho original */
  color: black;
  margin-bottom: 10px;
  font-family: "Roboto";
`;
