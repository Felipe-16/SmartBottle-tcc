import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import ContainerMesa from './components/ContainerMesa';

const Mesa = ({ filtroLigado }) => {
  const [mesas, setMesas] = useState([]);
  
  const fetchData = async () => {
    try {
      const response = await axios.get('http:////127.0.0.1:5000/garrafas');
      setMesas(response.data);
    } catch (error) {
      console.error('Erro ao obter dados:', error);
    }
  };
  
  useEffect(() => {
    fetchData(); // Execute a função imediatamente
    const intervalId = setInterval(fetchData, 5000); // A cada 5 segundos
    
    return () => {
      clearInterval(intervalId); // Limpe o intervalo quando o componente for desmontado
    };
  }, []);
  
  const mesasFiltradas = mesas.filter((mesa) => mesa.ligado === filtroLigado);
  
  return (
    <CardContainer>
      {mesasFiltradas.map((mesa) => (
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

// import React, { useState, useEffect } from 'react';
// import io from 'socket.io-client';
// import styled from 'styled-components';
// import ContainerMesa from './components/ContainerMesa';

// const socket = io('http://127.0.0.1:5000/garrafas');

// socket.on('connect', () => {
//   console.log('Conectado ao servidor WebSocket');
// });

// // Outras manipulações de eventos WebSocket


// const Mesa = ({ filtroLigado }) => {
//   const [mesas, setMesas] = useState([]);

//   useEffect(() => {
//     socket.on('atualizacao', (dadosRecebidos) => {
//       // Atualize o estado das mesas com os dados recebidos
//       setMesas(dadosRecebidos);
//     });

//     return () => {
//       socket.disconnect();
//     };
//   }, []);

//   const mesasFiltradas = mesas.filter((mesa) => mesa.ligado === filtroLigado);

//   return (
//     <CardContainer>
//       {mesasFiltradas.map((mesa) => (
//         <ContainerMesa
//           key={mesa.title}
//           title={mesa.title}
//           nomeChip={mesa.nomeChip}
//           temperature={mesa.temperature}
//           status={mesa.status}
//           ligado={mesa.ligado}
//         />
//       ))}
//     </CardContainer>
//   );
// };

// const CardContainer = styled.div`
//   display: flex;
//   flex-wrap: wrap;
//   gap: 28px;
//   margin-bottom: 20px;
//   justify-content: flex-start;
//   background-color: ${(props) => props.theme.backgroundColor};
//   width: calc(100% - 104px);
//   margin-left: 104px;
// `;

// export default Mesa;


// import React, { useState, useEffect } from 'react';
// import useWebSocket from 'react-use-websocket';
// import styled from 'styled-components';
// import ContainerMesa from './components/ContainerMesa';

// const Mesa = () => {
//   const [mesas, setMesas] = useState([]);
//   const { lastMessage } = useWebSocket('ws://127.0.0.1:5000/garrafas');

//   useEffect(() => {
//     if (lastMessage !== null) {
//       const mensagem = JSON.parse(lastMessage.data);
//       setMesas((mesas) => [...mesas, mensagem]);
//     }
//   }, [lastMessage]);

//   return (
//     <CardContainer>
//       {mesas.map((mesa) => (
//         <ContainerMesa
//           key={mesa.title}
//           title={mesa.title}
//           nomeChip={mesa.nomeChip}
//           temperature={mesa.temperature}
//           status={mesa.status}
//           ligado={mesa.ligado}
//         />
//       ))}
//     </CardContainer>
//   );
// };

// const CardContainer = styled.div`
//   display: flex;
//   flex-wrap: wrap;
//   gap: 28px;
//   margin-bottom: 20px;
//   justify-content: flex-start;
//   background-color: ${(props) => props.theme.backgroundColor};
//   width: calc(100% - 104px);
//   margin-left: 104px;
// `;

// export default Mesa;