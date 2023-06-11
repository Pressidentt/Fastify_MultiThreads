const { get } = require('../threads/threads')

const fibonacciResolver = (request, reply) => {
  const { number } = request.body
  worketPool = get()
  const result = worketPool.fibonacci(number)
  reply.send({ result })
}

module.exports = fibonacciResolver