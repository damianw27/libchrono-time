import { isAMPeriodStr, isMeridiemFormat, isMilitaryFormat, isPMPeriodStr, isPostNoonPeriodStr, isPreNoonPeriodStr } from "$/checkers";

describe('checkers', () => {
  describe('isMilitaryFormat', () => {
    const validCases = ['00:00', '11:12', '23:59'];
    const invalidCases = ['24:00', '12:67', '11:02 PM', '9:5'];

    it.each(validCases)("should return true for case '%s'", (timeStr) => {
        expect(isMilitaryFormat(timeStr)).toBeTruthy();
    })

    it.each(invalidCases)("should return false for case '%s'", (timeStr) => {
        expect(isMilitaryFormat(timeStr)).toBeFalsy();
    })
  });

  describe('isMeridiemFormat', () => {
    const validCases = ['1:12 AM', '10:00 PM', '12:59 PM'];
    const invalidCases = ['00:00 AM', '12:67', '13:00 AM', '12:67 PM'];

    it.each(validCases)("should return true for case '%s'", (timeStr) => {
        expect(isMeridiemFormat(timeStr)).toBeTruthy();
    })

    it.each(invalidCases)("should return false for case '%s'", (timeStr) => {
        expect(isMeridiemFormat(timeStr)).toBeFalsy();
    })
  });

  describe('isPreNoonPeriodStr', () => {
    const validCases = ['am', 'a.m.', 'a.m'];
    const invalidCases = ['a    m', 'a m', 'ma', 'pm', 'a. m.', '11'];

    it.each(validCases)("should return true for case '%s'", (timeStr) => {
        expect(isPreNoonPeriodStr(timeStr)).toBeTruthy();
        expect(isAMPeriodStr(timeStr)).toBeTruthy();
    })

    it.each(invalidCases)("should return false for case '%s'", (timeStr) => {
        expect(isPreNoonPeriodStr(timeStr)).toBeFalsy();
        expect(isAMPeriodStr(timeStr)).toBeFalsy();
    })
  });

  describe('isPostNoonPeriodStr', () => {
    const validCases = ['pm', 'p.m.', 'p.m'];
    const invalidCases = ['p    m', 'p m', 'ma', 'p. m.', '11'];

    it.each(validCases)("should return true for case '%s'", (timeStr) => {
        expect(isPostNoonPeriodStr(timeStr)).toBeTruthy();
        expect(isPMPeriodStr(timeStr)).toBeTruthy();
    })

    it.each(invalidCases)("should return false for case '%s'", (timeStr) => {
        expect(isPostNoonPeriodStr(timeStr)).toBeFalsy();
        expect(isPMPeriodStr(timeStr)).toBeFalsy();
    })
  });
});
