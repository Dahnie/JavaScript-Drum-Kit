"use strict";
const keyA = document.querySelector(".btnA");
const keyS = document.querySelector(".btnS");
const keyD = document.querySelector(".btnD");
const keyF = document.querySelector(".btnF");
const keyG = document.querySelector(".btnG");
const keyH = document.querySelector(".btnH");
const keyJ = document.querySelector(".btnJ");
const keyK = document.querySelector(".btnK");
const keyL = document.querySelector(".btnL");
const soundA = document.querySelector(".audioA");
const soundS = document.querySelector(".audioS");
const soundD = document.querySelector(".audioD");
const soundF = document.querySelector(".audioF");
const soundG = document.querySelector(".audioG");
const soundH = document.querySelector(".audioH");
const soundJ = document.querySelector(".audioJ");
const soundK = document.querySelector(".audioK");
const soundL = document.querySelector(".audioL");

// function stopTrans() {
//   function removeTransition(e) {
//     if (e.propertyName != "transform") return; //Skip if its not transform
//     this.classList.remove("playing");
//   }

//   const keys = document.querySelectorAll(".btn");
//   // console.log(keys);
//   keys.forEach((key) =>
//     key.addEventListener("transitionend", removeTransition)
//   );
// }

// Buttons
keyA.addEventListener("click", function () {
  soundA.currentTime = 0; //Rewinds to the start
  soundA.play();
  keyA.classList.add("playing");
  console.log(`key A pressed`);

  //Removing the transition after the timeout
  setTimeout(function () {
    keyA.classList.remove("playing");
  }, 70);
});

keyS.addEventListener("click", function () {
  soundS.currentTime = 0; //Rewinds to the start
  soundS.play();
  keyS.classList.add("playing");
  console.log(`key S pressed`);

  //Removing the transition after the timeout
  setTimeout(function () {
    keyS.classList.remove("playing");
  }, 70);
});

keyD.addEventListener("click", function () {
  soundD.currentTime = 0; //Rewinds to the start
  soundD.play();
  keyD.classList.add("playing");
  console.log(`key D pressed`);

  //Removing the transition after the timeout
  setTimeout(function () {
    keyD.classList.remove("playing");
  }, 70);
});

keyF.addEventListener("click", function () {
  soundF.currentTime = 0; //Rewinds to the start
  soundF.play();
  keyF.classList.add("playing");
  console.log(`key F pressed`);

  //Removing the transition after the timeout
  setTimeout(function () {
    keyF.classList.remove("playing");
  }, 70);
});

keyG.addEventListener("click", function () {
  soundG.currentTime = 0; //Rewinds to the start
  soundG.play();
  keyG.classList.add("playing");
  console.log(`key G pressed`);

  //Removing the transition after the timeout
  setTimeout(function () {
    keyG.classList.remove("playing");
  }, 70);
});

keyH.addEventListener("click", function () {
  soundH.currentTime = 0; //Rewinds to the start
  soundH.play();
  keyH.classList.add("playing");
  console.log(`key H pressed`);

  //Removing the transition after the timeout
  setTimeout(function () {
    keyH.classList.remove("playing");
  }, 70);
});

keyJ.addEventListener("click", function () {
  soundJ.currentTime = 0; //Rewinds to the start
  soundJ.play();
  keyJ.classList.add("playing");
  console.log(`key J pressed`);

  //Removing the transition after the timeout
  setTimeout(function () {
    keyJ.classList.remove("playing");
  }, 70);
});

keyK.addEventListener("click", function () {
  soundK.currentTime = 0; //Rewinds to the start
  soundK.play();
  keyK.classList.add("playing");
  console.log(`key K pressed`);

  //Removing the transition after the timeout
  setTimeout(function () {
    keyK.classList.remove("playing");
  }, 70);
});

keyL.addEventListener("click", function () {
  soundL.currentTime = 0; //Rewinds to the start
  soundL.play();
  keyL.classList.add("playing");
  console.log(`key L pressed`);

  //Removing the transition after the timeout
  setTimeout(function () {
    keyL.classList.remove("playing");
  }, 70);
});

//Keys
window.addEventListener("keydown", function (e) {
  if (e.key === "a" || e.key === "A") {
    console.log(`sound ${e.key.toUpperCase()} pressed`);
    soundA.currentTime = 0; //Rewinds to the start
    soundA.play();
    keyA.classList.add("playing");

    //Removing the transition after the timeout
    setTimeout(function () {
      keyA.classList.remove("playing");
    }, 70);
  } else if (e.key === "s" || e.key === "S") {
    console.log(`sound ${e.key.toUpperCase()} pressed`);
    soundS.currentTime = 0; //Rewinds to the start
    soundS.play();
    keyS.classList.add("playing");

    //Removing the transition after the timeout
    setTimeout(function () {
      keyS.classList.remove("playing");
    }, 70);
  } else if (e.key === "d" || e.key === "D") {
    console.log(`sound ${e.key.toUpperCase()} pressed`);
    soundD.currentTime = 0; //Rewinds to the start
    soundD.play();
    keyD.classList.add("playing");

    //Removing the transition after the timeout
    setTimeout(function () {
      keyD.classList.remove("playing");
    }, 70);
  } else if (e.key === "f" || e.key === "F") {
    console.log(`sound ${e.key.toUpperCase()} pressed`);
    soundF.currentTime = 0; //Rewinds to the start
    soundF.play();
    keyF.classList.add("playing");

    //Removing the transition after the timeout
    setTimeout(function () {
      keyF.classList.remove("playing");
    }, 70);
  } else if (e.key === "g" || e.key === "G") {
    console.log(`sound ${e.key.toUpperCase()} pressed`);
    soundG.currentTime = 0; //Rewinds to the start
    soundG.play();
    keyG.classList.add("playing");

    //Removing the transition after the timeout
    setTimeout(function () {
      keyG.classList.remove("playing");
    }, 70);
  } else if (e.key === "h" || e.key === "H") {
    console.log(`sound ${e.key.toUpperCase()} pressed`);
    soundH.currentTime = 0; //Rewinds to the start
    soundH.play();
    keyH.classList.add("playing");

    //Removing the transition after the timeout
    setTimeout(function () {
      keyH.classList.remove("playing");
    }, 70);
  } else if (e.key === "j" || e.key === "J") {
    console.log(`sound ${e.key.toUpperCase()} pressed`);
    soundJ.currentTime = 0; //Rewinds to the start
    soundJ.play();
    keyJ.classList.add("playing");

    //Removing the transition after the timeout
    setTimeout(function () {
      keyJ.classList.remove("playing");
    }, 70);
  } else if (e.key === "k" || e.key === "K") {
    console.log(`sound ${e.key.toUpperCase()} pressed`);
    soundK.currentTime = 0; //Rewinds to the start
    soundK.play();
    keyK.classList.add("playing");

    //Removing the transition after the timeout
    setTimeout(function () {
      keyK.classList.remove("playing");
    }, 70);
  } else if (e.key === "l" || e.key === "L") {
    console.log(`sound ${e.key.toUpperCase()} pressed`);
    soundL.currentTime = 0; //Rewinds to the start
    soundL.play();
    keyL.classList.add("playing");

    //Removing the transition after the timeout
    setTimeout(function () {
      keyL.classList.remove("playing");
    }, 70);
  }
});
