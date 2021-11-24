import React from 'react';
import DigitoContador from '../DigitoContador';

import { Container, ContainerMask } from './CardContador.styled';

type CardContadorProps = {
    digito: string;
};

/**
 * Componente responsável por renderizar o card estilizado com a divisória na parte superior.
 * @param {string} digito Digito que será mostrado no contador.
 */
const CardContador: React.FC<CardContadorProps> = ({ digito }) => {
    return (
        <Container>
            <ContainerMask />

            <DigitoContador>{digito}</DigitoContador>
        </Container>
    );
};

export default CardContador;
