const header = document.querySelector('.header');
const content_expanded = document.querySelector('.content_expanded');
const content_collapsed = document.querySelector('.content_collapsed');

// Event on viewPort
window.addEventListener('scroll', e => {

        const scrolled = window.pageYOffset;
        const header_height = header.offsetHeight;
        const percentage = Math.floor(scrolled / header_height * 100);

        // BG go to Dark
        const bg_opacity = 0.85 + percentage / 100;
        header.style.background = `linear-gradient(rgba(24, 24, 24, ${bg_opacity}), rgba(24, 24, 24, 1)`;


        // Content Slide Up or Down
        if (percentage > 70) {
                content_expanded.style.bottom = 50 + 'px';
                content_collapsed.style.bottom = 5 + 'px';
                header.style.position = 'sticky';
                header.style.top = '-155px';
        }
        else {
                content_expanded.style.bottom = 5 + 'px';
                content_collapsed.style.bottom = -50 + 'px';
                header.style.position = 'relative';
                header.style.top = 0;
                header.style.borderBottom = 'none';
        }
});



/* pageYOffset renvoie le nombre de px au defilement */
/* offsetHeight renvoie la hauteur d'un élément */
/* Math.floor() renvoie le plus grand entier qui est inférieur ou égal à un nombre */