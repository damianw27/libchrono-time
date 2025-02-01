/**
 * Match the military format with option to select hours at 1 index and minutes and 2 index.
 */
export const MilitaryTimeRegex = /^([01]?\d|2[0-3])\D?([0-5][0-9])$/;

/**
 * Match the meridiem format with option to select hours at 1 index, minutes at 2 index and period at 3 index.
 */
export const MeridiemTimeRegex = /^(0?[1-9]|1[0-2]):([0-5][0-9])\s?(am|pm|a\.m\.|p\.m\.|a\.m|p\.m|a m|p m)$/i;

/**
 * Match the ante-meridiem (pre-noon) period name.
 */
export const AMPeriodRegex = /\bam|\ba\.m\.|\ba\.m\b/i;

/**
 * Match the post-meridiem (post-noon) period name.
 */
export const PMPeriodRegex = /\bpm|\bp\.m\.|\bp\.m\b/i;
