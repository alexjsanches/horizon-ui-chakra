"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.breakpoints = void 0;
var _themeTools = require("@chakra-ui/theme-tools");
var breakpoints = (0, _themeTools.createBreakpoints)({
  sm: "320px",
  "2sm": "380px",
  md: "768px",
  lg: "960px",
  xl: "1200px",
  "2xl": "1600px",
  "3xl": "1920px"
});
exports.breakpoints = breakpoints;