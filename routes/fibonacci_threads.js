const WorkerPool = require('workerpool')
const fib = require('./fibonacci')
const wt = require('worker_threads')

const workerFibonacci = (n) => {
  return fib(n)
}

if (!wt.isMainThread) {
  WorkerPool.worker({
    fibonacci: workerFibonacci
  })
}