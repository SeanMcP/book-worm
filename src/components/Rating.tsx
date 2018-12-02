import React from "react";

import Emoji from "./Emoji";

interface RatingInt {
    rating: number;
}

const Rating = (props: RatingInt) => {
    const rating = [];
    for (let i = 0; i < props.rating; i++) {
        rating.push(<Emoji emoji={"⭐️"} key={`star-${i}`} label={"star"} />);
    }
    return <span className={"Rating"}>Rating: {rating}</span>;
};

export default Rating;
