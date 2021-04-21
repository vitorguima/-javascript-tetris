const getPaintBoard = document.querySelector('#pixel-board');
const getHeightDiv = document.querySelectorAll('.tr');



function generateHeightDivs(number) {

	for (let index = 0; index < number; index += 1) {
		const heightDiv = document.createElement('div');
		heightDiv.className = 'tr';
		getPaintBoard.appendChild(heightDiv);
	}
}

// quantidade de divs.pixel existentes dentro de um div.tr
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

// busca array a partir da quantidade de pixels

generateHeightDivs(20);
generateWidthDivs(10);
addWhiteToBoard();

let pixelArray = Array.from(document.querySelectorAll('.pixel'));
console.log(pixelArray);

for (let index = 0; index < pixelArray.length; index += 10) {
	if (pixelArray[index].backgroundColor === 'rgb(255, 255, 255)') {
		pixelArray[index].backgroundColor = 'black';
	}
}