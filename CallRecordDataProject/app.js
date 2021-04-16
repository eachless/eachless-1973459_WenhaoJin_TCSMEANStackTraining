let fs = require('fs');
var jasonParsed;
fs.readFile('call_data.json',(err,data)=>{
    var jsonData = data;
     jasonParsed =JSON.parse(jsonData);
    console.log(jsonData._id);
});



let mongoClient =require("mongodb").MongoClient
let url ="mongodb://localhost:27017";
mongoClient.connect(url,{useUnifiedTopology:true},(err,client)=>{
    if(!err){
        let db  =client.db("meanstack");
        db.collection("projectData").insertOne({jasonParsed},(err2,result)=>{
            if(!err2){
                console.log(result.insertedCount);
            }else{
                console.log(err2.message);
            }
            client.close();
        })
    }
})