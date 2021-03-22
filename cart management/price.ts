class milk{
    name:string = "milk";
    price: number= 1;
}

class bread{
    name:string = "bread";
    price:number = 3;
}


class soymilk{
    name: string ="soyMiklk";
    price: number = 2;
}

class tofu{
    name:string ="tofo";
    price: number = 4;
}


var totalCartNumber = 0;




function storeMilk(){
    totalCartNumber++;
    showCartsize();
    let data = new milk();
    let oldStored = localStorage.getItem("cartInfo");
    let stored = JSON.parse(oldStored);
    if(stored ==null){
        stored =[];
        stored.push(data);
    }
    else{
       let isFound = false;
        for(let i =0; i < stored.length;i++)
        {
            if(stored[i].name == data.name){
                stored[i].price+=data.price;
                isFound = true; 
                break;
            }
        }
        if(!isFound){
            stored.push(data);
        }
    }
    localStorage.setItem("cartInfo",JSON.stringify(stored));
}


function storeSoymilk(){
    totalCartNumber++;
    showCartsize();
    let data = new soymilk();
    let oldStored = localStorage.getItem("cartInfo");
    let stored = JSON.parse(oldStored);
    if(stored ==null){
        stored =[];
        stored.push(data);
    }
    else{
       let isFound = false;
        for(let i =0; i < stored.length;i++)
        {
            if(stored[i].name == data.name){
                stored[i].price += data.price;
                isFound = true; 
                break;
            }
        }
        if(!isFound){
            stored.push(data);
        }
    }
    localStorage.setItem("cartInfo",JSON.stringify(stored));
}
function storeBread(){
    totalCartNumber++;
    showCartsize();
    let data = new bread();
    let oldStored = localStorage.getItem("cartInfo");
    let stored = JSON.parse(oldStored);
    if(stored ==null){
        stored =[];
        stored.push(data);
    }
    else{
       let isFound = false;
        for(let i =0; i < stored.length;i++)
        {
            if(stored[i].name == data.name){
                stored[i].price+=data.price;
                isFound = true; 
                break;
            }
        }
        if(!isFound){
            stored.push(data);
        }
    }
    localStorage.setItem("cartInfo",JSON.stringify(stored));
}

function storeTofo(){
    totalCartNumber++;
    showCartsize();
    let data = new tofu();
    let oldStored = localStorage.getItem("cartInfo");
    let stored = JSON.parse(oldStored);
    if(stored ==null){
        stored =[];
        stored.push(data);
    }
    else{
       let isFound = false;
        for(let i =0; i < stored.length;i++)
        {
            if(stored[i].name == data.name){
                stored[i].price+=data.price;
                isFound = true; 
                break;
            }
        }
        if(!isFound){
            stored.push(data);
        }
    }
    localStorage.setItem("cartInfo",JSON.stringify(stored));
}

function showCartsize(){
    document.getElementById("cartSize").innerHTML = totalCartNumber.toString();
}


