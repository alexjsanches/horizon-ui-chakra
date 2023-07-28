"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SidebarLinks = SidebarLinks;
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _reactRouterDom = require("react-router-dom");
var _react2 = require("@chakra-ui/react");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
/* eslint-disable */

// chakra imports

function SidebarLinks(props) {
  //   Chakra color mode
  var location = (0, _reactRouterDom.useLocation)();
  var activeColor = (0, _react2.useColorModeValue)("gray.700", "white");
  var inactiveColor = (0, _react2.useColorModeValue)("secondaryGray.600", "secondaryGray.600");
  var activeIcon = (0, _react2.useColorModeValue)("brand.500", "white");
  var textColor = (0, _react2.useColorModeValue)("secondaryGray.500", "white");
  var brandColor = (0, _react2.useColorModeValue)("brand.500", "brand.400");
  var routes = props.routes;

  // verifies if routeName is the one active (in browser input)
  var activeRoute = function activeRoute(routeName) {
    return location.pathname.includes(routeName);
  };

  // this function creates the links from the secondary accordions (for example auth -> sign-in -> default)
  var createLinks = function createLinks(routes) {
    return routes.map(function (route, index) {
      if (route.category) {
        return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_react2.Text, {
          fontSize: "md",
          color: activeColor,
          fontWeight: "bold",
          mx: "auto",
          ps: {
            sm: "10px",
            xl: "16px"
          },
          pt: "18px",
          pb: "12px",
          key: index
        }, route.name), createLinks(route.items));
      } else if (route.layout === "/admin" || route.layout === "/auth" || route.layout === "/rtl") {
        return /*#__PURE__*/_react.default.createElement(_reactRouterDom.NavLink, {
          key: index,
          to: route.layout + route.path
        }, route.icon ? /*#__PURE__*/_react.default.createElement(_react2.Box, null, /*#__PURE__*/_react.default.createElement(_react2.HStack, {
          spacing: activeRoute(route.path.toLowerCase()) ? "22px" : "26px",
          py: "5px",
          ps: "10px"
        }, /*#__PURE__*/_react.default.createElement(_react2.Flex, {
          w: "100%",
          alignItems: "center",
          justifyContent: "center"
        }, /*#__PURE__*/_react.default.createElement(_react2.Box, {
          color: activeRoute(route.path.toLowerCase()) ? activeIcon : textColor,
          me: "18px"
        }, route.icon), /*#__PURE__*/_react.default.createElement(_react2.Text, {
          me: "auto",
          color: activeRoute(route.path.toLowerCase()) ? activeColor : textColor,
          fontWeight: activeRoute(route.path.toLowerCase()) ? "bold" : "normal"
        }, route.name)), /*#__PURE__*/_react.default.createElement(_react2.Box, {
          h: "36px",
          w: "4px",
          bg: activeRoute(route.path.toLowerCase()) ? brandColor : "transparent",
          borderRadius: "5px"
        }))) : /*#__PURE__*/_react.default.createElement(_react2.Box, null, /*#__PURE__*/_react.default.createElement(_react2.HStack, {
          spacing: activeRoute(route.path.toLowerCase()) ? "22px" : "26px",
          py: "5px",
          ps: "10px"
        }, /*#__PURE__*/_react.default.createElement(_react2.Text, {
          me: "auto",
          color: activeRoute(route.path.toLowerCase()) ? activeColor : inactiveColor,
          fontWeight: activeRoute(route.path.toLowerCase()) ? "bold" : "normal"
        }, route.name), /*#__PURE__*/_react.default.createElement(_react2.Box, {
          h: "36px",
          w: "4px",
          bg: "brand.400",
          borderRadius: "5px"
        }))));
      }
    });
  };
  //  BRAND
  return createLinks(routes);
}
var _default = SidebarLinks;
exports.default = _default;