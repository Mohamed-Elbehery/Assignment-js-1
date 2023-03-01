const circle = document.querySelector('.circle');
const h1 = document.querySelector('h1');

let counterX = 0;
let counterY = 0;

document.body.addEventListener('keydown', (e) => {
  if(e.code == "ArrowRight") {
    ++counterX;
    circle.style.left = `${counterX * 30}px`;
    h1.style.display = 'none';
  } else if(e.code == "ArrowLeft") {
    --counterX;
    circle.style.left = `${counterX * 30}px`;
    h1.style.display = 'none';
  } else if (e.code == "ArrowUp") {
    --counterY;
    circle.style.top = `${counterY * 30}px`;
    h1.style.display = 'none';
  } else if (e.code == "ArrowDown") {
    ++counterY;
    circle.style.top = `${counterY * 30}px`;
    h1.style.display = 'none';
  } else h1.style.display = "block";
});