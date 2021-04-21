const getPaintBoard = document.querySelector('#pixel-board');
const getHeightDiv = document.querySelectorAll('.tr');
const paintBoardPixel = document.querySelectorAll('.pixel');
const startButton = document.querySelector('#start-game');
const width = 10;

generateHeightDivs(20);
generateWidthDivs(10);
addWhiteToBoard();

// gera pixel table
function generateHeightDivs(number) {

	for (let index = 0; index < number; index += 1) {
		const heightDiv = document.createElement('div');
		heightDiv.className = 'tr';
		getPaintBoard.appendChild(heightDiv);
	}
}

function generateWidthDivs(number) {
	const getHeightDiv = document.querySelectorAll('.tr');

	for (let index = 0; index < getHeightDiv.length; index += 1) {
		for (let index2 = 0; index2 < number; index2 += 1) {
			const widthDiv = document.createElement('div');
			widthDiv.className = 'pixel';
			getHeightDiv[index].appendChild(widthDiv);
		}
	}
}

// adiciona fundo branco para pixel da paintBoard
function addWhiteToBoard() {
	const paintBoardPixel = document.querySelectorAll('.pixel');
	for (let index = 0; index < paintBoardPixel.length; index += 1) {
		paintBoardPixel[index].style.backgroundColor = 'rgb(255, 255, 255)';
	}
}

// formato peças tetris
const lPeace = [[1, width+1, width*2+1, width*2], [width, width*2, width*2+1, width*2+2], [width,width+1, width+2, width*2+2], [1, 2, width+1, width*2+1]];

const zPeace = [[width+1, width+2, width*2, width*2+1], [0, width, width+1, width*2+1], [width+1, width+2, width*2, width*2+1], [0, width, width+1, width*2+1]];

const tPeace = [[1, width, width+1, width+2], [1, width+1, width+2, width*2+1], [width, width+1, width+2, width*2+1], [1, width, width+1, width*2+1]];

const oPeace = [[width, width+1, width*2, width*2+1]]

const iPeace = [[0, width, width*2, width*3], [width*3, widht*3+1, width*3+2, width*3+3]];

