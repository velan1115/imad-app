console.log('Loaded!');

//alert
alert("welcome to IMAD");

//changing main text
var t = document.getElementById("text");
t.innerHTML = "Welcome MK!!!";

//image moving
var image = document.getElementById("madi");
image.onclick = function(){
    image.style.marginLeft = "200px";
};