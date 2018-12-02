import React from "react";
import dayjs from "dayjs";

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
    const startDate = dayjs(props.startDate);
    const endDate = dayjs(props.endDate);
    let message;
    if (props.endDate) {
        // The book has been completed
        const readingTime = endDate.diff(startDate, "day");
        message = `Completed (${formatDays(readingTime)})`;
    } else {
        // The book is in progress
        const readingTime = dayjs().diff(startDate, "day");
        message = `In progress (${formatDays(readingTime)})`;
    }
    return <span className={"Time"}>{message}</span>;
};

export default Time;
