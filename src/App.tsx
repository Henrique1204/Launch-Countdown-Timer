import React from 'react';

import TituloPrincipal from './Components/TituloPrincipal';
import Cronometro from './Components/Cronometro';
import Footer from './Components/Footer';

const App: React.FC = () => {
  return (
    <>
      <main>
        <TituloPrincipal />

        <Cronometro />
      </main>

      <Footer />
    </>
  );
};

export default App;
