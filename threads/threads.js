const Path = require('path');
const wt = require('worker_threads')
const wp = require('workerpool')

let poolProxy = null

const init = async (opt) => {
  if (wt.isMainThread) {
    const pool = wp.pool(Path.join(__dirname, './threads.js'))
    try {
      poolProxy = pool.proxy()
      console.log('Pool proxy created')
    }
    catch (err) {
      console.log('Error in init')
      console.log(err)
    }
  }
}

const get = () => {
  return poolProxy
}
module.exports.init = init
module.exports.get = get

