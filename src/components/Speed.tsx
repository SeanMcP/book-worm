import React from 'react';

import Emoji from './Emoji';

import { differenceInDays } from "../utils/TimeUtil";

interface SpeedProps {
    endDate: string;
    pages: number;
    startDate: string;
}

const Speed = (props: SpeedProps) => {
    const days = differenceInDays(props.startDate, props.endDate);
    if (props.pages) {
        return (
            <section>
                <Emoji emoji={'⏱'}/>Speed: {Math.floor(props.pages / days)} pages/day
            </section>
        );
    }
    return null;
};

export default Speed;