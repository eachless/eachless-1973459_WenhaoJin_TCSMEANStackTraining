function addBlog(){
    //alert("hello");
    var title = document.getElementById("title").value;
    var desc = document.getElementById("desc").value;
    var imageInfo = document.getElementById("imgId").files[0].name;
    var data = readData();

    document.getElementById("textInfo").innerHTML = title;
    document.getElementById("descInfo").innerHTML = desc;
    document.getElementById("imgInfo").src = imageInfo;
    storeInsession();

    resetField();
}

function resetField(){
    document.getElementById("title").value="";
    document.getElementById("desc").value="";
    document.getElementById("imgId").value.files="";
}

function readData(){
    var obj ={};
    obj.title =document.getElementById('title').value;
    obj.desc = document.getElementById("desc").value;
    obj.imgId = document.getElementById("imgId").files[0].name;
    
    return obj;
}


function storeInsession(){
    var data ={};
    data.title =document.getElementById('title').value;
    data.desc = document.getElementById("desc").value;
    data.imgId = document.getElementById("imgId").files[0].name;
    var oldstored = localStorage.getItem('bloginfo');
    var stored = JSON.parse(oldstored);
    if(stored == null){
        stored =[];
        stored.push(data);
    }
    else{
        stored.push(data);
    }   
    localStorage.setItem("bloginfo",JSON.stringify(stored));
}

//function retrieveFromSession(){
//    var obj = JSON.parse(sessionStorage.getItem("blogInfo"));
//    console.log(obj);
//}