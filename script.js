function fibonacci(num) {
  if (num === 0) {
    return 0;
  } else if (num === 1 || num === 2) {
    return 1;
  } else {
    let prevPrev = 0;
    let prev = 1;
    let current = 1;

    for (let i = 3; i <= num; i++) {
      prevPrev = prev;
      prev = current;
      current = prevPrev + prev;
    }

    return current;
  }
}

module.exports = fibonacci;
