console.log('Loaded!');

//alert
//alert("welcome to IMAD");

//changing main text
//var t = document.getElementById("text");
// t.innerHTML = "Welcome MK!!!";

//image moving
//var image = document.getElementById("madi");
// image.onclick = function(){
//     image.style.marginLeft = "200px";



//continuous image moving
// var image = document.getElementById("madi");
// image.onclick= function()
// {
//     var interval = setInterval(moveimg,50);
// }
 
 
// //function definition
// var marginmove = 0;
// function moveimg()
// {
//     marginmove = marginmove + 5;
//     image.style.marginLeft = marginmove +'px';
// }

// var counter = 0;
// var b = document.getElementById("b");
// var s = document.getElementById("s");
// b.onclick = function(){
//     counter = counter + 1;
//     s.innerHTML = counter.toString();
// }




var b = document.getElementById("b");
b.onclick = function(){
var request = new XMLHttpRequest();

request.onreadystatechange = function() {
    if (request.readyState ===  XMLHttpRequest.DONE) {
        if( request.status === 200)
        {
              // Typical action to be performed when the document is ready:
              var  counter =request.responseText;
              var s = document.getElementById("s");
              s.innerHTML = counter.toString(); 
        }
    }
};
request.open('GET','http://muthukannanksv.imad.hasura-app.io/counter',true);
request.send(null);
};

// var submit = document.getElementById("sub");
// var ol = document.getElementById("list");
// submit.onclick = function(){
//   var list ='';
//   var names = ['mk','kan','vis','raja'];
//   for(var i=0;i<names.length;i++)
//   {
//       list+='<li>'+names[i]+'</li>';
//   }
//   ol.innerHTML = list;
// };

var submit = document.getElementById("sub");
var ol = document.getElementById("list");
submit.onclick = function(){
var request = new XMLHttpRequest();

request.onreadystatechange = function() {
    if (request.readyState ===  XMLHttpRequest.DONE) {
        if( request.status === 200)
        {
             var list ='';
              var names = request.responseText;
              names = JSON.parse(names);
              for(var i=0;i<names.length;i++)
              {
                  list+='<li>'+names[i]+'</li>';
              }
              ol.innerHTML = list;
        }
    }
};
var name = document.getElementById("t").value;
request.open('GET','http://muthukannanksv.imad.hasura-app.io/submitform?name='+ name ,true);
request.send(null);
};















