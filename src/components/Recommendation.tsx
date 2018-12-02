import React from "react";

import Emoji from "./Emoji";

interface RecommendationInt {
    wouldRecommend: boolean;
}

const Recommendation = (props: RecommendationInt) => {
    return (
        <span>
            Recommendation:{" "}
            <Emoji
                emoji={props.wouldRecommend ? "👍" : "👎"}
                label={props.wouldRecommend ? "Yep!" : "Nope."}
            />
        </span>
    );
};

export default Recommendation;
