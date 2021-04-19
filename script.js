const heartPaths = document.querySelectorAll("#pil-heart > path");
const heartStyles = ``;
const separatorPaths = document.querySelectorAll("#pil-separator > path");
const textPaths = document.querySelectorAll("#pil-text > path");

let delay = 0.1;
let acc = 0.5;
const pathDuration = 1.5;
const fillDuration = 0.5;

const pathCss = (path, index, selector, offset = 0) => {
  const length = path.getTotalLength();
  const pathStyles = `
    ${selector}:nth-child(${index +    1}) {
      stroke-dasharray: ${length};
      stroke-dashoffset: ${length};
      animation: line ${pathDuration + offset}s ease forwards ${acc}s;
    }
  `;
  acc += delay;
  return pathStyles;
};

let heartPathsCss = "";
heartPaths.forEach((path, idx) => {
  heartPathsCss += pathCss(path, idx, "#pil-heart > path", 4);
});

let separatorPathsCss = "";
separatorPaths.forEach((path, idx) => {
  separatorPathsCss += pathCss(path, idx, "#pil-separator > path");
});

let textPathsCss = "";
textPaths.forEach((path, idx) => {
  textPathsCss += pathCss(path, idx, "#pil-text > path");
});

const style = `
  <style type="text/css">
    ${heartPathsCss}
    ${separatorPathsCss}
    ${textPathsCss}
    #pil-text {
      animation: fill-blue ${fillDuration}s ease forwards ${
  acc + pathDuration - fillDuration
}s;
    }
    #pil-separator {
      animation: fill-blue ${fillDuration}s ease forwards ${acc + 1}s;
    }
    #pil-heart {
      animation: fill-red ${fillDuration}s ease forwards ${acc + 1}s;
    }
  </style>`;

document.write(style);
