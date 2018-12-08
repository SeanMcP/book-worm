import React from "react";
import dayjs from "dayjs";

import Emoji from './Emoji';

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
    const { endDate, startDate } = props;
    const days = differenceInDays(startDate, endDate);
    return (
        <section>
            <Emoji emoji={'🗓'} />
            {endDate ? "Finshed" : "Started"}{": "}
            {dayjs(startDate).format("ddd. M/D")} ({formatDays(days)}
            {!endDate && " ago"})
        </section>
    );
};

export default Time;
