[**@libchrono/time**](../README.md)

***

[@libchrono/time](../globals.md) / calculateMeridiemTimeWindowInSec

# Function: calculateMeridiemTimeWindowInSec()

> **calculateMeridiemTimeWindowInSec**(`startStr`, `endStr`): `number`

Defined in: [calculations.ts:79](https://github.com/damianw27/libchrono-time/blob/83486c3b0ef7f84ed0222103add988efecbd292c/src/calculations.ts#L79)

Calculates the time window length in seconds between two **meridiem** time strings (e.g. `8:00 AM`).

The inputs are converted to military format and parsed into components before calculating the delta.

## Parameters

### startStr

`string`

Start time in meridiem format (e.g. `8:00 AM`).

### endStr

`string`

End time in meridiem format (e.g. `12:00 PM`).

## Returns

`number`

The number of seconds between start and end.

## Example

```ts
calculateMeridiemTimeWindowInSec('8:00 AM', '12:00 PM'); // 14400
```

## Throws

Error If end time is before start time.
