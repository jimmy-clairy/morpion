const currentGame = ["", "", "", "", "", "", "", "", ""];


const winningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]

let letter = 'x'
const cells = document.querySelectorAll('.cell')
console.log(cells);
cells.forEach(cell => cell.addEventListener('click', handleClick))
function handleClick(e) {
    console.log(e.target);
    if (e.target.innerText === '') {
        e.target.innerText = letter
        // const indexOfCell = e.target.dataset.index
        if (letter === 'x') {
            letter = 'o'
        } else {
            letter = 'x'
        }
    }
}