import React from 'react';

import { Container, ContainerMask } from './CardContador.styled';

/**
 * Componente responsável por renderizar o card estilizado com a divisória na parte superior.
 */
const CardContador: React.FC = ({ children }) => {
    return (
        <Container>
            <ContainerMask />
            {children}
        </Container>
    );
};

export default CardContador;
