const item = document.querySelector("#item");
//document.getElementById("grid10").onclick = createGrid(10);
//document.getElementById("grid20").onclick = createGrid(20);
//document.getElementById("grid30").onclick = createGrid(30);
//createGrid(40);
function createGrid(size){
for (let i=0; i< size * size; i++){
    const gridElement = document.createElement("div");
    gridElement.classList="grid-item";
    gridElement.addEventListener("mouseover", fillColour);
    item.appendChild(gridElement);
}
}
function fillColour(e){
  // alert("FILL");
   //e.target.style.backgroundColor = red;
  e.target.style.backgroundColor = `rgb(100,10,10)`;
}
