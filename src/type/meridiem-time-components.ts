import { TimeComponent } from '$type/enum/time-component';
import { Meridiem } from '$type/enum/meridiem';

/**
 * Model representing components of the meridiem time string.
 */
export interface MeridiemTimeComponents {
  readonly [TimeComponent.Hour]: number;
  readonly [TimeComponent.Minute]: number;
  readonly [TimeComponent.Period]: Meridiem;
}
