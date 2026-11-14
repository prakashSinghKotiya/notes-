import  { parentPort, workerData } from 'worker_threads'
const { limit, arr } = workerData;  //data we get from the main thred using worker data

arr[0] = 200 // now this arr 0 index valu is updatedd in both worker and main thread an this is how memory is shared across worker
let count = 0 
for(let i = 0; i < limit; i++){
   count++
}

parentPort.postMessage(count)