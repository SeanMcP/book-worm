import React from "react";
import styled from "@emotion/styled";

import Book, { BookInt } from "./Book";

interface Props {
    books: Array<BookInt>;
}

const StyledUl = styled.ul`
    list-style: none;
    padding: 0;
`;

const BookList = (props: Props) => {
    return (
        <StyledUl>
            {props.books.map((book, i) => (
                <Book key={i} {...book} />
            ))}
        </StyledUl>
    );
};

export default BookList;
