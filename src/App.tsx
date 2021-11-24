import React from 'react';

import TituloPrincipal from './Components/TituloPrincipal';
import ItemContador from './Components/ItemContador';

const App: React.FC = () => {
  return (
    <main>
      <TituloPrincipal />

      <ItemContador legenda='days' digito='08' />
      <ItemContador legenda='hours' digito='23' />
      <ItemContador legenda='minutes' digito='55' />
      <ItemContador legenda='seconds' digito='41' />
    </main>
  );
};

export default App;
