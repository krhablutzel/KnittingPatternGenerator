console.log('hello world');

// width, height
var canvasSize = [8, 8];

// fill in canvas with blocks
function makeCanvas(){

  var canvas = document.getElementById('canvas');

  // clear canvas
  canvas.innerHTML = "";

  // for each row
  for (var i=0; i < canvasSize[1]; i++) {
    var row = ""

    // for each column
    for (var j=0; j < canvasSize[0]; j++) {
      // cell filler
      row += "<div class='cell' id=cell'"+i+"-"+j+"'><p>" + i+"-"+j + "</p></div>"
    }

    // insert row into canvas
    canvas.insertAdjacentHTML("beforeend", row);
  }

}

function resizeCells(){

  // find page width, take 80%
  // set canvas width to that num
  // set cell width to that num / size, scale height squarely
}

makeCanvas();
