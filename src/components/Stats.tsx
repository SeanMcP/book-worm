import React from "react";
import { capitalize } from "lodash";

import GenreIcon from "./GenreIcon";
import { BookInt } from "./Book";

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

interface MostInt {
    completed: Array<BookInt>;
}

function getMostPopular(books: Array<BookInt>, key: keyof BookInt) {
    return findMostPopular(getBookPopularityByKey(books, key));
}

const Stats = (props: MostInt) => {
    const mostAuthor = getMostPopular(props.completed, "author");
    const mostGenre = getMostPopular(props.completed, "genre");
    return (
        <footer>
            <h2>Stats</h2>
            <div>Most read author: {mostAuthor}</div>
            <div>
                Most read genre:{" "}
                <GenreIcon genre={mostGenre.slice(0, mostGenre.indexOf(" "))} />{" "}
                {capitalize(mostGenre)}
            </div>
        </footer>
    );
};

export default Stats;
