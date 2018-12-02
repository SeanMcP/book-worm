import React from "react";

import Emoji from "./Emoji";
import styled from "@emotion/styled";

const StyledHeader = styled.header`
    margin: 1rem 0;
`;

const Header = () => {
    return (
        <StyledHeader>
            <h1 className="Header__heading">
                <Emoji emoji={"🐛"} /> Book Worm
            </h1>
            <p className="Header__subheading">
                A reading log for a notoriously inconsistent reader
            </p>
        </StyledHeader>
    );
};

export default Header;
