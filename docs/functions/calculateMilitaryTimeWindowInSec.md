[**@libchrono/time**](../README.md)

***

[@libchrono/time](../globals.md) / calculateMilitaryTimeWindowInSec

# Function: calculateMilitaryTimeWindowInSec()

> **calculateMilitaryTimeWindowInSec**(`startStr`, `endStr`): `number`

Defined in: [calculations.ts:58](https://github.com/damianw27/libchrono-time/blob/83486c3b0ef7f84ed0222103add988efecbd292c/src/calculations.ts#L58)

Calculates the time window length in seconds between two **military** time strings (`HH:mm`).

## Parameters

### startStr

`string`

Start time in `HH:mm` format.

### endStr

`string`

End time in `HH:mm` format.

## Returns

`number`

The number of seconds between start and end.

## Example

```ts
calculateMilitaryTimeWindowInSec('08:00', '12:00'); // 14400
```

## Throws

Error If end time is before start time.
