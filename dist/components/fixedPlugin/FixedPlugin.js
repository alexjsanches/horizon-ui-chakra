"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = FixedPlugin;
var _react = require("@chakra-ui/react");
var _io = require("react-icons/io");
var _react2 = _interopRequireDefault(require("react"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _objectDestructuringEmpty(obj) { if (obj == null) throw new TypeError("Cannot destructure " + obj); }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); } // Chakra Imports
// Custom Icons
function FixedPlugin(props) {
  var rest = _extends({}, (_objectDestructuringEmpty(props), props));
  var _useColorMode = (0, _react.useColorMode)(),
    colorMode = _useColorMode.colorMode,
    toggleColorMode = _useColorMode.toggleColorMode;
  var bgButton = "linear-gradient(135deg, #868CFF 0%, #4318FF 100%)";
  return /*#__PURE__*/_react2.default.createElement(_react.Button, _extends({}, rest, {
    h: "60px",
    w: "60px",
    zIndex: "99",
    bg: bgButton,
    position: "fixed",
    variant: "no-effects",
    left: document.documentElement.dir === "rtl" ? "35px" : "",
    right: document.documentElement.dir === "rtl" ? "" : "35px",
    bottom: "30px",
    border: "1px solid",
    borderColor: "#6A53FF",
    borderRadius: "50px",
    onClick: toggleColorMode,
    display: "flex",
    p: "0px",
    align: "center",
    justify: "center"
  }), /*#__PURE__*/_react2.default.createElement(_react.Icon, {
    h: "24px",
    w: "24px",
    color: "white",
    as: colorMode === "light" ? _io.IoMdMoon : _io.IoMdSunny
  }));
}