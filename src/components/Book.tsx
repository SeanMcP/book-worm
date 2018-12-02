import React from "react";
import dayjs from "dayjs";

import GenreIcon from "./GenreIcon";
import Rating from './Rating';
import Time from './Time';
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

const Book = (props: BookInt) => {
    const isComplete = props.endDate.length > 0;
    return (
        <li className={`Book ${isComplete ? 'Book--complete' : ''}`}>
            <header className="Book__heading">
                <GenreIcon genre={props.genre} />
                <em>{props.title}</em> by {props.author}
                {' - '}
                <Time endDate={props.endDate} startDate={props.startDate} />
            </header>
            <main className="Book__body">
                {isComplete && <Rating rating={props.rating} />}
            </main>
        </li>
    );
};

export default Book;
