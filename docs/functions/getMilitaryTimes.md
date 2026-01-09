[**@libchrono/time**](../README.md)

***

[@libchrono/time](../globals.md) / getMilitaryTimes

# Function: getMilitaryTimes()

> **getMilitaryTimes**(`startStr`, `endStr`, `interval`): `string`[]

Defined in: [generators.ts:101](https://github.com/damianw27/libchrono-time/blob/83486c3b0ef7f84ed0222103add988efecbd292c/src/generators.ts#L101)

Generates a list of times using **24-hour (military) format**.

Example:
```ts
getMilitaryTimes('08:00', '12:00', 30);
// → ['08:00', '08:30', '09:00', ...]
```

## Parameters

### startStr

`string`

Start time in `HH:mm` format

### endStr

`string`

End time in `HH:mm` format

### interval

`number` = `30`

Minute interval (default: 30)

## Returns

`string`[]

An array of formatted time strings
