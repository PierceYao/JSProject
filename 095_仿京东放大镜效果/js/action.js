window.addEventListener('load', function () {
    var previewImg = document.querySelector('.preview_img');
    var mask = document.querySelector('.mask');
    var bigPic = document.querySelector('.bigPic');
    previewImg.addEventListener('mouseover', function (evt) {
        mask.style.display = 'block';
        bigPic.style.display = 'block';
    });
    previewImg.addEventListener('mouseout', function () {
        mask.style.display = 'none';
        bigPic.style.display = 'none';
    });
    previewImg.addEventListener('mousemove', function (evt) {
        var x = evt.pageX - previewImg.offsetLeft;
        var y = evt.pageY - previewImg.offsetTop;
        var maskX = x - mask.offsetWidth / 2;
        var maskY = y - mask.offsetHeight / 2;
        maskX = maskX <= 0 ? 0 : maskX;
        maskX = maskX >= previewImg.offsetWidth - mask.offsetWidth ? previewImg.offsetWidth - mask.offsetWidth : maskX;
        maskY = maskY <= 0 ? 0 : maskY;
        maskY = maskY >= previewImg.offsetWidth - mask.offsetWidth ? previewImg.offsetWidth - mask.offsetWidth : maskY;
        mask.style.left = maskX + 'px';
        mask.style.top = maskY + 'px';

        var maxPic = document.querySelector('.maxPic');
        var bigMaxX = maxPic.offsetWidth - bigPic.offsetWidth;
        var bigX = bigMaxX * maskX / (previewImg.offsetWidth - mask.offsetWidth);
        var bigMaxY = maxPic.offsetHeight - bigPic.offsetHeight;
        var bigY = bigMaxY * maskY / (previewImg.offsetHeight - mask.offsetHeight);
        maxPic.style.left = -bigX + 'px';
        maxPic.style.top = -bigY + 'px';
    });
})