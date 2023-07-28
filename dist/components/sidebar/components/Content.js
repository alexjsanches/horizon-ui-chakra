"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = require("@chakra-ui/react");
var _Brand = _interopRequireDefault(require("components/sidebar/components/Brand"));
var _Links = _interopRequireDefault(require("components/sidebar/components/Links"));
var _SidebarCard = _interopRequireDefault(require("components/sidebar/components/SidebarCard"));
var _react2 = _interopRequireDefault(require("react"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
// chakra imports

//   Custom components

// FUNCTIONS

function SidebarContent(props) {
  var routes = props.routes;
  // SIDEBAR
  return /*#__PURE__*/_react2.default.createElement(_react.Flex, {
    direction: "column",
    height: "100%",
    pt: "25px",
    px: "16px",
    borderRadius: "30px"
  }, /*#__PURE__*/_react2.default.createElement(_Brand.default, null), /*#__PURE__*/_react2.default.createElement(_react.Stack, {
    direction: "column",
    mb: "auto",
    mt: "8px"
  }, /*#__PURE__*/_react2.default.createElement(_react.Box, {
    ps: "20px",
    pe: {
      md: "16px",
      "2xl": "1px"
    }
  }, /*#__PURE__*/_react2.default.createElement(_Links.default, {
    routes: routes
  }))), /*#__PURE__*/_react2.default.createElement(_react.Box, {
    mt: "60px",
    mb: "40px",
    borderRadius: "30px"
  }, /*#__PURE__*/_react2.default.createElement(_SidebarCard.default, null)));
}
var _default = SidebarContent;
exports.default = _default;