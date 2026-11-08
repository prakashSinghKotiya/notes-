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
 
 what is github webhook in any repo we have a section called github webhook there we paste the url of our live backend api with the webhook endpoint eg : api.eg.com/github-webhoook , and also add a secrete key there so in future when ever we do a git push in this particular repo this webhook trigger and do a http req to this given api and run this aprticual enpoint function and inside that function we declare all these ci-cd pipeline setup what we  did in  #steps to create cicd pipeline , and this particular cicd pipeline run And this particular command  : spawn("bash" , /routeOfthatFile xyz.sh) , runs all the command and a ci cd pipe line gets created and this is what its all about using github webhooks 
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



 # ZERO DOWNTIME DEPLOYEMENT  : 
 
 zero down time deployement means 0 sec of end of service when deploying our new file and doing cicd 
 but when we do like this : 
 bashscript : 
 git pull
 npm i 
 pm2 restart

 and then our script run normally without configuring pm2 we get downtime of 1-2 sec which is huge if your app have user and not good at all cuz for that 1-2 sec the server will be unresponsible 

 so to get zero downtime : we have to configure pm2 to get 0 downtime 
 1>  we have to run our main server using pm2 in cluster mode and most imp we have to use dotenv for it sending env file using flag eg --env=.env dosent work 

 2> and what does mean by cluster mode means we will create 2 instance of our backend server means 2 server using pm2 eg : pm2 start serverStartingfilename.js  -- serverfilename - i 2  

 this will create  instance of our server and run it on cluster mode 

 3> now dont use  pm2 restart use pm2 reload isnted , pm2 resrart do a hard reset and still take time to run back 
 pm2 reload is quick 

 4> how this helps when we run our server in cluster mode they run on same port and req came to both server one by one one in 1 st and one in 2nd like this so when we do pm2 reload the first server reload but thre sec cluster server stillr unning the incomming re migrate tot that cluster server and when the   1st server finish reloaing the sec reoad automatically an the req migrate like this and thus this create a ZERO DOWNTIME DEPLOYEMENT 

 5> also inside bashh script in cicd use pm2 reload .