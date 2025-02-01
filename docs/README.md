**@libchrono/time**

***

# 🕒  @libchrono/time

[![npm version](https://badge.fury.io/js/%40libchrono%2Ftime.svg)](https://badge.fury.io/js/%40libchrono%2Ftime)
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

```
npm install @libchrono/time
```

or yarn:

```
yarn add @libchrono/time
```

## 🚀 Usage

### Importing the library
```typescript
const { to12Hour, to24Hour, isMilitaryTime, isCivilianTime } = require('time-converter-js');
// or using ES Modules
import { to12Hour, to24Hour, isMilitaryTime, isCivilianTime } from 'time-converter-js';
```

### Convert 24-hour time to 12-hour time
```typescript
console.log(to12Hour("23:45")); // Output: "11:45 PM"
console.log(to12Hour("09:30")); // Output: "9:30 AM"
```

### Convert 12-hour time to 24-hour time
```typescript
console.log(to24Hour("11:45 PM")); // Output: "23:45"
console.log(to24Hour("9:30 AM"));  // Output: "09:30"
```

### Validate if a string is in military (24-hour) time format
```typescript
console.log(isMilitaryTime("23:45")); // Output: true
console.log(isMilitaryTime("11:45 PM")); // Output: false
console.log(isMilitaryTime("25:30")); // Output: false (invalid time)
```

### Validate if a string is in civilian (12-hour) time format
```typescript
console.log(isCivilianTime("11:45 PM")); // Output: true
console.log(isCivilianTime("23:45")); // Output: false
console.log(isCivilianTime("13:30 PM")); // Output: false (invalid time)
```

## 🔧 API Reference
`to12TimeFormat(time: string): string`

Converts a 24-hour time format (`HH:mm`) to a 12-hour format (`h:mm AM/PM`).

---

`to24TimeFormat(time: string): string`

Converts a 12-hour time format (`h:mm AM/PM`) to a 24-hour format (`HH:mm`).

---

`isMilitaryTime(time: string): boolean`

Checks if a string is a valid 24-hour (military) time format (`HH:mm`).

---

`isCivilianTime(time: string): boolean`

Checks if a string is a valid 12-hour (civilian) time format (`h:mm AM/PM`).

## 🛠️ Why Use @libchrono/time
✅ Zero dependencies – lightweight and efficient.

✅ Simple API – minimal, intuitive functions.

✅ Accurate conversions & validations – ensures correctness.

✅ Fully tested – reliable with unit tests.
