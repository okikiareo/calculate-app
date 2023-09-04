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
    
  revealButton(e) {
    if (index == 1) {
      inputs.innerText = operands[0].toString() + operator + e;
    } else {
      inputs.innerText = e;
    }
  }
  
  returnResult(e) {
    let [a, b] = operands.map(operand => parseFloat(operand));
    
    switch (operator) {
      case '+':
        result = a + b;
        break;
      case '-':
        result = a - b;
        break;
      case '*':
        result = a * b;
        break;
      case '/':
        result = a / b;
        break;
    }
  }
  
  equateOutput(e) {
    if (operands.length != 2) return;
    app.returnResult();
    app.cachesResult();
    inputs.className = 'main-app-motion';
    
    if (result == Infinity) {
      output.className = 'main-app-error';
      output.innerText = 'Can\'t divide by 0';
    } else if (operands.includes('NaN')) {
      output.className = 'main-app-error';
      output.innerText = 'Error';
    } else {
      if (output.classList.contains('main-app-error')) output.classList.remove('main-app-error');
      output.innerText = result;
    }
  }
  
  cachesResult(e) {
    operands = [result.toString()];
    keys = result.toString();
    index = 0;
    operator = '';
  }
  
  deleteOutput(e) {
    if (result != '') {
      result = '';
      keys = '';
      operands = [];
    }
    
    if (keys == '' && index == 1) {
      index = 0;
      keys = operands[0];
      operands = [keys];
    }
    
    if (keys != '' && index == 0) {
      if (operator != '') {
        operator = '';
        inputs.innerText = keys;
      } else {
        let len = keys.length - 1;
        keys = keys.substr(0, len);
        operands[index] = keys;
        app.revealButton(keys);
      }
    }
   
  