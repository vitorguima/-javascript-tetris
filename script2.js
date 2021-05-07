const getPaintBoard = document.getElementById('pixel-board');
const getHeightDiv = document.getElementsByClassName('tr');
const tetrisPixel = document.getElementsByClassName('pixel');
const startButton = document.querySelector('#start-game');
const width = 10;


function start() {
	generateHeightDivs(20);
	generateWidthDivs(10);
}

window.onload = start();

// pieces of the game
const lPiece = [
	[1, width + 1, width * 2, width * 2 + 1],
	[0, width, width + 1, width + 2],
	[0, 1, 2, width + 2],
	[1, 2, width + 1, width * 2 + 1]
];
const zPiece = [
	[1, 2, width, width + 1], 
	[0, width, width + 1, width * 2 + 1],
	[1, 2, width, width + 1],
	[0, width, width + 1, width * 2 + 1]
];
const tPeace = [
	[1, width, width + 1, width + 2],
	[1, width + 1, width + 2, width * 2 + 1],
	[0, 1, 2, width + 1],
	[1, width, width + 1, width * 2 + 1]
];
const oPiece = [
	[0, 1, width, width + 1],
	[0, 1, width, width + 1],
	[0, 1, width, width + 1],
	[0, 1, width, width + 1]
]
const iPiece = [
	[0, width, width * 2, width * 3],
	[0, 1, 2, 3],
	[0, width, width * 2, width * 3],
	[0, 1, 2, 3]
];
const piecesArray = [lPiece, zPiece, tPeace, oPiece, iPiece];

// generate pixel table
function generateHeightDivs(number) {

	for (let index = 0; index < number; index += 1) {
		const heightDiv = document.createElement('div');
		heightDiv.className = 'tr';
		getPaintBoard.appendChild(heightDiv);
	}
}

function generateWidthDivs(number) {

	for (let index = 0; index < getHeightDiv.length; index += 1) {
		for (let index2 = 0; index2 < number; index2 += 1) {
			const widthDiv = document.createElement('div');
			widthDiv.className = 'pixel';
			getHeightDiv[index].appendChild(widthDiv);
		}
	}
}

// where the tetris piece start
let currentPosition = 4;

// randomize piece and its position
let currentPiece = piecesArray[Math.floor(Math.random() * piecesArray.length)][Math.floor(Math.random() * 4)];

const tetrisPixelArray = Array.from(tetrisPixel);

// draw tetrisPiece
const draw = () => {
	currentPiece.forEach((index) => {
		tetrisPixelArray[index + currentPosition].classList.add('paint-piece');
	})
};

draw()

// undraw tetrisPiece
const undraw = () => {
	currentPiece.forEach((index) => {
		tetrisPixelArray[index + currentPosition].classList.remove('paint-piece');
	})
}

// move the tetrisPiece down
const moveDown = () => {
	undraw();
	currentPosition += width;
	draw();
}

timerMoveDown = setInterval(moveDown, 1000);


