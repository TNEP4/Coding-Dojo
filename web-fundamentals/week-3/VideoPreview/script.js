console.log("page loaded...");

var x = document.getElementById("myVideo"); 
document.getElementById("myVideo").muted = true;


  function over(element) {
    x.play(); 
}
    
function out(element) {
    x.pause();   
}