/**
 * Enumerator representing periods in 12-hour (meridiem) time.
 */
export enum Meridiem {
  /**
   * Value representing pre-noon (ante-meridiem).
   */
  AM = 'AM',
  /**
   * Value representing pre-noon (post-meridiem).
   */
  PM = 'PM',
}

/**
 * Enumerator representing periods in 12-hour (meridiem) time. Alias for {@link Meridiem}.
 */
export enum DayPeriod {
  AM = Meridiem.AM,
  PM = Meridiem.PM,
}

/**
 * Enumerator representing periods in 12-hour (meridiem) time. Alias for {@link Meridiem}.
 */
export enum TimeOfDay {
  AM = Meridiem.AM,
  PM = Meridiem.PM,
}

/**
 * Enumerator representing periods in 12-hour (meridiem) time. Alias for {@link Meridiem}.
 */
export enum CivilianTimePeriod {
  AM = Meridiem.AM,
  PM = Meridiem.PM,
}

const t: DayPeriod = DayPeriod.AM;
