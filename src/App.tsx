import React from 'react';

import TituloPrincipal from './Components/TituloPrincipal';
import Cronometro from './Components/Cronometro';

const App: React.FC = () => {
  return (
    <main>
      <TituloPrincipal />

      <Cronometro />
    </main>
  );
};

export default App;
