const fibonacciResolver = require('./routes/fibonacci_route')
const getInfo = require('./routes/thirdapi')
const { init } = require('./threads/threads')



const fastify = require('fastify')({
  logger: true
})

fastify.get('/', function (request, reply) {
  reply.send({ hello: 'world' })
})

fastify.post('/test', fibonacciResolver);
fastify.get('/thirdapi', getInfo);

(async () => {
  await init({ maxWorkers: 2 })
})()

fastify.listen({ port: 3000 }, function (err, address) {

  if (err) {
    fastify.log.error(err)
    process.exit(1)
  }
})