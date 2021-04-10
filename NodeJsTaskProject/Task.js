const fs = require("fs");
let obj =require("readline-sync");
let url = require("url");
let http = require("http");
let port = 9999;

let myinfo ={
     taskobj:[]
};


let htmlContent = `
<form action = "http://localhost:9999/store" method ="get">
    <label>Empid:</label>
    <input type ="text" name ="eid"/><br>
    <label>Task Id: </label>
    <input type ="text" name ="taskId"/><br>
    <label>Task Detail: </label>
    <input type ="text" name ="taskinfo"> <br>
    <label> Date: </label>
    <input type ="text" name ="date"> <br>
    <input type = "submit" value="submit"/>   
</form>

<form action = "http://localhost:9999/delete" method ="get">
<h2>Delete Task </h2>    
<label>Task Id</label>
<input type = "text" name ="DeletedtaskId" /> <br>
<input type = "submit" value = "delete" />
</form>
<form action = "http://localhost:9999/display" method ="get">
<h2>Display table </h2>       
<input type = "submit" value = "DisplayTable" />


`
// let tableData =`
//     <table border ="1">
//     <tr>
//             <td>${}</td>
//     </tr>
//     </table>    
// `

let server = http.createServer((req,res)=>{
    var pathInfo =url.parse(req.url,true).pathname;

    if(pathInfo == "/"){
        res.setHeader("content-type","text/html");
        res.end(htmlContent);
    }else if(pathInfo =="/store"){
        var data = url.parse(req.url,true).query;
        
        //myinfo.taskobj.push(data);
        //console.log(myinfo.taskobj);
        let obj1 ={
            employeeId: data.eid ,
            taskId: data.taskId,
            taskName: data.taskinfo,
            dataTime: data.date
        }
        myinfo.taskobj.push(obj1);

        if (!fs.existsSync('userData.json')) {
            fs.writeFileSync('userData.json', JSON.stringify(myinfo)) 
            res.end();
            return
          }
          var courses= require("./userData.json");
          courses.taskobj.push(obj1)
        
        fs.writeFile("userData.json", JSON.stringify(courses), err => {
             
            // Checking for errors
            if (err) throw err; 
           
            console.log("Done writing"); // Success
        });

        res.end();
    }else if(pathInfo =="/delete"){
        res.setHeader("content-type","text/html");
        var delcourses= require("./userData.json");
        var data = url.parse(req.url,true).query;
        //console.log(data.DeletedtaskId);
        var delTaskId = data.DeletedtaskId;
        for(var i = 0; i < delcourses.taskobj.length; i++){
            //console.log(courses.taskobj[i].taskId);
            if(delTaskId == delcourses.taskobj[i].taskId){
                ///console.log("****************************");
                delcourses.taskobj.splice(i,1);
               // break;
            //    courses.taskobj.pop();
            }
        }
        //console.log(delcourses);
        fs.writeFile("userData.json", JSON.stringify(delcourses), err => {
             
            // Checking for errors
            if (err) throw err; 
           
            console.log("Done writing"); // Success
        });      
        res.end(htmlContent);        
    }  else if(pathInfo =="/display"){
        res.setHeader("content-type","text/html");
        var data = url.parse(req.url,true).query;
        var ReadJson = require("./userData.json");
        var printElement ="";
        
        for(var i = 0; i<ReadJson.taskobj.length;i++)
        {
          printElement += ` <tr>
                                <td>${ReadJson.taskobj[i].employeeId}</td>
                                <td>${ReadJson.taskobj[i].taskId}</td>
                                <td>${ReadJson.taskobj[i].taskName}</td>
                                <td>${ReadJson.taskobj[i].dataTime}</td>
                            <tr>
                                `
        }
        tableData = `
        <table border = "1">
            <tr>
                <th>Emp id</th>
                <th>task id</th>
                <th>Task detail</th>
                <th>Date</th>
            <tr>           
               ${printElement}           
        </table>
        `
        res.end(tableData);
    }
})

server.listen(port,()=>console.log(`running on port num ${port}`));
