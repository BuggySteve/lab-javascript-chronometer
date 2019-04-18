var chronometer = new Chronometer();
var btnLeft     = document.getElementById('btnLeft');
var btnRight    = document.getElementById('btnRight');
var minDec      = document.getElementById('minDec');
var minUni      = document.getElementById('minUni');
var secDec      = document.getElementById('secDec');
var secUni      = document.getElementById('secUni');
var milDec      = document.getElementById('milDec');
var milUni      = document.getElementById('milUni');


function printTime() {
  setInterval(() => {
    printMinutes();
    printSeconds();
  }, 1000);
  setInterval(() => {
    printMilliseconds();
  }, 10);
}

function printMinutes() {
  debugger
  minDec.innerHTML = chronometer.setClick()[0][0];
  minUni.innerHTML = chronometer.setClick()[0][1];
}

function printSeconds() {
  secDec.innerHTML = chronometer.setClick()[1][0];
  secUni.innerHTML = chronometer.setClick()[1][1];
}

function printMilliseconds() {
  milDec.innerHTML = chronometer.setClick()[2][0];
  milUni.innerHTML = chronometer.setClick()[2][1];
}

function printSplit() {

}

function clearSplits() {

}

function setStopBtn() {
  btnLeft.setAttribute("class", "btn stop");
  btnLeft.innerHTML = "STOP";
}

function setSplitBtn() {
  btnRight.setAttribute("class", "btn split");
  btnRight.innerHTML = "SPLIT";
}

function setStartBtn() {
  btnLeft.setAttribute("class", "btn start");
  btnLeft.innerHTML = "START";
}

function setResetBtn() {
  btnRight.setAttribute("class", "btn reset");
  btnRight.innerHTML = "RESET";
}

// Start/Stop Button
btnLeft.addEventListener('click', function () {
  switch (this.className) {
    case "btn start":
      setStopBtn();
      setSplitBtn();
      chronometer.startClick();
      printTime();
      break;
    case "btn stop":
      setStartBtn();
      setResetBtn();
      chronometer.stopClick();
      break;
  }
});

// Reset/Split Button
btnRight.addEventListener('click', function () {
  switch (this.className) {
    case "btn split":
      printSplit();
      break;
    case "btn reset":
      chronometer.resetClick();
  }
});
