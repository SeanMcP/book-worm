import React from "react";

import Emoji from "./Emoji";

interface PropsInt {
    genre: string;
}

interface genreEmojiInt {
    [key: string]: string;
}

const GenreIcon = (props: PropsInt) => {
    const genreEmoji: genreEmojiInt = {
        fantasy: "🐉",
        nonfiction: "📰",
        religion: "🙏"
    };
    const emoji = genreEmoji[props.genre] || "📕";
    return <Emoji className={"GenreIcon"} emoji={emoji} label={props.genre} />;
};

export default GenreIcon;
