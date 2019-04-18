function Chronometer() {
  this.currentTime = 0
  this.intervalID = 0
  this.startClick = function() {
   this.intervalID = setInterval(() => {
      this.currentTime++;
      this.getMinutes();
      this.getSeconds();
      this.getCentiSeconds();
      this.setClick();

    }, 10);
  }
  this.getMinutes = function() {
    return Math.floor(this.currentTime / 6000)
  }
  this.getSeconds = function() {
    return Math.floor((this.currentTime/100) %60)
  }
  this.getCentiSeconds = function() {
    return this.currentTime % 100;
  }
  this.twoDigitsNumber = function (n) {
    if (n < 10) {

      return "0" + n
    } else {

      return n.toString();
    }
  }
  this.setClick = function () {
    var minutes = this.twoDigitsNumber(this.getMinutes())
    var seconds = this.twoDigitsNumber(this.getSeconds());
    var centiSeconds = this.twoDigitsNumber(this.getCentiSeconds())
    return [minutes, seconds, centiSeconds]
  }
  this.stopClick = function() {
    clearInterval(this.intervalID);
  }
  this.resetClick = function() {
    this.currentTime = 0;
  }
  this.splitClick = function() {

  }
}