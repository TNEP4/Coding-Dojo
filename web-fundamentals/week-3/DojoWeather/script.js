var banner = document.querySelector("#banner");

function hide(banner) {
    banner.remove();
}

var unit = document.querySelector("#unit-choice").value;
var temps = document.getElementsByClassName("temps");

function changeUnit(element) {
    unit = element.value;
    convertToFarenheit()
}

function convertToFarenheit() {
    if (unit == 'F')
        for (let i = 0; i < temps.length; i++) {
            temps[i].innerHTML = Math.trunc(Math.round(temps[i].innerHTML * 1.8 + 32));
        } else {
        for (let i = 0; i < temps.length; i++) {
            temps[i].innerHTML = Math.trunc(Math.round(temps[i].innerHTML - 32) * .5556);
        }
}
}