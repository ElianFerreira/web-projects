document.addEventListener('DOMContentLoaded', () => {
  let squares = document.querySelectorAll('.square');

  squares.forEach((square) => {
    square.addEventListener('click', handClick);
  });
});

function handClick(event) {
  console.log(event.target);

  let square = event.target;
  let position = square.id;
  let placar1 = document.getElementById('iconLeao');
  let placar2 = document.getElementById('iconRino');

  if (gameMove(position)) {
    setTimeout(() => {
      /* playerTime = playerTime == 0 ? jogador1 : jogador2; */
      if (playerTime == 0) {
        playerTime = jogador1;
        pontosL++;
        placar1.innerHTML = `🦁 ${pontosL}`;
      } else {
        playerTime = jogador2;
        pontosR++;
        placar2.innerHTML = `🦏 ${pontosR}`;
      }
      alert('Jogo acabou - O vencedor foi ' + playerTime);
    }, 20);
  }
  updateSquare(position);
}

function updateSquare(position) {
  let square = document.getElementById(position.toString());
  let symbol = board[position];
  square.innerHTML = `<div class='${symbol}'></div>`;
}
function updateSquares() {
  let squares = document.querySelectorAll('.square');
  squares.forEach((square) => {
    let position = square.id;
    let symbol = board[position];

    if (symbol != '') {
      square.innerHTML = '';
    } else if (square.firstChild != undefined) {
      square.removeChild(square.firstChild);
    }
  });
}

function resetGame() {
  board = ['', '', '', '', '', '', '', '', ''];
  playerTime = 0;
  gameOver = false;
  updateSquares();
}
