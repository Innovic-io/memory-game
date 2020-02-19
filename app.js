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

    // Vladana
    function generateRandomColor(numberOfCubes) {
        // Return map where keys are from 0 to 17, and values are random colors
    }


    // Kristina

    function generateArrayOfTileValues(numberOfCubes) {
        // Return array with length of numberOfCubes, where we show duplicate numbers to numberOfCubes / 2

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
    const tileValues = generateArrayOfTileValues(numberOfCubes);
   // document.write(tileValues);

    const gameElement = document.getElementById("game");

    gameElement.style.width = gameContainer.width + "px";
    gameElement.style.height = gameContainer.height + "px";

    function generateCubsInGameElement(cube, numberOfCubes) {

        for (let i = 0; i < numberOfCubes; i++) {
            const card = document.createElement("div");
            card.innerText = i.toString();
card.style.fontSize = fontSize + "px";
            card.style.textAlign = "center";
            card.style.lineHeight = cube.height + "px";

            card.style.background = "red";
            card.style.height = cube.height + "px";
            card.style.width = cube.width + "px";
            card.style.display = "inline-block";

            gameElement.appendChild(card);
        }
    }

    generateCubsInGameElement(cube, numberOfCubes);



});


