"use strict";

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Player = function Player() {
  _classCallCheck(this, Player);

  var heightMain = document.getElementById("player");
  heightMain.style.height = screen.height + "px";

  if (screen.width < 620) {
    heightMain.style.width = screen.width + "px";
  }

  var heightDiv = document.getElementById("content");
  heightDiv.style.height = screen.height - 300 + "px";
};

onload = new Player(); // Second CLASS---------------------------

var Audio_Player =
/*#__PURE__*/
function () {
  function Audio_Player() {
    var _this = this;

    _classCallCheck(this, Audio_Player);

    this.audio_file = document.getElementById("audio_file");
    this.title_audio = document.getElementById("title_radio");
    this.play_pause_button = document.getElementById("play_pause");
    this.isPlayed;
    this.play_pause_button.addEventListener("click", function () {
      _this.play_pause();
    });
    this.names_radio = [];
    this.names_radio[0] = "Radio Sawa - راديو سوا"; //change it later.

    this.names_radio[1] = "Radio MFJ - راديو مفج";
    this.names_radio[2] = "Radio Mars -  راديو مارس ";
    this.source_audio = [];
    this.source_audio[0] = "http://n0a.radiojar.com/whbvyphna3quv?rj-ttl=5&rj-tok=AAABdcQ6h0kALroymHXkhml6tw";
    this.source_audio[1] = "http://streaming.radionomy.com/JamendoLounge?lang=fr-FR%2cfr%3bq%3d0.9%2cen-US%3bq%3d0.8%2cen%3bq%3d0.7%2ctr%3bq%3d0.6%2cid%3bq%3d0.5";
    this.source_audio[2] = "http://radiomars.ice.infomaniak.ch/radiomars-128.mp3";
    this.server = 0;
    this.setResource();
    document.getElementById("next").addEventListener("click", function () {
      if (_this.server < _this.source_audio.length - 1) {
        ++_this.server;
        _this.isPlayed = false;
      } else {
        _this.server = 0;
      }

      localStorage.setItem("SAVE-POSITION", _this.server);

      _this.setResource();
    });
    document.getElementById("back").addEventListener("click", function () {
      if (_this.server > 0) {
        --_this.server;
        _this.isPlayed = false;
      } else {
        _this.server = _this.source_audio.length - 1;
      }

      localStorage.setItem("SAVE-POSITION", _this.server);

      _this.setResource();
    });
  }

  _createClass(Audio_Player, [{
    key: "setResource",
    value: function setResource() {
      if (localStorage.getItem("SAVE-POSITION") != null) {
        this.server = localStorage.getItem("SAVE-POSITION");
      }

      this.audio_file.src = this.source_audio[this.server];
      this.title_audio.innerHTML = this.names_radio[this.server];
      this.play_pause();
    }
  }, {
    key: "play_pause",
    value: function play_pause() {
      if (this.isPlayed == false) {
        this.play_pause_button.src = "./img/pause.png";
        this.audio_file.play();
        this.isPlayed = true;
      } else {
        this.play_pause_button.src = "./img/play.png";
        this.audio_file.pause();
        this.isPlayed = false;
      }
    }
  }]);

  return Audio_Player;
}();

onload = new Audio_Player();