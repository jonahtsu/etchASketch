const item = document.querySelector("#item");

function createGrid(size){
for (let i=0; i< size * size; i++){
    const gridElement = document.createElement("div");
    gridElement.classList="grid-item";
    gridElement.addEventListener("mouseover", fillColour);
    item.appendChild(gridElement);
}
}
function fillColour(e){
 let x=Math.floor(Math.random()*100);
 let y=Math.floor(Math.random()*100);
 let z=Math.floor(Math.random()*100);
 console.log(x);
  e.target.style.backgroundColor = `rgb(${x},${y},${z})`;
}
const clear= document.querySelector('#Clear')
clear.addEventListener('click',function(){
let cell= item.children;
for (let i = 0; i < 40*40; i++) {
  cell[i].style.backgroundColor = 'white';
}
});

function shape10() {
  document.getElementById("item").style.gridTemplateColumns = "repeat(10, 1fr)";
  document.getElementById("item").style.gridTemplateRows = "repeat(10, 1fr);";
  var x = document.getElementsByClassName("grid-item");
  for (let i=1; i< x.length; i++){
  x[i].style.height = '30px';
  }
}

function shape20() {
  document.getElementById("item").style.gridTemplateColumns = "repeat(20, 1fr)";
  document.getElementById("item").style.gridTemplateRows = "repeat(15, 1fr);";
  var x = document.getElementsByClassName("grid-item");
  for (let i=1; i< x.length; i++){
  x[i].style.height = '15px';
  }
}
function shape30() {
  document.getElementById("item").style.gridTemplateColumns = "repeat(30, 1fr)";
  document.getElementById("item").style.gridTemplateRows = "repeat(30, 1fr);";
  var x = document.getElementsByClassName("grid-item");
  for (let i=1; i< x.length; i++){
  x[i].style.height = '6px';
  }
}