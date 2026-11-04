import spawn from "child_process";


app.use("/github-webhook", (req, res) => {

    const webhooksignature = req.header["x-hub-signature-256"];

    const ourgeneratedsignature = crypto.createHmac("sha256", "secretcodewegaveinGITHUBwebhook").update(JSON.stringify(req.body)).digest("hex");

    if(webhooksignature !== ourgeneratedsignature){
        return res.json({error: "Invalid signature"});
    }

    res.json({"MESSAGE" :"ok"}) // WE HAVE TO SEND THIS RES TO WEBHOOOK


const cicd = spawn("bash", ["/routeOfthatFile/xyz.sh"]);

cicd.stdout.on("data",(data)=>{     //to get the data and print  
process.stdout.write(data)          //stdout is used 
})

cicd.stderr.on("data",(data)=>{     //to get the error data and print 
process.stderr.write(data)          //stderr is used  this error run wheen there is error in this comming data
})

cicd.on("close",(code)=>{      // this run when the code is fully ran and executedd 
if(code === 0){
console.log("script completed successfull ")  // code = 0 means sucessfull
}else{
    console.log("script failed ")
} })

cicd.on("error",(err)=>{       // this error run when the processs is not even execcuted at start 
console.log("error in spawnning the process  ")  
})

})