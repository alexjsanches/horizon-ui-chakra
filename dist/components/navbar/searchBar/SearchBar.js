"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SearchBar = SearchBar;
var _react = _interopRequireDefault(require("react"));
var _react2 = require("@chakra-ui/react");
var _icons = require("@chakra-ui/icons");
var _excluded = ["variant", "background", "children", "placeholder", "borderRadius"];
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
function SearchBar(props) {
  // Pass the computed styles into the `__css` prop
  var variant = props.variant,
    background = props.background,
    children = props.children,
    placeholder = props.placeholder,
    borderRadius = props.borderRadius,
    rest = _objectWithoutProperties(props, _excluded);
  // Chakra Color Mode
  var searchIconColor = (0, _react2.useColorModeValue)("gray.700", "white");
  var inputBg = (0, _react2.useColorModeValue)("secondaryGray.300", "navy.900");
  var inputText = (0, _react2.useColorModeValue)("gray.700", "gray.100");
  return /*#__PURE__*/_react.default.createElement(_react2.InputGroup, _extends({
    w: {
      base: "100%",
      md: "200px"
    }
  }, rest), /*#__PURE__*/_react.default.createElement(_react2.InputLeftElement, {
    children: /*#__PURE__*/_react.default.createElement(_react2.IconButton, {
      bg: "inherit",
      borderRadius: "inherit",
      _hover: "none",
      _active: {
        bg: "inherit",
        transform: "none",
        borderColor: "transparent"
      },
      _focus: {
        boxShadow: "none"
      },
      icon: /*#__PURE__*/_react.default.createElement(_icons.SearchIcon, {
        color: searchIconColor,
        w: "15px",
        h: "15px"
      })
    })
  }), /*#__PURE__*/_react.default.createElement(_react2.Input, {
    variant: "search",
    fontSize: "sm",
    bg: background ? background : inputBg,
    color: inputText,
    fontWeight: "500",
    _placeholder: {
      color: "gray.400",
      fontSize: "14px"
    },
    borderRadius: borderRadius ? borderRadius : "30px",
    placeholder: placeholder ? placeholder : "Search..."
  }));
}