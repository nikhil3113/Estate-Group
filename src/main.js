const mouse = document.querySelector(".container");
function mousein() {
    mouse.style.borderWidth = '5px';
    mouse.style.borderStyle = 'inset';

}
const mouseout = () =>{
    mouse.style.borderWidth = '5px';  
    mouse.style.borderStyle = 'outset'; 
    
}


mouse.addEventListener('mouseover', mousein);
mouse.addEventListener('mouseout', mouseout);
