import http from 'http';
import { Worker, workerData } from 'worker_threads';

const server = http.createServer((req, res) => {
 if(req.url === '/'){
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Hello, World!');
  }
  if(req.url === '/worker'){

    const sharedarray = new SharedArrayBuffer(4);  // this is a shared memory between the main thread and the worker thread. we can use this shared memory to share data between the main thread and the worker thread.
    const arr = new Int32Array(sharedarray);  // this is a typed array that we can use to access the shared memory. we can use this typed array to read and write data to the shared memory.

    arr[0] = 0;  // we can initialize the shared memory with some value. here we are initializing the shared memory with 0. 

    const worker = new Worker('./heavyworkertask.js', {  // worker created .
        workerData : {limit : 100000 , arr} // this workerData is used to pass the data from the main thread to the worker thread. we can access this data inside the worker thread using workerData object.
    });  
    


    worker.on('message', (message) => {  // this msg is comming from the parentport.postMessage(count) insie the heavyworkertask.js file.
      res.writeHead(200, {'Content-Type': 'text/plain'});
      res.end(`Worker result: ${message}`);
    } )

    worker.on('error', (error) => {   // we can also handle the error if any error occurs inside the worker thread.
      res.writeHead(500, {'Content-Type': 'text/plain'});
      res.end(`Worker error: ${error.message}`);
    })
  }
})





server.listen(3000, () => {
  console.log('Server running at http://localhost:3000/');
}  )