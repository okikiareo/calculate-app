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

class App {
    appendNumber(e) {
      let key = e.innerText;
      
      if (result != '') {
        result = '';
        operands = [];
        keys = '';
      }
      
      if (key != '0') {
        if (keys == '0') keys = '';
      }
      
      if (key == '.') {
        if (keys.includes('.')) return;
        if (keys == '') keys = '0';
        if (keys == '-') keys = keys + '0';
      }
      
      if (key == '0') {
        if (keys == '0') return;
      }
      
      keys = keys + key;
      operands[index] = keys;
      app.revealButton(keys);
    }
    
    appendSymbol(e) {
      let key = e.innerText;
      
      if (operands.length == 2) {
        app.returnResult();
        app.cachesResult();
      }
      
      if (keys == '' && index == 0) {
        if (key != '-') return;
        keys = keys + key;
        app.revealButton(keys);
      }
      
      if (keys == '' && index == 1) {
        if (key == '-' && operator == '*' || key == '-' && operator == '/') {
          keys = keys + key;
          app.revealButton(keys);
        } else {
          operator = '';
          index = 0;
          keys = operands[index];
        }
      }
      
      if (operands[0] != undefined) {
        if (index != 0) return;
        if (result != '') result = '';
        keys = keys + key;
        app.revealButton(keys);
        operator = key;
        index = 1;
        keys = '';
      }
    }
    
  