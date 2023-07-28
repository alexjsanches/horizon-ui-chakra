"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _reactRouterDom = require("react-router-dom");
var _react2 = require("@chakra-ui/react");
var _Separator = require("components/separator/Separator");
var _Default = _interopRequireDefault(require("layouts/auth/Default"));
var _auth = _interopRequireDefault(require("assets/img/auth/auth.png"));
var _fc = require("react-icons/fc");
var _md = require("react-icons/md");
var _ri = require("react-icons/ri");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; } /* eslint-disable */ /*!
                                                                                             _   _  ___  ____  ___ ________  _   _   _   _ ___   
                                                                                            | | | |/ _ \|  _ \|_ _|__  / _ \| \ | | | | | |_ _| 
                                                                                            | |_| | | | | |_) || |  / / | | |  \| | | | | || | 
                                                                                            |  _  | |_| |  _ < | | / /| |_| | |\  | | |_| || |
                                                                                            |_| |_|\___/|_| \_\___/____\___/|_| \_|  \___/|___|
                                                                                                                                                                                                                                                                                                                                                                                                                                  
                                                                                           =========================================================
                                                                                           * Horizon UI - v1.1.0
                                                                                           =========================================================
                                                                                           
                                                                                           * Product Page: https://www.horizon-ui.com/
                                                                                           * Copyright 2023 Horizon UI (https://www.horizon-ui.com/)
                                                                                           
                                                                                           * Designed and Coded by Simmmple
                                                                                           
                                                                                           =========================================================
                                                                                           
                                                                                           * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
                                                                                           
                                                                                           */ // Chakra imports
