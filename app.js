document.addEventListener("DOMContentLoaded", () => {
  const numberOfCubes = 36;

    // Vladana
    function calculateGameContainerWidthBasedOnHeight() {
        const height = window.innerHeight;
      //  document.write(height);
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

  function calculateCubeFontSize(cubeHeight) {

    return 12312312;
  }

  // Vladana
  function generateRandomColor(numberOfCubes) {
    // Return map where keys are from 0 to 17, and values are random colors
  }

  // Kristina
  function generateArrayOfTileValues(numberOfCubes) {
    // Return array with length of numberOfCubes, where we show duplicate numbers to numberOfCubes / 2
  }

  const gameContainer = calculateGameContainerWidthBasedOnHeight();
  const cube = calculateWidthAndHeightForCubes(gameContainer.width, gameContainer.height, numberOfCubes);
  const fontSize = calculateCubeFontSize(cube.height);

  const gameElement = document.getElementById("game");

    gameElement.style.width = gameContainer.width + "px";
    gameElement.style.height = gameContainer.height + "px";


  function generateCubsInGameElement(cube, numberOfCubes) {

for( let i =0; i<numberOfCubes; i++) {
    const card = document.createElement("div");
    card.innerText = "This is a paragraph";
    card.style.background = "red";
    card.style.height = cube.height +"px";
    card.style.width = cube.width +"px";
    card.style.display=  "inline-block";
   // card.style.border= "0.1px dashed black";

    gameElement.appendChild(card);
}
    }
     generateCubsInGameElement(cube, numberOfCubes);



});


