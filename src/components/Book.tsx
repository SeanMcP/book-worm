import React from "react";
import styled from '@emotion/styled';

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
    display: flex;
    flex-direction: column;
    opacity: ${(props: StyledLiInt) => props.isComplete ? 0.5 : 1};
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
            <main>
                {isComplete && <Rating rating={props.rating} />}
                {" - "}
                {isComplete && <Recommendation wouldRecommend={props.wouldRecommend} />}
            </main>
        </StyledLi>
    );
};

export default Book;
