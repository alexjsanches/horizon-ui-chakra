"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Default;
var _react = require("@chakra-ui/react");
var _react2 = _interopRequireDefault(require("react"));
var _excluded = ["id", "label", "isChecked", "onChange", "desc", "textWidth", "reversed", "fontSize"]; // Chakra imports
// Custom components
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
function Default(props) {
  var id = props.id,
    label = props.label,
    isChecked = props.isChecked,
    onChange = props.onChange,
    desc = props.desc,
    textWidth = props.textWidth,
    reversed = props.reversed,
    fontSize = props.fontSize,
    rest = _objectWithoutProperties(props, _excluded);
  var _React$useState = _react2.default.useState(isChecked),
    _React$useState2 = _slicedToArray(_React$useState, 2),
    checked = _React$useState2[0],
    setChecked = _React$useState2[1];
  var textColorPrimary = (0, _react.useColorModeValue)("secondaryGray.900", "white");
  return /*#__PURE__*/_react2.default.createElement(_react.Box, _extends({
    w: "100%",
    fontWeight: "500"
  }, rest), reversed ? /*#__PURE__*/_react2.default.createElement(_react.Flex, {
    align: "center",
    borderRadius: "16px"
  }, isChecked ? /*#__PURE__*/_react2.default.createElement(_react.Switch, {
    isChecked: checked,
    id: id,
    variant: "main",
    colorScheme: "brandScheme",
    size: "md",
    onChange: function onChange() {
      return setChecked(!checked);
    }
  }) : /*#__PURE__*/_react2.default.createElement(_react.Switch, {
    id: id,
    variant: "main",
    colorScheme: "brandScheme",
    size: "md"
  }), /*#__PURE__*/_react2.default.createElement(_react.FormLabel, {
    ms: "15px",
    htmlFor: id,
    _hover: {
      cursor: "pointer"
    },
    direction: "column",
    mb: "0px",
    maxW: textWidth ? textWidth : "75%"
  }, /*#__PURE__*/_react2.default.createElement(_react.Text, {
    color: textColorPrimary,
    fontSize: "md",
    fontWeight: "500"
  }, label), /*#__PURE__*/_react2.default.createElement(_react.Text, {
    color: "secondaryGray.600",
    fontSize: fontSize ? fontSize : "md"
  }, desc))) : /*#__PURE__*/_react2.default.createElement(_react.Flex, {
    justify: "space-between",
    align: "center",
    borderRadius: "16px"
  }, /*#__PURE__*/_react2.default.createElement(_react.FormLabel, {
    htmlFor: id,
    _hover: {
      cursor: "pointer"
    },
    direction: "column",
    maxW: textWidth ? textWidth : "75%"
  }, /*#__PURE__*/_react2.default.createElement(_react.Text, {
    color: textColorPrimary,
    fontSize: "md",
    fontWeight: "500"
  }, label), /*#__PURE__*/_react2.default.createElement(_react.Text, {
    color: "secondaryGray.600",
    fontSize: fontSize ? fontSize : "md"
  }, desc)), isChecked && onChange ? /*#__PURE__*/_react2.default.createElement(_react.Switch, {
    isChecked: isChecked,
    id: id,
    variant: "main",
    colorScheme: "brandScheme",
    size: "md",
    onChange: onChange
  }) : /*#__PURE__*/_react2.default.createElement(_react.Switch, {
    id: id,
    variant: "main",
    colorScheme: "brandScheme",
    size: "md"
  })));
}