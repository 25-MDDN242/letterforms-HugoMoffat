const canvasWidth = 960;
const canvasHeight = 500;

/*
 * my three variable per letter are:
 *
   size: radius of the second circle (in pixels)
   offsetx: x offset (in pixels) of the second circle
            relative to the first one
   offsety: y offset (in pixels) of the second circle
            relative to the first one
 *
 */

const letterA = {
  "size": 100,
  "size2": 100,
  "spin1": 25,
  "spin2": -25,
  "spin3": 10,
  "spin4": -10,
  "bandUp": 70,
  "bandAcross": 0
}

const letterB = {
  "size": 100,
  "size2": 60,
  "spin1": 180,
  "spin2": 270,
  "spin3": 0,
  "spin4": 90,
  "bandUp": 20,
  "bandAcross": 10
}

const letterC = {
  "size": 100,
  "size2": 100,
  "spin1": 220,
  "spin2": 320,
  "spin3": 45,
  "spin4": -45,
  "bandUp": 0,
  "bandAcross": 0
}

const backgroundColor  = 0;

const darkGreen  = "#26b29d";
const lightGreen  = "#30dfc4";
const strokeColor  = "#0a2d27";

function setup () {
  // create the drawing canvas, save the canvas element
  main_canvas = createCanvas(canvasWidth, canvasHeight);
  main_canvas.parent('canvasContainer');

  // color/stroke setup
  //stroke(strokeColor);
  //strokeWeight(4);
  noStroke()

  // with no animation, redrawing the screen is not necessary
  noLoop();
}

function draw () {
  // clear screen
  background(backgroundColor);

  // compute the center of the canvas
  let center_x = canvasWidth / 2;
  let center_y = canvasHeight / 1.6;

  // draw the letters A, B, C from saved data
  push()
  translate(center_x - 250, center_y)
  drawLetter(0, 0, letterA);
  pop()

  push()
  translate(center_x      , center_y)
  drawLetter(0, 0, letterB);
  pop()

  push()
  translate(center_x + 250, center_y)
  drawLetter(0, 0, letterC);
  pop()
}

function drawLetter(posx, posy, letterData) {
  // determine parameters for second circle
  angleMode(DEGREES)
  let sizer1 = letterData["size"];
  let sizer2 = letterData["size2"];
  let spinner1 = letterData["spin1"];
  let spinner2 = letterData["spin2"];
  let spinner3 = letterData["spin3"];
  let spinner4 = letterData["spin4"];
  let bandierUp = letterData["bandUp"];
  let bandierAcross = letterData["bandAcross"];

  push()
  rotate(spinner1)
  rect(-25, 0, 50, sizer1)
  pop()

  push()
  rotate(spinner2)
  rect(-25, 0, 50, sizer2)
  pop()

  fill(0)

  push()
  rotate(spinner3)
  rect(bandierAcross-25, bandierUp-5, 50, 10)
  pop()

  push()
  rotate(spinner4)
  rect(bandierAcross-25, bandierUp-5, 50, 10)
  pop()

}


function keyTyped() {
  if (key == '!') {
    saveBlocksImages();
  }
  else if (key == '@') {
    saveBlocksImages(true);
  }
}
