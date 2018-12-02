import React from "react";
import styled from "@emotion/styled";

import GenreIcon from "./GenreIcon";
import Rating from "./Rating";
import Recommendation from "./Recommendation";
import Time from "./Time";

export interface BookInt {
    title: string;
    author: string;
    startDate: string;
    endDate: string;
    genre: string;
    comments: string;
    rating: number;
    wouldRecommend: boolean;
    haveReadBefore: boolean;
}

interface StyledLiInt {
    isComplete: boolean;
}

const StyledLi = styled.li`
    background: white;
    border-radius: 0.5rem;
    box-shadow: 0 0.25rem 0.25rem rgba(0, 0, 0, 0.125);
    color: black;
    display: flex;
    flex-direction: column;
    opacity: ${(props: StyledLiInt) => (props.isComplete ? 0.5 : 1)};
    padding: 1rem;
    transition: all 200ms ease-in-out;

    :not(:last-child) {
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
                    {" - "}
                    <Recommendation wouldRecommend={props.wouldRecommend} />
                </main>
            )}
        </StyledLi>
    );
};

export default Book;
