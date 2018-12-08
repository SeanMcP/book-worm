import dayjs from "dayjs";

export function differenceInDays(start: string, end?: string) {
    const startDate = dayjs(start);
    const endDate = dayjs(end);
    if (end) {
        return endDate.diff(startDate, "day");
    }
    return dayjs().diff(startDate, "day");
}
