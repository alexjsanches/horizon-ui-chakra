"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = require("@chakra-ui/react");
var _propTypes = _interopRequireDefault(require("prop-types"));
var _react2 = _interopRequireDefault(require("react"));
var _FooterAuth = _interopRequireDefault(require("components/footer/FooterAuth"));
var _FixedPlugin = _interopRequireDefault(require("components/fixedPlugin/FixedPlugin"));
var _reactRouterDom = require("react-router-dom");
var _fa = require("react-icons/fa");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
// Chakra imports

// Custom components

// Assets

function AuthIllustration(props) {
  var children = props.children,
    illustrationBackground = props.illustrationBackground;
  // Chakra color mode
  return /*#__PURE__*/_react2.default.createElement(_react.Flex, {
    position: "relative",
    h: "max-content"
  }, /*#__PURE__*/_react2.default.createElement(_react.Flex, {
    h: {
      sm: "initial",
      md: "unset",
      lg: "100vh",
      xl: "97vh"
    },
    w: "100%",
    maxW: {
      md: "66%",
      lg: "1313px"
    },
    mx: "auto",
    pt: {
      sm: "50px",
      md: "0px"
    },
    px: {
      lg: "30px",
      xl: "0px"
    },
    ps: {
      xl: "70px"
    },
    justifyContent: "start",
    direction: "column"
  }, /*#__PURE__*/_react2.default.createElement(_reactRouterDom.NavLink, {
    to: "/admin",
    style: function style() {
      return {
        width: "fit-content",
        marginTop: "40px"
      };
    }
  }, /*#__PURE__*/_react2.default.createElement(_react.Flex, {
    align: "center",
    ps: {
      base: "25px",
      lg: "0px"
    },
    pt: {
      lg: "0px",
      xl: "0px"
    },
    w: "fit-content"
  }, /*#__PURE__*/_react2.default.createElement(_react.Icon, {
    as: _fa.FaChevronLeft,
    me: "12px",
    h: "13px",
    w: "8px",
    color: "secondaryGray.600"
  }), /*#__PURE__*/_react2.default.createElement(_react.Text, {
    ms: "0px",
    fontSize: "sm",
    color: "secondaryGray.600"
  }, "Back to Simmmple"))), children, /*#__PURE__*/_react2.default.createElement(_react.Box, {
    display: {
      base: "none",
      md: "block"
    },
    h: "100%",
    minH: "100vh",
    w: {
      lg: "50vw",
      "2xl": "44vw"
    },
    position: "absolute",
    right: "0px"
  }, /*#__PURE__*/_react2.default.createElement(_react.Flex, {
    bg: "url(".concat(illustrationBackground, ")"),
    justify: "center",
    align: "end",
    w: "100%",
    h: "100%",
    bgSize: "cover",
    bgPosition: "50%",
    position: "absolute",
    borderBottomLeftRadius: {
      lg: "120px",
      xl: "200px"
    }
  })), /*#__PURE__*/_react2.default.createElement(_FooterAuth.default, null)), /*#__PURE__*/_react2.default.createElement(_FixedPlugin.default, null));
}
// PROPS

AuthIllustration.propTypes = {
  illustrationBackground: _propTypes.default.string,
  image: _propTypes.default.any
};
var _default = AuthIllustration;
exports.default = _default;