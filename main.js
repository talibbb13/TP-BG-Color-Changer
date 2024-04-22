var index = 0;

function colorChange() {

  const colors = ["#FF4545", "#FFBE45", "#51FF45", "#45FFF3", "#454EFF", "#8A45FF"];

  document.getElementsByTagName("body")[0].style.background = colors[index];
  index++;
  if (index > colors.length - 1) {
    index = 0;
  }
}