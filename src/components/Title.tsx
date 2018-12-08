import React from 'react';

import GenreIcon from "./GenreIcon";

interface TitleProps {
    author: string;
    genre: string;
    title: string;
}

const Title = (props: TitleProps) => {
    return (
        <span>
            <GenreIcon genre={props.genre} />
            <em>{props.title}</em> by {props.author}
        </span>
    );
};

export default Title;