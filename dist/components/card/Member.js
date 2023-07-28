"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Default;
var _react = _interopRequireDefault(require("react"));
var _react2 = require("@chakra-ui/react");
var _Card = _interopRequireDefault(require("components/card/Card.js"));
var _TransparentMenu = _interopRequireDefault(require("components/menu/TransparentMenu"));
var _io = require("react-icons/io5");
var _excluded = ["avatar", "name", "job"]; // Chakra imports
// Custom components
// Custom icons
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
function Default(props) {
  var avatar = props.avatar,
    name = props.name,
    job = props.job,
    rest = _objectWithoutProperties(props, _excluded);
  var textColor = (0, _react2.useColorModeValue)("secondaryGray.900", "white");
  var bg = (0, _react2.useColorModeValue)("white", "#1B254B");
  var shadow = (0, _react2.useColorModeValue)("0px 18px 40px rgba(112, 144, 176, 0.12)", "none");
  return /*#__PURE__*/_react.default.createElement(_Card.default, _extends({
    boxShadow: shadow,
    py: "10px",
    bg: bg
  }, rest), /*#__PURE__*/_react.default.createElement(_react2.Flex, {
    align: "center"
  }, /*#__PURE__*/_react.default.createElement(_react2.Flex, {
    justifyContent: "center",
    alignItems: "center"
  }, /*#__PURE__*/_react.default.createElement(_react2.Avatar, {
    h: {
      base: "48px",
      xl: "36px",
      "2xl": "48px"
    },
    w: {
      base: "48px",
      xl: "36px",
      "2xl": "48px"
    },
    src: avatar,
    me: "20px"
  }), /*#__PURE__*/_react.default.createElement(_react2.Flex, {
    direction: "column",
    align: "start"
  }, /*#__PURE__*/_react.default.createElement(_react2.Text, {
    color: textColor,
    fontSize: {
      base: "md",
      xl: "sm",
      "3xl": "md"
    },
    fontWeight: "700"
  }, name), /*#__PURE__*/_react.default.createElement(_react2.Text, {
    color: "secondaryGray.600",
    textAlign: "left",
    fontSize: {
      base: "sm",
      xl: "xs",
      "3xl": "sm"
    },
    fontWeight: "400"
  }, job))), /*#__PURE__*/_react.default.createElement(_TransparentMenu.default, {
    ms: "auto",
    mb: "0px",
    icon: /*#__PURE__*/_react.default.createElement(_react2.Icon, {
      as: _io.IoEllipsisVertical,
      w: "24px",
      h: "24px",
      color: textColor
    })
  })));
}