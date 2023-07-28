"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Banner;
var _react = _interopRequireDefault(require("react"));
var _react2 = require("@chakra-ui/react");
var _NftBanner = _interopRequireDefault(require("assets/img/nfts/NftBanner1.png"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
// Chakra imports

// Assets

function Banner() {
  // Chakra Color Mode
  return /*#__PURE__*/_react.default.createElement(_react2.Flex, {
    direction: "column",
    bgImage: _NftBanner.default,
    bgSize: "cover",
    py: {
      base: "30px",
      md: "56px"
    },
    px: {
      base: "30px",
      md: "64px"
    },
    borderRadius: "30px"
  }, /*#__PURE__*/_react.default.createElement(_react2.Text, {
    fontSize: {
      base: "24px",
      md: "34px"
    },
    color: "white",
    mb: "14px",
    maxW: {
      base: "100%",
      md: "64%",
      lg: "46%",
      xl: "70%",
      "2xl": "50%",
      "3xl": "42%"
    },
    fontWeight: "700",
    lineHeight: {
      base: "32px",
      md: "42px"
    }
  }, "Discover, collect, and sell extraordinary NFTs"), /*#__PURE__*/_react.default.createElement(_react2.Text, {
    fontSize: "md",
    color: "#E3DAFF",
    maxW: {
      base: "100%",
      md: "64%",
      lg: "40%",
      xl: "56%",
      "2xl": "46%",
      "3xl": "34%"
    },
    fontWeight: "500",
    mb: "40px",
    lineHeight: "28px"
  }, "Enter in this creative world. Discover now the latest NFTs or start creating your own!"), /*#__PURE__*/_react.default.createElement(_react2.Flex, {
    align: "center"
  }, /*#__PURE__*/_react.default.createElement(_react2.Button, {
    bg: "white",
    color: "black",
    _hover: {
      bg: "whiteAlpha.900"
    },
    _active: {
      bg: "white"
    },
    _focus: {
      bg: "white"
    },
    fontWeight: "500",
    fontSize: "14px",
    py: "20px",
    px: "27",
    me: "38px"
  }, "Discover now"), /*#__PURE__*/_react.default.createElement(_react2.Link, null, /*#__PURE__*/_react.default.createElement(_react2.Text, {
    color: "white",
    fontSize: "sm",
    fontWeight: "500"
  }, "Watch video"))));
}