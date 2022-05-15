console.clear();

function HeroHeader() {
    var smokyBG = $('#hero-bg').waterpipe({
        gradientStart: '#1cb8e8',
        gradientEnd: '#4ab59c',
        smokeOpacity: 0.1,
        numCircles: 1,
        maxMaxRad: 'auto',
        minMaxRad: 'auto',
        minRadFactor: 0,
        iterations: 8,
        drawsPerFrame: 10,
        lineWidth: 2,
        speed: 1,
        bgColorInner: "#4d4d4d",
        bgColorOuter: "#000000"
    });

}
// HeroHeader();

function HeroHeader2() {

    var smokyBG = $('#hero-bg').waterpipe({
        gradientStart: '#fa05fa',
        gradientEnd: '#6b71e3',
        smokeOpacity: 0.5,
        numCircles: 1,
        maxMaxRad: 'auto',
        minMaxRad: 'auto',
        minRadFactor: 0,
        iterations: 8,
        drawsPerFrame: 10,
        lineWidth: 2,
        speed: 1,
        bgColorInner: "#2b2b2b",
        bgColorOuter: "#000000"
    });

}

// setTimeout(HeroHeader2, 5500);

// Disable context menu
function disableContextMenu(disableContext) {
    disableContext.setAttribute('oncontextmenu', 'return false;');
}
let NonContextContent = document.querySelectorAll('.disableContext');
NonContextContent.forEach(disableContext => {
    // disableContext.setAttribute('oncontextmenu', 'return false;');
    disableContextMenu(disableContext);
});
// Disable Image Drag
let NonDragImg = document.querySelectorAll('img');
NonDragImg.forEach(Img => {
    Img.setAttribute('draggable', 'false');
    disableContextMenu(Img);

});
// Hero
// let HeroImages = document.querySelectorAll('.hero-images');
// HeroImages.forEach(img => {
//     HeroImages(img);
// });
var current = 0,
    slides = document.querySelectorAll('.hero-image');
slides[0].classList.add('show');
setInterval(function() {
    for (var i = 0; i < slides.length; i++) {
        slides[i].classList.remove('show');
    }
    current = (current != slides.length - 1) ? current + 1 : 0;
    slides[current].classList.add("show");
}, 3000);



// Scratch Image (Group )
let ScratchSection = document.getElementById('stripped');
let Scratch = new IntersectionObserver(([entry]) => {
    if (entry.intersectionRatio >= 0.5) {
        ScratchSection.classList.add('inViewPort');
        // setTimeout(AfterFadeSvg, 3000);

    } else if (!entry.isIntersecting) {
        ScratchSection.classList.remove('inViewPort');
        // ScratchSection.querySelector('svg').classList.remove('inViewPort');


    } else {
        ScratchSection.classList.remove('inViewPort');

    }

    // function AfterFadeSvg() {
    // ScratchSection.querySelector('svg').classList.add('inViewPort');
    // }
}, { threshold: 0.5 });
Scratch.observe(ScratchSection);


// Video Intersection Play / Pause
let video = document.getElementById('video');
let videoSection = document.getElementById('video-section');
let isPaused = false;
let VideoObserver = new IntersectionObserver(([entry]) => {
    if (entry.intersectionRatio >= 0.5) {
        // if (entry.isIntersecting) {
        videoSection.classList.add('inViewPort');
        isPaused = false;
        ToggleVideo(video);

    } else {
        videoSection.classList.remove('inViewPort');
        isPaused = true;
        ToggleVideo(video);
    }
}, { threshold: 0.5 });

function ToggleVideo(VIDEO) {
    if (isPaused) {
        VIDEO.pause();
        isPaused = false;
    } else {
        VIDEO.play();
        isPaused = true;
    }
}
VideoObserver.observe(videoSection);