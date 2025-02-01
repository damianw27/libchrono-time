import { isMeridiemFormat, isMilitaryFormat } from '$/checkers';
import { getMeridiemComponents, getMilitaryComponents } from '$/extractors';
import { padTimeNumber } from '$/utils';
import { Meridiem } from '$type/enum/meridiem';
import { MeridiemTimeComponents } from '$type/meridiem-time-components';

const NoonHour = 12;

/**
 * Assembly the 24-hour (military) time string.
 * @param hour Hours (0-23)
 * @param minute Minutes (0-59)
 * @returns Time in military format (00-24:00-59)
 */
const getMilitaryStr = (hour: number, minute: number): string => {
  const hoursStr = padTimeNumber(hour);
  const minutesStr = padTimeNumber(minute);
  return `${hoursStr}:${minutesStr}`;
};

/**
 * Calculates the hours value in 24-hour (military) time format based on 12-hour (meridiem) time components.
 * @param components components from meridiem time match
 * @returns hours from 0 to 23
 */
const getMilitaryHoursFromMeridiem = (components: MeridiemTimeComponents): number => {
  const hourBase = components.hour % NoonHour;
  const periodOffset = components.period === Meridiem.PM ? NoonHour : 0;
  return hourBase + periodOffset;
};

/**
 * Converts 12-hour (meridiem) time string to 24-hour (military) time string.
 * @param value Meridiem time string
 * @returns Time in military format
 */
export const convertMeridiemToMilitary = (value: string): string => {
  if (!isMeridiemFormat(value)) {
    throw new Error(`Provided invalid format to convert: ${value}`);
  }

  const components = getMeridiemComponents(value);
  const militaryHours = getMilitaryHoursFromMeridiem(components);
  return getMilitaryStr(militaryHours, components.minute);
};

/**
 * Converts 12-hour (meridiem) time string to 24-hour (military) time string.
 * Alias for {@link convertMeridiemToMilitary}.
 */
export const convertCivilToMilitary = convertMeridiemToMilitary;

/**
 * Converts 12-hour (meridiem) time string to 24-hour (military) time string.
 * Alias for {@link convertMeridiemToMilitary}.
 */
export const convert12To24 = convertMeridiemToMilitary;

/**
 * Assembly the 12-hour (meridiem) time string.
 * @param hour Hours (1-12)
 * @param minute Minutes (0-59)
 * @param period 'am' or 'pm' {@link Meridiem}
 * @returns Time in military format (01-12:00-59 AM/PM)
 */
const getMeridiemStr = (hour: number, minute: number, period: Meridiem): string => {
  const hoursStr = padTimeNumber(hour);
  const minutesStr = padTimeNumber(minute);
  return `${hoursStr}:${minutesStr} ${period}`;
};

/**
 * Converts 24-hour (military) time string to 12-hour (meridiem) time string.
 * @param value Military time string
 * @returns Time in meridiem format
 */
export const convertMilitaryToMeridiem = (value: string): string => {
  if (!isMilitaryFormat(value)) {
    throw new Error(`Provided invalid format to convert: ${value}`);
  }

  const components = getMilitaryComponents(value);
  const meridiemHours = components.hour % NoonHour || NoonHour;
  const period = components.hour >= NoonHour ? Meridiem.PM : Meridiem.AM;
  return getMeridiemStr(meridiemHours, components.minute, period);
};

/**
 * Converts 24-hour (military) time string to 12-hour (meridiem) time string.
 * Alias for {@link convertMilitaryToMeridiem}.
 */
export const convertMilitaryToCivil = convertMilitaryToMeridiem;

/**
 * Converts 24-hour (military) time string to 12-hour (meridiem) time string.
 * Alias for {@link convertMilitaryToMeridiem}.
 */
export const convert24To12 = convertMilitaryToMeridiem;
