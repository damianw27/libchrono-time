[**@libchrono/time**](../README.md)

***

[@libchrono/time](../globals.md) / calculateMeridiemTimeWindowInSec

# Function: calculateMeridiemTimeWindowInSec()

> **calculateMeridiemTimeWindowInSec**(`startStr`, `endStr`): `number`

Defined in: [calculations.ts:89](https://github.com/damianw27/libchrono-time/blob/864173122139e9bb3f370b734f474fcb3afcc140/src/calculations.ts#L89)

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
