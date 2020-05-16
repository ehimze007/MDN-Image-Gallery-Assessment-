const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Looping through images */
let i = 0;
do {
  i++;
  let xxx = 'images/pic' + i + '.jpg';
  const newImage = document.createElement('img');
  newImage.setAttribute('src', xxx);
  thumbBar.appendChild(newImage);
  // newImage.onclick = function(e) {
  //   displayedImage.src = e.target.src;
  // };
  newImage.onclick = function(){displayedImage.setAttribute('src',xxx);}
} while (i < 5);

 /* Wiring up the Darken/Lighten button */
btn.onclick = function() {
  if (btn.getAttribute('class') == 'dark') {
    btn.setAttribute('class', 'light');
    btn.textContent = 'Lighten';
    overlay.style.backgroundColor = 'rgba(0,0,0,0.5)';
  } else {
    btn.setAttribute('class', 'dark');
    btn.textContent = 'Darken';
    overlay.style.backgroundColor = 'rgba(0,0,0,0)';
  }
};
