/* 
  Carne - 400 gramas por pessoa + de 6 horas = 650 por pessoa.
  Cerveja - 1200ml por pessoa + de 6 horas = 2000ml por pessoa.
  Refrigerante/agua - 1000ml por pessoa + 6horas = 1500ml por pessoa.
*/

let inputAdultos = document.getElementById('adultos');
let inputCriancas = document.getElementById('criancas');
let inputDuracao = document.getElementById('duracao');
let resultado = document.getElementById('resultado');

function calcular() {
  /// Pegando a quantidade de adultos,crianças e a duração digitados no input.
  let qtdAdultos = inputAdultos.value;
  let qtdCriancas = inputCriancas.value;
  let qtdDuracao = inputDuracao.value;

  /// Calculo do total de carne por pessoa
  let qtdTotalCarne =
    carnePorPessoa(qtdDuracao) * qtdAdultos +
    (carnePorPessoa(qtdDuracao) / 2) * qtdCriancas;

  /// Calculo do total de cerveja por pessoa
  let qtdTotalCerveja = cervejaPorPessoa(qtdDuracao) * qtdAdultos;

  /// Calculo do total de bebidas/agua por pessoa
  let qtdTotalBebidas =
    bebidaPorPessoa(qtdDuracao) * qtdAdultos +
    (bebidaPorPessoa(qtdDuracao) / 2) * qtdCriancas;

  resultado.innerHTML = `<p>🥩 ${qtdTotalCarne / 1000}Kg de Carne</p>`;
  resultado.innerHTML += `<p>🍺 ${Math.ceil(
    qtdTotalCerveja / 355
  )} Latas de Cerveja</p>`;
  resultado.innerHTML += `<p>🥤 ${Math.ceil(
    qtdTotalBebidas / 2000
  )} Garrafas de Bebidas</p>`;
}

function carnePorPessoa(duracao) {
  if (duracao >= 6) {
    return 650;
  } else {
    return 400;
  }
}
function cervejaPorPessoa(duracao) {
  if (duracao >= 6) {
    return 2000;
  } else {
    return 1200;
  }
}
function bebidaPorPessoa(duracao) {
  if (duracao >= 6) {
    return 1500;
  } else {
    return 1000;
  }
}
