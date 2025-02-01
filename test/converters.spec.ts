import {
  convert12To24,
  convert24To12,
  convertCivilToMilitary,
  convertMeridiemToMilitary,
  convertMilitaryToCivil,
  convertMilitaryToMeridiem,
  toMeridiem,
  toMilitary,
} from '$/converters';

describe('converters', () => {
  describe('convertMeridiemToMilitary', () => {
    const validCases = [
      ['12:00 AM', '00:00'],
      ['12:30 AM', '00:30'],
      ['1:00 AM', '01:00'],
      ['11:59 AM', '11:59'],
      ['12:00 PM', '12:00'],
      ['12:30 PM', '12:30'],
      ['1:00 PM', '13:00'],
      ['11:59 PM', '23:59'],
    ];

    it.each(validCases)('converts %s to %s', (input, expected) => {
      expect(convertMeridiemToMilitary(input)).toBe(expected);
      expect(convertCivilToMilitary(input)).toBe(expected);
      expect(convert12To24(input)).toBe(expected);
      expect(toMilitary(input)).toBe(expected);
    });

    const invalidCases = [
      ['24:00 AM', 'Provided invalid format to convert: 24:00 AM'],
      ['13:00 AM', 'Provided invalid format to convert: 13:00 AM'],
      ['12:60 AM', 'Provided invalid format to convert: 12:60 AM'],
      ['12:59', 'Provided invalid format to convert: 12:59'],
      ['AM 12:00', 'Provided invalid format to convert: AM 12:00'],
      ['PM 12:00', 'Provided invalid format to convert: PM 12:00'],
      ['', 'Provided invalid format to convert: '],
    ];

    it.each(invalidCases)('throws error for %s', (input, expectedError) => {
      expect(() => convertMeridiemToMilitary(input)).toThrow(expectedError);
      expect(() => convertCivilToMilitary(input)).toThrow(expectedError);
      expect(() => convert12To24(input)).toThrow(expectedError);
      expect(() => toMilitary(input)).toThrow(expectedError);
    });

    it('handles edge case of midnight', () => {
      const input = '12:00 AM';
      const expected = '00:00';
      expect(convertMeridiemToMilitary(input)).toBe(expected);
      expect(convertCivilToMilitary(input)).toBe(expected);
      expect(convert12To24(input)).toBe(expected);
      expect(toMilitary(input)).toBe(expected);
    });

    it('handles edge case of noon', () => {
      const input = '12:00 PM';
      const expected = '12:00';
      expect(convertMeridiemToMilitary(input)).toBe(expected);
      expect(convertCivilToMilitary(input)).toBe(expected);
      expect(convert12To24(input)).toBe(expected);
      expect(toMilitary(input)).toBe(expected);
    });
  });

  describe('convertMilitaryToMeridiem', () => {
    const validCases = [
      ['00:00', '12:00 AM'],
      ['00:30', '12:30 AM'],
      ['01:00', '01:00 AM'],
      ['11:59', '11:59 AM'],
      ['12:00', '12:00 PM'],
      ['12:30', '12:30 PM'],
      ['13:00', '01:00 PM'],
      ['23:59', '11:59 PM'],
    ];

    it.each(validCases)('converts %s to %s', (input, expected) => {
      expect(convertMilitaryToMeridiem(input)).toBe(expected);
      expect(convertMilitaryToCivil(input)).toBe(expected);
      expect(convert24To12(input)).toBe(expected);
      expect(toMeridiem(input)).toBe(expected);
    });

    const invalidCases = [
      ['24:00', 'Provided invalid format to convert: 24:00'],
      ['13:60', 'Provided invalid format to convert: 13:60'],
      ['12:60', 'Provided invalid format to convert: 12:60'],
      ['12:', 'Provided invalid format to convert: 12:'],
      [':59', 'Provided invalid format to convert: :59'],
      ['', 'Provided invalid format to convert: '],
    ];

    it.each(invalidCases)('throws error for %s', (input, expectedError) => {
      expect(() => convertMilitaryToMeridiem(input)).toThrow(expectedError);
      expect(() => convertMilitaryToCivil(input)).toThrow(expectedError);
      expect(() => convert24To12(input)).toThrow(expectedError);
      expect(() => toMeridiem(input)).toThrow(expectedError);
    });

    it('handles edge case of midnight', () => {
      const input = '00:00';
      const expected = '12:00 AM';
      expect(convertMilitaryToMeridiem(input)).toBe(expected);
      expect(convertMilitaryToCivil(input)).toBe(expected);
      expect(convert24To12(input)).toBe(expected);
      expect(toMeridiem(input)).toBe(expected);
    });

    it('handles edge case of noon', () => {
      const input = '12:00';
      const expected = '12:00 PM';
      expect(convertMilitaryToMeridiem(input)).toBe(expected);
      expect(convertMilitaryToCivil(input)).toBe(expected);
      expect(convert24To12(input)).toBe(expected);
      expect(toMeridiem(input)).toBe(expected);
    });
  });
});
