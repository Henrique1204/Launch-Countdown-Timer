import React from 'react';

import TituloPrincipal from './Components/TituloPrincipal';
import CardContador from './Components/CardContador';

const App: React.FC = () => {
  return (
    <>
      <TituloPrincipal />

      <CardContador>
        08
      </CardContador>
    </>
  );
};

export default App;
