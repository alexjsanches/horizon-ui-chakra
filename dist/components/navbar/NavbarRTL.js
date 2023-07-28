"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = AdminNavbar;
var _react = require("@chakra-ui/react");
var _propTypes = _interopRequireDefault(require("prop-types"));
var _react2 = _interopRequireWildcard(require("react"));
var _NavbarLinksAdmin = _interopRequireDefault(require("components/navbar/NavbarLinksAdmin"));
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; } // Chakra Imports
function AdminNavbar(props) {
  var _useState = (0, _react2.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    scrolled = _useState2[0],
    setScrolled = _useState2[1];
  (0, _react2.useEffect)(function () {
    window.addEventListener("scroll", changeNavbar);
    return function () {
      window.removeEventListener("scroll", changeNavbar);
    };
  });
  var secondary = props.secondary,
    message = props.message,
    brandText = props.brandText;

  // Here are all the props that may change depending on navbar's type or state.(secondary, variant, scrolled)
  var mainText = (0, _react.useColorModeValue)("navy.700", "white");
  var secondaryText = (0, _react.useColorModeValue)("gray.700", "white");
  var navbarPosition = "fixed";
  var navbarFilter = "none";
  var navbarBackdrop = "blur(20px)";
  var navbarShadow = "none";
  var navbarBg = (0, _react.useColorModeValue)("rgba(244, 247, 254, 0.2)", "rgba(11,20,55,0.5)");
  var navbarBorder = "transparent";
  var secondaryMargin = "0px";
  var paddingX = "15px";
  var gap = "0px";
  var changeNavbar = function changeNavbar() {
    if (window.scrollY > 1) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };
  return /*#__PURE__*/_react2.default.createElement(_react.Box, {
    position: navbarPosition,
    boxShadow: navbarShadow,
    bg: navbarBg,
    borderColor: navbarBorder,
    filter: navbarFilter,
    backdropFilter: navbarBackdrop,
    backgroundPosition: "center",
    backgroundSize: "cover",
    borderRadius: "16px",
    borderWidth: "1.5px",
    borderStyle: "solid",
    transitionDelay: "0s, 0s, 0s, 0s",
    transitionDuration: " 0.25s, 0.25s, 0.25s, 0s",
    "transition-property": "box-shadow, background-color, filter, border",
    transitionTimingFunction: "linear, linear, linear, linear",
    alignItems: {
      xl: "center"
    },
    display: secondary ? "block" : "flex",
    minH: "75px",
    justifyContent: {
      xl: "center"
    },
    lineHeight: "25.6px",
    mx: "auto",
    mt: secondaryMargin,
    pb: "8px",
    left: {
      base: "12px",
      md: "30px",
      lg: "30px",
      xl: "30px"
    },
    px: {
      sm: paddingX,
      md: "10px"
    },
    ps: {
      xl: "12px"
    },
    pt: "8px",
    top: {
      base: "12px",
      md: "16px",
      xl: "18px"
    },
    w: {
      base: "calc(100vw - 6%)",
      md: "calc(100vw - 8%)",
      lg: "calc(100vw - 6%)",
      xl: "calc(100vw - 350px)",
      "2xl": "calc(100vw - 365px)"
    }
  }, /*#__PURE__*/_react2.default.createElement(_react.Flex, {
    w: "100%",
    flexDirection: {
      sm: "column",
      md: "row"
    },
    alignItems: {
      xl: "center"
    },
    mb: gap
  }, /*#__PURE__*/_react2.default.createElement(_react.Box, {
    mb: {
      sm: "8px",
      md: "0px"
    }
  }, /*#__PURE__*/_react2.default.createElement(_react.Breadcrumb, null, /*#__PURE__*/_react2.default.createElement(_react.BreadcrumbItem, {
    color: secondaryText,
    fontSize: "sm",
    mb: "5px"
  }, /*#__PURE__*/_react2.default.createElement(_react.BreadcrumbLink, {
    href: "#",
    color: secondaryText
  }, "Pages")), /*#__PURE__*/_react2.default.createElement(_react.BreadcrumbItem, {
    color: secondaryText,
    fontSize: "sm"
  }, /*#__PURE__*/_react2.default.createElement(_react.BreadcrumbLink, {
    href: "#",
    color: secondaryText
  }, brandText))), /*#__PURE__*/_react2.default.createElement(_react.Link, {
    color: mainText,
    href: "#",
    bg: "inherit",
    borderRadius: "inherit",
    fontWeight: "bold",
    fontSize: "34px",
    _hover: {
      color: {
        mainText: mainText
      }
    },
    _active: {
      bg: "inherit",
      transform: "none",
      borderColor: "transparent"
    },
    _focus: {
      boxShadow: "none"
    }
  }, brandText)), /*#__PURE__*/_react2.default.createElement(_react.Box, {
    ms: "auto",
    w: {
      sm: "100%",
      md: "unset"
    }
  }, /*#__PURE__*/_react2.default.createElement(_NavbarLinksAdmin.default, {
    onOpen: props.onOpen,
    logoText: props.logoText,
    secondary: props.secondary,
    fixed: props.fixed,
    scrolled: scrolled
  }))), secondary ? /*#__PURE__*/_react2.default.createElement(_react.Text, {
    color: "white"
  }, message) : null);
}
AdminNavbar.propTypes = {
  brandText: _propTypes.default.string,
  variant: _propTypes.default.string,
  secondary: _propTypes.default.bool,
  fixed: _propTypes.default.bool,
  onOpen: _propTypes.default.func
};