import React from 'react';
import styled from 'styled-components';

const Container = styled.h1`
    font-size: 2.2rem;
    text-align: center;
    text-transform: uppercase;
    letter-spacing: 7.5px;
    line-height: 1.2;
    color: ${({ theme }) => theme.cores.branca};
    grid-column: 1 / -1;

    @media (max-width: 768px) {
        font-size: 1.8rem;
        letter-spacing: 6px;
    }
`;

/**
 * Componente resposável por renderizar o título principal da página.
 */
const TituloPrincipal: React.FC = () => {
    return <Container>We’re launching soon</Container>;
};

export default TituloPrincipal;
