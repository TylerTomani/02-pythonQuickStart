const footer = document.querySelector('footer')
const topOfLesson = document.querySelector('h2')

let footerHasFocus = false;


footer.addEventListener('focusin', fillFooterTxt)
footer.addEventListener('focusout', removeFooterTxt)

function fillFooterTxt(e){
    e.target.parentElement.position = "relative"
    // footer.style.display = "block"
    footer.innerHTML = `<span style="font-size: 2rem;">click enter to return to top</span>`
    footer.style.position = "relative"

    footer.style.background = "white"
    footer.style.color = "goldenrod"
    footer.style.fontFamily = "Arial"
    footer.style.right = "0"
    footer.style.fontWeight = "900"
    
    footer.style.marginTop = "-35px"
    footer.style.textAlign = "right"
    footer.style.zIndex = "6"
    footer.style.opacity = "1"
    window.scrollTo(0,innerHeight * .72)
}
function removeFooterTxt(e){
    e.target.parentElement.position = "absolute"
    footer.style.position = "relative"
    footer.style.zIndex = "0"
    footer.style.opacity = "0"
    footer.style.background = "none"
    footer.style.color = "none"
    // footer.style.display = "none"

}
footer.addEventListener('click', e => {topOfLesson.focus()})
footer.addEventListener('keydown', e => {
    if(e.keyCode === 13){
        topOfLesson.focus()

    }
})
