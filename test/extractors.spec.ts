import { getMeridiemComponents, getMilitaryComponents } from '$/extractors';
import { DayPeriod, Meridiem } from '$/index';

describe('extractors', () => {
  describe('getMilitaryComponents', () => {
    it('should return valid components for valid string', () => {
      const result = getMilitaryComponents('11:12');
      expect(result.hour).toBe(11);
      expect(result.minute).toBe(12);
    });

    const invalidCases = ['10:00 AM', '24:00', '4:67', '04:70'];

    it.each(invalidCases)("should throw when '%s' provided", (timeStr) => {
      expect(() => getMilitaryComponents(timeStr)).toThrow(`Provided invalid time value: ${timeStr}`);
    });
  });

  describe('getMeridiemComponents', () => {
    const validCases = [
      ['11:12 p.m', [11, 12, Meridiem.PM]],
      ['1:10 AM', [1, 10, Meridiem.AM]],
    ];

    it.each(validCases)("should return valid components for '%s'", (timeStr, expected) => {
      const result = getMeridiemComponents(timeStr as string);
      expect(result.hour).toBe(expected[0]);
      expect(result.minute).toBe(expected[1]);
      expect(result.period).toBe(expected[2]);
    });

    const invalidCases = ['10:00', '00:00 AM', '13:15 PM', '0:0 P M'];

    it.each(invalidCases)("should throw when '%s' provided", (timeStr) => {
      expect(() => getMeridiemComponents(timeStr)).toThrow(`Provided invalid time value: ${timeStr}`);
    });
  });
});
