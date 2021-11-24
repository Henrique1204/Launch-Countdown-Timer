import React from 'react';
import styled from 'styled-components';

import { FacebookIcon, InstagramIcon, PinterestIcon } from '../../Assets/icons';

const Container = styled.footer`
    margin: 0 auto;

    ul {
        display: flex;
        justify-content: center;

        li + li {
            margin-left: 1.6rem;
        }
    }

    a {
        padding: 0.8rem;
        color: ${({ theme }) => theme.cores.cinzaAzulado};
        transition: color 0.3s ease;

        &:hover, &:active, &:focus {
            color: ${({ theme }) => theme.cores.vermelho};
        }
    }
`;

const Footer: React.FC = () => {
    return (
        <Container>
            <ul>
                <li>
                    <a href="https://www.facebook.com/" target="_blank" rel="noreferrer">
                        <FacebookIcon />
                    </a>
                </li>

                <li>
                    <a href="https://br.pinterest.com/" target="_blank" rel="noreferrer">
                        <InstagramIcon />    
                    </a>
                </li>

                <li>
                    <a href="https://www.instagram.com/" target="_blank" rel="noreferrer">
                        <PinterestIcon />
                    </a>
                </li>
            </ul>
        </Container>
    );
};

export default Footer;
