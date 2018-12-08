import React from "react";

import { differenceInDays } from "../utils/TimeUtil";

function formatDays(number: number) {
    if (number === 0) {
        return `today`;
    } else if (number === 1) {
        return `${number} day`;
    }
    return `${number} days`;
}

export interface TimeInt {
    startDate: string;
    endDate: string;
}

const Time = (props: TimeInt) => {
    const days = differenceInDays(props.startDate, props.endDate);
    return (
        <span>
            {props.endDate ? "Completed" : "In progress"} ({formatDays(days)})
        </span>
    );
};

export default Time;
