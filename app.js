document.addEventListener("DOMContentLoaded", () => {
  const numberOfCubes = 36;

  function calculateGameContainerWidthBasedOnHeight() {

    return {
      width: window.innerHeight,
      height: window.innerHeight
    }
  }

  function calculateWidthAndHeightForCubes(width, height, numberOfCubes) {
    const widthOfOneCube = width / Math.sqrt(numberOfCubes);
    const heightOfOneCube = height / Math.sqrt(numberOfCubes);

    return {
      width: widthOfOneCube,
      height: heightOfOneCube
    }
  }

  function calculateCubeFontSize(cubeHeight) {
    const fontSize = cubeHeight / 1.5;

    return fontSize;
  }

  function generateRandomColor(numberOfCubes) {
    const colorMap = new Map();

    for (let i = 0; i < (numberOfCubes / 2); i++) {
      const randomColor = '#' + Math.random().toString(16).substr(-6);
      colorMap.set(i, randomColor);
    }

    return colorMap;
  }

  function generateArrayOfTileValues(numberOfCubes) {
    const arrayToRepeat = [];
    for (let i = 1; i <= numberOfCubes / 2; i++) {
      arrayToRepeat.push(i);
    }

    const arrayOfNumbers = [].concat(...Array(2).fill(arrayToRepeat));
    return arrayOfNumbers.sort(() => Math.random() - 0.5);
  }

  const gameContainer = calculateGameContainerWidthBasedOnHeight();
  const cube = calculateWidthAndHeightForCubes(gameContainer.width, gameContainer.height, numberOfCubes);
  const fontSize = calculateCubeFontSize(cube.height);
  const colors = generateRandomColor(numberOfCubes);
  const tileValues = generateArrayOfTileValues(numberOfCubes);

  const gameElement = document.getElementById("game");

  gameElement.style.width = gameContainer.width + "px";
  gameElement.style.height = gameContainer.height + "px";

  // Milana
  function appendCustomStylesToElement(card, cube) {

  }

  // Milana
  function appendClickEventOnCube(cube) {

  }

  function generateCubsInGameElement(cube, numberOfCubes) {

    for (let i = 0; i < numberOfCubes; i++) {
      const card = document.createElement("div");
      card.innerText = "*";
      card.classList.add("box");
      card.style.fontSize = fontSize + "px";
      card.style.lineHeight = cube.height + "px";

      card.style.background = "red";
      card.style.height = cube.height + "px";
      card.style.width = cube.width + "px";
      card.style.display = "inline-block";

      appendCustomStylesToElement(card, cube);
      appendClickEventOnCube(cube);

      gameElement.appendChild(card);
    }
  }

  generateCubsInGameElement(cube, numberOfCubes);
});


