document.addEventListener("DOMContentLoaded", () => {
    const numberOfCubes = 36;

    // Vladana
    function calculateGameContainerWidthBasedOnHeight() {
        const height = window.innerHeight
        return {
            width: height,
            height: height
        }
    }
    // Milana
    function calculateWidthAndHeightForCubes(width, height, numberOfCubes) {
        const widthOfOneCube = width / Math.sqrt(numberOfCubes);
        const heightOfOneCube = height / Math.sqrt(numberOfCubes);


        return {
            width: widthOfOneCube,
            height: heightOfOneCube
        }

    }

    const gameContainer = calculateGameContainerWidthBasedOnHeight();
    const cube = calculateWidthAndHeightForCubes(gameContainer.width, gameContainer.height, numberOfCubes);

    const gameElement = document.getElementById("game");
    // Kristina
    // Set on gameElement width and height

    // Kristina
    function generateCubsInGameElement(cube, numberOfCubes) {
        // gameElement.appendChild(
        //     document.createElement("div")
        // )
    }
});


