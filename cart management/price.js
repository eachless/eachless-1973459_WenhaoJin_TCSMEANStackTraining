var milk = /** @class */ (function () {
    function milk() {
        this.name = "milk";
        this.price = 1;
    }
    return milk;
}());
var bread = /** @class */ (function () {
    function bread() {
        this.name = "bread";
        this.price = 3;
    }
    return bread;
}());
var soymilk = /** @class */ (function () {
    function soymilk() {
        this.name = "soyMiklk";
        this.price = 2;
    }
    return soymilk;
}());
var tofu = /** @class */ (function () {
    function tofu() {
        this.name = "tofo";
        this.price = 4;
    }
    return tofu;
}());
var totalCartNumber = 0;
function storeMilk() {
    totalCartNumber++;
    showCartsize();
    var data = new milk();
    var oldStored = localStorage.getItem("cartInfo");
    var stored = JSON.parse(oldStored);
    if (stored == null) {
        stored = [];
        stored.push(data);
    }
    else {
        var isFound = false;
        for (var i = 0; i < stored.length; i++) {
            if (stored[i].name == data.name) {
                stored[i].price += data.price;
                isFound = true;
                break;
            }
        }
        if (!isFound) {
            stored.push(data);
        }
    }
    localStorage.setItem("cartInfo", JSON.stringify(stored));
}
function storeSoymilk() {
    totalCartNumber++;
    showCartsize();
    var data = new soymilk();
    var oldStored = localStorage.getItem("cartInfo");
    var stored = JSON.parse(oldStored);
    if (stored == null) {
        stored = [];
        stored.push(data);
    }
    else {
        var isFound = false;
        for (var i = 0; i < stored.length; i++) {
            if (stored[i].name == data.name) {
                stored[i].price += data.price;
                isFound = true;
                break;
            }
        }
        if (!isFound) {
            stored.push(data);
        }
    }
    localStorage.setItem("cartInfo", JSON.stringify(stored));
}
function storeBread() {
    totalCartNumber++;
    showCartsize();
    var data = new bread();
    var oldStored = localStorage.getItem("cartInfo");
    var stored = JSON.parse(oldStored);
    if (stored == null) {
        stored = [];
        stored.push(data);
    }
    else {
        var isFound = false;
        for (var i = 0; i < stored.length; i++) {
            if (stored[i].name == data.name) {
                stored[i].price += data.price;
                isFound = true;
                break;
            }
        }
        if (!isFound) {
            stored.push(data);
        }
    }
    localStorage.setItem("cartInfo", JSON.stringify(stored));
}
function storeTofo() {
    totalCartNumber++;
    showCartsize();
    var data = new tofu();
    var oldStored = localStorage.getItem("cartInfo");
    var stored = JSON.parse(oldStored);
    if (stored == null) {
        stored = [];
        stored.push(data);
    }
    else {
        var isFound = false;
        for (var i = 0; i < stored.length; i++) {
            if (stored[i].name == data.name) {
                stored[i].price += data.price;
                isFound = true;
                break;
            }
        }
        if (!isFound) {
            stored.push(data);
        }
    }
    localStorage.setItem("cartInfo", JSON.stringify(stored));
}
function showCartsize() {
    document.getElementById("cartSize").innerHTML = totalCartNumber.toString();
}
