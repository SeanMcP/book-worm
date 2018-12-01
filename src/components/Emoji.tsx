import React from "react";

interface PropsInt {
    className: string;
    emoji: string;
    label: string;
}

const Emoji = (props: PropsInt) => {
    return (
        <span
            className={`Emoji ${props.className ? props.className : ""}`}
            role="img"
            aria-label={props.label ? props.label : ""}
            aria-hidden={props.label ? "false" : "true"}
            title={props.label ? props.label : ""}
        >
            {props.emoji}
        </span>
    );
};

export default Emoji;
