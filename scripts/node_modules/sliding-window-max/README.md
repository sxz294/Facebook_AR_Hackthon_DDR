# sliding-window-max
Given a stream of data, this algorithm returns (for every added value) the current max value.

It uses a strategy that:
 - Stores at most a number of values defined by the window size
 - Avoids to scan all the values to calculate the max value

[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard.js-brightgreen.svg)](https://standardjs.com)
[![Build Status](https://travis-ci.org/chrvadala/sliding-window-max.svg?branch=master)](https://travis-ci.org/chrvadala/sliding-window-max)
[![Coverage Status](https://coveralls.io/repos/github/chrvadala/sliding-window-max/badge.svg?branch=master)](https://coveralls.io/github/chrvadala/sliding-window-max?branch=master)
[![npm](https://img.shields.io/npm/v/sliding-window-max.svg?maxAge=2592000?style=plastic)](https://www.npmjs.com/package/sliding-window-max)
[![Downloads](https://img.shields.io/npm/dm/sliding-window-max.svg)](https://www.npmjs.com/package/sliding-window-max)
[![Donate](https://img.shields.io/badge/donate-PayPal-green.svg)](https://www.paypal.me/chrvadala/25)

## Example

```javascript
const SlidingWindowMax = require('sliding-window-max')

const windowSize = 3

const slidingWindowMax = new SlidingWindowMax(windowSize)
slidingWindowMax.add(0) // returns null
slidingWindowMax.add(5) // returns null
slidingWindowMax.add(10)// returns 10
slidingWindowMax.add(7) // returns 10
slidingWindowMax.add(8) // returns 10
slidingWindowMax.add(5) // returns 8
slidingWindowMax.add(3) // returns 8
slidingWindowMax.add(4) // returns 5
//etc ...
```

| VALUE                    | Max   |
|--------------------------|-------|
| [0] 5  10  7  8  5  3  4 | `null`|
| [0  5] 10  7  8  5  3  4 | `null`|
| [0  5  10] 7  8  5  3  4 | 10    |
|  0 [5  10  7] 8  5  3  4 | 10    |
|  0  5 [10  7  8] 5  3  4 | 10    |
|  0  5  10 [7  8  5] 3  4 | 8     |
|  0  5  10  7 [8  5  3] 4 | 8     |
|  0  5  10  7  8 [5  3  4]| 5     |
|...                       | ...   |

## Reference

### `new SlidingWindowMax(windowSize, options)`
|Param                |Default            |Description|
|---------------------|-------------------|-----------|
|windowSize           |**required**       | Defines how many values should be considered to calculate the max |
|options.comparator   | `(a, b) => b - a` | Override the custom comparator function
|options.waitFullRange| true             | If false the functions returns the max value also if the window size hasn't been reached yet

### `add(value)`
Evaluate a new value and returns the calculated max value

## Credits
I made this algorithm starting from this code https://github.com/chihungyu1116/leetcode-javascript/blob/master/239%20Sliding%20Window%20Maximum.js.
My requirements were a bit different. The leetcode algorithm requires that all the data are known before it starts.
With **sliding-window-max** you can:
 - evaluate the data as soon as they are produced
 - evaluate big array using less memory

 ## Contributors
 - [chrvadala](https://github.com/chrvadala) (author)