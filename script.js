const heart = document.querySelector("#pil-heart");
const heartPaths = document.querySelectorAll("#pil-heart > path");
const separator = document.querySelector("#pil-separator");
const separatorPaths = document.querySelectorAll("#pil-separator > path");
const text = document.querySelector("#pil-text");
const textPaths = document.querySelectorAll("#pil-text > path");

let delay = 0.1;
let acc = 0.5;
const pathDuration = 1.5;
const fillDuration = 0.5

const pathStyles = (path, offset = 0) => {
  const length = path.getTotalLength();
  path.style.strokeDasharray = length;
  path.style.strokeDashoffset = length;
  path.style.animation = `line ${pathDuration + offset}s ease forwards ${acc}s`;
  acc += delay;
}

for (path of heartPaths) {
  pathStyles(path, 4);
}

for (path of separatorPaths) {
  pathStyles(path);
}

for (path of textPaths) {
  pathStyles(path);
}

heart.style.animation = `fill-red ${fillDuration}s ease forwards ${acc + 1}s`;

separator.style.animation = `fill-blue ${fillDuration}s ease forwards ${
  acc + 1
}s`;

text.style.animation = `fill-blue ${fillDuration}s ease forwards ${
  acc + pathDuration - fillDuration
}s`;