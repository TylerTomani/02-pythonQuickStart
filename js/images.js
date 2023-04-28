const images = document.querySelectorAll('img')
const clickContainers = document.querySelectorAll('.click-container-image')
let enlarged = false
images.forEach(image => {
    image.addEventListener('click', enlargeImg)
    image.addEventListener('keydown', e => {
        let key = e.keyCode
        if(key == 13){
            enlargeImg(e)
        }
    })
    image.addEventListener('focusout', e => {
        let img = e.target
        img.classList.remove('left-enlarge-img')
        img.classList.remove('right-enlarge-img')
        enlarged = false
    })
})

clickContainers.forEach(clickContainer => {
    clickContainer.addEventListener('click', clickContainerEnlarge)
    clickContainer.addEventListener('keydown', e => {
        let key = e.keyCode
        if(key == 13){
            clickContainerEnlarge(e)
        }
    })
    clickContainer.addEventListener('focusout', e => {
        let img = e.target.parentElement.querySelector('img')
        if(enlarged){
            img.classList.remove('right-enlarge-img')
        }
        enlarged = false
    })
})
function enlargeImg(e){
    let img = e.target
    if(!enlarged){
        if(img.classList.contains('left-img')){
            img.classList.add('left-enlarge-img')
        } else if(img.classList.contains('right-img')){
            img.classList.add('right-enlarge-img')
        } else {
            img.classList.add('right-enlarge-img')
        }
    } else {
        e.target.classList.remove('right-enlarge-img')
        e.target.classList.remove('left-enlarge-img')
        

    }
    enlarged = !enlarged
}
function clickContainerEnlarge(e){
    let parent = e.target.parentElement
    if(parent.classList.contains('click-container-image')){
        parent = parent.parentElement
    } else if (parent.classList.contains('click-txt')){
        parent = parent.parentElement.parentElement
    }
    let img = parent.querySelector('img')
    if(!enlarged){
        img.classList.add('right-enlarge-img')
    } else {
        img.classList.remove('right-enlarge-img')
    }
    enlarged = !enlarged
}
