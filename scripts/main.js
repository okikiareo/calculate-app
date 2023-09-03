const inputs = document.querySelector('[data-inputs]');
const output = document.querySelector('[data-output]');

const aclear = document.querySelector('[data-aclear]');
const erases = document.querySelector('[data-delete]');
const equals = document.querySelector('[data-equals]');

let operands = [],
    operator = '',
    keys = '',
    result = '',
    index = 0;

setInnerText({ el: inputs, text: '0' });
setInnerText({ el: aclear, text: 'C' });

function setInnerText(e) {
  let { el, text } = e;
  el.innerText += text;
}
