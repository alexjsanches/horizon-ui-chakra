"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = TimelineRow;
var _react = require("@chakra-ui/react");
var _react2 = _interopRequireDefault(require("react"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function TimelineRow(props) {
  var logo = props.logo,
    title = props.title,
    date = props.date,
    color = props.color,
    index = props.index,
    arrLength = props.arrLength;
  var textColor = (0, _react.useColorModeValue)('gray.700', 'white.300');
  var bgIconColor = (0, _react.useColorModeValue)('white.300', 'gray.700');
  return /*#__PURE__*/_react2.default.createElement(_react.Flex, {
    alignItems: "center",
    minH: "78px",
    justifyContent: "start",
    mb: "5px"
  }, /*#__PURE__*/_react2.default.createElement(_react.Flex, {
    direction: "column",
    h: "100%"
  }, /*#__PURE__*/_react2.default.createElement(_react.Icon, {
    as: logo,
    bg: bgIconColor,
    color: color,
    h: '30px',
    w: '26px',
    pe: "6px",
    zIndex: "1",
    position: "relative",
    right: document.documentElement.dir === 'rtl' ? '-8px' : '',
    left: document.documentElement.dir === 'rtl' ? '' : '-8px'
  }), /*#__PURE__*/_react2.default.createElement(_react.Box, {
    w: "2px",
    bg: "gray.200",
    h: index === arrLength - 1 ? '15px' : '100%'
  })), /*#__PURE__*/_react2.default.createElement(_react.Flex, {
    direction: "column",
    justifyContent: "flex-start",
    h: "100%"
  }, /*#__PURE__*/_react2.default.createElement(_react.Text, {
    fontSize: "sm",
    color: textColor,
    fontWeight: "bold"
  }, title), /*#__PURE__*/_react2.default.createElement(_react.Text, {
    fontSize: "sm",
    color: "gray.400",
    fontWeight: "normal"
  }, date)));
}