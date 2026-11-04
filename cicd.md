# steps to create cicd pipeline 
 
1- create .sh file and run all the commands inside like npm i npm run buid and etc etc 
2-  these .sh file basicall run using bash comand eg if file name is xyz.sh so we can do bash xyz.sh to run it 
3-  but to run it using nodejs we do this -
4- we use spawn method to run this bash command and that xyz.sh file whhich have the commands 


eg: const cicd = spawn("bash" , /routeOfthatFile xyz.sh)

cicd.stdout.on("data",(data)=>){     //to get the data and print 
processs.stdout.wite(data)          //stdout is used 
}

cicd.stderr.on("data",(data)=>){     //to get the error data and print 
processs.stderr.wite(data)          //stderr is used  this error run wheen there is error in this comming data
}

cicd.on("close",(code)=>){      // this run when the code is fully ran and executedd 
if(code === 0){
console.log(script completed successfull )  // code = 0 means sucessfull
}else{
    console.log( script failed )
} }

cicd.on("error",(err)=>){       // this error run when the processs is not even execcuted at start 
console.log(error in spawnning the process  )  
}

# steps to setup cicd pipeline with github webhook
 
 what is github webhook in any repo we have a section called github webhook there we paste the url of our live backend api witht he webhook endpoint eg : api.eg.com/github-webhoook , and also add a secrete key there so in future when ever we do a git push in this particular repo this webhook trigger and do a http req to this given api and run this aprticual enpoint function and inside that function we declare all these ci-cd pipeline setup what we  did in  #steps to create cicd pipeline , and this particular cicd pipeline run And this particular command  : spawn("bash" , /routeOfthatFile xyz.sh) , runs all the command and a ci cd pipe line gets created and this is what its all about using github webhooks 
 # eg : 

 app.use(/github-wbhook , (req,res)=>{

    cosnt webhooksignature = req.header[x-HUB-signature256]

    cosnt ourgeneratedsignature = crypto.createhmac("sha256", "secretcodewegaveinGITHUBwebhook").update(JSON.stringfy(req.body)).digest(hex)

    if(webhooksignature !== ourgeneratedsignature){
        return res.json({eroor:invalid})
    }

    res.json({"MESSAGE" :"ok"}) // WE HAVE TO SEND THIS RES TO WEBHOOOK

    const cicd = spawn("bash" , /routeOfthatFile xyz.sh)

cicd.stdout.on("data",(data)=>){     //to get the data and print 
processs.stdout.wite(data)          //stdout is used 
}

cicd.stderr.on("data",(data)=>){     //to get the error data and print 
processs.stderr.wite(data)          //stderr is used  this error run wheen there is error in this comming data
}

cicd.on("close",(code)=>){      // this run when the code is fully ran and executedd 
if(code === 0){
console.log(script completed successfull )  // code = 0 means sucessfull
}else{
    console.log( script failed )
} }

cicd.on("error",(err)=>){       // this error run when the processs is not even execcuted at start 
console.log(error in spawnning the process  )  
}

 })