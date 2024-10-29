onload = () => {
    document.body.classList.remove("container");
};

function createFallingStar() {
    const star = document.createElement('div');
    star.classList.add('falling-star');
    star.style.left = Math.random() * window.innerWidth + 'px';
    star.style.animationDuration = Math.random() * 2 + 3 + 's';

    document.body.appendChild(star);

    star.addEventListener('animationend', () => {
        star.remove();
    });
}

setInterval(createFallingStar, 300);
