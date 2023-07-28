"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Auth;
var _react = _interopRequireWildcard(require("react"));
var _reactRouterDom = require("react-router-dom");
var _routes = _interopRequireDefault(require("routes.js"));
var _react2 = require("@chakra-ui/react");
var _SidebarContext = require("contexts/SidebarContext");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; } // Chakra imports
// Layout components
// Custom Chakra theme
function Auth() {
  // states and functions
  var _useState = (0, _react.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    toggleSidebar = _useState2[0],
    setToggleSidebar = _useState2[1];
  // functions for changing the states from components
  var getRoute = function getRoute() {
    return window.location.pathname !== "/auth/full-screen-maps";
  };
  var getRoutes = function getRoutes(routes) {
    return routes.map(function (prop, key) {
      if (prop.layout === "/auth") {
        return /*#__PURE__*/_react.default.createElement(_reactRouterDom.Route, {
          path: prop.layout + prop.path,
          component: prop.component,
          key: key
        });
      }
      if (prop.collapse) {
        return getRoutes(prop.items);
      }
      if (prop.category) {
        return getRoutes(prop.items);
      } else {
        return null;
      }
    });
  };
  var authBg = (0, _react2.useColorModeValue)("white", "navy.900");
  document.documentElement.dir = "ltr";
  return /*#__PURE__*/_react.default.createElement(_react2.Box, null, /*#__PURE__*/_react.default.createElement(_SidebarContext.SidebarContext.Provider, {
    value: {
      toggleSidebar: toggleSidebar,
      setToggleSidebar: setToggleSidebar
    }
  }, /*#__PURE__*/_react.default.createElement(_react2.Box, {
    bg: authBg,
    float: "right",
    minHeight: "100vh",
    height: "100%",
    position: "relative",
    w: "100%",
    transition: "all 0.33s cubic-bezier(0.685, 0.0473, 0.346, 1)",
    transitionDuration: ".2s, .2s, .35s",
    transitionProperty: "top, bottom, width",
    transitionTimingFunction: "linear, linear, ease"
  }, getRoute() ? /*#__PURE__*/_react.default.createElement(_react2.Box, {
    mx: "auto",
    minH: "100vh"
  }, /*#__PURE__*/_react.default.createElement(_reactRouterDom.Switch, null, getRoutes(_routes.default), /*#__PURE__*/_react.default.createElement(_reactRouterDom.Redirect, {
    from: "/auth",
    to: "/auth/sign-in/default\r "
  }))) : null)));
}