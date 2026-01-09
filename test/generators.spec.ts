import { getMeridiemTimes, getMilitaryTimes } from '$/generators'; // <-- adjust to your actual file path

const comps = (hour: number, minute: number) => [hour, minute] as any;

describe('Generators', () => {
  describe('#getMilitaryTimes', () => {
    it('should generate times across hours and respect end minute for the last hour', () => {
      const result = getMilitaryTimes('08:30', '10:15', 30);

      expect(result).toEqual(['08:30', '09:00', '09:30', '10:00']);
    });

    it('should handle end minute = 0 by allowing exactly one time in the last hour (minute 00)', () => {
      const result = getMilitaryTimes('10:00', '10:00', 30);

      expect(result).toEqual(['10:00']);
    });

    it('should generate using a custom interval', () => {
      const result = getMilitaryTimes('08:00', '08:50', 20);

      expect(result).toEqual(['08:00', '08:20', '08:40']);
    });

    it('should pad hour/minute to HH:mm', () => {
      const result = getMilitaryTimes('03:05', '03:59', 30);

      expect(result[0]).toBe('03:05');
      expect(result[1]).toBe('03:35');
    });
  });

  describe('#getMeridiemTimes', () => {
    it('should convert inputs to military, generate times, then convert each output back to meridiem', () => {
      const result = getMeridiemTimes('8:00 AM', '9:00 AM', 30);

      expect(result).toEqual(['08:00 AM', '08:30 AM', '09:00 AM']);
    });

    it('should use default interval=30', () => {
      const result = getMeridiemTimes('10:00 AM', '10:59 AM');

      expect(result).toEqual(['10:00 AM', '10:30 AM']);
    });
  });
});
