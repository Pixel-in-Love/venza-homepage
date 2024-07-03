const logoPaths = document.querySelectorAll("#venza-logo > path");
const subtitle = document.getElementById('subtitle');

const typewriter = new Typewriter(subtitle, { loop: false });

let delay = 0.1;
let acc = 0.5;
const pathDuration = 1.5;
const fillDuration = 0.5;

let xVal = 0;
let yVal = 0;
let main = document.querySelector("body");
let width = main.clientWidth;
let heigth = main.clientHeight;

const pathCss = (path, index, selector, offset = 0) => {
  const length = path.getTotalLength();
  const pathStyles = `
    ${selector}:nth-child(${index +  1}) {
      stroke-dasharray: ${length};
      stroke-dashoffset: ${length};
      animation: line ${pathDuration + offset}s ease forwards ${acc}s;
    }
  `;
  acc += delay;
  return pathStyles;
};

let logoPathsCSS = "";
logoPaths.forEach((path, idx) => {
  logoPathsCSS += pathCss(path, idx, "#venza-logo > path", 2);
});
const style = `
  <style type="text/css">
    ${logoPathsCSS}
    #venza-logo {
      animation: fill-blue ${fillDuration}s ease forwards ${acc + pathDuration - fillDuration + 2}s;
    }
  </style>`;

document.write(style);

setTimeout(function(){
  subtitle.style.visibility = "initial";
  typewriter.typeString('by VASALTO').callFunction(function(state) {
    state.elements.cursor.style.visibility = 'hidden';
  }).start();
},4500)

window.addEventListener("mousemove", (e) => {
  xVal = (e.clientX + document.documentElement.scrollLeft) / width;
  yVal = e.clientY / heigth;
  main.style.setProperty("--mouse-x", xVal);
  main.style.setProperty("--mouse-y", yVal);
});
