/* these are optional special variables which will change the system */
var systemBackgroundColor = "#acf2e7";
var systemLineColor = "#000090";
var systemBoxColor = "#C73869";

/* internal constants */
const darkGreen  = "#26b29d";
const lightGreen  = "#30dfc4";
const strokeColor  = "#0a2d27";

/*
 * Draw the letter given the letterData
 *
 * Letters should always be drawn with the
 * following bounding box guideline:
 * from (0,0) to (100, 200)
 */
function drawLetter(letterData) {
  angleMode(DEGREES)
  let sizer1 = letterData["height1"];
  let sizer2 = letterData["height2"];
  let wide = letterData["width"]
  let spinner1 = letterData["spin1"];
  let spinner2 = letterData["spin2"];
  let spinner3 = letterData["spin3"];
  let spinner4 = letterData["spin4"];
  let bandierUp1 = letterData["handleUp1"];
  let bandierUp2 = letterData["handleUp2"];
  let bandierAcross1 = letterData["handleAcross1"];
  let bandierAcross2 = letterData["handleAcross2"];
  let bandierWidth = letterData["handleWidth"]

  noStroke()

  fill(255)
  
  push()
  translate(50, 100)

  push()
  rotate(spinner1)
  rect(-25, 0, wide, sizer1)
  pop()

  push()
  rotate(spinner2)
  rect(-25, 0, wide, sizer2)
  pop()

  fill(0)

  push()
  rotate(spinner3)
  rect(bandierAcross1-25, bandierUp1-5, bandierWidth, 10)
  pop()

  push()
  rotate(spinner4)
  rect(bandierAcross2-25, bandierUp2-5, bandierWidth, 10)
  pop()

  pop()
}

function interpolate_letter(percent, oldObj, newObj) {
  let new_letter = {};
  new_letter["size"]    = map(percent, 0, 100, oldObj["size"], newObj["size"]);
  new_letter["offsetx"] = map(percent, 0, 100, oldObj["offsetx"], newObj["offsetx"]);
  new_letter["offsety"] = map(percent, 0, 100, oldObj["offsety"], newObj["offsety"]);
  return new_letter;
}

var swapWords = [
  "ABBAABBA",
  "DEFDEFDE",
  "BAAAAAAA"
]
