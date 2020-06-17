/**
 *
 * Algorithm adapted from here
 * https://github.com/chihungyu1116/leetcode-javascript/blob/master/239%20Sliding%20Window%20Maximum.js
 */

const DEFAULT_COMPARATOR = (a, b) => b - a

class SlidingWindowMax {
  constructor (windowSize, options = {}) {
    this.i = 0 // may generate a leak
    this.list = []
    this.windowSize = windowSize

    this.waitFullRange = options.hasOwnProperty('waitFullRange') ? options.waitFullRange : true
    const comparator = options.comparator ? options.comparator : DEFAULT_COMPARATOR
    this.lowerThan = (a, b) => comparator(a, b) > 0
  }

  add (value) {
    const cur = value
    const list = this.list
    const i = this.i
    const windowSize = this.windowSize
    const lowerThan = this.lowerThan
    const waitFullRange = this.waitFullRange

    // Remove anything that is less than the current value
    // so this.list maintains values greater than the curret value
    while (list.length > 0 && lowerThan(list[list.length - 1].val, cur)) {
      list.pop()
    }

    // In case that all elements in the this.list are all greater than the current one (descending order)
    // Shift out the
    if (list.length > 0 && list[0].i < i - windowSize + 1) {
      list.shift()
    }

    list.push({ i, val: cur })

    // For each sliding window movement, we record the highest value in that sliding window
    // i >= windowSize - 1 to ensure that we don't prematurely record values before we get to the full range of the first sliding window
    // e.g. [1  3  -1] -3  5  3  6  7       3
    // this ensure that i is at least at -1 (index 2)

    this.i++

    if (i >= windowSize - 1) {
      return list[0].val
    }

    return waitFullRange ? null : list[0].val
  }
}

module.exports = SlidingWindowMax