// Custom components
// Assets
function SignIn() {
  // Chakra color mode
  var textColor = (0, _react2.useColorModeValue)("navy.700", "white");
  var textColorSecondary = "gray.400";
  var textColorDetails = (0, _react2.useColorModeValue)("navy.700", "secondaryGray.600");
  var textColorBrand = (0, _react2.useColorModeValue)("brand.500", "white");
  var brandStars = (0, _react2.useColorModeValue)("brand.500", "brand.400");
  var googleBg = (0, _react2.useColorModeValue)("secondaryGray.300", "whiteAlpha.200");
  var googleText = (0, _react2.useColorModeValue)("navy.700", "white");
  var googleHover = (0, _react2.useColorModeValue)({
    bg: "gray.200"
  }, {
    bg: "whiteAlpha.300"
  });
  var googleActive = (0, _react2.useColorModeValue)({
    bg: "secondaryGray.300"
  }, {
    bg: "whiteAlpha.200"
  });
  var _React$useState = _react.default.useState(false),
    _React$useState2 = _slicedToArray(_React$useState, 2),
    show = _React$useState2[0],
    setShow = _React$useState2[1];
  var handleClick = function handleClick() {
    return setShow(!show);
  };
  return /*#__PURE__*/_react.default.createElement(_Default.default, {
    illustrationBackground: _auth.default,
    image: _auth.default
  }, /*#__PURE__*/_react.default.createElement(_react2.Flex, {
    maxW: {
      base: "100%",
      md: "max-content"
    },
    w: "100%",
    mx: {
      base: "auto",
      lg: "0px"
    },
    me: "auto",
    h: "100%",
    alignItems: "start",
    justifyContent: "center",
    mb: {
      base: "30px",
      md: "60px"
    },
    px: {
      base: "25px",
      md: "0px"
    },
    mt: {
      base: "40px",
      md: "14vh"
    },
    flexDirection: "column"
  }, /*#__PURE__*/_react.default.createElement(_react2.Box, {
    me: "auto"
  }, /*#__PURE__*/_react.default.createElement(_react2.Heading, {
    color: textColor,
    fontSize: "36px",
    mb: "10px"
  }, "Sign In"), /*#__PURE__*/_react.default.createElement(_react2.Text, {
    mb: "36px",
    ms: "4px",
    color: textColorSecondary,
    fontWeight: "400",
    fontSize: "md"
  }, "Enter your email and password to sign in!")), /*#__PURE__*/_react.default.createElement(_react2.Flex, {
    zIndex: "2",
    direction: "column",
    w: {
      base: "100%",
      md: "420px"
    },
    maxW: "100%",
    background: "transparent",
    borderRadius: "15px",
    mx: {
      base: "auto",
      lg: "unset"
    },
    me: "auto",
    mb: {
      base: "20px",
      md: "auto"
    }
  }, /*#__PURE__*/_react.default.createElement(_react2.Button, {
    fontSize: "sm",
    me: "0px",
    mb: "26px",
    py: "15px",
    h: "50px",
    borderRadius: "16px",
    bg: googleBg,
    color: googleText,
    fontWeight: "500",
    _hover: googleHover,
    _active: googleActive,
    _focus: googleActive
  }, /*#__PURE__*/_react.default.createElement(_react2.Icon, {
    as: _fc.FcGoogle,
    w: "20px",
    h: "20px",
    me: "10px"
  }), "Sign in with Google"), /*#__PURE__*/_react.default.createElement(_react2.Flex, {
    align: "center",
    mb: "25px"
  }, /*#__PURE__*/_react.default.createElement(_Separator.HSeparator, null), /*#__PURE__*/_react.default.createElement(_react2.Text, {
    color: "gray.400",
    mx: "14px"
  }, "or"), /*#__PURE__*/_react.default.createElement(_Separator.HSeparator, null)), /*#__PURE__*/_react.default.createElement(_react2.FormControl, null, /*#__PURE__*/_react.default.createElement(_react2.FormLabel, {
    display: "flex",
    ms: "4px",
    fontSize: "sm",
    fontWeight: "500",
    color: textColor,
    mb: "8px"
  }, "Email", /*#__PURE__*/_react.default.createElement(_react2.Text, {
    color: brandStars
  }, "*")), /*#__PURE__*/_react.default.createElement(_react2.Input, {
    isRequired: true,
    variant: "auth",
    fontSize: "sm",
    ms: {
      base: "0px",
      md: "0px"
    },
    type: "email",
    placeholder: "mail@simmmple.com",
    mb: "24px",
    fontWeight: "500",
    size: "lg"
  }), /*#__PURE__*/_react.default.createElement(_react2.FormLabel, {
    ms: "4px",
    fontSize: "sm",
    fontWeight: "500",
    color: textColor,
    display: "flex"
  }, "Password", /*#__PURE__*/_react.default.createElement(_react2.Text, {
    color: brandStars
  }, "*")), /*#__PURE__*/_react.default.createElement(_react2.InputGroup, {
    size: "md"
  }, /*#__PURE__*/_react.default.createElement(_react2.Input, {
    isRequired: true,
    fontSize: "sm",
    placeholder: "Min. 8 characters",
    mb: "24px",
    size: "lg",
    type: show ? "text" : "password",
    variant: "auth"
  }), /*#__PURE__*/_react.default.createElement(_react2.InputRightElement, {
    display: "flex",
    alignItems: "center",
    mt: "4px"
  }, /*#__PURE__*/_react.default.createElement(_react2.Icon, {
    color: textColorSecondary,
    _hover: {
      cursor: "pointer"
    },
    as: show ? _ri.RiEyeCloseLine : _md.MdOutlineRemoveRedEye,
    onClick: handleClick
  }))), /*#__PURE__*/_react.default.createElement(_react2.Flex, {
    justifyContent: "space-between",
    align: "center",
    mb: "24px"
  }, /*#__PURE__*/_react.default.createElement(_react2.FormControl, {
    display: "flex",
    alignItems: "center"
  }, /*#__PURE__*/_react.default.createElement(_react2.Checkbox, {
    id: "remember-login",
    colorScheme: "brandScheme",
    me: "10px"
  }), /*#__PURE__*/_react.default.createElement(_react2.FormLabel, {
    htmlFor: "remember-login",
    mb: "0",
    fontWeight: "normal",
    color: textColor,
    fontSize: "sm"
  }, "Keep me logged in")), /*#__PURE__*/_react.default.createElement(_reactRouterDom.NavLink, {
    to: "/auth/forgot-password"
  }, /*#__PURE__*/_react.default.createElement(_react2.Text, {
    color: textColorBrand,
    fontSize: "sm",
    w: "124px",
    fontWeight: "500"
  }, "Forgot password?"))), /*#__PURE__*/_react.default.createElement(_react2.Button, {
    fontSize: "sm",
    variant: "brand",
    fontWeight: "500",
    w: "100%",
    h: "50",
    mb: "24px"
  }, "Sign In")), /*#__PURE__*/_react.default.createElement(_react2.Flex, {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "start",
    maxW: "100%",
    mt: "0px"
  }, /*#__PURE__*/_react.default.createElement(_react2.Text, {
    color: textColorDetails,
    fontWeight: "400",
    fontSize: "14px"
  }, "Not registered yet?", /*#__PURE__*/_react.default.createElement(_reactRouterDom.NavLink, {
    to: "/auth/sign-up"
  }, /*#__PURE__*/_react.default.createElement(_react2.Text, {
    color: textColorBrand,
    as: "span",
    ms: "5px",
    fontWeight: "500"
  }, "Create an Account")))))));
}
var _default = SignIn;
exports.default = _default;