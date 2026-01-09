import { getMilitaryComponents } from '$/extractors';
import { TimeComponent } from '$type/enum/time-component';
import { convertMeridiemToMilitary } from '$/converters';
import { MilitaryTimeComponents } from '$type/military-time-components';
import { en } from 'typedoc-plugin-markdown/dist/internationalization';

const MinuteInSeconds = 60;
const HourInSeconds = 3600; // 60 min * 60 sec

/**
 * Converts a military time represented as {@link MilitaryTimeComponents}
 * into a "seconds since midnight" value.
 *
 * @param time - Time components (hour/minute).
 * @returns Total seconds since 00:00 for the provided time.
 */
const toSeconds = (time: MilitaryTimeComponents): number =>
  time[TimeComponent.Hour] * HourInSeconds +
  (time[TimeComponent.Minute] + 1) * MinuteInSeconds;


/**
 * Calculates the time window length in seconds between two times-of-day.
 *
 * @remarks
 * - The calculation assumes both times are within the same day (no midnight wrap-around).
 * - If `end` is before `start`, an error is thrown.
 *
 * @param start - Start time components (inclusive).
 * @param end - End time components (inclusive).
 * @returns The number of seconds between start and end.
 * @throws {@link Error} If end time is before start time.
 */
const calculateTimeWindowInSec = (start: MilitaryTimeComponents, end: MilitaryTimeComponents): number => {
  const startValue = toSeconds(start);
  const endValue = toSeconds(end);

  if (startValue > endValue) {
    throw new Error('End time cant be before start time.');
  }

  return endValue - startValue;
};

/**
 * Calculates the time window length in seconds between two **military** time strings (`HH:mm`).
 *
 * @example
 * ```ts
 * calculateMilitaryTimeWindowInSec('08:00', '12:00'); // 14400
 * ```
 *
 * @param startStr - Start time in `HH:mm` format.
 * @param endStr - End time in `HH:mm` format.
 * @returns The number of seconds between start and end.
 * @throws {@link Error} If end time is before start time.
 */
export const calculateMilitaryTimeWindowInSec = (startStr: string, endStr: string): number => {
  const start = getMilitaryComponents(startStr);
  const end = getMilitaryComponents(endStr);
  return calculateTimeWindowInSec(start, end);
};

/**
 * Calculates the time window length in seconds between two **meridiem** time strings (e.g. `8:00 AM`).
 *
 * The inputs are converted to military format and parsed into components before calculating the delta.
 *
 * @example
 * ```ts
 * calculateMeridiemTimeWindowInSec('8:00 AM', '12:00 PM'); // 14400
 * ```
 *
 * @param startStr - Start time in meridiem format (e.g. `8:00 AM`).
 * @param endStr - End time in meridiem format (e.g. `12:00 PM`).
 * @returns The number of seconds between start and end.
 * @throws {@link Error} If end time is before start time.
 */
export const calculateMeridiemTimeWindowInSec = (startStr: string, endStr: string): number => {
  const start = getMilitaryComponents(convertMeridiemToMilitary(startStr));
  const end = getMilitaryComponents(convertMeridiemToMilitary(endStr));
  return calculateTimeWindowInSec(start, end);
};
