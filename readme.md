# convert-bytes

A simple utility to convert bytes to human-readable file sizes.

## Installation

You can install this package using npm or yarn:

```bash
npm install convert-bytes
```
## Usage
Here's how you can use the convertBytes function in your JavaScript code:
```javascript
// Import the function (ES6 modules)
import convertBytes from 'convert-bytes';

// Or require it (CommonJS)
// const convertBytes = require('convert-bytes');

// Use the function
const fileSize = convertBytes(1024); // 1.00 KB

```

The `convertBytes` function takes two arguments: `bytes` (the size in bytes you want to convert) and `precision` (optional, the number of decimal places to round the result to).

## Example
```javascript
import convertBytes from 'convert-bytes';

const fileSize1 = convertBytes(1024); // 1.00 KB
const fileSize2 = convertBytes(1024 * 1024 * 5, 3); // 5.000 MB
```
## License
This package is released under the [MIT License]().
