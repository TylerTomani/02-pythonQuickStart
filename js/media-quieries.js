//  The variable aside is in index.js
//  The variable chapterLessonDisplay is in index.js
const title = document.getElementById('title')

const header = document.querySelector('header')
const iframeQuery = document.querySelector('iframe')
let currentWidth;
let hideAsideWidth = 780;
addEventListener('DOMContentLoaded', () => {
    currentWidth = innerWidth;
})

addEventListener('resize', () => {
    currentWidth = innerWidth
    if(currentWidth < hideAsideWidth){
        aside.classList.add('hideAside')
        aside.classList.remove('showAside')
    } else if (currentWidth > hideAsideWidth){
        aside.classList.remove('hideAside')
        aside.classList.add('showAside')
        
    }
    
})

// If Chapter Lesson Display is clicked or hit with enter keys, aside menu toggles
chapterLessonDisplay.addEventListener('click', toggleAside)
chapterLessonDisplay.addEventListener('keypress', toggleAside)

function toggleAside(e){
    let key = e.keyCode

    if(!aside.classList.contains('hideAside') || (key === 13 && !aside.classList.contains('hideAside'))){
        aside.classList.add('hideAside')
        aside.classList.remove('showAside')
    } else {
        aside.classList.remove('hideAside')
        aside.classList.add('showAside')
    }
}
// If the aside menu is hidden, hovering over header 
header.addEventListener('mouseenter', showAside)
chapterLessonDisplay.addEventListener('mouseenter', showAside)
function showAside(){
    if(aside.classList.contains('hideAside') && currentWidth < hideAsideWidth){
        aside.classList.remove('hideAside')
        aside.classList.add('showAside')
    }
}
function hideAside(){

    if(!aside.classList.contains('hideAside') && currentWidth < hideAsideWidth){
        aside.classList.add('hideAside')
        aside.classList.remove('showAside')
    }
}
iframeQuery.addEventListener('mouseenter',hideAside)
iframeQuery.addEventListener('focusin', e => {

    if((currentWidth < hideAsideWidth) && !(aside.classList.contains('hideAside')) ){
        console.log('out')
        aside.classList.add('hideAside')
        console.log("currentWidth",currentWidth)
        console.log("hideAsideWidth",hideAsideWidth)

        // aside.classList.remove('showAside')
    }
})
