"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = SidebarDocs;
var _react = require("@chakra-ui/react");
var _logoWhite = _interopRequireDefault(require("assets/img/layout/logoWhite.png"));
var _react2 = _interopRequireDefault(require("react"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function SidebarDocs() {
  var bgColor = "linear-gradient(135deg, #868CFF 0%, #4318FF 100%)";
  var borderColor = (0, _react.useColorModeValue)("white", "navy.800");
  return /*#__PURE__*/_react2.default.createElement(_react.Flex, {
    justify: "center",
    direction: "column",
    align: "center",
    bg: bgColor,
    borderRadius: "30px",
    position: "relative"
  }, /*#__PURE__*/_react2.default.createElement(_react.Flex, {
    border: "5px solid",
    borderColor: borderColor,
    bg: "linear-gradient(135deg, #868CFF 0%, #4318FF 100%)",
    borderRadius: "50%",
    w: "94px",
    h: "94px",
    align: "center",
    justify: "center",
    mx: "auto",
    position: "absolute",
    left: "50%",
    top: "-47px",
    transform: "translate(-50%, 0%)"
  }, /*#__PURE__*/_react2.default.createElement(_react.Image, {
    src: _logoWhite.default,
    w: "40px",
    h: "40px"
  })), /*#__PURE__*/_react2.default.createElement(_react.Flex, {
    direction: "column",
    mb: "12px",
    align: "center",
    justify: "center",
    px: "15px",
    pt: "55px"
  }, /*#__PURE__*/_react2.default.createElement(_react.Text, {
    fontSize: {
      base: "lg",
      xl: "18px"
    },
    color: "white",
    fontWeight: "bold",
    lineHeight: "150%",
    textAlign: "center",
    px: "10px",
    mt: "10px",
    mb: "6px"
  }, "Upgrade to PRO"), /*#__PURE__*/_react2.default.createElement(_react.Text, {
    fontSize: "14px",
    color: "white",
    fontWeight: "500",
    px: "10px",
    mb: "6px",
    textAlign: "center"
  }, "Improve your development process and start doing more with Horizon UI PRO!")), /*#__PURE__*/_react2.default.createElement(_react.Link, {
    href: "https://horizon-ui.com/pro?ref=horizon-chakra-free"
  }, /*#__PURE__*/_react2.default.createElement(_react.Button, {
    bg: "whiteAlpha.300",
    _hover: {
      bg: "whiteAlpha.200"
    },
    _active: {
      bg: "whiteAlpha.100"
    },
    mb: {
      sm: "16px",
      xl: "24px"
    },
    color: "white",
    fontWeight: "regular",
    fontSize: "sm",
    minW: "185px",
    mx: "auto"
  }, "Upgrade to PRO")));
}