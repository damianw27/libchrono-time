import { padTimeNumber } from '$/utils';

describe('utils', () => {
  describe('padTimeNumber', () => {
    it('should correctly add triling zero when single char number provided', () => {
      expect(padTimeNumber(1)).toBe('01');
    });

    it('should not add triling zero when double char number provided', () => {
      expect(padTimeNumber(12)).toBe('12');
    });

    it('should throw when negative number provided', () => {
      expect(() => padTimeNumber(-1)).toThrow('Time number cant be negative');
    });

    it('should throw when provided number is higher then 59', () => {
      expect(() => padTimeNumber(60)).toThrow('Time number cant be higher then 59');
    });
  });
});
