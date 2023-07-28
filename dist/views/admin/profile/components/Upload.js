"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Upload;
var _react = require("@chakra-ui/react");
var _Card = _interopRequireDefault(require("components/card/Card.js"));
var _react2 = _interopRequireDefault(require("react"));
var _md = require("react-icons/md");
var _Dropzone = _interopRequireDefault(require("views/admin/profile/components/Dropzone"));
var _excluded = ["used", "total"]; // Chakra imports
// Custom components
// Assets
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
function Upload(props) {
  var used = props.used,
    total = props.total,
    rest = _objectWithoutProperties(props, _excluded);
  // Chakra Color Mode
  var textColorPrimary = (0, _react.useColorModeValue)("secondaryGray.900", "white");
  var brandColor = (0, _react.useColorModeValue)("brand.500", "white");
  var textColorSecondary = "gray.400";
  return /*#__PURE__*/_react2.default.createElement(_Card.default, _extends({}, rest, {
    mb: "20px",
    align: "center",
    p: "20px"
  }), /*#__PURE__*/_react2.default.createElement(_react.Flex, {
    h: "100%",
    direction: {
      base: "column",
      "2xl": "row"
    }
  }, /*#__PURE__*/_react2.default.createElement(_Dropzone.default, {
    w: {
      base: "100%",
      "2xl": "268px"
    },
    me: "36px",
    maxH: {
      base: "60%",
      lg: "50%",
      "2xl": "100%"
    },
    minH: {
      base: "60%",
      lg: "50%",
      "2xl": "100%"
    },
    content: /*#__PURE__*/_react2.default.createElement(_react.Box, null, /*#__PURE__*/_react2.default.createElement(_react.Icon, {
      as: _md.MdUpload,
      w: "80px",
      h: "80px",
      color: brandColor
    }), /*#__PURE__*/_react2.default.createElement(_react.Flex, {
      justify: "center",
      mx: "auto",
      mb: "12px"
    }, /*#__PURE__*/_react2.default.createElement(_react.Text, {
      fontSize: "xl",
      fontWeight: "700",
      color: brandColor
    }, "Upload Files")), /*#__PURE__*/_react2.default.createElement(_react.Text, {
      fontSize: "sm",
      fontWeight: "500",
      color: "secondaryGray.500"
    }, "PNG, JPG and GIF files are allowed"))
  }), /*#__PURE__*/_react2.default.createElement(_react.Flex, {
    direction: "column",
    pe: "44px"
  }, /*#__PURE__*/_react2.default.createElement(_react.Text, {
    color: textColorPrimary,
    fontWeight: "bold",
    textAlign: "start",
    fontSize: "2xl",
    mt: {
      base: "20px",
      "2xl": "50px"
    }
  }, "Complete your profile"), /*#__PURE__*/_react2.default.createElement(_react.Text, {
    color: textColorSecondary,
    fontSize: "md",
    my: {
      base: "auto",
      "2xl": "10px"
    },
    mx: "auto",
    textAlign: "start"
  }, "Stay on the pulse of distributed projects with an anline whiteboard to plan, coordinate and discuss"), /*#__PURE__*/_react2.default.createElement(_react.Flex, {
    w: "100%"
  }, /*#__PURE__*/_react2.default.createElement(_react.Button, {
    me: "100%",
    mb: "50px",
    w: "140px",
    minW: "140px",
    mt: {
      base: "20px",
      "2xl": "auto"
    },
    variant: "brand",
    fontWeight: "500"
  }, "Publish now")))));
}