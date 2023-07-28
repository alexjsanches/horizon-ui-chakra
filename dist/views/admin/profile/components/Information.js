"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Information;
var _react = require("@chakra-ui/react");
var _Card = _interopRequireDefault(require("components/card/Card.js"));
var _react2 = _interopRequireDefault(require("react"));
var _excluded = ["title", "value"]; // Chakra imports
// Custom components
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
function Information(props) {
  var title = props.title,
    value = props.value,
    rest = _objectWithoutProperties(props, _excluded);
  // Chakra Color Mode
  var textColorPrimary = (0, _react.useColorModeValue)("secondaryGray.900", "white");
  var textColorSecondary = "gray.400";
  var bg = (0, _react.useColorModeValue)("white", "navy.700");
  return /*#__PURE__*/_react2.default.createElement(_Card.default, _extends({
    bg: bg
  }, rest), /*#__PURE__*/_react2.default.createElement(_react.Box, null, /*#__PURE__*/_react2.default.createElement(_react.Text, {
    fontWeight: "500",
    color: textColorSecondary,
    fontSize: "sm"
  }, title), /*#__PURE__*/_react2.default.createElement(_react.Text, {
    color: textColorPrimary,
    fontWeight: "500",
    fontSize: "md"
  }, value)));
}