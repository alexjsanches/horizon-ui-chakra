"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = AuthNavbar;
var _react = require("@chakra-ui/react");
var _IconBox = _interopRequireDefault(require("components/icons/IconBox"));
var _Sidebar = require("components/sidebar/Sidebar");
var _propTypes = _interopRequireDefault(require("prop-types"));
var _react2 = _interopRequireDefault(require("react"));
var _ai = require("react-icons/ai");
var _go = require("react-icons/go");
var _reactRouterDom = require("react-router-dom");
var _SidebarContext = require("contexts/SidebarContext");
var _routes = _interopRequireDefault(require("routes.js"));
var _excluded = ["logo", "logoText", "secondary", "sidebarWidth"]; // Chakra imports
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
  var _useColorMode = (0, _react.useColorMode)(),
    colorMode = _useColorMode.colorMode;
  // Menu States
  var _useDisclosure = (0, _react.useDisclosure)(),
    isOpenPages = _useDisclosure.isOpen,
    onOpenPages = _useDisclosure.onOpen,
    onClosePages = _useDisclosure.onClose;
  var _useDisclosure2 = (0, _react.useDisclosure)(),
    isOpenAuth = _useDisclosure2.isOpen,
    onOpenAuth = _useDisclosure2.onOpen,
    onCloseAuth = _useDisclosure2.onClose;
  var _useDisclosure3 = (0, _react.useDisclosure)(),
    isOpenApplication = _useDisclosure3.isOpen,
    onOpenApplication = _useDisclosure3.onOpen,
    onCloseApplication = _useDisclosure3.onClose;
  var _useDisclosure4 = (0, _react.useDisclosure)(),
    isOpenEcommerce = _useDisclosure4.isOpen,
    onOpenEcommerce = _useDisclosure4.onOpen,
    onCloseEcommerce = _useDisclosure4.onClose;

  // Menus
  var authObject = {};
  _routes.default.map(function (route) {
    if (route.items) {
      authObject = route.items.find(function (link) {
        return link.name === "Authentication";
      });
    }
  });
  var applicationsObject = {};
  _routes.default.map(function (route) {
    if (route.items) {
      applicationsObject = route.items.find(function (link) {
        return link.name === "Applications";
      });
    }
  });
  var ecommerceObject = {};
  _routes.default.map(function (route) {
    if (route.items) {
      ecommerceObject = route.items.find(function (link) {
        return link.name === "Ecommerce";
      });
    }
  });
  var extraArr = [];
  _routes.default.map(function (route) {
    route.items.map(function (item) {
      if (item.items && item.name === "Pages") {
        extraArr = item.items.filter(function (link) {
          return !link.collapse;
        });
      }
    });
  });

  // Chakra color mode

  var textColor = (0, _react.useColorModeValue)("gray.700", "#fff");
  var menuBg = (0, _react.useColorModeValue)("white", "navy.900");
  var mainText = "#fff";
  var navbarBg = "none";
  var navbarShadow = "initial";
  var bgButton = (0, _react.useColorModeValue)("white", "navy.900");
  var colorButton = (0, _react.useColorModeValue)("gray.700", "white");
  var navbarPosition = "absolute";
  var brand = /*#__PURE__*/_react2.default.createElement(_react.Link, {
    href: "".concat(process.env.PUBLIC_URL, "/#/"),
    target: "_blank",
    display: "flex",
    lineHeight: "100%",
    fontWeight: "bold",
    justifyContent: "center",
    alignItems: "center",
    color: mainText
  }, /*#__PURE__*/_react2.default.createElement(_react.Text, {
    fontsize: "sm",
    mt: "3px"
  }, logoText));
  if (props.secondary === true) {
    brand = /*#__PURE__*/_react2.default.createElement(_react.Link, {
      href: "".concat(process.env.PUBLIC_URL, "/#/"),
      target: "_blank",
      display: "flex",
      lineHeight: "100%",
      fontWeight: "bold",
      justifyContent: "center",
      alignItems: "center",
      color: mainText
    }, /*#__PURE__*/_react2.default.createElement(_react.Stack, {
      direction: "row",
      spacing: "12px",
      align: "center",
      justify: "center"
    }, /*#__PURE__*/_react2.default.createElement(_react.Box, {
      w: "1px",
      h: "20px"
      //  bg={useColorModeValue("gray.700", "white")}
    })), /*#__PURE__*/_react2.default.createElement(_react.Text, {
      fontsize: "sm",
      mt: "3px"
    }, logoText));
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

  var createPagesLinks = function createPagesLinks(routes) {
    return routes.map(function (link) {
      if (link.name === "Applications" || link.name === "Ecommerce" || link.name === "Authentication" || link.name === "RTL" || link.name === "Widgets" || link.name === "Charts" || link.name === "Alerts") {
        return;
      }
      if (link.name === "Pricing Page") {
        return /*#__PURE__*/_react2.default.createElement(_react.Stack, {
          direction: "column"
        }, /*#__PURE__*/_react2.default.createElement(_react.Stack, {
          direction: "row",
          spacing: "6px",
          align: "center",
          mb: "6px",
          cursor: "default"
        }, /*#__PURE__*/_react2.default.createElement(_IconBox.default, {
          bg: "blue.500",
          color: "white",
          h: "30px",
          w: "30px"
        }), /*#__PURE__*/_react2.default.createElement(_react.Text, {
          fontWeight: "bold",
          fontSize: "sm",
          color: textColor
        }, "Extra")), createExtraLinks(extraArr));
      }
      if (link.authIcon) {
        return /*#__PURE__*/_react2.default.createElement(_react.Stack, {
          direction: "column"
        }, /*#__PURE__*/_react2.default.createElement(_react.Stack, {
          direction: "row",
          spacing: "6px",
          align: "center",
          mb: "6px",
          cursor: "default"
        }, /*#__PURE__*/_react2.default.createElement(_IconBox.default, {
          bg: "blue.500",
          color: "white",
          h: "30px",
          w: "30px"
        }, link.authIcon), /*#__PURE__*/_react2.default.createElement(_react.Text, {
          fontWeight: "bold",
          fontSize: "sm",
          color: textColor
        }, link.name)), createPagesLinks(link.items));
      } else {
        if (link.component) {
          return /*#__PURE__*/_react2.default.createElement(_reactRouterDom.NavLink, {
            to: link.layout + link.path
          }, /*#__PURE__*/_react2.default.createElement(_react.MenuItem, {
            ps: "36px",
            py: "0px",
            _hover: {
              boxShadow: "none",
              bg: "none"
            },
            borderRadius: "12px"
          }, /*#__PURE__*/_react2.default.createElement(_react.Text, {
            color: "gray.400",
            fontSize: "sm",
            fontWeight: "normal"
          }, link.name)));
        } else {
          return /*#__PURE__*/_react2.default.createElement(_react2.default.Fragment, null, createPagesLinks(link.items));
        }
      }
    });
  };
  var createExtraLinks = function createExtraLinks(routes) {
    return routes.map(function (link) {
      return /*#__PURE__*/_react2.default.createElement(_reactRouterDom.NavLink, {
        to: link.layout + link.path
      }, /*#__PURE__*/_react2.default.createElement(_react.MenuItem, {
        ps: "36px",
        py: "0px",
        _hover: {
          boxShadow: "none",
          bg: "none"
        },
        borderRadius: "12px"
      }, /*#__PURE__*/_react2.default.createElement(_react.Text, {
        color: "gray.400",
        fontSize: "sm",
        fontWeight: "normal"
      }, link.name)));
    });
  };
  var createAuthLinks = function createAuthLinks(routes) {
    return routes.map(function (link) {
      if (link.authIcon && link.collapse === true) {
        return /*#__PURE__*/_react2.default.createElement(_react.Stack, {
          direction: "column",
          my: "auto"
        }, /*#__PURE__*/_react2.default.createElement(_react.Stack, {
          direction: "row",
          spacing: "0px",
          align: "center",
          cursor: "default"
        }, /*#__PURE__*/_react2.default.createElement(_react.Text, {
          fontWeight: "bold",
          fontSize: "sm",
          me: "auto",
          color: textColor
        }, link.name), /*#__PURE__*/_react2.default.createElement(_react.Icon, {
          as: _go.GoChevronRight,
          color: mainText,
          w: "14px",
          h: "14px",
          fontWeight: "2000"
        })), /*#__PURE__*/_react2.default.createElement(_react.Flex, {
          direction: "column",
          bg: menuBg
        }, createAuthLinks(link.items)));
      } else {
        return /*#__PURE__*/_react2.default.createElement(_reactRouterDom.NavLink, {
          to: link.layout + link.path
        }, /*#__PURE__*/_react2.default.createElement(_react.Text, {
          color: "red",
          fontSize: "sm",
          fontWeight: "normal"
        }, link.name));
      }
    });
  };
  var createApplicationLinks = function createApplicationLinks(routes) {
    return routes.map(function (link) {
      return /*#__PURE__*/_react2.default.createElement(_reactRouterDom.NavLink, {
        to: link.layout + link.path
      }, /*#__PURE__*/_react2.default.createElement(_react.Stack, {
        direction: "row",
        spacing: "12px",
        align: "center",
        cursor: "pointer"
      }, /*#__PURE__*/_react2.default.createElement(_IconBox.default, {
        bg: "blue.500",
        color: "white",
        h: "30px",
        w: "30px"
      }, link.authIcon), /*#__PURE__*/_react2.default.createElement(_react.Text, {
        fontWeight: "bold",
        fontSize: "sm",
        color: textColor
      }, link.name)));
    });
  };
  var createEcommerceLinks = function createEcommerceLinks(routes) {
    return routes.map(function (link) {
      if (link.authIcon) {
        return /*#__PURE__*/_react2.default.createElement(_react.Stack, {
          direction: "column"
        }, /*#__PURE__*/_react2.default.createElement(_react.Stack, {
          direction: "row",
          spacing: "6px",
          align: "center",
          mb: "6px",
          cursor: "default"
        }, /*#__PURE__*/_react2.default.createElement(_IconBox.default, {
          bg: "blue.500",
          color: "white",
          h: "30px",
          w: "30px"
        }, link.authIcon), /*#__PURE__*/_react2.default.createElement(_react.Text, {
          fontWeight: "bold",
          fontSize: "sm",
          color: textColor
        }, link.name)), createPagesLinks(link.items));
      } else {
        if (link.component) {
          return /*#__PURE__*/_react2.default.createElement(_reactRouterDom.NavLink, {
            to: link.layout + link.path
          }, /*#__PURE__*/_react2.default.createElement(_react.MenuItem, {
            ps: "36px",
            py: "0px",
            _hover: {
              boxShadow: "none",
              bg: "none"
            },
            borderRadius: "12px"
          }, /*#__PURE__*/_react2.default.createElement(_react.Text, {
            color: "gray.400",
            fontSize: "sm",
            fontWeight: "normal"
          }, link.name)));
        } else {
          return /*#__PURE__*/_react2.default.createElement(_react2.default.Fragment, null, createPagesLinks(link.items));
        }
      }
    });
  };
  var linksAuth = /*#__PURE__*/_react2.default.createElement(_react.HStack, {
    display: {
      sm: "none",
      lg: "flex"
    },
    spacing: "12px"
  }, /*#__PURE__*/_react2.default.createElement(_react.Stack, {
    direction: "row",
    spacing: "4px",
    align: "center",
    color: "#fff",
    fontWeight: "bold",
    onMouseEnter: onOpenPages,
    onMouseLeave: onClosePages,
    cursor: "pointer",
    position: "relative"
  }, /*#__PURE__*/_react2.default.createElement(_react.Text, {
    fontSize: "sm",
    color: mainText
  }, "Pages"), /*#__PURE__*/_react2.default.createElement(_react.Icon, {
    as: _go.GoChevronDown,
    color: mainText,
    w: "14px",
    h: "14px",
    fontWeight: "2000"
  }), /*#__PURE__*/_react2.default.createElement(_react.Menu, {
    isOpen: isOpenPages
  }, /*#__PURE__*/_react2.default.createElement(_react.MenuList, {
    bg: menuBg,
    p: "22px",
    minW: "550px",
    cursor: "default",
    borderRadius: "15px",
    position: "absolute",
    top: "30px",
    left: "-10px"
  }, /*#__PURE__*/_react2.default.createElement(_react.Grid, {
    templateColumns: "repeat(3, 1fr)",
    gap: "16px"
  }, createPagesLinks(_routes.default))))), /*#__PURE__*/_react2.default.createElement(_react.Stack, {
    direction: "row",
    spacing: "4px",
    align: "center",
    color: "#fff",
    fontWeight: "bold",
    onMouseEnter: onOpenAuth,
    onMouseLeave: onCloseAuth,
    cursor: "pointer",
    position: "relative"
  }, /*#__PURE__*/_react2.default.createElement(_react.Text, {
    fontSize: "sm",
    color: mainText
  }), /*#__PURE__*/_react2.default.createElement(_react.Icon, {
    as: _go.GoChevronDown,
    color: mainText,
    w: "14px",
    h: "14px",
    fontWeight: "2000"
  }), /*#__PURE__*/_react2.default.createElement(_react.Menu, {
    isOpen: isOpenAuth
  }, /*#__PURE__*/_react2.default.createElement(_react.MenuList, {
    bg: menuBg,
    p: "22px",
    minW: "450px",
    cursor: "default",
    borderRadius: "15px",
    position: "absolute",
    top: "30px",
    left: "-10px"
  }, /*#__PURE__*/_react2.default.createElement(_react.Stack, {
    direction: "row",
    spacing: "24px"
  }, /*#__PURE__*/_react2.default.createElement(_react.Flex, {
    direction: "column",
    justify: "center",
    align: "center"
    // bgImage={bgCard}
    ,
    minW: "200px",
    maxW: "200px",
    minH: "230px",
    borderRadius: "15px"
  }, /*#__PURE__*/_react2.default.createElement(_IconBox.default, {
    bg: "white",
    color: "white",
    borderRadius: "50%",
    h: "50px",
    w: "50px",
    mb: "12px"
  }, /*#__PURE__*/_react2.default.createElement(_react.Icon, {
    as: _ai.AiFillStar,
    w: "25px",
    h: "25px",
    color: "blue.500"
  })), /*#__PURE__*/_react2.default.createElement(_react.Text, {
    fontSize: "xl",
    fontWeight: "bold",
    color: "#fff",
    maxW: "80%",
    textAlign: "center"
  }, "Explore our utilities pages")), /*#__PURE__*/_react2.default.createElement(_react.SimpleGrid, {
    templateColumns: "1fr",
    width: "100%"
  }, createAuthLinks(authObject.items)))))), /*#__PURE__*/_react2.default.createElement(_react.Stack, {
    direction: "row",
    spacing: "4px",
    align: "center",
    color: "#fff",
    fontWeight: "bold",
    onMouseEnter: onOpenApplication,
    onMouseLeave: onCloseApplication,
    cursor: "pointer",
    position: "relative"
  }, /*#__PURE__*/_react2.default.createElement(_react.Text, {
    fontSize: "sm",
    color: mainText
  }, "Application"), /*#__PURE__*/_react2.default.createElement(_react.Icon, {
    as: _go.GoChevronDown,
    color: mainText,
    w: "14px",
    h: "14px",
    fontWeight: "2000"
  }), /*#__PURE__*/_react2.default.createElement(_react.Menu, {
    isOpen: isOpenApplication
  }, /*#__PURE__*/_react2.default.createElement(_react.MenuList, {
    bg: menuBg,
    p: "22px",
    cursor: "default",
    borderRadius: "15px",
    position: "absolute",
    top: "30px",
    left: "-10px"
  }, /*#__PURE__*/_react2.default.createElement(_react.Grid, {
    templateColumns: "1fr",
    gap: "16px"
  }, createApplicationLinks(applicationsObject.items))))), /*#__PURE__*/_react2.default.createElement(_react.Stack, {
    direction: "row",
    spacing: "4px",
    align: "center",
    color: "#fff",
    fontWeight: "bold",
    onMouseEnter: onOpenEcommerce,
    onMouseLeave: onCloseEcommerce,
    cursor: "pointer",
    position: "relative"
  }, /*#__PURE__*/_react2.default.createElement(_react.Text, {
    fontSize: "sm",
    color: mainText
  }, "Ecommerce"), /*#__PURE__*/_react2.default.createElement(_react.Icon, {
    as: _go.GoChevronDown,
    color: mainText,
    w: "14px",
    h: "14px",
    fontWeight: "2000"
  }), /*#__PURE__*/_react2.default.createElement(_react.Menu, {
    isOpen: isOpenEcommerce
  }, /*#__PURE__*/_react2.default.createElement(_react.MenuList, {
    bg: menuBg,
    p: "22px",
    minW: "350px",
    cursor: "default",
    borderRadius: "15px",
    position: "absolute",
    top: "30px",
    left: "-10px"
  }, /*#__PURE__*/_react2.default.createElement(_react.Grid, {
    templateColumns: "repeat(2, 1fr)",
    gap: "16px"
  }, createEcommerceLinks(ecommerceObject.items))))));
  return /*#__PURE__*/_react2.default.createElement(_SidebarContext.SidebarContext.Provider, {
    value: {
      sidebarWidth: sidebarWidth
    }
  }, /*#__PURE__*/_react2.default.createElement(_react.Flex, {
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
  }, /*#__PURE__*/_react2.default.createElement(_react.Flex, {
    w: "100%",
    justifyContent: {
      sm: "start",
      lg: "space-between"
    }
  }, brand, /*#__PURE__*/_react2.default.createElement(_react.Box, {
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
  }, /*#__PURE__*/_react2.default.createElement(_Sidebar.SidebarResponsive, _extends({
    logo: /*#__PURE__*/_react2.default.createElement(_react.Stack, {
      direction: "row",
      spacing: "12px",
      align: "center",
      justify: "center"
    }, /*#__PURE__*/_react2.default.createElement(_react.Box, {
      w: "1px",
      h: "20px",
      bg: colorMode === "dark" ? "white" : "gray.700"
    })),
    logoText: props.logoText,
    secondary: props.secondary,
    routes: _routes.default
  }, rest))), linksAuth, /*#__PURE__*/_react2.default.createElement(_react.Link, {
    href: "https://www.horizon-ui.com/pro"
  }, /*#__PURE__*/_react2.default.createElement(_react.Button, {
    bg: bgButton,
    color: colorButton,
    fontSize: "xs",
    variant: "no-effects",
    px: "30px",
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