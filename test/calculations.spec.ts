import { calculateMeridiemTimeWindowInSec, calculateMilitaryTimeWindowInSec } from '$/calculations';

describe('Calculations', () => {
  describe('#calculateMilitaryTimeWindowInSec', () => {
    it('should returns 0 when start equals end', () => {
      expect(calculateMilitaryTimeWindowInSec('08:00', '08:00')).toBe(0);
    });

    it('should calculate full-hour differences correctly', () => {
      expect(calculateMilitaryTimeWindowInSec('08:00', '12:00')).toBe(4 * 3600);
    });

    it('should calculate minute differences correctly', () => {
      expect(calculateMilitaryTimeWindowInSec('08:30', '09:15')).toBe(45 * 60);
    });

    it('should throw when end is before start', () => {
      expect(() => calculateMilitaryTimeWindowInSec('12:00', '08:00')).toThrow(
        'End time cant be before start time.'
      );
    });

    it('should return seconds count in day when provided whole range', () => {
      expect(calculateMilitaryTimeWindowInSec('00:00', '24:00')).toBe(86400);
    });
  });

  describe('#calculateMeridiemTimeWindowInSec', () => {
    it('should return 0 when start equals end', () => {
      expect(calculateMeridiemTimeWindowInSec('8:00 AM', '8:00 AM')).toBe(0);
    });

    it('should calculate meridiem window correctly', () => {
      expect(calculateMeridiemTimeWindowInSec('8:00 AM', '12:00 PM')).toBe(4 * 3600);
    });

    it('should calculate meridiem minute differences correctly', () => {
      expect(calculateMeridiemTimeWindowInSec('8:10 AM', '9:05 AM')).toBe(55 * 60);
    });

    it('should throw when end is before start (meridiem)', () => {
      expect(() => calculateMeridiemTimeWindowInSec('12:00 PM', '8:00 AM')).toThrow(
        'End time cant be before start time.'
      );
    });
  });
});
