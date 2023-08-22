// import React from 'react'
// import { BrowserRouter as Router, Route, Routes as Routes } from 'react-router-dom'
// import Mesa from './pages/Mesas/Mesa';
// import Cabecalho from './components/cabecalho/Cabecalho';

// function App() {
//   return (
//     Mesa()
    
//     // <Router>
//     //   <Cabecalho/>
//     //   <Routes>
//     //     {/* <Route path='/' element={<Login />} /> */}
//     //     <Route path='/' element={<Mesa />} />
//     //   </Routes>
//     // </Router>
//   );
// }

// export default App;
import Mesa from './pages/Mesas/Mesa';

import React from 'react';
import ContainerTitulo from './components/ContainerTitulo/ContainerTitulo'; // Certifique-se de ajustar o caminho correto
import ContainerAtividade from './components/ContainerAtividade/ContainerAtividade';

function App() {
  return (
    <div>
      <ContainerTitulo
        titulo="Mesas de Clientes"
        icon="icone" // Substitua pelo nome do ícone desejado
      />
      <ContainerAtividade 
      name = "Mesas Ativas"
      cor= '#2cb44e'>
      </ContainerAtividade>
      <Mesa></Mesa>
      <ContainerAtividade 
      name = "Mesas Inativas"
      cor= '#c92727'>
      </ContainerAtividade>
      <Mesa></Mesa>
    </div>
  
  );
}
export default App;
