import React from 'react';

export interface BookInt {
    title: string,
    author: string,
    startDate: string,
    endDate: string,
    genre: string,
    comments: string,
    rating: string,
    wouldRecommend: boolean,
    haveReadBefore: boolean
}

const Book = (props: BookInt) => {
    return (
        <li className={'Book'}><em>{props.title}</em> by {props.author}</li>
    );
};

export default Book;