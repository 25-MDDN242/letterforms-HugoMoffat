/* these are optional special variables which will change the system */
var systemBackgroundColor = "#2a3089";
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
  let spinner1 = letterData["spin1"];
  let spinner2 = letterData["spin2"];
  let spinner3 = letterData["spin3"];
  let spinner4 = letterData["spin4"];
  let bandierUp1 = letterData["handleUp1"];
  let bandierUp2 = letterData["handleUp2"];
  let bandierAcross1 = letterData["handleAcross1"];
  let bandierAcross2 = letterData["handleAcross2"];
  let bandierWide1 = letterData["handleWidth1"];
  let bandierWide2 = letterData["handleWidth2"];
  let bandierDeep1 = letterData["handleDepth1"];
  let bandierDeep2 = letterData["handleDepth2"]; 
  noStroke()

  fill(255)
  
  push()
  translate(50, 100)

  push()
  rect(-25, 0, spinner1, spinner2)
  pop()

  push()
  rect(-25, 0, spinner1, -spinner2)
  pop()

  fill(0)
  strokeWeight(2)
  stroke(0)
  push()
  rotate(spinner3)
  rect(bandierAcross1-25, bandierUp1-5, bandierWide1, bandierDeep1)
  pop()

  push()
  rotate(spinner4)
  rect(bandierAcross2-25, bandierUp2-5, bandierWide2, bandierDeep2)
  pop()

  pop()
}

function interpolate_letter(percent, oldObj, newObj) {
  let new_letter = {};
  new_letter["spin1"] = map(percent, 0, 100, oldObj["spin1"], newObj["spin1"]);
  new_letter['spin2'] = map(percent, 0, 100, oldObj["spin2"], newObj["spin2"]);
  new_letter['spin3'] = map(percent, 0, 100, oldObj["spin3"], newObj["spin3"]);
  new_letter['spin4'] = map(percent, 0, 100, oldObj["spin4"], newObj["spin4"]);
  new_letter['handleUp1'] = map(percent, 0, 100, oldObj["handleUp1"], newObj["handleUp1"]);
  new_letter['handleUp2'] = map(percent, 0, 100, oldObj["handleUp2"], newObj["handleUp2"]);
  new_letter["handleAcross1"] = map(percent, 0, 100, oldObj["handleAcross1"], newObj["handleAcross1"]);
  new_letter["handleAcross2"] = map(percent, 0, 100, oldObj["handleAcross2"], newObj["handleAcross2"]);
  new_letter['handleWidth1'] = map(percent, 0, 100, oldObj["handleWidth1"], newObj["handleWidth1"]);
  new_letter['handleWidth2'] = map(percent, 0, 100, oldObj["handleWidth2"], newObj["handleWidth2"]);
  new_letter['handleDepth1'] = map(percent, 0, 100, oldObj["handleDepth1"], newObj["handleDepth1"]);
  new_letter['handleDepth2'] = map(percent, 0, 100, oldObj["handleDepth2"], newObj["handleDepth2"]);
  return new_letter;
}

var swapWords = [
  "ABCDEFGH",
  "IJKLMNOP",
  "QRSTUVWX",
  "YZ012345",
  "6789"
]
