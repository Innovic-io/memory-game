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
   // gameElement.style.width = "90px";
   // gameElement.style.height= "90px";
    gameElement.style.width = "gameContainer.width";
    gameElement.style.height= "gameContainer.height";

    // Kristina
    // function generateCubsInGameElement(cube, numberOfCubes) {
    //
    //         gameElement.appendChild(
    //             document.createElement("div")
    //         )
    //
    // }
    function generateCubsInGameElement(cube, numberOfCubes) {

for( let i =0; i<36; i++) {
    const card = document.createElement("div");
    card.innerText = "This is a paragraph";
    card.style.background = "red";
    card.style.height = "90px";
    card.style.width = "90px";
    card.style.display=  "inline-block";
    card.style.border= "1px solid black";

    gameElement.appendChild(card);
}
    }
     generateCubsInGameElement();

});


