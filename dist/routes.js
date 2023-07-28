"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _react2 = require("@chakra-ui/react");
var _md = require("react-icons/md");
var _default2 = _interopRequireDefault(require("views/admin/default"));
var _marketplace = _interopRequireDefault(require("views/admin/marketplace"));
var _profile = _interopRequireDefault(require("views/admin/profile"));
var _dataTables = _interopRequireDefault(require("views/admin/dataTables"));
var _rtl = _interopRequireDefault(require("views/admin/rtl"));
var _signIn = _interopRequireDefault(require("views/auth/signIn"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
// Admin Imports

// Auth Imports

var routes = [{
  name: "Main Dashboard",
  layout: "/admin",
  path: "/default",
  icon: /*#__PURE__*/_react.default.createElement(_react2.Icon, {
    as: _md.MdHome,
    width: "20px",
    height: "20px",
    color: "inherit"
  }),
  component: _default2.default
}, {
  name: "NFT Marketplace",
  layout: "/admin",
  path: "/nft-marketplace",
  icon: /*#__PURE__*/_react.default.createElement(_react2.Icon, {
    as: _md.MdOutlineShoppingCart,
    width: "20px",
    height: "20px",
    color: "inherit"
  }),
  component: _marketplace.default,
  secondary: true
}, {
  name: "Data Tables",
  layout: "/admin",
  icon: /*#__PURE__*/_react.default.createElement(_react2.Icon, {
    as: _md.MdBarChart,
    width: "20px",
    height: "20px",
    color: "inherit"
  }),
  path: "/data-tables",
  component: _dataTables.default
}, {
  name: "Profile",
  layout: "/admin",
  path: "/profile",
  icon: /*#__PURE__*/_react.default.createElement(_react2.Icon, {
    as: _md.MdPerson,
    width: "20px",
    height: "20px",
    color: "inherit"
  }),
  component: _profile.default
}, {
  name: "Sign In",
  layout: "/auth",
  path: "/sign-in",
  icon: /*#__PURE__*/_react.default.createElement(_react2.Icon, {
    as: _md.MdLock,
    width: "20px",
    height: "20px",
    color: "inherit"
  }),
  component: _signIn.default
}, {
  name: "RTL Admin",
  layout: "/rtl",
  path: "/rtl-default",
  icon: /*#__PURE__*/_react.default.createElement(_react2.Icon, {
    as: _md.MdHome,
    width: "20px",
    height: "20px",
    color: "inherit"
  }),
  component: _rtl.default
}];
var _default = routes;
exports.default = _default;