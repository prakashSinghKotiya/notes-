import  { parentPort, workerData } from 'worker_threads'
const { limit } = workerData;  //data we get from the main thred using worker data
let count = 0 
for(let i = 0; i < limit; i++){
   count++
}

parentPort.postMessage(count)