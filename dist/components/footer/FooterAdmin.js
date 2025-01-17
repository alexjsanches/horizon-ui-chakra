"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Footer;
var _react = _interopRequireDefault(require("react"));
var _react2 = require("@chakra-ui/react");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
/*eslint-disable*/

function Footer() {
  var textColor = (0, _react2.useColorModeValue)("gray.400", "white");
  var _useColorMode = (0, _react2.useColorMode)(),
    toggleColorMode = _useColorMode.toggleColorMode;
  return /*#__PURE__*/_react.default.createElement(_react2.Flex, {
    zIndex: "3",
    flexDirection: {
      base: "column",
      xl: "row"
    },
    alignItems: {
      base: "center",
      xl: "start"
    },
    justifyContent: "space-between",
    px: {
      base: "30px",
      md: "50px"
    },
    pb: "30px"
  }, /*#__PURE__*/_react.default.createElement(_react2.Text, {
    color: textColor,
    textAlign: {
      base: "center",
      xl: "start"
    },
    mb: {
      base: "20px",
      xl: "0px"
    }
  }, " ", "\xA9 ", 1900 + new Date().getYear(), /*#__PURE__*/_react.default.createElement(_react2.Text, {
    as: "span",
    fontWeight: "500",
    ms: "4px"
  }, "Horizon UI. All Rights Reserved. Made with love by", /*#__PURE__*/_react.default.createElement(_react2.Link, {
    mx: "3px",
    color: textColor,
    href: "https://www.simmmple.com?ref=horizon-chakra-free",
    target: "_blank",
    fontWeight: "700"
  }, "Simmmple!"))), /*#__PURE__*/_react.default.createElement(_react2.List, {
    display: "flex"
  }, /*#__PURE__*/_react.default.createElement(_react2.ListItem, {
    me: {
      base: "20px",
      md: "44px"
    }
  }, /*#__PURE__*/_react.default.createElement(_react2.Link, {
    fontWeight: "500",
    color: textColor,
    href: "mailto:hello@simmmple.com"
  }, "Support")), /*#__PURE__*/_react.default.createElement(_react2.ListItem, {
    me: {
      base: "20px",
      md: "44px"
    }
  }, /*#__PURE__*/_react.default.createElement(_react2.Link, {
    fontWeight: "500",
    color: textColor,
    href: "https://www.simmmple.com/licenses?ref=horizon-chakra-free"
  }, "License")), /*#__PURE__*/_react.default.createElement(_react2.ListItem, {
    me: {
      base: "20px",
      md: "44px"
    }
  }, /*#__PURE__*/_react.default.createElement(_react2.Link, {
    fontWeight: "500",
    color: textColor,
    href: "https://simmmple.com/terms-of-service?ref=horizon-chakra-free"
  }, "Terms of Use")), /*#__PURE__*/_react.default.createElement(_react2.ListItem, null, /*#__PURE__*/_react.default.createElement(_react2.Link, {
    fontWeight: "500",
    color: textColor,
    href: "https://www.blog.simmmple.com/?ref=horizon-chakra-free"
  }, "Blog"))));
}