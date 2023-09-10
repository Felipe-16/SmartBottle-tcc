import React from 'react';
import styled from 'styled-components';
import ContainerMesa from './components/ContainerMesa';

const Mesa = ({ filtroLigado }) => {
  // Dados das mesas
  const mesas = [
    { title: "Mesa 01", nomeChip: "Atendido", temperature: "25", status: "Cheia", ligado: 1 },
    { title: "Mesa 02", nomeChip: "Atender Mesa", temperature: "25", status: "Cheia", ligado: 1 },
    { title: "Mesa 03", nomeChip: "Atendido", temperature: "25", status: "Vazio", ligado: 1 },
    { title: "Mesa 04", nomeChip: "Atendido", temperature: "25", status: "Cheia", ligado: 1 },
    { title: "Mesa 09", nomeChip: "Atender Mesa", temperature: "25", status: "Cheia", ligado: 1 },
    { title: "Mesa 10", nomeChip: "Atender Mesa", temperature: "25", status: "Metade", ligado: 1 },
    { title: "Mesa 05", ligado: 0 },
    { title: "Mesa 06", ligado: 0 },
    { title: "Mesa 07", ligado: 0 },
    { title: "Mesa 08", ligado: 0 },
    { title: "Mesa 11", ligado: 0 },
    { title: "Mesa 12", ligado: 0 },
    // { title: "Mesa 13", ligado: 0 },
  ];

  // Filtra as mesas de acordo com o filtroLigado
  const mesasFiltradas = mesas.filter(mesa => mesa.ligado === filtroLigado);

  return (
    <CardContainer>
      {mesasFiltradas.map(mesa => (
        <ContainerMesa
          key={mesa.title}
          title={mesa.title}
          nomeChip={mesa.nomeChip}
          temperature={mesa.temperature}
          status={mesa.status}
          ligado={mesa.ligado}
        />
      ))}
    </CardContainer>
  );
};

const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 28px;
  margin-bottom: 20px;
  justify-content: flex-start;
  background-color: ${(props) => props.theme.backgroundColor};
  width: calc(100% - 104px);
  margin-left: 104px;
`;

export default Mesa;





