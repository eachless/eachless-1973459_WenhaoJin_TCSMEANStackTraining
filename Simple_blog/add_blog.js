window.onload = function loadData(){
    var oldstored = localStorage.getItem("bloginfo");
    var stored =JSON.parse(oldstored);
    
    for(var i =0; i<stored.length; i++){
        insertMyBlog(stored[i]);
       // window.alert(stored[i].title);
    }
}


function insertMyBlog(data){
     var newDiv = document.createElement("div");
     var newDes = document.createElement("div");
     var newImg = document.createElement("img");
    newDiv.innerHTML = data.title;
    newDes.innerHTML = data.desc;
    newImg.src = data.imgId;
    document.getElementById('show1').appendChild(newDiv);
    document.getElementById('show1').appendChild(newDes);
    document.getElementById('show1').appendChild(newImg);
}