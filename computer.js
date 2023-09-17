document.addEventListener('DOMContentLoaded', () => {
    const preloader = document.querySelector('.preloader');

    preloader.style.display = 'flex';
    setTimeout(() => {
        preloader.style.display = 'none';
    }, 2000);
});

let currentPlayer = 'X';
let cells = document.querySelectorAll('.cell');
let message = document.getElementById('message');
let gameOver = false;
const defaultCellBackgroundColor = "rgba( 255, 255, 255, 0.5 )"; 

function makeMove(cell) {
    if (!gameOver && cell.innerHTML === '') {
        cell.innerHTML = currentPlayer;
        checkWinner();
        togglePlayer();
        if (currentPlayer === 'O' && !gameOver) {
            setTimeout(computerMove, 500);
        }
    }
}

function togglePlayer() {
    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
}

function checkWinner() {
    const winningCombos = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8],
        [0, 3, 6], [1, 4, 7], [2, 5, 8],
        [0, 4, 8], [2, 4, 6]
    ];

    for (const combo of winningCombos) {
        const [a, b, c] = combo;
        if (cells[a].innerHTML && cells[a].innerHTML === cells[b].innerHTML && cells[a].innerHTML === cells[c].innerHTML) {
            cells[a].style.backgroundColor = "#FFC8C8";
            cells[b].style.backgroundColor = "#FFC8C8";
            cells[c].style.backgroundColor = "#FFC8C8";
            message.innerHTML = `${currentPlayer} wins!`;
            gameOver = true;
            return;
        }
    }

    if ([...cells].every(cell => cell.innerHTML)) {
        message.innerHTML = "It's a draw!";
        gameOver = true;
    }
}

function computerMove() {
    if (!gameOver) {
        let emptyCells = [...cells].filter(cell => cell.innerHTML === '');
        if (emptyCells.length > 0) {
            let randomIndex = Math.floor(Math.random() * emptyCells.length);
            makeMove(emptyCells[randomIndex]);
        }
    }
}

function resetBoard() {
    cells.forEach(cell => {cell.innerHTML = '';
    cell.style.backgroundColor = defaultCellBackgroundColor; 
});
    message.innerHTML = '';
    currentPlayer = 'X';
    gameOver = false;
}
document.getElementById("back").addEventListener("click", back);
function back() {
  window.location.href="index.html";
}