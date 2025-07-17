let ImgBox = document.querySelector('.img-box');
let imgWrap = document.querySelector('.img-wrap');
let originalImg = document.getElementById('originalImg');
let line = document.getElementById('line');

originalImg.style.width = ImgBox.offsetWidth + 'px';

ImgBox.onmousemove = function (e) {
  let leftSpace = ImgBox.getBoundingClientRect().left;

  let boxWidth = e.clientX - leftSpace + 'px';

  imgWrap.style.width = boxWidth;
  line.style.left = boxWidth;
};
