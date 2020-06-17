const SlidingWindowMax = require('.')
const log = console.log

const windowSize = 3

const slidingWindowMax = new SlidingWindowMax(windowSize)
log(slidingWindowMax.add(0)) // returns 0
log(slidingWindowMax.add(5)) // returns 5
log(slidingWindowMax.add(10))// returns 10
log(slidingWindowMax.add(7))// returns 10
log(slidingWindowMax.add(8))// returns 10
log(slidingWindowMax.add(5)) // returns 8
log(slidingWindowMax.add(3)) // returns 8
log(slidingWindowMax.add(4)) // returns 5
// etc ...
