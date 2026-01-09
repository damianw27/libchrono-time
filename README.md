# 🕒 @libchrono/time

[![npm version](https://badge.fury.io/js/@libchrono%2Ftime.svg)](https://badge.fury.io/js/@libchrono%2Ftime)
[![GitHub license](https://img.shields.io/github/license/Naereen/StrapDown.js.svg)](https://github.com/Naereen/StrapDown.js/blob/master/LICENSE)
![](coverage/badge.svg)

## ⏳ Simple Time Format Converter

@libchrono/time is a lightweight and zero-dependency JavaScript library that helps you effortlessly:

✅ Convert 24-hour (military) time to 12-hour (meridiem) time

✅ Convert 12-hour (meridiem) time to 24-hour (military) time

✅ Validate if a string is a valid military or civilian time format

✅ Extract each component of time string in both formats

## 📦 Installation

To use @libchrono/time in your project, install it via npm:

```bash
npm install @libchrono/time
```

or yarn:

```bash
yarn add @libchrono/time
```

```typescript
const { convertMeridiemToMilitary } = require('@libchrono/time');
// or using ES Modules
import { convertMeridiemToMilitary } from '@libchrono/time';

console.log(convertMeridiemToMilitary('10:00 AM')); // result: 10:00
```

## 🔧 API Reference

### Convert 24-hour time to 12-hour time

```typescript
console.log(convertMilitaryToMeridiem('23:45')); // Output: "11:45 PM"
console.log(convertMilitaryToMeridiem('09:30')); // Output: "9:30 AM"
```

### Convert 12-hour time to 24-hour time

```typescript
console.log(convertMeridiemToMilitary('11:45 PM')); // Output: "23:45"
console.log(convertMeridiemToMilitary('9:30 AM')); // Output: "09:30"
```

### Validate if a string is in military (24-hour) time format

```typescript
console.log(isMilitaryFormat('23:45')); // Output: true
console.log(isMilitaryFormat('11:45 PM')); // Output: false
console.log(isMilitaryFormat('25:30')); // Output: false (invalid time)
```

### Validate if a string is in civilian (12-hour) time format

```typescript
console.log(isMeridiemFormat('11:45 PM')); // Output: true
console.log(isMeridiemFormat('23:45')); // Output: false
console.log(isMeridiemFormat('13:30 PM')); // Output: false (invalid time)
```

### Extract components of the time string

```typescript
console.log(getMeridiemComponents('11:45 PM')); // Output: { hour: 11, minute: 45, period: 'PM' }
console.log(getMilitaryComponents('23:45')); // Output: { hour: 23, minute: 45 }
```

### Get times labels in military format

```ts
console.log(getMilitaryTimes('00:00', '23:59', 10)) // Output: ['00:00', '00:10', '00:20', ... '23:50']
console.log(getMeridiemTimes('08:30 AM', '12:00 PM', 30)) // Output: ['08:30 AM', '09:00 AM', '09:30 AM', ..., '12:00 PM']
```

[Full documentation](./docs/globals.md)

## 🛠️ Why Use @libchrono/time

✅ Zero dependencies – lightweight and efficient.

✅ Simple API – minimal, intuitive functions.

✅ Accurate conversions & validations – ensures correctness.

✅ Fully tested – reliable with unit tests.
