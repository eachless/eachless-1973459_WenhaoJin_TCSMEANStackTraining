var app =require("express")();
let http =require('http').Server(app);
let io = require("socket.io")(http);
let mongoClient = require("mongodb").MongoClient;
let url  ="mongodb://localhost:27017";


var storeName ,storedMes;
app.get("/",(req,res)=>{
    res.sendFile(__dirname+"/index.html");
})


io.on("connection",(socket)=>{
    console.log("Client connect to application");
    
    socket.on("name",(msg,mess)=>{
        console.log("hello" + msg +"aaaaa " +  mess) ;
        storeName = msg;
        mongoClient.connect(url, {useUnifiedTopology: true },(err1,client)=>{
            if(!err1){
                let db =client.db("meanstack");
                db.collection("socketMessage").insertOne({sname:storeName,messageName:mess},(err2,result)=>{
                    if(!err2){
                        console.log(result.insertedCount);
                    }else{
                        console.log(err2.message);
                    }
                    client.close
                })
            }
        });
    })
})








http.listen(9090,()=>console.log('server running on port number 9090'));