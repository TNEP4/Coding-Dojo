function hide(element) {
  element.remove();
}

var likeNumbTart = document.querySelector("#likeCountTart");
var likeCountTart = 68;

function TartLikeCount() {
    likeCountTart++;
    likeNumbTart.innerText = likeCountTart;
}


var likeNumbMacarons = document.querySelector("#likeCountMacarons");
var likeCountMacarons = 212;

function MacaronsLikeCount() {
    likeCountMacarons++;
    likeNumbMacarons.innerText = likeCountMacarons;
}


var likeNumbCreme = document.querySelector("#likeCountCreme");
var likeCountCreme = 33;

function CremeLikeCount() {
    likeCountCreme++;
    likeNumbCreme.innerText = likeCountCreme;
}

var search = null;

function getSearch(element) {
    search = element.value;
}


function searchAlert() {
    if (search === null) {
        alert("Please enter a search term");
    } else if (search === "") {
        alert("Please enter a search term");
    } else
    alert("You are searching for " + '"' + search + '"');
}