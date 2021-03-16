
    window.onload = function loadData(){
        var oldstored = localStorage.getItem("emp1"); 
        stored = JSON.parse(oldstored);
        for(var i = 0; i < stored.length; i++) {  
            //window.alert(stored[i].name);
            insertNewRecord(stored[i]);
        }
    }

    
    function insertNewRecord(data){
        var table = document.getElementById("employeeList"); 
        //window.alert(table);
        var body = table.getElementsByTagName("tbody")[0];
        var newRow = body.insertRow(body.length);  // row created 
     
        var cell1 = newRow.insertCell(0);          // cell created 
        cell1.innerHTML=data.name;
    
        var cell2 = newRow.insertCell(1);          // cell created 
        cell2.innerHTML=data.project;                 // value placed
    
        var cell3 = newRow.insertCell(2);          // cell created 
        cell3.innerHTML=data.budget;                 // value placed    
    }
    