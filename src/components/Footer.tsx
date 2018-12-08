import React from 'react';
import styled from '@emotion/styled';

import THEME from '../constants/theme';

const StyledFooter = styled.footer`
    background: ${THEME.FOOTER};
    color: ${THEME.TEXT_FAINT};
    margin-top: 2rem;
    padding: 1rem 0;
    text-align: center;

    a, a:visited {
        color: dodgerblue;
        text-decoration: none;
    }

    a:hover, a:active {
        text-decoration: underline;
    }
`;

const Footer = () => {
    return (
        <StyledFooter>
            Made by <a href="https://seanmcp.com">Sean McP</a>
        </StyledFooter>
    );
};

export default Footer;