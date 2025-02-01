/**
 * Method add `0` prefix for numbers that have only one character. Should throw error when provided value is negative.
 * @param value Time number
 * @returns
 */
export const padTimeNumber = (value: number): string => {
  if (value < 0) {
    throw new Error('Time number cant be negative');
  }

  if (value > 59) {
    throw new Error('Time number cant be higher then 59');
  }

  return value < 10 ? `0${value}` : `${value}`;
};
