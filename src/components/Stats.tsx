import React from "react";
import { capitalize } from "lodash";
import styled from '@emotion/styled'

import GenreIcon from "./GenreIcon";
import { BookInt } from "./Book";

import THEME from '../constants/theme';

interface mostPopularInt {
    [key: string]: number;
}

export function findMostPopular(sortedObject: mostPopularInt) {
    let mostPopular = "";
    let highestCount = 0;
    for (const key in sortedObject) {
        const count = sortedObject[key];
        if (count > highestCount) {
            highestCount = count;
            mostPopular = key;
        }
    }
    return `${mostPopular} (${highestCount})`;
}

export function getBookPopularityByKey(
    books: Array<BookInt>,
    key: keyof BookInt
) {
    const sortedObj: mostPopularInt = {};
    books.forEach((book: BookInt) => {
        if (sortedObj.hasOwnProperty(book[key])) {
            sortedObj[book[key]]++;
        } else {
            sortedObj[book[key]] = 1;
        }
    });
    return sortedObj;
}

const StyledLi = styled.li`
    color: ${THEME.TEXT_FAINT}
`

interface MostInt {
    completed: Array<BookInt>;
}

function getMostPopular(books: Array<BookInt>, key: keyof BookInt) {
    return findMostPopular(getBookPopularityByKey(books, key));
}

const Stats = (props: MostInt) => {
    const mostAuthor = getMostPopular(props.completed, "author");
    const mostGenre = getMostPopular(props.completed, "genre");
    if (!props.completed.length) {
        return null;
    }
    return (
        <section>
            <h2>Stats</h2>
            <ul>
                <StyledLi>Most read author: {mostAuthor}</StyledLi>
                <StyledLi>
                    Most read genre:{" "}
                    <GenreIcon genre={mostGenre.slice(0, mostGenre.indexOf(" "))} />{" "}
                    {capitalize(mostGenre)}
                </StyledLi>
            </ul>
        </section>
    );
};

export default Stats;
