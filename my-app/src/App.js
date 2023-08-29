import React from 'react';
import ContainerAtividade from './components/ContainerAtividade/ContainerAtividade';
import Cabecalho from './components/cabecalho/Cabecalho';
import Mesa from './pages/Mesas/Mesa'; // Importa o componente Mesa

function App() {
  return (
    <div>
      <Cabecalho></Cabecalho>
      <ContainerAtividade 
        name="Mesas Ocupadas"
        cor='#2cb44e'
        corTitulo='#000000'
        espacamento='84px'
      />
      <Mesa filtroLigado={1} /> {/* Apenas mesas ligadas = 1 */}
      <ContainerAtividade 
        name="Mesas Desocupadas"
        cor='#E90000'
        corTitulo='#FFFFFF'
        espacamento='34px'
      />
      <Mesa filtroLigado={0} /> {/* Apenas mesas desligadas = 0 */}
    </div>
  );
}

export default App;
