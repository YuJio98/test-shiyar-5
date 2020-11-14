"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Volume = function Volume() {
  var _this = this;

  _classCallCheck(this, Volume);

  this.audio_file = document.getElementById("audio_file");
  this.audio_file.volume = 50 / 100;
  this.volume_range = document.getElementById("volume_range");
  this.volume_range.addEventListener("change", function () {
    _this.audio_file.volume = _this.volume_range.value / 100;
  });
  this.volume_speed = document.getElementById("volume_speed");
  this.volume_speed.playbackRate = 1;
  this.volume_speed.addEventListener("change", function () {
    _this.audio_file.playbackRate = _this.volume_speed.value / 100;
  });
};

onload = new Volume();