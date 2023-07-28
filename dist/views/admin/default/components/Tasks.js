"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Conversion;
var _react = require("@chakra-ui/react");
var _Card = _interopRequireDefault(require("components/card/Card.js"));
var _MainMenu = _interopRequireDefault(require("components/menu/MainMenu"));
var _IconBox = _interopRequireDefault(require("components/icons/IconBox"));
var _md = require("react-icons/md");
var _react2 = _interopRequireDefault(require("react"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _objectDestructuringEmpty(obj) { if (obj == null) throw new TypeError("Cannot destructure " + obj); }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); } // Chakra imports
// Custom components
// Assets
function Conversion(props) {
  var rest = _extends({}, (_objectDestructuringEmpty(props), props));

  // Chakra Color Mode
  var textColor = (0, _react.useColorModeValue)("secondaryGray.900", "white");
  var boxBg = (0, _react.useColorModeValue)("secondaryGray.300", "navy.700");
  var brandColor = (0, _react.useColorModeValue)("brand.500", "brand.400");
  return /*#__PURE__*/_react2.default.createElement(_Card.default, _extends({
    p: "20px",
    align: "center",
    direction: "column",
    w: "100%"
  }, rest), /*#__PURE__*/_react2.default.createElement(_react.Flex, {
    alignItems: "center",
    w: "100%",
    mb: "30px"
  }, /*#__PURE__*/_react2.default.createElement(_IconBox.default, {
    me: "12px",
    w: "38px",
    h: "38px",
    bg: boxBg,
    icon: /*#__PURE__*/_react2.default.createElement(_react.Icon, {
      as: _md.MdCheckBox,
      color: brandColor,
      w: "24px",
      h: "24px"
    })
  }), /*#__PURE__*/_react2.default.createElement(_react.Text, {
    color: textColor,
    fontSize: "lg",
    fontWeight: "700"
  }, "Tasks"), /*#__PURE__*/_react2.default.createElement(_MainMenu.default, {
    ms: "auto"
  })), /*#__PURE__*/_react2.default.createElement(_react.Box, {
    px: "11px"
  }, /*#__PURE__*/_react2.default.createElement(_react.Flex, {
    mb: "20px"
  }, /*#__PURE__*/_react2.default.createElement(_react.Checkbox, {
    me: "16px",
    colorScheme: "brandScheme"
  }), /*#__PURE__*/_react2.default.createElement(_react.Text, {
    fontWeight: "bold",
    color: textColor,
    fontSize: "md",
    textAlign: "start"
  }, "Landing Page Design"), /*#__PURE__*/_react2.default.createElement(_react.Icon, {
    ms: "auto",
    as: _md.MdDragIndicator,
    color: "secondaryGray.600",
    w: "24px",
    h: "24px"
  })), /*#__PURE__*/_react2.default.createElement(_react.Flex, {
    mb: "20px"
  }, /*#__PURE__*/_react2.default.createElement(_react.Checkbox, {
    me: "16px",
    defaultChecked: true,
    colorScheme: "brandScheme"
  }), /*#__PURE__*/_react2.default.createElement(_react.Text, {
    fontWeight: "bold",
    color: textColor,
    fontSize: "md",
    textAlign: "start"
  }, "Dashboard Builder"), /*#__PURE__*/_react2.default.createElement(_react.Icon, {
    ms: "auto",
    as: _md.MdDragIndicator,
    color: "secondaryGray.600",
    w: "24px",
    h: "24px"
  })), /*#__PURE__*/_react2.default.createElement(_react.Flex, {
    mb: "20px"
  }, /*#__PURE__*/_react2.default.createElement(_react.Checkbox, {
    defaultChecked: true,
    me: "16px",
    colorScheme: "brandScheme"
  }), /*#__PURE__*/_react2.default.createElement(_react.Text, {
    fontWeight: "bold",
    color: textColor,
    fontSize: "md",
    textAlign: "start"
  }, "Mobile App Design"), /*#__PURE__*/_react2.default.createElement(_react.Icon, {
    ms: "auto",
    as: _md.MdDragIndicator,
    color: "secondaryGray.600",
    w: "24px",
    h: "24px"
  })), /*#__PURE__*/_react2.default.createElement(_react.Flex, {
    mb: "20px"
  }, /*#__PURE__*/_react2.default.createElement(_react.Checkbox, {
    me: "16px",
    colorScheme: "brandScheme"
  }), /*#__PURE__*/_react2.default.createElement(_react.Text, {
    fontWeight: "bold",
    color: textColor,
    fontSize: "md",
    textAlign: "start"
  }, "Illustrations"), /*#__PURE__*/_react2.default.createElement(_react.Icon, {
    ms: "auto",
    as: _md.MdDragIndicator,
    color: "secondaryGray.600",
    w: "24px",
    h: "24px"
  })), /*#__PURE__*/_react2.default.createElement(_react.Flex, {
    mb: "20px"
  }, /*#__PURE__*/_react2.default.createElement(_react.Checkbox, {
    defaultChecked: true,
    me: "16px",
    colorScheme: "brandScheme"
  }), /*#__PURE__*/_react2.default.createElement(_react.Text, {
    fontWeight: "bold",
    color: textColor,
    fontSize: "md",
    textAlign: "start"
  }, "Promotional LP"), /*#__PURE__*/_react2.default.createElement(_react.Icon, {
    ms: "auto",
    as: _md.MdDragIndicator,
    color: "secondaryGray.600",
    w: "24px",
    h: "24px"
  }))));
}