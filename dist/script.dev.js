"use strict";

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Player = function Player() {
  _classCallCheck(this, Player);

  var heightMain = document.getElementById("audio_player");
  heightMain.style.height = screen.height + "px";

  if (screen.width < 620) {
    heightMain.style.width = screen.width + "px";
  }

  var heightDiv = document.getElementById("content");
  heightDiv.style.height = screen.height - 300 + "px";
};

onload = new Player();

var audio_Player =
/*#__PURE__*/
function () {
  function audio_Player() {
    var _this = this;

    _classCallCheck(this, audio_Player);

    this.audio_file = document.getElementById("audio_file");
    this.title_audio = document.getElementById("radio-title");
    this.play_pause_button = document.getElementById("play_pause");
    this.isPlayed;
    this.play_pause.addEventListener("click", function () {
      _this.play_pause();
    });
  }

  _createClass(audio_Player, [{
    key: "play_pause",
    value: function play_pause() {
      if (this.isPlayed == false) {
        this.play_pause_button.src = "img/pause.png";
        this.audio_file.play();
        this.isPlayed = true;
      } else {
        this.play_pause.src = "img/play.png";
        this.audio_file.pause();
        this.isPlayed = false;
      }

      ;
    }
  }]);

  return audio_Player;
}();

onload = new Audio();