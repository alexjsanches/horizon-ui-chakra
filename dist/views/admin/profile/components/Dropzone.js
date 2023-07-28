"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = require("@chakra-ui/react");
var _react2 = _interopRequireDefault(require("react"));
var _reactDropzone = require("react-dropzone");
var _excluded = ["content"]; // Chakra imports
// Assets
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
function Dropzone(props) {
  var content = props.content,
    rest = _objectWithoutProperties(props, _excluded);
  var _useDropzone = (0, _reactDropzone.useDropzone)(),
    getRootProps = _useDropzone.getRootProps,
    getInputProps = _useDropzone.getInputProps;
  var bg = (0, _react.useColorModeValue)("gray.100", "navy.700");
  var borderColor = (0, _react.useColorModeValue)("secondaryGray.100", "whiteAlpha.100");
  return /*#__PURE__*/_react2.default.createElement(_react.Flex, _extends({
    align: "center",
    justify: "center",
    bg: bg,
    border: "1px dashed",
    borderColor: borderColor,
    borderRadius: "16px",
    w: "100%",
    h: "max-content",
    minH: "100%",
    cursor: "pointer"
  }, getRootProps({
    className: "dropzone"
  }), rest), /*#__PURE__*/_react2.default.createElement(_react.Input, _extends({
    variant: "main"
  }, getInputProps())), /*#__PURE__*/_react2.default.createElement(_react.Button, {
    variant: "no-effects"
  }, content));
}
var _default = Dropzone;
exports.default = _default;