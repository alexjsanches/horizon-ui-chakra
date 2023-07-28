"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ThemeEditor = ThemeEditor;
var _react = _interopRequireDefault(require("react"));
var _chakraUi = require("@hypertheme-editor/chakra-ui");
var _react2 = require("@chakra-ui/react");
var _cg = require("react-icons/cg");
var _im = require("react-icons/im");
var _md = require("react-icons/md");
var _excluded = ["onOpen", "navbarIcon"];
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
function ThemeEditor(props) {
  return /*#__PURE__*/_react.default.createElement(_chakraUi.ThemeEditor, null, /*#__PURE__*/_react.default.createElement(ThemeEditorButton, props), /*#__PURE__*/_react.default.createElement(_chakraUi.ThemeEditorDrawer, {
    hideUpgradeToPro: true
  }, /*#__PURE__*/_react.default.createElement(_chakraUi.ThemeEditorColors, {
    icon: _cg.CgColorPicker,
    title: "Colors"
  }), /*#__PURE__*/_react.default.createElement(_chakraUi.ThemeEditorFontSizes, {
    icon: _im.ImFontSize,
    title: "Font Sizes"
  })));
}
function ThemeEditorButton(_ref) {
  var onOpen = _ref.onOpen,
    navbarIcon = _ref.navbarIcon,
    rest = _objectWithoutProperties(_ref, _excluded);
  return /*#__PURE__*/_react.default.createElement(_react2.Button, _extends({
    variant: "no-hover",
    bg: "transparent",
    p: "0px",
    minW: "unset",
    minH: "unset",
    h: "18px",
    w: "max-content",
    _focus: {
      boxShadow: 'none'
    },
    onClick: onOpen
  }, rest), /*#__PURE__*/_react.default.createElement(_react2.Icon, {
    me: "10px",
    h: "18px",
    w: "18px",
    color: navbarIcon,
    as: _md.MdPalette
  }));
}