"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SidebarBrand = SidebarBrand;
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _react2 = require("@chakra-ui/react");
var _Icons = require("components/icons/Icons");
var _Separator = require("components/separator/Separator");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
// Chakra imports

// Custom components

function SidebarBrand() {
  //   Chakra color mode
  var logoColor = (0, _react2.useColorModeValue)("navy.700", "white");
  return /*#__PURE__*/_react.default.createElement(_react2.Flex, {
    align: "center",
    direction: "column"
  }, /*#__PURE__*/_react.default.createElement(_Icons.HorizonLogo, {
    h: "26px",
    w: "175px",
    my: "32px",
    color: logoColor
  }), /*#__PURE__*/_react.default.createElement(_Separator.HSeparator, {
    mb: "20px"
  }));
}
var _default = SidebarBrand;
exports.default = _default;