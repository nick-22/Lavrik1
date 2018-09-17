var btn_prev = document.querySelector('.prev');
var btn_next = document.querySelector('.next');

var images = document.querySelectorAll('.photos img');
var i = 0;


btn_prev.onclick = function () {
    // images[i].style.display = 'none';
    images[i].className = '';
    i--;

    if(i < 0) {
        i = images.length - 1;
    }

    // images[i].style.display = 'block';
    images[i].className = 'active';

}

btn_next.onclick = function () {
    // images[i].style.display = 'none';
    images[i].className = '';
    i++;

    if(i >= images.length) {
        i = 0;
    }

    // images[i].style.display = 'block';
    images[i].className = 'active';

}
