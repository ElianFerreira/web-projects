'use strict';

const display = document.getElementById('result');
const numeros = document.querySelectorAll('[id*=tecla]');
const operadores = document.querySelectorAll('[id*=op]');

let novoNumero = true;
let operador;
let numeroAnterior;

const opPendente = () => operador !== undefined;

const calcular = () => {
  if (opPendente()) {
    const numeroAtual = parseFloat(display.textContent.replace(',', '.'));
    novoNumero = true;
    const resultado = eval(`${numeroAnterior} ${operador} ${numeroAtual}`);
    atualizarDisplay(resultado);
  }
};

const atualizarDisplay = (texto) => {
  if (novoNumero) {
    display.textContent = texto.toLocaleString('BR');
    novoNumero = false;
  } else {
    display.textContent += texto.toLocaleString('BR');
  }
};

const inserirNumero = (evento) => {
  atualizarDisplay(evento.target.textContent);
};

numeros.forEach((numero) => {
  numero.addEventListener('click', inserirNumero);
});

const selectOperador = (evento) => {
  if (!novoNumero) {
    calcular();
    novoNumero = true;
    operador = evento.target.textContent;
    numeroAnterior = parseFloat(display.textContent.replace(',', '.'));
  }
};

operadores.forEach((operador) => {
  operador.addEventListener('click', selectOperador);
});

const ativarIgual = () => {
  calcular();
  operador = undefined;
};

document.getElementById('equals').addEventListener('click', ativarIgual);

const limparDisplay = () => {
  display.textContent = '';
};

document
  .getElementById('clearDisplay')
  .addEventListener('click', limparDisplay);

const limparCalc = () => {
  limparDisplay();
  operador = undefined;
  novoNumero = true;
  numeroAnterior = undefined;
};
document.getElementById('clearCalc').addEventListener('click', limparCalc);

const clear = () => {
  display.textContent = display.textContent.slice(0, -1);
};

document.getElementById('backspace').addEventListener('click', clear);

const inverterSinal = () => {
  novoNumero = true;
  atualizarDisplay(display.textContent * -1);
};

document.getElementById('inverter').addEventListener('click', inverterSinal);

const existeDecimal = () => {
  display.textContent.indexOf(',') !== -1;
};
const existeValor = () => display.textContent.length > 0;

const inserirDecimal = () => {
  if (!existeDecimal()) {
    if (existeValor()) {
      atualizarDisplay(',');
    } else {
      atualizarDisplay('0,');
    }
  }
};
document.getElementById('decimal').addEventListener('click', inserirDecimal);

const dobro = () => {
  atualizarDisplay(display.textContent * display.textContent);
};

document.getElementById('opMulti').addEventListener('click', dobro);

