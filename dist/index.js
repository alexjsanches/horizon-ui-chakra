"use strict";

var _react = _interopRequireDefault(require("react"));
var _reactDom = _interopRequireDefault(require("react-dom"));
require("assets/css/App.css");
var _reactRouterDom = require("react-router-dom");
var _auth = _interopRequireDefault(require("layouts/auth"));
var _admin = _interopRequireDefault(require("layouts/admin"));
var _rtl = _interopRequireDefault(require("layouts/rtl"));
var _react2 = require("@chakra-ui/react");
var _theme = _interopRequireDefault(require("theme/theme"));
var _chakraUi = require("@hypertheme-editor/chakra-ui");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
_reactDom.default.render( /*#__PURE__*/_react.default.createElement(_react2.ChakraProvider, {
  theme: _theme.default
}, /*#__PURE__*/_react.default.createElement(_react.default.StrictMode, null, /*#__PURE__*/_react.default.createElement(_chakraUi.ThemeEditorProvider, null, /*#__PURE__*/_react.default.createElement(_reactRouterDom.HashRouter, null, /*#__PURE__*/_react.default.createElement(_reactRouterDom.Switch, null, /*#__PURE__*/_react.default.createElement(_reactRouterDom.Route, {
  path: "/auth",
  component: _auth.default
}), /*#__PURE__*/_react.default.createElement(_reactRouterDom.Route, {
  path: "/admin",
  component: _admin.default
}), /*#__PURE__*/_react.default.createElement(_reactRouterDom.Route, {
  path: "/rtl",
  component: _rtl.default
}), /*#__PURE__*/_react.default.createElement(_reactRouterDom.Redirect, {
  from: "/",
  to: "/admin"
})))))), document.getElementById('root'));