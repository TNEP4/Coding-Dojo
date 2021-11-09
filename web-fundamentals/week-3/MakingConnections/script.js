var userName  = document.querySelector("#name");

var requestNumber = document.querySelector("#requestCount");
var requestCount = 2;

function decreaserequestCount() {
    requestCount--;
    requestNumber.innerText = requestCount;
}

var connectionNumber = document.querySelector("#connectionCount");
var connectionCount = 418;

function increaseConnectionCount() {
    connectionCount++;
    connectionNumber.innerText = connectionCount;
}


function changeName() {
    var newName = "Marie Welsh";
    userName.innerText = newName;
}

function hide(todd) {
    todd.remove();
    decreaserequestCount();
}

function hide(phil) {
    phil.remove();
    decreaserequestCount();
}

