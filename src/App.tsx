import React from 'react';

import TituloPrincipal from './Components/TituloPrincipal';
import CardContador from './Components/CardContador';
import DigitoContador from './Components/DigitoContador';

const App: React.FC = () => {
  return (
    <main>
      <TituloPrincipal />

      <CardContador>
        <DigitoContador>08</DigitoContador>
      </CardContador>
    </main>
  );
};

export default App;
