import React from "react";
import dayjs from "dayjs";

import GenreIcon from "./GenreIcon";
import Time from './Time';
export interface BookInt {
    title: string;
    author: string;
    startDate: string;
    endDate: string;
    genre: string;
    comments: string;
    rating: string;
    wouldRecommend: boolean;
    haveReadBefore: boolean;
}

const Book = (props: BookInt) => {
    const startDate = dayjs(props.startDate);
    const endDate = dayjs(props.endDate);
    return (
        <li className={"Book"}>
            <GenreIcon genre={props.genre} />
            <em>{props.title}</em> by {props.author}
            {' - '}
            <Time endDate={props.endDate} startDate={props.startDate} />
        </li>
    );
};

export default Book;
