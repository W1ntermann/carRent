document.getElementById('main-action').onclick = function () {
    document.getElementById('cars').scrollIntoView({behavior: "smooth"})
}

const buttons = document.getElementsByClassName('car-button')
for (let i in buttons){
    buttons[i].onclick = function () {
        document.getElementById('price').scrollIntoView({behavior: "smooth"})
    }
}
document.getElementById('price-action').onclick = function () {
    if (document.getElementById('name').value === '') {
        alert('Please fill field Name')
    } else if (document.getElementById('phone').value === '') {
        alert('Please fill field Phone')
    } else if (document.getElementById('car').value === '') {
        alert('Please fill field Car')
    } else {
        alert('We are call you later, thank you for choose our site')
    }
}

document.addEventListener("DOMContentLoaded", function () {
    let layer = document.querySelector('.price-image');
    document.addEventListener('mousemove', (event) => {
        layer.style.transform = 'translate3d(' + ((event.clientX * 0.3) / 6) + 'px,' + ((event.clientY * 0.3) / 6) + 'px,0px)';
    });

    const elem = document.querySelector(".main");
    document.addEventListener('scroll', () => {
        elem.style.backgroundPositionX = '0' + (window.scrollY * 0.3) + 'px';
    })
});