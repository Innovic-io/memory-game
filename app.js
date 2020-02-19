document.addEventListener("DOMContentLoaded", () => {
  const numberOfCubes = 36;
  const cardFlipped = [];
  let isPlaying = true;

  function startTimer() {
    while (isPlaying) {

    }
  }

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
    return cubeHeight / 1.5;
  }

  function generateRandomColor(numberOfCubes) {
    const colorMap = new Map();

    for (let i = 1; i <= (numberOfCubes / 2); i++) {
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

  function appendCustomStylesToElement(card, cube) {
    card.innerText = "*";
    card.classList.add("box");

    card.style.fontSize = fontSize + "px";
    card.style.lineHeight = cube.height + "px";
    card.style.height = cube.height + "px";
    card.style.width = cube.width + "px";
  }

  function appendClickEventOnCube(card, index) {
    card.addEventListener('click', () => {

      if(!card.classList.contains("resolved")) {
        flipCube(card, index);

        appendToFlippedArrayAndCheckIfTheyAreSame(card);
        checkIfGameIsDone();
      }
    });
  }

  function flipCube(card, cardIndex) {
    const value = tileValues[cardIndex];
    const color = colors.get(value);

    card.style.background = color;
    card.innerText = value.toString();
  }

  function markCardAsResolved(card) {
    card.classList.add("resolved");
  }

  function restartCard(card) {

  }

  function checkIfGameIsDone() {

  }

  function appendToFlippedArrayAndCheckIfTheyAreSame(card) {
    if (cardFlipped.length === 0) {
      cardFlipped.push(card);
      return;
    }
    if (cardFlipped.length === 1) {
      cardFlipped.push(card);
      if (cardFlipped[0].innerText === cardFlipped[1].innerText) {
        markCardAsResolved(cardFlipped[0]);
        markCardAsResolved(cardFlipped[1]);
        return true;
      } else {

      }

      cardFlipped.length = 0;
      return false;
    }
  }

  function generateCubsInGameElement(cube, numberOfCubes) {
    for (let i = 0; i < numberOfCubes; i++) {
      const card = document.createElement("div");

      appendCustomStylesToElement(card, cube);
      appendClickEventOnCube(card, i);


      card.classList.add(tileValues[i])

      gameElement.appendChild(card);
    }
  }

  generateCubsInGameElement(cube, numberOfCubes);
  startTimer();
});


