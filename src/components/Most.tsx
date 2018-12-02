import React from "react";

import { BookInt } from './Book';

function findMostPopular(authors: authorsInt) {
    let mostPopular = '';
    let highestCount = 0;
    for (const author in authors) {
        const count = authors[author];
        if (count > highestCount) {
            highestCount = count;
            mostPopular = author;
        }
    }
    return mostPopular;
}

interface MostInt {
    completed: Array<BookInt>
}

interface authorsInt {
    [key: string]: number
}

const Most = (props: MostInt) => {
    const authors: authorsInt = {};
    props.completed.forEach((book: BookInt) => {
        if (authors.hasOwnProperty(book.author)) {
            authors[book.author]++;
        } else {
            authors[book.author] = 1;
        }
    });

    return (
        <div>
            Most read author: {findMostPopular(authors)}
        </div>
    );
};

export default Most;