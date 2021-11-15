var clicks = 0;

function onClick() {
  clicks += 1;
  document.getElementById("clicks").innerHTML = clicks;
};

var bannerImg = document.querySelector("#slideshow");
var slide = 0;

console.log("slide # = " + slide);

var slide0 = "./images/cafe-neko.png";
var slide1 = "./images/pixel-ninjas-2.png";
var slide2 = "./images/stonepunk.png";

var indic0 = document.querySelector(".indic0");
var indic1 = document.querySelector(".indic1");
var indic2 = document.querySelector(".indic2");

indic0.style.backgroundColor = "purple";

function ChevRight() {
  slide+=1;
  if (slide === 0) {
    indic0.style.backgroundColor = "purple";
    indic1.style.backgroundColor = "#333";
    indic2.style.backgroundColor = "#333";
    bannerImg.src = slide0;
    } else if (slide === 1) {
    bannerImg.src = slide1;
    indic0.style.backgroundColor = "#333";
    indic1.style.backgroundColor = "purple";
    indic2.style.backgroundColor = "#333";
    }
    else if (slide === 2) {
    bannerImg.src = slide2;
    indic0.style.backgroundColor = "#333";
    indic1.style.backgroundColor = "#333";
    indic2.style.backgroundColor = "purple";
    }
    else if (slide == 3) {
    bannerImg.src = slide0;
    slide = 0
    indic0.style.backgroundColor = "purple";
    indic1.style.backgroundColor = "#333";
    indic2.style.backgroundColor = "#333";
    }
    console.log("slide # = " + slide);
}

function ChevLeft() {
  slide-=1;
  if (slide === 0) {
    bannerImg.src = slide0;
    indic0.style.backgroundColor = "purple";
    indic1.style.backgroundColor = "#333";
    indic2.style.backgroundColor = "#333";
  } else if (slide === 1) {
    bannerImg.src = slide1;
    indic0.style.backgroundColor = "#333";
    indic1.style.backgroundColor = "purple";
    indic2.style.backgroundColor = "#333";
    } else if (slide === 2) {
    bannerImg.src = slide2;
    indic0.style.backgroundColor = "#333";
    indic1.style.backgroundColor = "#333";
    indic2.style.backgroundColor = "purple";
    }
    else if (slide === -1) {
    bannerImg.src = slide2;
    slide = 2;
    indic0.style.backgroundColor = "#333";
    indic1.style.backgroundColor = "#333";
    indic2.style.backgroundColor = "purple";
    }
  console.log("slide # = " + slide);
}

function setActive(element) {
  element.style.backgroundColor = "#000000";
  element.style.color = "#ffffff";
  indic0.style.backgroundColor = "yellow";
  indic1.style.backgroundColor = "blue";
  indic2.style.backgroundColor = "red";
}