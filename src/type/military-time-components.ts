import { TimeComponent } from '$type/enum/time-component';

/**
 * Model representing components of the military time string.
 */
export interface MilitaryTimeComponents {
  readonly [TimeComponent.Hour]: number;
  readonly [TimeComponent.Minute]: number;
}
