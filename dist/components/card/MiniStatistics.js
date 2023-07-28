"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Default;
var _react = require("@chakra-ui/react");
var _Card = _interopRequireDefault(require("components/card/Card.js"));
var _react2 = _interopRequireDefault(require("react"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
// Chakra imports
// Chakra imports

// Custom components

// Custom icons

function Default(props) {
  var startContent = props.startContent,
    endContent = props.endContent,
    name = props.name,
    growth = props.growth,
    value = props.value;
  var textColor = (0, _react.useColorModeValue)("secondaryGray.900", "white");
  var textColorSecondary = "secondaryGray.600";
  return /*#__PURE__*/_react2.default.createElement(_Card.default, {
    py: "15px"
  }, /*#__PURE__*/_react2.default.createElement(_react.Flex, {
    my: "auto",
    h: "100%",
    align: {
      base: "center",
      xl: "start"
    },
    justify: {
      base: "center",
      xl: "center"
    }
  }, startContent, /*#__PURE__*/_react2.default.createElement(_react.Stat, {
    my: "auto",
    ms: startContent ? "18px" : "0px"
  }, /*#__PURE__*/_react2.default.createElement(_react.StatLabel, {
    lineHeight: "100%",
    color: textColorSecondary,
    fontSize: {
      base: "sm"
    }
  }, name), /*#__PURE__*/_react2.default.createElement(_react.StatNumber, {
    color: textColor,
    fontSize: {
      base: "2xl"
    }
  }, value), growth ? /*#__PURE__*/_react2.default.createElement(_react.Flex, {
    align: "center"
  }, /*#__PURE__*/_react2.default.createElement(_react.Text, {
    color: "green.500",
    fontSize: "xs",
    fontWeight: "700",
    me: "5px"
  }, growth), /*#__PURE__*/_react2.default.createElement(_react.Text, {
    color: "secondaryGray.600",
    fontSize: "xs",
    fontWeight: "400"
  }, "since last month")) : null), /*#__PURE__*/_react2.default.createElement(_react.Flex, {
    ms: "auto",
    w: "max-content"
  }, endContent)));
}