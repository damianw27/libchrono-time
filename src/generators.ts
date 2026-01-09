import { MilitaryTimeComponents } from '$type/military-time-components';
import { TimeComponent } from '$type/enum/time-component';
import { getMilitaryComponents } from '$/extractors';
import { convertMeridiemToMilitary, convertMilitaryToMeridiem } from '$/converters';
import { padTimeNumber } from '$/utils';

/**
 * Computes the maximum minute boundary for a given hour, based on
 * the provided maximum (end) time.
 *
 * This function ensures:
 * - Minutes do not exceed the end time for the last hour
 * - Earlier hours allow full 60-minute ranges
 * - A minimum upper bound of 1 to avoid empty ranges
 *
 * @param max - The maximum (end) time components
 * @param hour - The hour currently being processed
 * @returns The exclusive upper bound for minutes
 */
const getMaxMinute = (max: MilitaryTimeComponents, hour: number): number => {
  let maxMinute = max[TimeComponent.Minute];

  if (hour < max[TimeComponent.Hour]) {
    maxMinute = 60;
  }

  if (maxMinute === 0) {
    maxMinute = 1;
  }

  return maxMinute;
};

/**
 * Computes the minimum minute boundary for a given hour, based on
 * the provided minimum (start) time.
 *
 * This function ensures:
 * - Minutes start from the given start time for the first hour
 * - Subsequent hours start from minute `00`
 *
 * @param min - The minimum (start) time components
 * @param hour - The hour currently being processed
 * @returns The inclusive lower bound for minutes
 */
const getMinMinute = (min: MilitaryTimeComponents, hour: number): number => {
  let minMinute = min[TimeComponent.Minute];

  if (hour !== min[TimeComponent.Hour]) {
    minMinute = 0;
  }

  return minMinute
}

/**
 * Generates time strings between two time boundaries using a fixed interval.
 *
 * The function iterates hour-by-hour and minute-by-minute, respecting
 * the start and end boundaries and formatting times as `HH:mm`.
 *
 * @param start - Start time components (inclusive)
 * @param end - End time components (inclusive hour, exclusive minute)
 * @param interval - Minute interval between generated times
 * @returns An array of formatted time strings
 */
const getTimes = (start: MilitaryTimeComponents, end: MilitaryTimeComponents, interval: number): string[] => {
  const times: string[] = [];

  for (let hour = start[TimeComponent.Hour]; hour <= end[TimeComponent.Hour]; hour++) {
    const hourLabel = padTimeNumber(hour);
    const minMinute = getMinMinute(start, hour);
    const maxMinute = getMaxMinute(end, hour);

    for (let minute = minMinute; minute < maxMinute; minute += interval) {
      const minuteLabel = padTimeNumber(minute);
      const timeStr = `${hourLabel}:${minuteLabel}`;

      times.push(timeStr);
    }
  }

  return times;
};


/**
 * Generates a list of times using **24-hour (military) format**.
 *
 * Example:
 * ```ts
 * getMilitaryTimes('08:00', '12:00', 30);
 * // → ['08:00', '08:30', '09:00', ...]
 * ```
 *
 * @param startStr - Start time in `HH:mm` format
 * @param endStr - End time in `HH:mm` format
 * @param interval - Minute interval (default: 30)
 * @returns An array of formatted time strings
 */
export const getMilitaryTimes = (startStr: string, endStr: string, interval: number = 30): string[] => {
  const start = getMilitaryComponents(startStr);
  const end = getMilitaryComponents(endStr);
  return getTimes(start, end, interval);
}


/**
 * Generates a list of times using **12-hour (meridiem) format** input.
 *
 * Example:
 * ```ts
 * getMeridiemTimes('8:00 AM', '12:00 PM', 15);
 * // → ['08:00 AM', '08:30 AM', '09:00 AM', ..., '12:00 PM']
 * ```
 *
 * Internally, times are converted to military components before processing.
 *
 * @param startStr - Start time in meridiem format (e.g. `8:00 AM`)
 * @param endStr - End time in meridiem format (e.g. `12:00 PM`)
 * @param interval - Minute interval (default: 30)
 * @returns An array of formatted time strings in `HH:mm`
 */
export const getMeridiemTimes = (startStr: string, endStr: string, interval: number = 30): string[] => {
  const start = convertMeridiemToMilitary(startStr);
  const end = convertMeridiemToMilitary(endStr);
  return getMilitaryTimes(start, end, interval).map(convertMilitaryToMeridiem);
}
