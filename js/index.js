const chapters = document.querySelectorAll('.chapter')
const lessons = document.querySelectorAll('.chapter > ul li a')
const aside = document.querySelector('.chapter-container')
const iframe = document.querySelector('iframe')
const chapterDisplay = document.querySelector('.chapter-display')
const lessonDisplay = document.querySelector('.lesson-display')
const chapterLessonDisplay = document.querySelector('.chapter-lesson-display')
let lessonArray = []
let currentLesson = ''

chapterLessonDisplay.addEventListener('click', e => {
    console.log(e)
    scroll(0,0)
})


// Event listeners for each chapter drop menus
hideLessons()
chapters.forEach(chapter => {
    const chapterLink = chapter.querySelector('.chapter-link')
    const lessonsUl = chapter.querySelector('ul')
    chapterLink.addEventListener('click', e => {
        e.preventDefault()
        e.stopPropagation()
        hideLessons()
        toggleLessons(lessonsUl)
    })
})

function hideLessons(){
    chapters.forEach(chapter => {
        let ul = chapter.querySelector('ul')
        if(!ul.classList.contains('hide') && !ul.classList.contains('show')){
            ul.classList.add('hide')
        }     
    })
}
function toggleLessons(ul){
    let parent = ul.parentElement
    let titleChapter = parent.querySelector('a')
    lessonDisplay.innerHTML = ''
    chapterDisplay.innerText = titleChapter.innerText
    if(ul.classList.contains('hide')){
        ul.classList.remove('hide')
    } else if(ul.classList.contains('show')) {
        ul.classList.remove('show')
        ul.classList.add('hide')
    } else {
        ul.classList.add('hide')
    }
}

// Even listeners for loading each lesson with mouse click and enter key
lessons.forEach(lesson => {
/////// Delete this when not working on the site
    if(lesson.hasAttribute('autofocus')){
        iframe.src = lesson.href
    }
///////////////////////////////////

// key press if enter is hit twice on lesson, iframe's lesson gets focus
    lesson.addEventListener('keydown', e => {
        let key = e.keyCode
        if(key === 13){
            e.preventDefault()
            e.stopPropagation()
            const chapterCurrent =  e.target.parentElement.parentElement.parentElement
            const titleChapter = chapterCurrent.querySelector('a')
            chapterDisplay.innerText = titleChapter.innerText
            lessonDisplay.innerHTML = "&rarr; " + e.target.innerText
            currentLesson = e.target

            iframe.src = currentLesson.href
            lessonArray.unshift(currentLesson)
            if(lessonArray.length > 2){
                lessonArray.pop()
            }
            if(lessonArray[0] == lessonArray[1]){
                iframe.focus()
            }
        }        
    })
// If lesson is clicked with mouse once, iframe's lesson receives focus
    lesson.addEventListener('click', e => {
        e.preventDefault()
        e.stopPropagation()
        const chapterCurrent =  e.target.parentElement.parentElement.parentElement
        const titleChapter = chapterCurrent.querySelector('a')
        chapterDisplay.innerText = titleChapter.innerText
        lessonDisplay.innerHTML = "&rarr; " + e.target.innerText
        currentLesson = e.target
        iframe.src = currentLesson.href
    })
    iframe.addEventListener('focusout', e => {
        currentLesson.focus()           
    })
})



