document.addEventListener("DOMContentLoaded", () => {
    const numberOfCubes = 25;

    // Vladana
    function calculateGameContainerWidthBasedOnHeight() {
        const height = window.innerHeight;
        //document.write(height);
        return {
            width: height,
            height: height
        }
    }
    // Milana
    function calculateWidthAndHeightForCubes(width, height, numberOfCubes) {

        return {
            width: 100,
            height: 100
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


