/* mutable variable */
let x = 5;

/* immutable variable */
const y = "Constrant"

send("x: "+x+" y:"+y);

function send(text){
  var para = document.createElement("p");
  var str = document.createTextNode(text.toString());
  para.appendChild(str);
  document.getElementById('node').appendChild(para);
}