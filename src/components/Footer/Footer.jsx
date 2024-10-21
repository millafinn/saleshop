import React from 'react';
import styled from 'styled-components';

const FooterSite = styled.footer`
    background-color: #333;
    color: #FFD700; 
    padding: 1rem;
    text-align: center;
`;

const Footer = () => {
    return (
        <FooterSite>
            <p>© 2024 Sale Shop. Todos os direitos reservados.</p>
        </FooterSite>
    );
};

export default Footer;
