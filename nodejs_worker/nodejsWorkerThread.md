# WORKER THREADS

worker threds works on the same process but they create another thread inside that same process that run parallel and dosent block the main thread while executing  , it uses cpu cores , and can share memory as they all belong to one process.

worker threads are used fo cpu heavy task , image processing , encryption etc 

# Syntax :
1. import  worker from nodejs modules 
2. initailize it like: const worker =  new worker(file absolute or realtive path )
3. now use event emitters on this wroker var like : worker.on(data , (result) =>{})
4. now create main another file which is going to execute the heavy task and whose filepath you gave inisde new WORKER()
5. inside that file we have to use parentPort module that also get imported from node modeules this module is responsible for sharing result  which we will get when we will do worker.on(data (result))

syntax : parentport.postmessage(result)


# data transfer from main to worker  and worker to main:
we can share data from main to worker using : "workerData " in main thread and we can destructure it in worker thread directly using this wroker data only . 

worker data is imported from workerthread in the heavytask file we dont need that module in main file for sending data its just an another object which we send from main thred to worker heavy task file and inside that file we need to import it to acess it .

# SHARED MEMORY 
we can share memory in worker theadd using sharedarraybuffer 

eg : cosnt sharedarray = newSharedaffaybuffer(4) // passing length of byte 
    arr = int32Array(sharedarray)  // need to convert that shared arr into int32
    arr[0] = 0 // initializing this 

 1. now we can share this arr from main thread to worker thed using workerData object and which can be accessed and destured in worker therad .

 # NOTES
 these are faster than childprocess
we should never create many worker we should pool workers 







