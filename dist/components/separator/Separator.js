"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.VSeparator = exports.HSeparator = void 0;
var _react = require("@chakra-ui/react");
var _react2 = _interopRequireDefault(require("react"));
var _excluded = ["variant", "children"],
  _excluded2 = ["variant", "children"];
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
var HSeparator = function HSeparator(props) {
  var variant = props.variant,
    children = props.children,
    rest = _objectWithoutProperties(props, _excluded);
  return /*#__PURE__*/_react2.default.createElement(_react.Flex, _extends({
    h: "1px",
    w: "100%",
    bg: "rgba(135, 140, 189, 0.3)"
  }, rest));
};
exports.HSeparator = HSeparator;
var VSeparator = function VSeparator(props) {
  var variant = props.variant,
    children = props.children,
    rest = _objectWithoutProperties(props, _excluded2);
  return /*#__PURE__*/_react2.default.createElement(_react.Flex, _extends({
    w: "1px",
    bg: "rgba(135, 140, 189, 0.3)"
  }, rest));
};
exports.VSeparator = VSeparator;