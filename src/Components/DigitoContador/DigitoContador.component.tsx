import React from 'react';
import styled from 'styled-components';

const Container = styled.span`
    width: 100%;
    height: 100%;
    font-size: 8rem;
    line-height: 7.1rem;
    letter-spacing: -2.4px;
    color: ${({ theme }) => theme.cores.vermelho};
    display: flex;
    justify-content: center;
    align-items: center;
`;

/**
 * Componente responsável por renderizar o dígito do contador na tela.
 */
const DigitoContador: React.FC = ({ children }) => {
    return <Container>{children}</Container>;
};

export default DigitoContador;
