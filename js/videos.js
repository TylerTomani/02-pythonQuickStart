const videoTxtContainers = document.querySelectorAll('.video-txt-container')
const videos = document.querySelectorAll('.video-container > video')
let videoPlaying = false

videos.forEach(vid => {
    vid.addEventListener('click', e => {
        let video = e.target
        if(!videoPlaying){
            video.play()
        } else { 
            video.pause()
        }
        videoPlaying = !videoPlaying
        video.addEventListener('ended', () => {
            video.currentTime = 0
        })
        console.log("video clicked: ",videoPlaying)
    })
})


videoTxtContainers.forEach(videoTxtContainer => {
    let videoTxt = videoTxtContainer.querySelector('.txt')
    /* For some reason when clicking in certain places within the video-txt-container the 
       the parent becomes the body or the HTML page, So i have to target the txt divs and the 
       p's within the txt divs, Very Very Frustrating */
    let videoPs = videoTxt.querySelectorAll('p')
    videoPs.forEach(p => {
        p.addEventListener('click', event => {
            playPauseVideo(event)
        })
    })

    videoTxt.addEventListener('click', event => {
        playPauseVideo(event)

    })
    videoTxtContainer.addEventListener('click', event => {
        playPauseVideo(event)
    })
    videoTxtContainer.addEventListener('keydown', event => {
        if(event.keyCode === 13){
            playPauseVideo(event)
        }
    })
})

function playPauseVideo(e){
    let parent = e.target.parentElement
// // // // // // // // // // // // // // // // // // // // // // // // // 
    /** There has to be a more efficient way than this */
    if(parent.classList.contains('fc')){
        // parent = parent
    } else if(parent.classList.contains('video-txt-container')){
        // parent = e.target.parentElement.parentElement
    } else if(parent.classList.contains('txt')){
        parent = e.target.parentElement.parentElement.parentElement
    } else if(parent.classList.contains('shortcut-txt')){
        parent = e.target.parentElement.parentElement.parentElement.parentElement
    } else if(parent.classList.contains('txt-p')){
        parent = e.target.parentElement.parentElement.parentElement.parentElement
    }
// // // // // // // // // // // // // // // // // // // // // // // // // 
    console.log('parent',parent)
    let video = parent.querySelector('.video-container > video')
    if(!videoPlaying){
        video.classList.add('right-enlarge-video')
        video.play()
        video.focus()
    } else { 
        video.classList.remove('right-enlarge-video')
        video.pause()
    }
    videoPlaying = !videoPlaying
   
    video.addEventListener('ended', () => {
        video.currentTime = 0

    })
    // console.log("text clicked: ",videoPlaying)
}