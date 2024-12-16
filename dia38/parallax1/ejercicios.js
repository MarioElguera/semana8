window.addEventListener('scroll', function () {
    let parallax1 = document.querySelector('.parallax1');
    let parallax2 = document.querySelector('.parallax2');

    let offset1 = window.pageYOffset * 0.5;
    let offset2 = window.pageYOffset * 0.3;

    parallax1.style.backgroundPosition = 'center ' + offset1 + 'px';
    parallax2.style.backgroundPosition = 'center ' + offset2 + 'px';
});
