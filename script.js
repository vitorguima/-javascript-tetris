// adiciona fundo branco para pixel da paintBoard
function addWhiteToBoard() {
  const paintBoardPixel = document.querySelectorAll('.pixel');
  for (let index = 0; index < paintBoardPixel.length; index += 1) {
    paintBoardPixel[index].style.backgroundColor = 'rgb(255, 255, 255)';
  }
}

addWhiteToBoard();

// adiciona tag selected p/ cor preta ao iniciair a página
function addSelectedToBlack() {
  const countSelectClass = document.getElementsByClassName('selected');
  const getBlackColor = document.querySelector('.black');
  if (countSelectClass.length === 0) {
    getBlackColor.classList.add('selected');
    getBlackColor.style.backgroundColor = 'black';
  }
}

addSelectedToBlack();

// evento click para aplicar cor - ocorrer dentro de #pixel-board
function applySelectedColor() {
  const getPaintTable = document.querySelector('#pixel-board');

  getPaintTable.addEventListener('click', function (event) {
    const getSelectedColor = document.querySelector('.selected');
    const compStyles = window.getComputedStyle(getSelectedColor);
    event.target.style.backgroundColor = compStyles.getPropertyValue('background-color');
  });
}

applySelectedColor();

// remove a classe selected de um determinado elemento
function removeSelectedClass() {
  const countSelectClass = document.getElementsByClassName('selected');
  for (let index = 0; index < countSelectClass.length; index += 1) {
    countSelectClass[index].classList.remove('selected');
  }
}

// adiciona classe selected a um determinado elemento da paleta
function changeColorSelected() {
  const getColorsPallete = document.querySelector('#color-palette');
  getColorsPallete.addEventListener('click', function (event) {
    removeSelectedClass();
    event.target.classList.add('selected');
    applySelectedColor()
    getSelectedColor()
  })
}

changeColorSelected();

// limpa toda a boardpaint
function clearButton() {
  const getClearButton = document.getElementById('clear-board');
  getClearButton.addEventListener('click', addWhiteToBoard);
}

clearButton();

// gerar quantidade N de divs.tr (altura)
function generateHeightDivs(number) {
  const getPaintBoard = document.querySelector('#pixel-board');

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

// puxa informação do input e armazena em uma variável
function getInputData() {
  const inputData = document.getElementById('board-size');
  const pixelAmount = inputData.value;

  return pixelAmount;
}

// remove elementos div paintboard
function removeBoardPaint() {
  let getHeightDivs = document.querySelectorAll('.tr');
  for (let index = 0; index < getHeightDivs.length; index += 1) {
    getHeightDivs[index].remove();
  }
}

// gera paintBoard para valores > 0 && < 5
function generateMin() {
  if (getInputData() > 0 && getInputData() < 5) {
    removeBoardPaint();
    generateHeightDivs(5);
    generateWidthDivs(5);
    addWhiteToBoard();
    window.alert('mínimo: 5 | máximo: 50')
  }
}

// gera paintBoard para valores > 50
function generateMax() {
  if (getInputData() > 50) {
    removeBoardPaint();
    generateHeightDivs(50);
    generateWidthDivs(50);
    addWhiteToBoard();
    window.alert('mínimo: 5 | máximo: 50')
  }
}

// gera paintBoard para valores > 5 && <= 50
function generateStandard() {
  if (getInputData() >= 5 && getInputData() <= 50) {
    removeBoardPaint();
    generateHeightDivs(getInputData());
    generateWidthDivs(getInputData());
    addWhiteToBoard()
  }
}

// exclaimer valor não preenchido
function exclaimer() {
  if (getInputData() == '') {
    window.alert('Board inválido!');
  }
}

// gera paintboard conforme número do input
function generatePaintBoard() {
  const boardSizeButton = document.getElementById('generate-board');

  boardSizeButton.addEventListener('click', function () {
    generateMax();
    generateMin();
    generateStandard();
    exclaimer();
  })
}

generatePaintBoard();

// gera cores aleatorias
function generateRandomColor() {
  const randomBetween = (min, max) => min + Math.floor(Math.random() * (max - min + 1));
  const r = randomBetween(1, 255);
  const g = randomBetween(1, 255);
  const b = randomBetween(1, 255);
  const rgb = `rgb(${r},${g},${b})`; // Collect all to a css color string;
  return rgb;
}

// aplica cor aleatoria para paleta
function applyRandomColor() {
  const getRandomClass = document.querySelectorAll('.random-color');
  for (let index = 0; index < getRandomClass.length; index += 1) {
    getRandomClass[index].style.backgroundColor = `${generateRandomColor()}`;
  }
}

applyRandomColor();

// armazena selected color em uma variável
function getSelectedColor() {
  const selectedColorPixel = document.querySelector('.selected-color')
  const getSelectedColor = document.querySelector('.selected');
  const compStyles = window.getComputedStyle(getSelectedColor);
  const selectedBackground = compStyles.getPropertyValue('background-color');

  selectedColorPixel.style.backgroundColor = selectedBackground;
}

getSelectedColor();

// pinta todos os pixels com a cor ativa
function paintAllPixels() {
  const paintAllTool = document.querySelector('.paint-all');

  paintAllTool.addEventListener('click', function() {
    const getPixels = document.querySelectorAll('.pixel');
    const selectedColor = document.querySelector('.selected-color');

    for (let index = 0; index < getPixels.length; index += 1) {
      getPixels[index].style.backgroundColor = selectedColor.style.backgroundColor;
    }
  })
}

paintAllPixels();

// pinta pixel de branco
function erasePixelColor() {
  let eraserTool = document.querySelector('.erase-pixel');
  let whitePixel = document.querySelector('.white-pixel');

  eraserTool.addEventListener('click', function() {
    removeSelectedClass();
    whitePixel.classList.add('selected');
  })
}

erasePixelColor();


