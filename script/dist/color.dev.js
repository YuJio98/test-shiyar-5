"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Color =
/*#__PURE__*/
function () {
  function Color() {
    var _this = this;

    _classCallCheck(this, Color);

    this.color1 = document.getElementById("color1");
    this.color1.addEventListener("click", function () {
      _this.select_color("color1");
    });
    this.color2 = document.getElementById("color2");
    this.color2.addEventListener("click", function () {
      _this.select_color("color2");
    });
    this.color3 = document.getElementById("color3");
    this.color3.addEventListener("click", function () {
      _this.select_color("color3");
    });
    this.color4 = document.getElementById("color4");
    this.color4.addEventListener("click", function () {
      _this.select_color("color4");
    });

    if (localStorage.getItem("COLOR") == null) {
      document.getElementById("content").style.background = "rgb(255, 0, 0)";
    }

    this.select_color(localStorage.getItem("COLOR"));
  }

  _createClass(Color, [{
    key: "select_color",
    value: function select_color(color) {
      if (color == "color1") {
        document.getElementById("header").style.background = "#DF6589FF";
        document.getElementById("content").style.background = "rgb(114, 70, 138)";
        document.body.style.background = " aquamarine";
      } else if (color == "color2") {
        document.getElementById("header").style.background = "#1C1C1BFF";
        document.getElementById("content").style.background = "rgb(255, 0, 0)";
        document.body.style.background = " gray";
      } else if (color == "color3") {
        document.getElementById("header").style.background = "rgb(175, 82, 171)";
        document.getElementById("content").style.background = " rgb(1, 255, 35)";
        document.body.style.background = "pink";
      } else if (color == "color4") {
        document.getElementById("header").style.background = "rgb(49, 24, 65)";
        document.getElementById("content").style.background = " rgb(230, 215, 9)";
        document.body.style.background = "rgb(35, 255, 119)";
      }

      localStorage.setItem("COLOR", color);
    }
  }]);

  return Color;
}();

onload = new Color();