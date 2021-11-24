import React from 'react';

import TituloPrincipal from './Components/TituloPrincipal';
import CardContador from './Components/CardContador';

const App: React.FC = () => {
  return (
    <main>
      <TituloPrincipal />

      <CardContador>
        08
      </CardContador>
    </main>
  );
};

export default App;
