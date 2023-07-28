"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = AuthNavbar;
var _propTypes = _interopRequireDefault(require("prop-types"));
var _react = _interopRequireDefault(require("react"));
var _reactRouterDom = require("react-router-dom");
var _react2 = require("@chakra-ui/react");
var _IconBox = _interopRequireDefault(require("components/icons/IconBox"));
var _Icons = require("components/icons/Icons");
var _Sidebar = require("components/sidebar/Sidebar");
var _SidebarContext = require("contexts/SidebarContext");
var _go = require("react-icons/go");
var _routes = _interopRequireDefault(require("routes.js"));
var _excluded = ["logo", "logoText", "secondary", "sidebarWidth"]; // Chakra imports
// Custom components
// Assets
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
function AuthNavbar(props) {
  var logo = props.logo,
    logoText = props.logoText,
    secondary = props.secondary,
    sidebarWidth = props.sidebarWidth,
    rest = _objectWithoutProperties(props, _excluded);
  var _useColorMode = (0, _react2.useColorMode)(),
    colorMode = _useColorMode.colorMode;
  // Menu States
  var _useDisclosure = (0, _react2.useDisclosure)(),
    isOpenAuth = _useDisclosure.isOpen,
    onOpenAuth = _useDisclosure.onOpen,
    onCloseAuth = _useDisclosure.onClose;
  var _useDisclosure2 = (0, _react2.useDisclosure)(),
    isOpenDashboards = _useDisclosure2.isOpen,
    onOpenDashboards = _useDisclosure2.onOpen,
    onCloseDashboards = _useDisclosure2.onClose;
  var _useDisclosure3 = (0, _react2.useDisclosure)(),
    isOpenMain = _useDisclosure3.isOpen,
    onOpenMain = _useDisclosure3.onOpen,
    onCloseMain = _useDisclosure3.onClose;
  var _useDisclosure4 = (0, _react2.useDisclosure)(),
    isOpenNft = _useDisclosure4.isOpen,
    onOpenNft = _useDisclosure4.onOpen,
    onCloseNft = _useDisclosure4.onClose;
  // Menus
  function getLinks(routeName) {
    var foundRoute = _routes.default.filter(function (route) {
      return route.items && route.name === routeName;
    });
    console.log(foundRoute);
    return foundRoute[0].items;
  }
  function getLinksCollapse(routeName) {
    var foundRoute = _routes.default.filter(function (route) {
      return route.items && route.name === routeName;
    });
    var foundLinks = foundRoute[0].items.filter(function (link) {
      return link.collapse === true;
    });
    return foundLinks;
  }
  var authObject = getLinksCollapse("Authentication");
  var mainObject = getLinksCollapse("Main Pages");
  var dashboardsObject = getLinks("Dashboards");
  var nftsObject = getLinks("NFTs");
  var logoColor = (0, _react2.useColorModeValue)("white", "white");
  // Chakra color mode

  var textColor = (0, _react2.useColorModeValue)("navy.700", "white");
  var menuBg = (0, _react2.useColorModeValue)("white", "navy.900");
  var mainText = "#fff";
  var navbarBg = "none";
  var navbarShadow = "initial";
  var bgButton = "white";
  var colorButton = "brand.500";
  var navbarPosition = "absolute";
  var brand = /*#__PURE__*/_react.default.createElement(_react2.Link, {
    href: "".concat(process.env.PUBLIC_URL, "/#/"),
    target: "_blank",
    display: "flex",
    lineHeight: "100%",
    fontWeight: "bold",
    justifyContent: "center",
    alignItems: "center",
    color: mainText
  }, /*#__PURE__*/_react.default.createElement(_react2.Stack, {
    direction: "row",
    spacing: "12px",
    align: "center",
    justify: "center"
  }, /*#__PURE__*/_react.default.createElement(_Icons.HorizonLogo, {
    h: "26px",
    w: "175px",
    color: logoColor
  })), /*#__PURE__*/_react.default.createElement(_react2.Text, {
    fontsize: "sm",
    mt: "3px"
  }, logoText));
  if (props.secondary === true) {
    brand = /*#__PURE__*/_react.default.createElement(_react2.Link, {
      minW: "175px",
      href: "".concat(process.env.PUBLIC_URL, "/#/"),
      target: "_blank",
      display: "flex",
      lineHeight: "100%",
      fontWeight: "bold",
      justifyContent: "center",
      alignItems: "center",
      color: mainText
    }, /*#__PURE__*/_react.default.createElement(_Icons.HorizonLogo, {
      h: "26px",
      w: "175px",
      my: "32px",
      color: logoColor
    }));
    // mainText = useColorModeValue("gray.700", "gray.200");
    // navbarBg = useColorModeValue("white", "navy.800");
    // navbarShadow = useColorModeValue(
    //   "0px 7px 23px rgba(0, 0, 0, 0.05)",
    //   "none"
    // );
    // bgButton = useColorModeValue("gray.700", "white");
    // colorButton = useColorModeValue("white", "gray.700");
    // navbarPosition = "fixed";
  }

  var createNftsLinks = function createNftsLinks(routes) {
    return routes.map(function (link, key) {
      return /*#__PURE__*/_react.default.createElement(_reactRouterDom.NavLink, {
        key: key,
        to: link.layout + link.path,
        style: {
          maxWidth: "max-content",
          marginLeft: "40px"
        }
      }, /*#__PURE__*/_react.default.createElement(_react2.Text, {
        color: "gray.400",
        fontSize: "sm",
        fontWeight: "normal"
      }, link.name));
    });
  };
  var createDashboardsLinks = function createDashboardsLinks(routes) {
    return routes.map(function (link, key) {
      return /*#__PURE__*/_react.default.createElement(_reactRouterDom.NavLink, {
        key: key,
        to: link.layout + link.path,
        style: {
          maxWidth: "max-content",
          marginLeft: "40px"
        }
      }, /*#__PURE__*/_react.default.createElement(_react2.Text, {
        color: "gray.400",
        fontSize: "sm",
        fontWeight: "normal"
      }, link.name));
    });
  };
  var createMainLinks = function createMainLinks(routes) {
    return routes.map(function (link, key) {
      if (link.collapse === true) {
        return /*#__PURE__*/_react.default.createElement(_react2.Stack, {
          key: key,
          direction: "column",
          maxW: "max-content"
        }, /*#__PURE__*/_react.default.createElement(_react2.Stack, {
          direction: "row",
          spacing: "0px",
          align: "center",
          cursor: "default"
        }, /*#__PURE__*/_react.default.createElement(_IconBox.default, {
          bg: "brand.500",
          h: "30px",
          w: "30px",
          me: "10px"
        }, link.icon), /*#__PURE__*/_react.default.createElement(_react2.Text, {
          fontWeight: "bold",
          fontSize: "md",
          me: "auto",
          color: textColor
        }, link.name), /*#__PURE__*/_react.default.createElement(_react2.Icon, {
          as: _go.GoChevronRight,
          color: mainText,
          w: "14px",
          h: "14px",
          fontWeight: "2000"
        })), /*#__PURE__*/_react.default.createElement(_react2.Stack, {
          direction: "column",
          bg: menuBg
        }, createMainLinks(link.items)));
      } else {
        return /*#__PURE__*/_react.default.createElement(_reactRouterDom.NavLink, {
          key: key,
          to: link.layout + link.path,
          style: {
            maxWidth: "max-content",
            marginLeft: "40px"
          }
        }, /*#__PURE__*/_react.default.createElement(_react2.Text, {
          color: "gray.400",
          fontSize: "sm",
          fontWeight: "normal"
        }, link.name));
      }
    });
  };
  var createAuthLinks = function createAuthLinks(routes) {
    return routes.map(function (link, key) {
      if (link.collapse === true) {
        return /*#__PURE__*/_react.default.createElement(_react2.Stack, {
          key: key,
          direction: "column",
          my: "auto",
          maxW: "max-content"
        }, /*#__PURE__*/_react.default.createElement(_react2.Stack, {
          direction: "row",
          spacing: "0px",
          align: "center",
          cursor: "default",
          w: "max-content"
        }, /*#__PURE__*/_react.default.createElement(_IconBox.default, {
          bg: "brand.500",
          h: "30px",
          w: "30px",
          me: "10px"
        }, link.icon), /*#__PURE__*/_react.default.createElement(_react2.Text, {
          fontWeight: "bold",
          fontSize: "md",
          me: "auto",
          color: textColor
        }, link.name), /*#__PURE__*/_react.default.createElement(_react2.Icon, {
          as: _go.GoChevronRight,
          color: mainText,
          w: "14px",
          h: "14px",
          fontWeight: "2000"
        })), /*#__PURE__*/_react.default.createElement(_react2.Stack, {
          direction: "column",
          bg: menuBg
        }, createAuthLinks(link.items)));
      } else {
        return /*#__PURE__*/_react.default.createElement(_reactRouterDom.NavLink, {
          key: key,
          to: link.layout + link.path,
          style: {
            maxWidth: "max-content",
            marginLeft: "40px"
          }
        }, /*#__PURE__*/_react.default.createElement(_react2.Text, {
          color: "gray.400",
          fontSize: "sm",
          fontWeight: "normal"
        }, link.name));
      }
    });
  };
  var linksAuth = /*#__PURE__*/_react.default.createElement(_react2.HStack, {
    display: {
      sm: "none",
      lg: "flex"
    },
    spacing: "12px"
  }, /*#__PURE__*/_react.default.createElement(_react2.Stack, {
    direction: "row",
    spacing: "4px",
    align: "center",
    color: "#fff",
    fontWeight: "bold",
    onMouseEnter: onOpenDashboards,
    onMouseLeave: onCloseDashboards,
    cursor: "pointer",
    position: "relative"
  }, /*#__PURE__*/_react.default.createElement(_react2.Text, {
    fontSize: "sm",
    color: mainText
  }, "Dashboards"), /*#__PURE__*/_react.default.createElement(_react2.Box, null, /*#__PURE__*/_react.default.createElement(_react2.Icon, {
    mt: "8px",
    as: _go.GoChevronDown,
    color: mainText,
    w: "14px",
    h: "14px",
    fontWeight: "2000"
  })), /*#__PURE__*/_react.default.createElement(_react2.Menu, {
    isOpen: isOpenDashboards
  }, /*#__PURE__*/_react.default.createElement(_react2.MenuList, {
    bg: menuBg,
    p: "22px",
    cursor: "default",
    borderRadius: "15px",
    position: "absolute",
    top: "30px",
    left: "-10px"
  }, /*#__PURE__*/_react.default.createElement(_react2.Flex, {
    flexWrap: "wrap",
    w: "300px",
    gap: "16px"
  }, createDashboardsLinks(dashboardsObject))))), /*#__PURE__*/_react.default.createElement(_react2.Stack, {
    direction: "row",
    spacing: "4px",
    align: "center",
    color: "#fff",
    fontWeight: "bold",
    onMouseEnter: onOpenAuth,
    onMouseLeave: onCloseAuth,
    cursor: "pointer",
    position: "relative"
  }, /*#__PURE__*/_react.default.createElement(_react2.Text, {
    fontSize: "sm",
    color: mainText
  }, "Authentications"), /*#__PURE__*/_react.default.createElement(_react2.Box, null, /*#__PURE__*/_react.default.createElement(_react2.Icon, {
    mt: "8px",
    as: _go.GoChevronDown,
    color: mainText,
    w: "14px",
    h: "14px",
    fontWeight: "2000"
  })), /*#__PURE__*/_react.default.createElement(_react2.Menu, {
    isOpen: isOpenAuth
  }, /*#__PURE__*/_react.default.createElement(_react2.MenuList, {
    bg: menuBg,
    p: "22px",
    cursor: "default",
    borderRadius: "15px",
    position: "absolute",
    top: "30px",
    left: "-10px"
  }, /*#__PURE__*/_react.default.createElement(_react2.Flex, null, /*#__PURE__*/_react.default.createElement(_react2.SimpleGrid, {
    columns: "3",
    gap: "10px",
    minW: "500px",
    me: "20px"
  }, createAuthLinks(authObject)))))), /*#__PURE__*/_react.default.createElement(_react2.Stack, {
    direction: "row",
    spacing: "4px",
    align: "center",
    color: "#fff",
    fontWeight: "bold",
    onMouseEnter: onOpenMain,
    onMouseLeave: onCloseMain,
    cursor: "pointer",
    position: "relative"
  }, /*#__PURE__*/_react.default.createElement(_react2.Text, {
    fontSize: "sm",
    color: mainText
  }, "Main Pages"), /*#__PURE__*/_react.default.createElement(_react2.Box, null, /*#__PURE__*/_react.default.createElement(_react2.Icon, {
    mt: "8px",
    as: _go.GoChevronDown,
    color: mainText,
    w: "14px",
    h: "14px",
    fontWeight: "2000"
  })), /*#__PURE__*/_react.default.createElement(_react2.Menu, {
    isOpen: isOpenMain
  }, /*#__PURE__*/_react.default.createElement(_react2.MenuList, {
    bg: menuBg,
    p: "22px",
    cursor: "default",
    borderRadius: "15px",
    position: "absolute",
    top: "30px",
    left: "-10px"
  }, /*#__PURE__*/_react.default.createElement(_react2.Flex, {
    flexWrap: "wrap",
    align: "start",
    w: "500px",
    gap: "16px"
  }, createMainLinks(mainObject))))), /*#__PURE__*/_react.default.createElement(_react2.Stack, {
    direction: "row",
    spacing: "4px",
    align: "center",
    color: "#fff",
    fontWeight: "bold",
    onMouseEnter: onOpenNft,
    onMouseLeave: onCloseNft,
    cursor: "pointer",
    position: "relative"
  }, /*#__PURE__*/_react.default.createElement(_react2.Text, {
    fontSize: "sm",
    color: mainText
  }, "NFTs"), /*#__PURE__*/_react.default.createElement(_react2.Box, null, /*#__PURE__*/_react.default.createElement(_react2.Icon, {
    mt: "8px",
    as: _go.GoChevronDown,
    color: mainText,
    w: "14px",
    h: "14px",
    fontWeight: "2000"
  })), /*#__PURE__*/_react.default.createElement(_react2.Menu, {
    isOpen: isOpenNft
  }, /*#__PURE__*/_react.default.createElement(_react2.MenuList, {
    bg: menuBg,
    p: "22px",
    minW: "350px",
    cursor: "default",
    borderRadius: "15px",
    position: "absolute",
    top: "30px",
    left: "-10px"
  }, /*#__PURE__*/_react.default.createElement(_react2.Grid, {
    templateColumns: "repeat(2, 1fr)",
    gap: "16px"
  }, createNftsLinks(nftsObject))))));
  return /*#__PURE__*/_react.default.createElement(_SidebarContext.SidebarContext.Provider, {
    value: {
      sidebarWidth: sidebarWidth
    }
  }, /*#__PURE__*/_react.default.createElement(_react2.Flex, {
    position: navbarPosition,
    top: "16px",
    left: "50%",
    transform: "translate(-50%, 0px)",
    background: navbarBg,
    boxShadow: navbarShadow,
    borderRadius: "15px",
    px: "16px",
    py: "22px",
    mx: "auto",
    width: "1044px",
    maxW: "90%",
    alignItems: "center",
    zIndex: "3"
  }, /*#__PURE__*/_react.default.createElement(_react2.Flex, {
    w: "100%",
    justifyContent: {
      sm: "start",
      lg: "space-between"
    }
  }, brand, /*#__PURE__*/_react.default.createElement(_react2.Box, {
    ms: {
      base: "auto",
      lg: "0px"
    },
    display: {
      base: "flex",
      lg: "none"
    },
    justifyContent: "center",
    alignItems: "center"
  }, /*#__PURE__*/_react.default.createElement(_Sidebar.SidebarResponsive, _extends({
    logo: /*#__PURE__*/_react.default.createElement(_react2.Stack, {
      direction: "row",
      spacing: "12px",
      align: "center",
      justify: "center"
    }, /*#__PURE__*/_react.default.createElement(_react2.Box, {
      w: "1px",
      h: "20px",
      bg: colorMode === "dark" ? "white" : "gray.700"
    })),
    logoText: props.logoText,
    secondary: props.secondary,
    routes: _routes.default
  }, rest))), linksAuth, /*#__PURE__*/_react.default.createElement(_react2.Link, {
    href: "https://www.horizon-ui.com/pro"
  }, /*#__PURE__*/_react.default.createElement(_react2.Button, {
    bg: bgButton,
    color: colorButton,
    fontSize: "xs",
    variant: "no-effects",
    borderRadius: "50px",
    px: "45px",
    display: {
      sm: "none",
      lg: "flex"
    }
  }, "Buy Now")))));
}
AuthNavbar.propTypes = {
  color: _propTypes.default.oneOf(["primary", "info", "success", "warning", "danger"]),
  brandText: _propTypes.default.string
};