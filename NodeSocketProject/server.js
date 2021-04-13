var app =require("express")();
let http =require('http').Server(app);
let io = require("socket.io")(http);
app.get("/",(req,res)=>{
    res.sendFile(__dirname+"/index.html");
})


io.on("connection",(socket)=>{
    console.log("Client connect to application");
    
    socket.on("name",(msg)=>{
        console.log("hello" + msg);
    })
    socket.on("mmm",(mess)=>{
        console.log("your" + mess);
    })

})





http.listen(9090,()=>console.log('server running on port number 9090'));