import dayjs from 'dayjs';

import localizedFormat from 'dayjs/plugin/localizedFormat';
import advancedFormat from 'dayjs/plugin/advancedFormat';
import isToday from 'dayjs/plugin/isToday';
import isTomorrow from 'dayjs/plugin/isTomorrow';

// Load the plugins
dayjs.extend(localizedFormat);
dayjs.extend(advancedFormat);
dayjs.extend(isToday);
dayjs.extend(isTomorrow);

export const regularDate = (date: string | number) => {
  if (!date) return '...';
  const x = new Date(date);
  return dayjs(x).format('DD MMMM YYYY');
};
export const regularDateAndTime = (date: string | number) => {
  if (!date) return '...';
  const x = new Date(date);
  return dayjs(x).format('DD MMM YYYY [●] HH:mm');
};
export const regularDay = (date: string | number) => {
  if (!date) return '...';
  const x = new Date(date);
  return dayjs(x).format('DD');
};
export const regularMonth = (date: string | number) => {
  if (!date) return '...';
  const x = new Date(date);
  return dayjs(x).format('MMM');
};

export const regularTime = (time: number) => {
  if (!time) return '...';
  const x = new Date(time);
  return dayjs(x).format('HH:mm');
};
dayjs.extend(localizedFormat);
dayjs.extend(advancedFormat);
dayjs.extend(isToday);
dayjs.extend(isTomorrow);

const now = dayjs();

export const regularTiime = (date: number) => {
  if (!date) return '...';
  const x = dayjs(date); // Convert the date to a Day.js object

  if (x.isToday()) {
    return x.format('[Today,] h:mm A');
  } else if (x.isTomorrow()) {
    return x.format('[Tomorrow,] h:mm A');
  } else if (x.isBefore(now.add(1, 'week'), 'day')) {
    return x.format('dddd, h:mm A');
  } else {
    return x.format('MMMM D, YYYY, h:mm A');
  }
};
