
window.addEventListener('scroll', () => {
    let image = document.getElementById('img');

    let nav = document.querySelector('.nav');

    let lien = document.getElementsByClassName('lien1');

    const logo = document.querySelector(".logo");



    if (window.matchMedia("(min-width: 600px)").matches) {

        const { scrollTop, scrollHeight, clientHeight } = document.documentElement;

        if (scrollTop > 240) {
            image.classList.add('scrollimage')

            nav.classList.add('scrollbar')

            logo.style.color = "black";

            for (let i = 0; i <= lien.length; i++) {
                lien[i].style.color = "var(--logo)";
                lien[i].style.fontSize = "3vh";
            }

        }

        else {
            image.classList.remove('scrollimage');
            nav.classList.remove('scrollbar');
            logo.style.color = "white";

            for (let i = 0; i <= lien.length; i++) {
                lien[i].style.color = "white";
                lien[i].style.fontSize = "4vh";
            }

        }
    }


})

window.addEventListener("DOMContentLoaded", (event) => {

 
    
    if (window.matchMedia("(min-width:2500px)").matches) {
        anime.timeline({ loop: true })
            .add({
                targets: '.ml5 .line',
                opacity: [0.5, 1],
                scaleX: [0, 1],
                easing: "easeInOutExpo",
                duration: 700
            }).add({
                targets: '.ml5 .line',
                duration: 600,
                easing: "easeOutExpo",
                translateY: (el, i) => (-0.625 + 0.625 * 2 * i) + "em"
            }).add({
                targets: '.ml5 .ampersand',
                opacity: [0, 1],
                scaleY: [0.5, 1],
                easing: "easeOutExpo",
                duration: 600,
                offset: '-=600'
            }).add({
                targets: '.ml5 .letters-left',
                opacity: [0, 1],
                translateX: ["0.5em", 0],
                easing: "easeOutExpo",
                duration: 600,
                offset: '-=300'
            }).add({
                targets: '.ml5 .letters-right',
                opacity: [0, 1],
                translateX: ["-0.5em", 0],
                easing: "easeOutExpo",
                duration: 600,
                offset: '-=600'
            }).add({
                targets: '.ml5',
                opacity: 0,
                duration: 1000,
                easing: "easeOutExpo",
                delay: 1000
            });
    }
})








