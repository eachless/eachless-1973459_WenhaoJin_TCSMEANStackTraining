
function readFormData(){
    var obj= {};
    obj.name = document.getElementsByName("user")[0].value;
    obj.project = document.getElementsByName("user")[1].value;
    obj.budget = document.getElementsByName("user")[2].value;
    
    //insertNewRecord(obj);
    //resetData();
    //loaclstorage.removeItem("emp");
    var oldstored = localStorage.getItem("emp1"); 
    stored = JSON.parse(oldstored)
    if (stored == null){
        stored = [];
        stored.push(obj);
    }else{
        stored.push(obj);
    }
    //window.alert(stored);
    insertNewRecord(obj);
    localStorage.setItem("emp1",JSON.stringify(stored));
    
}

//function storeInSession(){
//    sessionStorage.setItem("empInfo",empObj);
//}
//
//function retrieveFromSession(){
//    
//    var obj = sessionStorage.getItem("empInfo");
//    var empJson = JSON.parse(obj);
//    //console.log(obj);
//}

function insertNewRecord(data){
     var table = document.getElementById("employeeList");    
     var body = table.getElementsByTagName("tbody")[0];
     var newRow = body.insertRow(body.length);  // row created 
     
    var cell1 = newRow.insertCell(0);          // cell created 
     cell1.innerHTML=data.name;
    
     var cell2 = newRow.insertCell(1);          // cell created 
     cell2.innerHTML=data.project;                 // value placed
    
    var cell3 = newRow.insertCell(2);          // cell created 
     cell3.innerHTML=data.budget;                 // value placed    
}

function resetData(){   
    document.getElementsByName("user")[0].value="";
    document.getElementsByName("user")[1].value="";
    document.getElementsByName("user")[2].value="";
}