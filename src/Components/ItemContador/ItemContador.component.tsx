import React from 'react';
import styled from 'styled-components';
import CardContador from '../CardContador';

const Legenda = styled.h2`
    margin-top: 2.6rem;
    font-size: 1.4rem;
    text-align: center;
    text-transform: uppercase;
    letter-spacing: 6px;
    color: ${({ theme }) => theme.cores.cinzaAzulado};
`;

type PeriodoEnum = 'days' | 'hours' | 'minutes' | 'seconds';

type ItemContadorProps = {
    legenda: PeriodoEnum;
    digito: string;
};

/**
 * Componente responsável por renderizar o item do contador na tela.
 * @param {PeriodoEnum} legenda Legenda com o período de tempo que vai ser contado.
 * @param {string} digito Digito com o valor do que está sendo contado.
 */
const ItemContador: React.FC<ItemContadorProps> = ({ legenda, digito }) => {
    return (
        <div>
            <CardContador digito={digito} />

            <Legenda>{legenda}</Legenda>
        </div>
    );
};

export default ItemContador;
