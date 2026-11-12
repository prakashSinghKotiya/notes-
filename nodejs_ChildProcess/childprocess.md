# CHILD PROCESS
child process take a whole new process and have ther own event loop own memory and they do not sare memory like worker thread these are good for heavy cpu task , long running scripts(like cicd ) , os level commands  , nodejs communicate it vis ipc

# exec() command
it is good for small command , script , it gives result in one buffer which cost too much cpu and memory , thats why its good for small tasks 
syntax : exec (commandname , (error , stdout ,stderr , ))

# spawn() command
this is good for long script ,command , cuz it send data in stream cunk by chunk 

syntax : const a = spawn ( command , {flepath })

a.stdout.on(data , (chunk)=>{
    console.log(chunk)
})

# fork() command
this is the best command for running nodejs script cuz it only run nodejs script and is same like spawn method it stream the data result in chunk and good for nodejs running script 

const f = fork(nodejsscriptmeansfile.js)

f.on(message , (msg)=>{
    console.log(msg)
})

# to send data from main to child we use :
child.send(message to child) sending from main process to child 

process.send(message to main) sending from child process to main 

to access theese we just needd to use event emmitter .on(message)