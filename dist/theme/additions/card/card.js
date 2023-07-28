"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CardComponent = void 0;
var _themeTools = require("@chakra-ui/theme-tools");
var Card = {
  baseStyle: function baseStyle(props) {
    return {
      p: "20px",
      display: "flex",
      flexDirection: "column",
      width: "100%",
      position: "relative",
      borderRadius: "20px",
      minWidth: "0px",
      wordWrap: "break-word",
      bg: (0, _themeTools.mode)("#ffffff", "navy.800")(props),
      backgroundClip: "border-box"
    };
  }
};
var CardComponent = {
  components: {
    Card: Card
  }
};
exports.CardComponent = CardComponent;