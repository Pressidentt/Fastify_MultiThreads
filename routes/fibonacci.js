const fib = (n) => {
  if (n < 2) {
    return 1
  }
  return fib(n - 2) + fib(n - 1)
}

module.exports = fib