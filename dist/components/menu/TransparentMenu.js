"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Banner;
var _react = _interopRequireDefault(require("react"));
var _react2 = require("@chakra-ui/react");
var _md = require("react-icons/md");
var _excluded = ["icon"]; // Chakra imports
// Assets
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
function Banner(props) {
  var icon = props.icon,
    rest = _objectWithoutProperties(props, _excluded);

  // Ellipsis modals
  var _useDisclosure = (0, _react2.useDisclosure)(),
    isOpen1 = _useDisclosure.isOpen,
    onOpen1 = _useDisclosure.onOpen,
    onClose1 = _useDisclosure.onClose;

  // Chakra color mode

  var textColor = (0, _react2.useColorModeValue)("secondaryGray.500", "white");
  var textHover = (0, _react2.useColorModeValue)({
    color: "secondaryGray.900",
    bg: "unset"
  }, {
    color: "secondaryGray.500",
    bg: "unset"
  });
  var bgList = (0, _react2.useColorModeValue)("white", "whiteAlpha.100");
  var bgShadow = (0, _react2.useColorModeValue)("14px 17px 40px 4px rgba(112, 144, 176, 0.08)", "unset");
  return /*#__PURE__*/_react.default.createElement(_react2.Menu, {
    isOpen: isOpen1,
    onClose: onClose1
  }, /*#__PURE__*/_react.default.createElement(_react2.MenuButton, _extends({}, rest, {
    onClick: onOpen1
  }), icon), /*#__PURE__*/_react.default.createElement(_react2.MenuList, {
    w: "150px",
    minW: "unset",
    maxW: "150px !important",
    border: "transparent",
    backdropFilter: "blur(63px)",
    bg: bgList,
    boxShadow: bgShadow,
    borderRadius: "20px",
    p: "15px"
  }, /*#__PURE__*/_react.default.createElement(_react2.MenuItem, {
    transition: "0.2s linear",
    color: textColor,
    _hover: textHover,
    p: "0px",
    borderRadius: "8px",
    _active: {
      bg: "transparent"
    },
    _focus: {
      bg: "transparent"
    },
    mb: "10px"
  }, /*#__PURE__*/_react.default.createElement(_react2.Flex, {
    align: "center"
  }, /*#__PURE__*/_react.default.createElement(_react2.Icon, {
    as: _md.MdOutlinePerson,
    h: "16px",
    w: "16px",
    me: "8px"
  }), /*#__PURE__*/_react.default.createElement(_react2.Text, {
    fontSize: "sm",
    fontWeight: "400"
  }, "Panel 1"))), /*#__PURE__*/_react.default.createElement(_react2.MenuItem, {
    transition: "0.2s linear",
    p: "0px",
    borderRadius: "8px",
    color: textColor,
    _hover: textHover,
    _active: {
      bg: "transparent"
    },
    _focus: {
      bg: "transparent"
    },
    mb: "10px"
  }, /*#__PURE__*/_react.default.createElement(_react2.Flex, {
    align: "center"
  }, /*#__PURE__*/_react.default.createElement(_react2.Icon, {
    as: _md.MdOutlineCardTravel,
    h: "16px",
    w: "16px",
    me: "8px"
  }), /*#__PURE__*/_react.default.createElement(_react2.Text, {
    fontSize: "sm",
    fontWeight: "400"
  }, "Panel 2"))), /*#__PURE__*/_react.default.createElement(_react2.MenuItem, {
    transition: "0.2s linear",
    p: "0px",
    borderRadius: "8px",
    color: textColor,
    _hover: textHover,
    _active: {
      bg: "transparent"
    },
    _focus: {
      bg: "transparent"
    },
    mb: "10px"
  }, /*#__PURE__*/_react.default.createElement(_react2.Flex, {
    align: "center"
  }, /*#__PURE__*/_react.default.createElement(_react2.Icon, {
    as: _md.MdOutlineLightbulb,
    h: "16px",
    w: "16px",
    me: "8px"
  }), /*#__PURE__*/_react.default.createElement(_react2.Text, {
    fontSize: "sm",
    fontWeight: "400"
  }, "Panel 3"))), /*#__PURE__*/_react.default.createElement(_react2.MenuItem, {
    transition: "0.2s linear",
    color: textColor,
    _hover: textHover,
    p: "0px",
    borderRadius: "8px",
    _active: {
      bg: "transparent"
    },
    _focus: {
      bg: "transparent"
    }
  }, /*#__PURE__*/_react.default.createElement(_react2.Flex, {
    align: "center"
  }, /*#__PURE__*/_react.default.createElement(_react2.Icon, {
    as: _md.MdOutlineSettings,
    h: "16px",
    w: "16px",
    me: "8px"
  }), /*#__PURE__*/_react.default.createElement(_react2.Text, {
    fontSize: "sm",
    fontWeight: "400"
  }, "Panel 4")))));
}