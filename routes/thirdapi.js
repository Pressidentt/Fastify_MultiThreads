
const getInfo = async (request, reply) => {
  await reply.send({ hello: 'world' })
}

module.exports = getInfo
