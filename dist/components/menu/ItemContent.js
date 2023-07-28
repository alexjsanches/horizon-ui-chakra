"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ItemContent = ItemContent;
var _react = require("@chakra-ui/react");
var _md = require("react-icons/md");
var _react2 = _interopRequireDefault(require("react"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
// chakra imports

function ItemContent(props) {
  var textColor = (0, _react.useColorModeValue)("navy.700", "white");
  return /*#__PURE__*/_react2.default.createElement(_react2.default.Fragment, null, /*#__PURE__*/_react2.default.createElement(_react.Flex, {
    justify: "center",
    align: "center",
    borderRadius: "16px",
    minH: {
      base: "60px",
      md: "70px"
    },
    h: {
      base: "60px",
      md: "70px"
    },
    minW: {
      base: "60px",
      md: "70px"
    },
    w: {
      base: "60px",
      md: "70px"
    },
    me: "14px",
    bg: "linear-gradient(135deg, #868CFF 0%, #4318FF 100%)"
  }, /*#__PURE__*/_react2.default.createElement(_react.Icon, {
    as: _md.MdUpgrade,
    color: "white",
    w: 8,
    h: 14
  })), /*#__PURE__*/_react2.default.createElement(_react.Flex, {
    flexDirection: "column"
  }, /*#__PURE__*/_react2.default.createElement(_react.Text, {
    mb: "5px",
    fontWeight: "bold",
    color: textColor,
    fontSize: {
      base: "md",
      md: "md"
    }
  }, "New Update: ", props.info), /*#__PURE__*/_react2.default.createElement(_react.Flex, {
    alignItems: "center"
  }, /*#__PURE__*/_react2.default.createElement(_react.Text, {
    fontSize: {
      base: "sm",
      md: "sm"
    },
    lineHeight: "100%",
    color: textColor
  }, "A new update for your downloaded item is available!"))));
}