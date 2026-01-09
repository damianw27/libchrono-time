import { isPreNoonPeriodStr } from '$/checkers';
import { MeridiemTimeRegex, MilitaryTimeRegex } from '$/regexps';
import { Meridiem } from '$type/enum/meridiem';
import { TimeComponent } from '$type/enum/time-component';
import { MeridiemTimeComponents } from '$type/meridiem-time-components';
import { MilitaryTimeComponents } from '$type/military-time-components';

const HoursMatchIndex = 1;
const MinutesMatchIndex = 2;
const PeriodMatchIndex = 3;

/**
 * Returns the period type from provided string.
 * @param value Period string
 * @returns 
 */
const getMeridiemForPeriodMatch = (value: string): Meridiem => {
  return isPreNoonPeriodStr(value) ? Meridiem.AM : Meridiem.PM;
};

/**
 * Extracts time elements from provided valid military time string. If provided string is invalid method should throw error.
 * @param value Time string
 * @returns 
 */
export const getMilitaryComponents = (value: string): MilitaryTimeComponents => {
  const matchOutput = value.match(MilitaryTimeRegex);

  if (matchOutput === null) {
    throw new Error(`Provided invalid time value: ${value}`);
  }

  return {
    [TimeComponent.Hour]: parseInt(matchOutput[HoursMatchIndex], 10),
    [TimeComponent.Minute]: parseInt(matchOutput[MinutesMatchIndex], 10),
  };
};

/**
 * Extracts time elements from provided valid meridiem time string. If provided string is invalid method should throw error.
 * @param value Time string
 * @returns 
 */
export const getMeridiemComponents = (value: string): MeridiemTimeComponents => {
  const matchOutput = value.match(MeridiemTimeRegex);

  if (matchOutput === null) {
    throw new Error(`Provided invalid time value: ${value}`);
  }

  return {
    [TimeComponent.Hour]: parseInt(matchOutput[HoursMatchIndex], 10),
    [TimeComponent.Minute]: parseInt(matchOutput[MinutesMatchIndex], 10),
    [TimeComponent.Period]: getMeridiemForPeriodMatch(matchOutput[PeriodMatchIndex]),
  };
};
