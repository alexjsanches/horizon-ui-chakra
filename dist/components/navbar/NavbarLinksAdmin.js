"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = HeaderLinks;
var _react = require("@chakra-ui/react");
var _ItemContent = require("components/menu/ItemContent");
var _SearchBar = require("components/navbar/searchBar/SearchBar");
var _Sidebar = require("components/sidebar/Sidebar");
var _propTypes = _interopRequireDefault(require("prop-types"));
var _react2 = _interopRequireDefault(require("react"));
var _Navbar = _interopRequireDefault(require("assets/img/layout/Navbar.png"));
var _md = require("react-icons/md");
var _fa = require("react-icons/fa");
var _routes = _interopRequireDefault(require("routes.js"));
var _ThemeEditor = require("./ThemeEditor");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
// Chakra Imports

// Custom Components

// Assets

function HeaderLinks(props) {
  var secondary = props.secondary;
  // Chakra Color Mode
  var navbarIcon = (0, _react.useColorModeValue)('gray.400', 'white');
  var menuBg = (0, _react.useColorModeValue)('white', 'navy.800');
  var textColor = (0, _react.useColorModeValue)('secondaryGray.900', 'white');
  var textColorBrand = (0, _react.useColorModeValue)('brand.700', 'brand.400');
  var ethColor = (0, _react.useColorModeValue)('gray.700', 'white');
  var borderColor = (0, _react.useColorModeValue)('#E6ECFA', 'rgba(135, 140, 189, 0.3)');
  var ethBg = (0, _react.useColorModeValue)('secondaryGray.300', 'navy.900');
  var ethBox = (0, _react.useColorModeValue)('white', 'navy.800');
  var shadow = (0, _react.useColorModeValue)('14px 17px 40px 4px rgba(112, 144, 176, 0.18)', '14px 17px 40px 4px rgba(112, 144, 176, 0.06)');
  var borderButton = (0, _react.useColorModeValue)('secondaryGray.500', 'whiteAlpha.200');
  return /*#__PURE__*/_react2.default.createElement(_react.Flex, {
    w: {
      sm: '100%',
      md: 'auto'
    },
    alignItems: "center",
    flexDirection: "row",
    bg: menuBg,
    flexWrap: secondary ? {
      base: 'wrap',
      md: 'nowrap'
    } : 'unset',
    p: "10px",
    borderRadius: "30px",
    boxShadow: shadow
  }, /*#__PURE__*/_react2.default.createElement(_SearchBar.SearchBar, {
    mb: secondary ? {
      base: '10px',
      md: 'unset'
    } : 'unset',
    me: "10px",
    borderRadius: "30px"
  }), /*#__PURE__*/_react2.default.createElement(_react.Flex, {
    bg: ethBg,
    display: secondary ? 'flex' : 'none',
    borderRadius: "30px",
    ms: "auto",
    p: "6px",
    align: "center",
    me: "6px"
  }, /*#__PURE__*/_react2.default.createElement(_react.Flex, {
    align: "center",
    justify: "center",
    bg: ethBox,
    h: "29px",
    w: "29px",
    borderRadius: "30px",
    me: "7px"
  }, /*#__PURE__*/_react2.default.createElement(_react.Icon, {
    color: ethColor,
    w: "9px",
    h: "14px",
    as: _fa.FaEthereum
  })), /*#__PURE__*/_react2.default.createElement(_react.Text, {
    w: "max-content",
    color: ethColor,
    fontSize: "sm",
    fontWeight: "700",
    me: "6px"
  }, "1,924", /*#__PURE__*/_react2.default.createElement(_react.Text, {
    as: "span",
    display: {
      base: 'none',
      md: 'unset'
    }
  }, ' ', "ETH"))), /*#__PURE__*/_react2.default.createElement(_Sidebar.SidebarResponsive, {
    routes: _routes.default
  }), /*#__PURE__*/_react2.default.createElement(_react.Menu, null, /*#__PURE__*/_react2.default.createElement(_react.MenuButton, {
    p: "0px"
  }, /*#__PURE__*/_react2.default.createElement(_react.Icon, {
    mt: "6px",
    as: _md.MdNotificationsNone,
    color: navbarIcon,
    w: "18px",
    h: "18px",
    me: "10px"
  })), /*#__PURE__*/_react2.default.createElement(_react.MenuList, {
    boxShadow: shadow,
    p: "20px",
    borderRadius: "20px",
    bg: menuBg,
    border: "none",
    mt: "22px",
    me: {
      base: '30px',
      md: 'unset'
    },
    minW: {
      base: 'unset',
      md: '400px',
      xl: '450px'
    },
    maxW: {
      base: '360px',
      md: 'unset'
    }
  }, /*#__PURE__*/_react2.default.createElement(_react.Flex, {
    jusitfy: "space-between",
    w: "100%",
    mb: "20px"
  }, /*#__PURE__*/_react2.default.createElement(_react.Text, {
    fontSize: "md",
    fontWeight: "600",
    color: textColor
  }, "Notifications"), /*#__PURE__*/_react2.default.createElement(_react.Text, {
    fontSize: "sm",
    fontWeight: "500",
    color: textColorBrand,
    ms: "auto",
    cursor: "pointer"
  }, "Mark all read")), /*#__PURE__*/_react2.default.createElement(_react.Flex, {
    flexDirection: "column"
  }, /*#__PURE__*/_react2.default.createElement(_react.MenuItem, {
    _hover: {
      bg: 'none'
    },
    _focus: {
      bg: 'none'
    },
    px: "0",
    borderRadius: "8px",
    mb: "10px"
  }, /*#__PURE__*/_react2.default.createElement(_ItemContent.ItemContent, {
    info: "Horizon UI Dashboard PRO",
    aName: "Alicia"
  })), /*#__PURE__*/_react2.default.createElement(_react.MenuItem, {
    _hover: {
      bg: 'none'
    },
    _focus: {
      bg: 'none'
    },
    px: "0",
    borderRadius: "8px",
    mb: "10px"
  }, /*#__PURE__*/_react2.default.createElement(_ItemContent.ItemContent, {
    info: "Horizon Design System Free",
    aName: "Josh Henry"
  }))))), /*#__PURE__*/_react2.default.createElement(_react.Menu, null, /*#__PURE__*/_react2.default.createElement(_react.MenuButton, {
    p: "0px"
  }, /*#__PURE__*/_react2.default.createElement(_react.Icon, {
    mt: "6px",
    as: _md.MdInfoOutline,
    color: navbarIcon,
    w: "18px",
    h: "18px",
    me: "10px"
  })), /*#__PURE__*/_react2.default.createElement(_react.MenuList, {
    boxShadow: shadow,
    p: "20px",
    me: {
      base: "30px",
      md: "unset"
    },
    borderRadius: "20px",
    bg: menuBg,
    border: "none",
    mt: "22px",
    minW: {
      base: "unset"
    },
    maxW: {
      base: "360px",
      md: "unset"
    }
  }, /*#__PURE__*/_react2.default.createElement(_react.Image, {
    src: _Navbar.default,
    borderRadius: "16px",
    mb: "28px"
  }), /*#__PURE__*/_react2.default.createElement(_react.Flex, {
    flexDirection: "column"
  }, /*#__PURE__*/_react2.default.createElement(_react.Link, {
    w: "100%",
    href: "https://horizon-ui.com/pro?ref=horizon-chakra-free"
  }, /*#__PURE__*/_react2.default.createElement(_react.Button, {
    w: "100%",
    h: "44px",
    mb: "10px",
    variant: "brand"
  }, "Buy Horizon UI PRO")), /*#__PURE__*/_react2.default.createElement(_react.Link, {
    w: "100%",
    href: "https://horizon-ui.com/documentation/docs/introduction?ref=horizon-chakra-free"
  }, /*#__PURE__*/_react2.default.createElement(_react.Button, {
    w: "100%",
    h: "44px",
    mb: "10px",
    border: "1px solid",
    bg: "transparent",
    borderColor: borderButton
  }, "See Documentation")), /*#__PURE__*/_react2.default.createElement(_react.Link, {
    w: "100%",
    href: "https://github.com/horizon-ui/horizon-ui-chakra"
  }, /*#__PURE__*/_react2.default.createElement(_react.Button, {
    w: "100%",
    h: "44px",
    variant: "no-hover",
    color: textColor,
    bg: "transparent"
  }, "Try Horizon Free"))))), /*#__PURE__*/_react2.default.createElement(_ThemeEditor.ThemeEditor, {
    navbarIcon: navbarIcon
  }), /*#__PURE__*/_react2.default.createElement(_react.Menu, null, /*#__PURE__*/_react2.default.createElement(_react.MenuButton, {
    p: "0px"
  }, /*#__PURE__*/_react2.default.createElement(_react.Avatar, {
    _hover: {
      cursor: 'pointer'
    },
    color: "white",
    name: "Adela Parkson",
    bg: "#11047A",
    size: "sm",
    w: "40px",
    h: "40px"
  })), /*#__PURE__*/_react2.default.createElement(_react.MenuList, {
    boxShadow: shadow,
    p: "0px",
    mt: "10px",
    borderRadius: "20px",
    bg: menuBg,
    border: "none"
  }, /*#__PURE__*/_react2.default.createElement(_react.Flex, {
    w: "100%",
    mb: "0px"
  }, /*#__PURE__*/_react2.default.createElement(_react.Text, {
    ps: "20px",
    pt: "16px",
    pb: "10px",
    w: "100%",
    borderBottom: "1px solid",
    borderColor: borderColor,
    fontSize: "sm",
    fontWeight: "700",
    color: textColor
  }, "\uD83D\uDC4B\xA0 Hey, Adela")), /*#__PURE__*/_react2.default.createElement(_react.Flex, {
    flexDirection: "column",
    p: "10px"
  }, /*#__PURE__*/_react2.default.createElement(_react.MenuItem, {
    _hover: {
      bg: 'none'
    },
    _focus: {
      bg: 'none'
    },
    borderRadius: "8px",
    px: "14px"
  }, /*#__PURE__*/_react2.default.createElement(_react.Text, {
    fontSize: "sm"
  }, "Profile Settings")), /*#__PURE__*/_react2.default.createElement(_react.MenuItem, {
    _hover: {
      bg: 'none'
    },
    _focus: {
      bg: 'none'
    },
    borderRadius: "8px",
    px: "14px"
  }, /*#__PURE__*/_react2.default.createElement(_react.Text, {
    fontSize: "sm"
  }, "Newsletter Settings")), /*#__PURE__*/_react2.default.createElement(_react.MenuItem, {
    _hover: {
      bg: 'none'
    },
    _focus: {
      bg: 'none'
    },
    color: "red.400",
    borderRadius: "8px",
    px: "14px"
  }, /*#__PURE__*/_react2.default.createElement(_react.Text, {
    fontSize: "sm"
  }, "Log out"))))));
}
HeaderLinks.propTypes = {
  variant: _propTypes.default.string,
  fixed: _propTypes.default.bool,
  secondary: _propTypes.default.bool,
  onOpen: _propTypes.default.func
};