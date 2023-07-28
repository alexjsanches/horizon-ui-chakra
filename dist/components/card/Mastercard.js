"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Banner;
var _react = _interopRequireDefault(require("react"));
var _react2 = require("@chakra-ui/react");
var _Card = _interopRequireDefault(require("components/card/Card.js"));
var _Debit = _interopRequireDefault(require("assets/img/dashboards/Debit.png"));
var _ri = require("react-icons/ri");
var _excluded = ["exp", "cvv", "number"]; // Chakra imports
// Custom components
// Assets
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
function Banner(props) {
  var exp = props.exp,
    cvv = props.cvv,
    number = props.number,
    rest = _objectWithoutProperties(props, _excluded);

  // Chakra Color Mode
  return /*#__PURE__*/_react.default.createElement(_Card.default, _extends({
    backgroundImage: _Debit.default,
    backgroundRepeat: "no-repeat",
    bgSize: "cover",
    alignSelf: "center",
    w: {
      base: "100%",
      md: "60%",
      xl: "99%"
    },
    bgPosition: "10%",
    mx: "auto",
    p: "20px"
  }, rest), /*#__PURE__*/_react.default.createElement(_react2.Flex, {
    direction: "column",
    color: "white",
    h: "100%",
    w: "100%"
  }, /*#__PURE__*/_react.default.createElement(_react2.Flex, {
    justify: "space-between",
    align: "center",
    mb: "37px"
  }, /*#__PURE__*/_react.default.createElement(_react2.Text, {
    fontSize: "2xl",
    fontWeight: "bold"
  }, "Glassy."), /*#__PURE__*/_react.default.createElement(_react2.Icon, {
    as: _ri.RiMastercardFill,
    w: "48px",
    h: "auto",
    color: "gray.400"
  })), /*#__PURE__*/_react.default.createElement(_react2.Spacer, null), /*#__PURE__*/_react.default.createElement(_react2.Flex, {
    direction: "column"
  }, /*#__PURE__*/_react.default.createElement(_react2.Box, null, /*#__PURE__*/_react.default.createElement(_react2.Text, {
    fontSize: {
      sm: "xl",
      lg: "lg",
      xl: "xl"
    },
    fontWeight: "bold"
  }, number)), /*#__PURE__*/_react.default.createElement(_react2.Flex, {
    mt: "14px"
  }, /*#__PURE__*/_react.default.createElement(_react2.Flex, {
    direction: "column",
    me: "34px"
  }, /*#__PURE__*/_react.default.createElement(_react2.Text, {
    fontSize: "xs"
  }, "VALID THRU"), /*#__PURE__*/_react.default.createElement(_react2.Text, {
    fontSize: "sm",
    fontWeight: "500"
  }, exp)), /*#__PURE__*/_react.default.createElement(_react2.Flex, {
    direction: "column"
  }, /*#__PURE__*/_react.default.createElement(_react2.Text, {
    fontSize: "xs"
  }, "CVV"), /*#__PURE__*/_react.default.createElement(_react2.Text, {
    fontSize: "sm",
    fontWeight: "500"
  }, cvv))))));
}