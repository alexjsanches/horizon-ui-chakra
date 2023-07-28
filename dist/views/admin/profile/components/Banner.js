"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Banner;
var _react = require("@chakra-ui/react");
var _Card = _interopRequireDefault(require("components/card/Card.js"));
var _react2 = _interopRequireDefault(require("react"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
// Chakra imports

function Banner(props) {
  var banner = props.banner,
    avatar = props.avatar,
    name = props.name,
    job = props.job,
    posts = props.posts,
    followers = props.followers,
    following = props.following;
  // Chakra Color Mode
  var textColorPrimary = (0, _react.useColorModeValue)("secondaryGray.900", "white");
  var textColorSecondary = "gray.400";
  var borderColor = (0, _react.useColorModeValue)("white !important", "#111C44 !important");
  return /*#__PURE__*/_react2.default.createElement(_Card.default, {
    mb: {
      base: "0px",
      lg: "20px"
    },
    align: "center"
  }, /*#__PURE__*/_react2.default.createElement(_react.Box, {
    bg: "url(".concat(banner, ")"),
    bgSize: "cover",
    borderRadius: "16px",
    h: "131px",
    w: "100%"
  }), /*#__PURE__*/_react2.default.createElement(_react.Avatar, {
    mx: "auto",
    src: avatar,
    h: "87px",
    w: "87px",
    mt: "-43px",
    border: "4px solid",
    borderColor: borderColor
  }), /*#__PURE__*/_react2.default.createElement(_react.Text, {
    color: textColorPrimary,
    fontWeight: "bold",
    fontSize: "xl",
    mt: "10px"
  }, name), /*#__PURE__*/_react2.default.createElement(_react.Text, {
    color: textColorSecondary,
    fontSize: "sm"
  }, job), /*#__PURE__*/_react2.default.createElement(_react.Flex, {
    w: "max-content",
    mx: "auto",
    mt: "26px"
  }, /*#__PURE__*/_react2.default.createElement(_react.Flex, {
    mx: "auto",
    me: "60px",
    align: "center",
    direction: "column"
  }, /*#__PURE__*/_react2.default.createElement(_react.Text, {
    color: textColorPrimary,
    fontSize: "2xl",
    fontWeight: "700"
  }, posts), /*#__PURE__*/_react2.default.createElement(_react.Text, {
    color: textColorSecondary,
    fontSize: "sm",
    fontWeight: "400"
  }, "Posts")), /*#__PURE__*/_react2.default.createElement(_react.Flex, {
    mx: "auto",
    me: "60px",
    align: "center",
    direction: "column"
  }, /*#__PURE__*/_react2.default.createElement(_react.Text, {
    color: textColorPrimary,
    fontSize: "2xl",
    fontWeight: "700"
  }, followers), /*#__PURE__*/_react2.default.createElement(_react.Text, {
    color: textColorSecondary,
    fontSize: "sm",
    fontWeight: "400"
  }, "Followers")), /*#__PURE__*/_react2.default.createElement(_react.Flex, {
    mx: "auto",
    align: "center",
    direction: "column"
  }, /*#__PURE__*/_react2.default.createElement(_react.Text, {
    color: textColorPrimary,
    fontSize: "2xl",
    fontWeight: "700"
  }, following), /*#__PURE__*/_react2.default.createElement(_react.Text, {
    color: textColorSecondary,
    fontSize: "sm",
    fontWeight: "400"
  }, "Following"))));
}