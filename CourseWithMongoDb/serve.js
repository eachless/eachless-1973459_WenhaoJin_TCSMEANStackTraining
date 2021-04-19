let app = require("express")();
let bodyParser = require("body-parser");
let port = 9090;
app.use(bodyParser.urlencoded({extended:true}));    // enable body data
let mongoClient =require("mongodb").MongoClient;
let url ="mongodb://localhost:27017";


app.get("/",(req,res)=>{
    res.sendFile(__dirname+"/index.html");
});

app.get("/addCourse",(req,res)=>{
    res.sendFile(__dirname+"/addCourse.html");
});

app.post("/addCourse",(req,res)=>{
    let id = req.body.id;
    console.log(id);
    let name = req.body.cname;
    let desc = req.body.cdesc;
    let amount = req.body.camount;
    let courseData = {_id:id,cname:name,cdesc:desc,camount:amount};
    mongoClient.connect(url,{useUnifiedTopology:true},(err1,client)=>{
        if(!err1){
            let db =client.db("meanstack");
            db.collection("course").insertOne(courseData,(err2,result)=>{
                if(!err2){
                  console.log(result);
                  if(result.insertedCount>0){
                      res.send("recorded");
                  }else{
                      res.send(err2);
                  }
                }
                client.close;
            })
        }
    })
});

app.get("/delete",(req,res)=>{
    res.sendFile(__dirname+"/delete.html")
})

app.post("/delete",(req,res)=>{
    let id = req.body.deleteId;
    let amount = req.body.camount; 
    console.log(id + amount);
    mongoClient.connect(url,{useUnifiedTopology:true},(err1,client)=>{
        if(!err1){
            let db =client.db("meanstack");
            
            db.collection("course").deleteOne({_id:id},(err2,result)=>{
                if(!err2){
                  //console.log(result);
                  if(result.deletedCount>0){
                      res.send("deleted");
                  }else{
                      res.send(err2);
                  }
                }
                client.close;
            })
        }
    })
});

app.get("/update",(req,res)=>{
    res.sendFile(__dirname+"/update.html")
})

app.post("/update",(req,res)=>{
    let id = req.body.id; 
    let amount = req.body.camount; 
    mongoClient.connect(url,{useUnifiedTopology:true},(err1,client)=>{
        if(!err1){
            let db =client.db("meanstack");
            
            db.collection("course").updateOne({_id:id},{$set:{camount:amount}},(err2,result)=>{
                if(!err2){
                  //console.log(result);
                  if(result.modifiedCount>0){
                      res.send("updated");
                  }else{
                      res.send(err2);
                  }
                }
                client.close;
            })
        }
    })
});


var course ="";
mongoClient.connect(url,{useUnifiedTopology:true},(err1,client)=>{
    if(!err1){
        let db =client.db("meanstack");
        let cursor = db.collection("course").find();
        cursor.each((err2,doc)=>{
            if(doc!=null){
                course+=`<tr>`;
                course+=`<th>${doc._id}</th>`;
                course+=`<th>${doc.cname}</th>`;
                course+=`<th>${doc.cdesc}</th>`;
                course+=`<th>${doc.camount}</th>`;
                course+=`</tr>`;
            }

            client.close();
        })
    }
})


app.get("/fetch",(req,res)=>{

    var result = `<table border = "1" ;style="width:100%">`;
    result +=`<tr>`;
    result +=`<th>id</th>`;
    result +=`<th>name</th>`;
    result +=`<th>description</th>`;
    result +=`<th>amount</th>`;
    result +=`</tr>`;
    result += course ;
    result += `</table>`;
    console.log(result);
    res.send(result);
    //res.sendFile(__dirname+"/fetch.html");
})



app.listen(port,()=>console.log("server running on port 9090"));