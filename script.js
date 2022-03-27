const logoPaths = document.querySelectorAll("#valanza-logo > path");

let delay = 0.1;
let acc = 0.5;
const pathDuration = 1.5;
const fillDuration = 0.5;

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
  console.log(acc);
  return pathStyles;
};

let logoPathsCSS = "";
logoPaths.forEach((path, idx) => {
  logoPathsCSS += pathCss(path, idx, "#valanza-logo > path", 2);
});
console.log(acc);
const style = `
  <style type="text/css">
    ${logoPathsCSS}
    #valanza-logo {
      animation: fill-blue ${fillDuration}s ease forwards ${acc + pathDuration - fillDuration + 2}s;
    }
  </style>`;

document.write(style);
