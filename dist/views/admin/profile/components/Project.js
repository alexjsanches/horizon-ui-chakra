"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Project;
var _react = require("@chakra-ui/react");
var _Card = _interopRequireDefault(require("components/card/Card.js"));
var _react2 = _interopRequireDefault(require("react"));
var _md = require("react-icons/md");
var _excluded = ["title", "ranking", "link", "image"]; // Chakra imports
// Custom components
// Assets
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
function Project(props) {
  var title = props.title,
    ranking = props.ranking,
    link = props.link,
    image = props.image,
    rest = _objectWithoutProperties(props, _excluded);
  // Chakra Color Mode
  var textColorPrimary = (0, _react.useColorModeValue)("secondaryGray.900", "white");
  var textColorSecondary = "gray.400";
  var brandColor = (0, _react.useColorModeValue)("brand.500", "white");
  var bg = (0, _react.useColorModeValue)("white", "navy.700");
  return /*#__PURE__*/_react2.default.createElement(_Card.default, _extends({
    bg: bg
  }, rest, {
    p: "14px"
  }), /*#__PURE__*/_react2.default.createElement(_react.Flex, {
    align: "center",
    direction: {
      base: "column",
      md: "row"
    }
  }, /*#__PURE__*/_react2.default.createElement(_react.Image, {
    h: "80px",
    w: "80px",
    src: image,
    borderRadius: "8px",
    me: "20px"
  }), /*#__PURE__*/_react2.default.createElement(_react.Box, {
    mt: {
      base: "10px",
      md: "0"
    }
  }, /*#__PURE__*/_react2.default.createElement(_react.Text, {
    color: textColorPrimary,
    fontWeight: "500",
    fontSize: "md",
    mb: "4px"
  }, title), /*#__PURE__*/_react2.default.createElement(_react.Text, {
    fontWeight: "500",
    color: textColorSecondary,
    fontSize: "sm",
    me: "4px"
  }, "Project #", ranking, " \u2022", " ", /*#__PURE__*/_react2.default.createElement(_react.Link, {
    fontWeight: "500",
    color: brandColor,
    href: link,
    fontSize: "sm"
  }, "See project details"))), /*#__PURE__*/_react2.default.createElement(_react.Link, {
    href: link,
    variant: "no-hover",
    me: "16px",
    ms: "auto",
    p: "0px !important"
  }, /*#__PURE__*/_react2.default.createElement(_react.Icon, {
    as: _md.MdEdit,
    color: "secondaryGray.500",
    h: "18px",
    w: "18px"
  }))));
}