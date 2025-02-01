/**
 * Enumerator representing components from which the time string is built.
 */
export enum TimeComponent {
  /**
   * 00-23 or 1-12
   */
  Hour = 'hour',
  /**
   * 00-59
   */
  Minute = 'minute',
  /**
   * AM or PM
   */
  Period = 'period',
}
