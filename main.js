const slide = document.querySelector('.bg-packages')

const next = document.getElementById('next')
const prev = document.getElementById('prev')

next.addEventListener('click', nextSlide)
prev.addEventListener('click', prevslide)

let fslide = 0;
let mslide = 3
function nextSlide(){
    slide.style.backgroundImage = `url("./img/backpackages-${fslide}.png")`
    fslide++;
    if(fslide>mslide){
        fslide = 0
       
    }

}

function prevslide(){
    slide.style.backgroundImage = `url("./img/backpackages-${fslide}.png")`
    fslide--;
    if(fslide<0){
        fslide=mslide
    }
}