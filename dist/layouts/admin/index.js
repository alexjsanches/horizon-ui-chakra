"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Dashboard;
var _react = require("@chakra-ui/react");
var _FooterAdmin = _interopRequireDefault(require("components/footer/FooterAdmin.js"));
var _NavbarAdmin = _interopRequireDefault(require("components/navbar/NavbarAdmin.js"));
var _Sidebar = _interopRequireDefault(require("components/sidebar/Sidebar.js"));
var _SidebarContext = require("contexts/SidebarContext");
var _react2 = _interopRequireWildcard(require("react"));
var _reactRouterDom = require("react-router-dom");
var _routes = _interopRequireDefault(require("routes.js"));
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function _objectDestructuringEmpty(obj) { if (obj == null) throw new TypeError("Cannot destructure " + obj); }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); } // Chakra imports
// Layout components
// Custom Chakra theme
function Dashboard(props) {
  var rest = _extends({}, (_objectDestructuringEmpty(props), props));
  // states and functions
  var _useState = (0, _react2.useState)(false),
    _useState2 = _slicedToArray(_useState, 1),
    fixed = _useState2[0];
  var _useState3 = (0, _react2.useState)(false),
    _useState4 = _slicedToArray(_useState3, 2),
    toggleSidebar = _useState4[0],
    setToggleSidebar = _useState4[1];
  // functions for changing the states from components
  var getRoute = function getRoute() {
    return window.location.pathname !== '/admin/full-screen-maps';
  };
  var getActiveRoute = function getActiveRoute(routes) {
    var activeRoute = 'Default Brand Text';
    for (var i = 0; i < routes.length; i++) {
      if (routes[i].collapse) {
        var collapseActiveRoute = getActiveRoute(routes[i].items);
        if (collapseActiveRoute !== activeRoute) {
          return collapseActiveRoute;
        }
      } else if (routes[i].category) {
        var categoryActiveRoute = getActiveRoute(routes[i].items);
        if (categoryActiveRoute !== activeRoute) {
          return categoryActiveRoute;
        }
      } else {
        if (window.location.href.indexOf(routes[i].layout + routes[i].path) !== -1) {
          return routes[i].name;
        }
      }
    }
    return activeRoute;
  };
  var getActiveNavbar = function getActiveNavbar(routes) {
    var activeNavbar = false;
    for (var i = 0; i < routes.length; i++) {
      if (routes[i].collapse) {
        var collapseActiveNavbar = getActiveNavbar(routes[i].items);
        if (collapseActiveNavbar !== activeNavbar) {
          return collapseActiveNavbar;
        }
      } else if (routes[i].category) {
        var categoryActiveNavbar = getActiveNavbar(routes[i].items);
        if (categoryActiveNavbar !== activeNavbar) {
          return categoryActiveNavbar;
        }
      } else {
        if (window.location.href.indexOf(routes[i].layout + routes[i].path) !== -1) {
          return routes[i].secondary;
        }
      }
    }
    return activeNavbar;
  };
  var getActiveNavbarText = function getActiveNavbarText(routes) {
    var activeNavbar = false;
    for (var i = 0; i < routes.length; i++) {
      if (routes[i].collapse) {
        var collapseActiveNavbar = getActiveNavbarText(routes[i].items);
        if (collapseActiveNavbar !== activeNavbar) {
          return collapseActiveNavbar;
        }
      } else if (routes[i].category) {
        var categoryActiveNavbar = getActiveNavbarText(routes[i].items);
        if (categoryActiveNavbar !== activeNavbar) {
          return categoryActiveNavbar;
        }
      } else {
        if (window.location.href.indexOf(routes[i].layout + routes[i].path) !== -1) {
          return routes[i].messageNavbar;
        }
      }
    }
    return activeNavbar;
  };
  var getRoutes = function getRoutes(routes) {
    return routes.map(function (prop, key) {
      if (prop.layout === '/admin') {
        return /*#__PURE__*/_react2.default.createElement(_reactRouterDom.Route, {
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
  document.documentElement.dir = 'ltr';
  var _useDisclosure = (0, _react.useDisclosure)(),
    onOpen = _useDisclosure.onOpen;
  document.documentElement.dir = 'ltr';
  return /*#__PURE__*/_react2.default.createElement(_react.Box, null, /*#__PURE__*/_react2.default.createElement(_react.Box, null, /*#__PURE__*/_react2.default.createElement(_SidebarContext.SidebarContext.Provider, {
    value: {
      toggleSidebar: toggleSidebar,
      setToggleSidebar: setToggleSidebar
    }
  }, /*#__PURE__*/_react2.default.createElement(_Sidebar.default, _extends({
    routes: _routes.default,
    display: "none"
  }, rest)), /*#__PURE__*/_react2.default.createElement(_react.Box, {
    float: "right",
    minHeight: "100vh",
    height: "100%",
    overflow: "auto",
    position: "relative",
    maxHeight: "100%",
    w: {
      base: '100%',
      xl: 'calc( 100% - 290px )'
    },
    maxWidth: {
      base: '100%',
      xl: 'calc( 100% - 290px )'
    },
    transition: "all 0.33s cubic-bezier(0.685, 0.0473, 0.346, 1)",
    transitionDuration: ".2s, .2s, .35s",
    transitionProperty: "top, bottom, width",
    transitionTimingFunction: "linear, linear, ease"
  }, /*#__PURE__*/_react2.default.createElement(_react.Portal, null, /*#__PURE__*/_react2.default.createElement(_react.Box, null, /*#__PURE__*/_react2.default.createElement(_NavbarAdmin.default, _extends({
    onOpen: onOpen,
    logoText: 'Horizon UI Dashboard PRO',
    brandText: getActiveRoute(_routes.default),
    secondary: getActiveNavbar(_routes.default),
    message: getActiveNavbarText(_routes.default),
    fixed: fixed
  }, rest)))), getRoute() ? /*#__PURE__*/_react2.default.createElement(_react.Box, {
    mx: "auto",
    p: {
      base: '20px',
      md: '30px'
    },
    pe: "20px",
    minH: "100vh",
    pt: "50px"
  }, /*#__PURE__*/_react2.default.createElement(_reactRouterDom.Switch, null, getRoutes(_routes.default), /*#__PURE__*/_react2.default.createElement(_reactRouterDom.Redirect, {
    from: "/",
    to: "/admin/default"
  }))) : null, /*#__PURE__*/_react2.default.createElement(_react.Box, null, /*#__PURE__*/_react2.default.createElement(_FooterAdmin.default, null))))));
}