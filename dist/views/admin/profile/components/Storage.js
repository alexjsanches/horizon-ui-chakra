"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Banner;
var _react = require("@chakra-ui/react");
var _Card = _interopRequireDefault(require("components/card/Card.js"));
var _IconBox = _interopRequireDefault(require("components/icons/IconBox"));
var _MainMenu = _interopRequireDefault(require("components/menu/MainMenu"));
var _react2 = _interopRequireDefault(require("react"));
var _md = require("react-icons/md");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
// Chakra imports

// Custom components

// Assets

function Banner(props) {
  var used = props.used,
    total = props.total;
  // Chakra Color Mode
  var textColorPrimary = (0, _react.useColorModeValue)("secondaryGray.900", "white");
  var brandColor = (0, _react.useColorModeValue)("brand.500", "white");
  var textColorSecondary = "gray.400";
  var box = (0, _react.useColorModeValue)("secondaryGray.300", "whiteAlpha.100");
  return /*#__PURE__*/_react2.default.createElement(_Card.default, {
    mb: {
      base: "0px",
      lg: "20px"
    },
    align: "center"
  }, /*#__PURE__*/_react2.default.createElement(_react.Flex, {
    w: "100%"
  }, /*#__PURE__*/_react2.default.createElement(_MainMenu.default, {
    ms: "auto"
  })), /*#__PURE__*/_react2.default.createElement(_IconBox.default, {
    mx: "auto",
    h: "100px",
    w: "100px",
    icon: /*#__PURE__*/_react2.default.createElement(_react.Icon, {
      as: _md.MdOutlineCloudDone,
      color: brandColor,
      h: "46px",
      w: "46px"
    }),
    bg: box
  }), /*#__PURE__*/_react2.default.createElement(_react.Text, {
    color: textColorPrimary,
    fontWeight: "bold",
    fontSize: "2xl",
    mt: "10px"
  }, "Your storage"), /*#__PURE__*/_react2.default.createElement(_react.Text, {
    color: textColorSecondary,
    fontSize: "md",
    maxW: {
      base: "100%",
      xl: "80%",
      "3xl": "60%"
    },
    mx: "auto"
  }, "Supervise your drive space in the easiest way"), /*#__PURE__*/_react2.default.createElement(_react.Box, {
    w: "100%",
    mt: "auto"
  }, /*#__PURE__*/_react2.default.createElement(_react.Flex, {
    w: "100%",
    justify: "space-between",
    mb: "10px"
  }, /*#__PURE__*/_react2.default.createElement(_react.Text, {
    color: textColorSecondary,
    fontSize: "sm",
    maxW: "40%"
  }, used, " GB"), /*#__PURE__*/_react2.default.createElement(_react.Text, {
    color: textColorSecondary,
    fontSize: "sm",
    maxW: "40%"
  }, total, " GB")), /*#__PURE__*/_react2.default.createElement(_react.Progress, {
    align: "start",
    colorScheme: "brandScheme",
    value: used / total * 100,
    w: "100%"
  })));
}