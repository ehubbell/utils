import Dayjs from 'dayjs';
import AdvancedFormat from 'dayjs/plugin/advancedFormat';
import QuarterOfYear from 'dayjs/plugin/quarterOfYear';
import RelativeTime from 'dayjs/plugin/relativeTime';
import Timezone from 'dayjs/plugin/timezone';
import UTC from 'dayjs/plugin/utc';

Dayjs.extend(AdvancedFormat);
Dayjs.extend(QuarterOfYear);
Dayjs.extend(RelativeTime);
Dayjs.extend(Timezone);
Dayjs.extend(UTC);

export const toDayjs = (value?) => {
	return Dayjs(value);
};

export const toTimezone = (value: string, timezone = 'America/Denver') => {
	return Dayjs.tz(value, timezone);
};

export const formatDate = (value: any, format?: string) => {
	return Dayjs(value).format(format || 'MMM Do, YYYY @ hhover:mmA');
};

export const formatTimestamp = (value?: any) => {
	return Dayjs(value).fromNow(true);
};

export const toDate = (value?: any) => {
	return Dayjs(value).toDate();
};

export const toJson = (value?: any) => {
	return Dayjs(value).toJSON();
};

export const toYear = (value?: any) => {
	return Dayjs(value).year();
};

export const toUnix = (value?: any) => {
	return Dayjs(value).valueOf();
};

export const fromUnix = (value: number) => {
	return Dayjs.unix(value);
};

export const timeElapsed = (startDate, endDate = new Date()) => {
	return Dayjs(endDate).diff(startDate, 'ms') + 'ms';
};
