import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    width: 148px;
    height: 140px;
    border-radius: 0.8rem;
    background-color: ${theme.cores.bgAzul};
    box-shadow: 0 10px 0 ${theme.cores.bgAzulMuitoEscuro};
    position: relative;
    overflow: hidden;

    &::before, &::after {
        content: '';
        width: 12px;
        height: 12px;
        border-radius: 50%;
        background-color: ${theme.cores.bgAzulMuitoEscuro};
        display: block;
        position: absolute;
        z-index: 2;
        top: 64px;
    }

    &::before {
        left: -6px;
    }

    &::after {
        right: -6px;
    }
  `}
`;

export const ContainerMask = styled.div`
    width: 100%;
    height: 69px;
    background-color: rgba(0, 0, 0, 0.15);
    box-shadow: 0 1px 0 rgba(0, 0, 0, 0.25);
    position: absolute;
    z-index: 1;
`;
