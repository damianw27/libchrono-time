[**@libchrono/time**](../README.md)

***

[@libchrono/time](../globals.md) / getMeridiemTimes

# Function: getMeridiemTimes()

> **getMeridiemTimes**(`startStr`, `endStr`, `interval`): `string`[]

Defined in: [generators.ts:124](https://github.com/damianw27/libchrono-time/blob/83486c3b0ef7f84ed0222103add988efecbd292c/src/generators.ts#L124)

Generates a list of times using **12-hour (meridiem) format** input.

Example:
```ts
getMeridiemTimes('8:00 AM', '12:00 PM', 15);
// → ['08:00 AM', '08:30 AM', '09:00 AM', ..., '12:00 PM']
```

Internally, times are converted to military components before processing.

## Parameters

### startStr

`string`

Start time in meridiem format (e.g. `8:00 AM`)

### endStr

`string`

End time in meridiem format (e.g. `12:00 PM`)

### interval

`number` = `30`

Minute interval (default: 30)

## Returns

`string`[]

An array of formatted time strings in `HH:mm`
