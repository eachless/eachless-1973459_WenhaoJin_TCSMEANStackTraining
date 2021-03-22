class total{
    name:string = "total";
    price: number= 0;
}

window.onload = function loadData(){
    var oldstored = localStorage.getItem("cartInfo");
    var stored =JSON.parse(oldstored);
    let totalprice = 0;
    for(var i =0; i<stored.length; i++){
        insertMyCart(stored[i]);
        totalprice+= stored[i].price;
    }
    
     let totalp = new total();
     totalp.price =  totalprice;

    insertMyCart(totalp);
    
}

function insertMyCart(data){
    var table = document.getElementById("showDetal");
    var body = table.getElementsByTagName("tbody")[0];
    var newRow = body.insertRow(body.length);

    var cell1 =newRow.insertCell(0);
    cell1.innerHTML = data.name;

    var cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.price;
}
