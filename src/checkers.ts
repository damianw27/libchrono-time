import { AMPeriodRegex, MeridiemTimeRegex, MilitaryTimeRegex, PMPeriodRegex } from '$/regexps';

/**
 * Verifies if provided time string is in valid 24-hour (military) time format
 * @param value Time string
 * @returns
 */
export const isMilitaryFormat = (value: string): boolean => MilitaryTimeRegex.test(value);

/**
 * Verifies if provided time string is in valid 12-hour (meridiem) time format
 * @param value Time string
 * @returns
 */
export const isMeridiemFormat = (value: string): boolean => MeridiemTimeRegex.test(value);

/**
 * Verifies if provided string is a valid AM period
 * @param value Period string
 * @returns
 */
export const isPreNoonPeriodStr = (value: string): boolean => AMPeriodRegex.test(value);

/**
 * Verifies if provided string is a valid AM period. Alias for {@link isPreNoonPeriodStr}
 */
export const isAMPeriodStr = isPreNoonPeriodStr;

/**
 * Verifies if provided string is a valid PM period
 * @param value Period string
 * @returns
 */
export const isPostNoonPeriodStr = (value: string): boolean => PMPeriodRegex.test(value);

/**
 * Verifies if provided string is a valid PM period. Alias for {@link isPostNoonPeriodStr}
 */
export const isPMPeriodStr = isPostNoonPeriodStr;
