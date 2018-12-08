import React from "react";
import styled from "@emotion/styled";

import GenreIcon from "./GenreIcon";
import Rating from "./Rating";
import Time from "./Time";

import THEME from '../constants/theme';

export interface BookInt {
    title: string;
    author: string;
    startDate: string;
    endDate: string;
    genre: string;
    comments: string;
    rating: number;
}

interface StyledLiInt {
    isComplete: boolean;
}

const StyledLi = styled.li`
    background: ${THEME.CONTENT};
    border-radius: 0.5rem;
    display: flex;
    flex-direction: column;
    opacity: ${(props: StyledLiInt) => (props.isComplete ? 0.5 : 1)};
    padding: 1rem;
    transition: all 200ms ease-in-out;

    :not(:last-of-type) {
        margin-bottom: 1rem;
    }

    :hover {
        box-shadow: 0 0 0.5rem rgba(0, 0, 0, 0.0125);
        opacity: 1;
        transform: scale(1.025);
    }
`;

const Book = (props: BookInt) => {
    const isComplete = props.endDate.length > 0;
    return (
        <StyledLi isComplete={isComplete}>
            <header>
                <GenreIcon genre={props.genre} />
                <em>{props.title}</em> by {props.author}
                {" - "}
                <Time endDate={props.endDate} startDate={props.startDate} />
            </header>
            {isComplete && (
                <main>
                    <Rating rating={props.rating} />
                </main>
            )}
        </StyledLi>
    );
};

export default Book;
