const getPaintBoard = document.getElementById('pixel-board');
const getHeightDiv = document.getElementsByClassName('tr');
const tetrisBoard = document.getElementsByClassName('pixel');
const startButton = document.querySelector('#start-game');
const width = 10;

function start() {
	generateHeightDivs(20);
	generateWidthDivs(10);
	addWhiteToBoard();
}

window.onload = start();

const tetrisBoardArray = Array.from(tetrisBoard);

// peaces of the game
const lPeace = [
	[1, width + 1, width * 2 + 1, width * 2],
	[width, width * 2, width * 2 + 1, width * 2 + 2],
	[width, width + 1, width + 2, width * 2 + 2],
	[1, 2, width + 1, width * 2 + 1]
];
const zPeace = [
	[width + 1, width + 2, width * 2, width * 2 + 1],
	[0, width, width + 1, width * 2 + 1],
	[width + 1, width + 2, width * 2, width * 2 + 1],
	[0, width, width + 1, width * 2 + 1]
];
const tPeace = [
	[1, width, width + 1, width + 2],
	[1, width + 1, width + 2, width * 2 + 1],
	[width, width + 1, width + 2, width * 2 + 1],
	[1, width, width + 1, width * 2 + 1]
];
const oPeace = [
	[width, width + 1, width * 2, width * 2 + 1],
	[width, width + 1, width * 2, width * 2 + 1],
	[width, width + 1, width * 2, width * 2 + 1],
	[width, width + 1, width * 2, width * 2 + 1]
]
const iPeace = [
	[0, width, width * 2, width * 3],
	[width * 3, width * 3 + 1, width * 3 + 2, width * 3 + 3],
	[0, width, width * 2, width * 3],
	[width * 3, width * 3 + 1, width * 3 + 2, width * 3 + 3]
];
const peacesArray = [lPeace, zPeace, tPeace, oPeace, iPeace];

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

// add white background to table
function addWhiteToBoard() {
	for (let index = 0; index < tetrisBoard.length; index += 1) {
		tetrisBoard[index].style.backgroundColor = 'rgb(255, 255, 255)';
	}
}

// paint peaces shape
function paintPeaces() {
	for (let index = 0; index < tetrisBoardArray; index += 1) {
		tetrisBoardArray[peacesArray[0][0].className = 'paint-peace'];
	}
	console.log(tetrisBoardArray);
	console.log(peacesArray[0][0]);
} 

paintPeaces();


