
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





