"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = NFT;
var _react = _interopRequireDefault(require("react"));
var _react2 = require("@chakra-ui/react");
var _Card = _interopRequireDefault(require("components/card/Card.js"));
var _fa = require("react-icons/fa");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
// Chakra imports

// Custom components

// Assets

function NFT(props) {
  var image = props.image,
    name = props.name,
    author = props.author,
    date = props.date,
    price = props.price;
  // Chakra Color Mode
  var textColor = (0, _react2.useColorModeValue)("brands.900", "white");
  var bgItem = (0, _react2.useColorModeValue)({
    bg: "white",
    boxShadow: "0px 40px 58px -20px rgba(112, 144, 176, 0.12)"
  }, {
    bg: "navy.700",
    boxShadow: "unset"
  });
  var textColorDate = (0, _react2.useColorModeValue)("secondaryGray.600", "white");
  return /*#__PURE__*/_react.default.createElement(_Card.default, {
    _hover: bgItem,
    bg: "transparent",
    boxShadow: "unset",
    px: "24px",
    py: "21px",
    transition: "0.2s linear"
  }, /*#__PURE__*/_react.default.createElement(_react2.Flex, {
    direction: {
      base: "column"
    },
    justify: "center"
  }, /*#__PURE__*/_react.default.createElement(_react2.Flex, {
    position: "relative",
    align: "center"
  }, /*#__PURE__*/_react.default.createElement(_react2.Image, {
    src: image,
    w: "66px",
    h: "66px",
    borderRadius: "20px",
    me: "16px"
  }), /*#__PURE__*/_react.default.createElement(_react2.Flex, {
    direction: "column",
    w: {
      base: "70%",
      md: "100%"
    },
    me: {
      base: "4px",
      md: "32px",
      xl: "10px",
      "3xl": "32px"
    }
  }, /*#__PURE__*/_react.default.createElement(_react2.Text, {
    color: textColor,
    fontSize: {
      base: "md"
    },
    mb: "5px",
    fontWeight: "bold",
    me: "14px"
  }, name), /*#__PURE__*/_react.default.createElement(_react2.Text, {
    color: "secondaryGray.600",
    fontSize: {
      base: "sm"
    },
    fontWeight: "400",
    me: "14px"
  }, author)), /*#__PURE__*/_react.default.createElement(_react2.Flex, {
    me: {
      base: "4px",
      md: "32px",
      xl: "10px",
      "3xl": "32px"
    },
    align: "center"
  }, /*#__PURE__*/_react.default.createElement(_react2.Icon, {
    as: _fa.FaEthereum,
    color: textColor,
    width: "9px",
    me: "7px"
  }), /*#__PURE__*/_react.default.createElement(_react2.Text, {
    fontWeight: "700",
    fontSize: "md",
    color: textColor
  }, price)), /*#__PURE__*/_react.default.createElement(_react2.Text, {
    ms: "auto",
    fontWeight: "700",
    fontSize: "sm",
    color: textColorDate
  }, date))));
}