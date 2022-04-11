"use strict";

function BinarioADecimal(num) {
  // tu codigo aca
  let numDecimal = 0;
  const longitudDeNum = num.length;

  for (let i = 0; i < longitudDeNum; i++) {
    let posicion = longitudDeNum - 1 - i;
    let basePotencia = 2 ** i;
    numDecimal += num[posicion] * basePotencia;
  }
  return numDecimal;
}

function DecimalABinario(num) {
  // tu codigo aca
  let arrayBin = [];
  while (num > 0) {
    arrayBin.push(num % 2);
    num = Math.floor(num / 2);
  }
  return arrayBin.reverse().join("");
}

module.exports = {
  BinarioADecimal,
  DecimalABinario,
};
