let n = 16; //sketchpad lateral size
const sketchPad = document.querySelector('.sketchpad');
document.addEventListener('DOMContentLoaded',fillSketchpad);

const resetBtn = document.querySelector('button.reset');
resetBtn.addEventListener('click',resetSketchpad);

function fillSketchpad(){
  let newDiv;
  for(let i=0; i<n**2; i++){
    newDiv = document.createElement('div');
    newDiv.classList.add('inner-div');
    newDiv.addEventListener('mouseover', markDiv);
    sketchPad.appendChild(newDiv);
  }
}
function resetSketchpad(){
  n = prompt('Enter new sketchpad size:',16);
  const innerDivs = document.querySelectorAll('.inner-div');
  innerDivs.forEach(div=>sketchPad.removeChild(div));
  sketchPad.style.gridTemplateColumns =`repeat(${n},${100/n}%)`;
  sketchPad.style.gridTemplateRows =`repeat(${n},${100/n}%)`;
  fillSketchpad();
}
function markDiv(e){
  //(1)if it has no data-hue give it a random one
  //(2)if it has data-lightness make it darker
  //(3)if no data-lightness give it the lightest one
  //(4)finally apply dataset properties to background-color:
  /*(1)*/if(!e.target.dataset.hue) e.target.dataset.hue = Math.random()*360; 
  /*(2)*/if(e.target.dataset.lightness) e.target.dataset.lightness-=10; 
  /*(3)*/else e.target.dataset.lightness = 90;
  /*(4)*/e.target.style.backgroundColor = `hsl(${e.target.dataset.hue},100%,${e.target.dataset.lightness}%)`;
}
