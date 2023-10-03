const game = {
    X: [],
    O: [],
};

const winningCombinations = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6],
    [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]
];

const cells = document.querySelectorAll('.cell');
const info = document.querySelector('.info');
let currentPlayer = 'X';

function checkResult(letter) {
    for (const winCombi of winningCombinations) {
        if (winCombi.every(cellIndex => game[letter].includes(cellIndex))) {
            console.log('Wouah');
            info.innerHTML = `Le joueur ${letter.toUpperCase()} a gagné<br>Appuyez sur F5 pour recommencer.`;
            cells.forEach(cell => cell.removeEventListener('click', handleClick));
        }
    }
}

cells.forEach(cell => cell.addEventListener('click', handleClick));

function handleClick(e) {
    if (e.target.innerText === '') {
        e.target.innerText = currentPlayer;
        const indexOfCell = Number(e.target.dataset.index);

        game[currentPlayer].push(indexOfCell);
        info.textContent = `Au tour de ${currentPlayer === 'X' ? 'O' : 'X'}`;
        checkResult(currentPlayer);

        currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    }
}
