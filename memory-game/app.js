document.addEventListener("DOMContentLoaded", () => {
  const isMobile = isMobileDevice();
  const numberOfCubes = isMobile ? 36 : 64;
  const cardFlipped = [];
  let startDate = null;
  let interval;

  function start() {
    startDate = new Date();
    interval = setInterval(startTimer, 1);
  }

  function startTimer() {
    const currentTime = new Date(),
      timeElapsed = new Date(currentTime - startDate),
      hour = timeElapsed.getUTCHours(),
      min = timeElapsed.getUTCMinutes(),
      sec = timeElapsed.getUTCSeconds(),
      ms = timeElapsed.getUTCMilliseconds();

    document.getElementById("timer").innerHTML =
      (hour > 9 ? hour : "0" + hour) + ":" +
      (min > 9 ? min : "0" + min) + ":" +
      (sec > 9 ? sec : "0" + sec) + "." +
      (ms > 99 ? ms : ms > 9 ? "0" + ms : "00" + ms);

  }

  function calculateGameContainerWidthBasedOnHeight() {

    return {
      width: isMobile ? window.innerWidth : window.innerHeight,
      height: isMobile ? window.innerWidth : window.innerHeight
    }
  }

  function isMobileDevice () {
    let check = false;
    (function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))) check = true;})(navigator.userAgent||navigator.vendor||window.opera);
    return check;
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

  function appendCustomStylesToElement(card, cube) {
    card.innerText = "?";
    card.classList.add("box");

    card.style.fontSize = fontSize + "px";
    card.style.lineHeight = cube.height + "px";
    card.style.height = cube.height + "px";
    card.style.width = cube.width + "px";
  }

  function appendClickEventOnCube(card, index) {
    card.addEventListener('click', () => {

      if (!card.classList.contains("resolved")) {
        flipCube(card, index);

        appendToFlippedArrayAndCheckIfTheyAreSame(card);
      }
      if (checkIfGameIsDone()) {
        clearInterval(interval);
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
    setTimeout(() => {
      card.style.background = "lightseagreen";
      card.innerText = "?";
    }, 500);
  }

  function checkIfGameIsDone() {
    return document.getElementsByClassName("resolved").length === numberOfCubes;
  }

  function appendToFlippedArrayAndCheckIfTheyAreSame(card) {
    if (cardFlipped.length === 0) {
      cardFlipped.push(card);
      return;
    }
    if (cardFlipped.length === 1 && cardFlipped.indexOf(card) === -1) {
      cardFlipped.push(card);
      if (cardFlipped[0].innerText === cardFlipped[1].innerText) {
        markCardAsResolved(cardFlipped[0]);
        markCardAsResolved(cardFlipped[1]);
      } else {
        restartCard(cardFlipped[0]);
        restartCard(cardFlipped[1]);
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

      gameElement.appendChild(card);
    }
  }

  const gameContainer = calculateGameContainerWidthBasedOnHeight();
  const cube = calculateWidthAndHeightForCubes(gameContainer.width, gameContainer.height, numberOfCubes);
  const fontSize = calculateCubeFontSize(cube.height);
  const colors = generateRandomColor(numberOfCubes);
  const tileValues = generateArrayOfTileValues(numberOfCubes);

  const gameElement = document.getElementById("game");
  gameElement.style.width = gameContainer.width + "px";
  gameElement.style.height = gameContainer.height + "px";

  generateCubsInGameElement(cube, numberOfCubes);
  start();
  startTimer();
});


