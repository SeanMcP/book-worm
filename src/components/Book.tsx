import React from "react";
import styled from "@emotion/styled";

import Speed from "./Speed";
import Rating from "./Rating";
import Time from "./Time";
import Title from "./Title";

import THEME from "../constants/theme";

export interface BookInt {
    title: string;
    author: string;
    startDate: string;
    endDate: string;
    genre: string;
    comments: string;
    rating: number;
    pages: number;
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

    main {
        align-items: center;
        border-bottom: 1px solid ${THEME.BORDER_CONTENT};
        display: flex;
        justify-content: space-between;
        margin-bottom: 0.5rem;
        padding-bottom: 0.5rem;
    }

    @media screen and (max-width: 532px) {
        main {
            align-items: flex-start;
            flex-direction: column;
        }
    }
`;

const Book = (props: BookInt) => {
    const isComplete = props.endDate.length > 0;
    return (
        <StyledLi isComplete={isComplete}>
            <main>
                <Title
                    author={props.author}
                    genre={props.genre}
                    title={props.title}
                />
            </main>
            <footer>
                <Time endDate={props.endDate} startDate={props.startDate} />
                {isComplete && (
                    <React.Fragment>
                        <Rating rating={props.rating} />
                        <Speed
                            endDate={props.endDate}
                            startDate={props.startDate}
                            pages={props.pages}
                        />
                    </React.Fragment>
                )}
            </footer>
        </StyledLi>
    );
};

export default Book;
