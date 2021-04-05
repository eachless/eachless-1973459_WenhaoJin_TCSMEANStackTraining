const fs = require("fs");
  
let obj =require("readline-sync");
let fname = obj.question("enter the firstName");
let lname = obj.question("enter lastName:");
let gen = obj.question("male or female:")
let email =obj.question("enter the email:");

   
// Defining new user
let Myinfo = {
   student:[]
};

let obj1 = {
   firstName:  fname,
   lastName:  lname,
   gender: gen,
   em:email,
    time: Date().toString()
    }

    Myinfo.student.push(obj1)
   
// STEP 3: Writing to a file

if (!fs.existsSync('userData.json')) {
    fs.writeFileSync('userData.json', JSON.stringify(Myinfo)) 
    return
  }

  const courses= require("./userData.json");
  courses.student.push(obj1)

fs.writeFile("userData.json", JSON.stringify(courses), err => {
     
    // Checking for errors
    if (err) throw err; 
   
    console.log("Done writing"); // Success
});

module.exports