import React from "react";

import Emoji from "./Emoji";
import styled from "@emotion/styled";

import THEME from '../constants/theme';

const StyledHeader = styled.header`
    border-bottom: ${THEME.CONTENT};
    color: white;
    margin-bottom: 1rem;
    padding: 1rem 0;

    > h1 {
        margin-top: 0;
    }

    > p {
        color: ${THEME.TEXT_FAINT};
        margin-bottom: 0;
    }
`;

const Header = () => {
    return (
        <StyledHeader>
            <h1>
                <Emoji emoji={"🐛"} /> Book Worm
            </h1>
            <p>A reading log for a notoriously inconsistent reader</p>
        </StyledHeader>
    );
};

export default Header;
