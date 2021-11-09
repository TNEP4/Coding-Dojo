var like1 = document.querySelector("#x");
var like2 = document.querySelector("#y");
var like3 = document.querySelector("#z");

x = 9;
y = 12;
z = 9;

function likeX () {
    x ++;
    like1.innerHTML = x + " like(s)";
}

function likeY () {
    y ++;
    like2.innerHTML = y + " like(s)";
}

function likeZ () {
    z ++;
    like3.innerHTML = z + " like(s)";
}