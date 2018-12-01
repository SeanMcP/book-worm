import React from "react";

interface PropsInt {
    className?: string;
    emoji: string;
    label?: string;
}

const Emoji = (props: PropsInt) => {
    return (
        <span
            aria-hidden={props.label ? "false" : "true"}
            aria-label={props.label ? props.label : ""}
            className={`Emoji ${props.className ? props.className : ""}`}
            role="img"
            title={props.label ? props.label : ""}
        >
            {props.emoji}
        </span>
    );
};

export default Emoji;
