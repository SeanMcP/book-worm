import React from "react";

import Emoji from "./Emoji";
import styled from "@emotion/styled";

const StyledHeader = styled.header`
    border-bottom: 1px solid rgba(255, 255, 255, 0.05);
    color: white;
    margin-bottom: 1rem;
    padding: 1rem 0;

    > *:first-child {
        margin-top: 0;
    }

    > *:last-child {
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
