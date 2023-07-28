"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = require("@chakra-ui/react");
var _card = require("./additions/card/card");
var _button = require("./components/button");
var _badge = require("./components/badge");
var _input = require("./components/input");
var _progress = require("./components/progress");
var _slider = require("./components/slider");
var _textarea = require("./components/textarea");
var _switch = require("./components/switch");
var _link = require("./components/link");
var _breakpoints = require("./foundations/breakpoints");
var _styles = require("./styles");
var _default = (0, _react.extendTheme)({
  breakpoints: _breakpoints.breakpoints
},
// Breakpoints
_styles.globalStyles, _badge.badgeStyles,
// badge styles
_button.buttonStyles,
// button styles
_link.linkStyles,
// link styles
_progress.progressStyles,
// progress styles
_slider.sliderStyles,
// slider styles
_input.inputStyles,
// input styles
_textarea.textareaStyles,
// textarea styles
_switch.switchStyles,
// switch styles
_card.CardComponent // card component
);
exports.default = _default;