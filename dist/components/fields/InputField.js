"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Default;
var _react = require("@chakra-ui/react");
var _react2 = _interopRequireDefault(require("react"));
var _excluded = ["id", "label", "extra", "placeholder", "type", "mb"]; // Chakra imports
// Custom components
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
function Default(props) {
  var id = props.id,
    label = props.label,
    extra = props.extra,
    placeholder = props.placeholder,
    type = props.type,
    mb = props.mb,
    rest = _objectWithoutProperties(props, _excluded);
  // Chakra Color Mode
  var textColorPrimary = (0, _react.useColorModeValue)("secondaryGray.900", "white");
  return /*#__PURE__*/_react2.default.createElement(_react.Flex, {
    direction: "column",
    mb: mb ? mb : "30px"
  }, /*#__PURE__*/_react2.default.createElement(_react.FormLabel, {
    display: "flex",
    ms: "10px",
    htmlFor: id,
    fontSize: "sm",
    color: textColorPrimary,
    fontWeight: "bold",
    _hover: {
      cursor: "pointer"
    }
  }, label, /*#__PURE__*/_react2.default.createElement(_react.Text, {
    fontSize: "sm",
    fontWeight: "400",
    ms: "2px"
  }, extra)), /*#__PURE__*/_react2.default.createElement(_react.Input, _extends({}, rest, {
    type: type,
    id: id,
    fontWeight: "500",
    variant: "main",
    placeholder: placeholder,
    _placeholder: {
      fontWeight: "400",
      color: "secondaryGray.600"
    },
    h: "44px",
    maxh: "44px"
  })));
}