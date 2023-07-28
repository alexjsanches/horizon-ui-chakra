"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SidebarResponsive = SidebarResponsive;
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _react2 = require("@chakra-ui/react");
var _Content = _interopRequireDefault(require("components/sidebar/components/Content"));
var _Scrollbar = require("components/scrollbar/Scrollbar");
var _reactCustomScrollbars = require("react-custom-scrollbars-2");
var _propTypes = _interopRequireDefault(require("prop-types"));
var _io = require("react-icons/io5");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
// chakra imports

// Assets

function Sidebar(props) {
  var routes = props.routes;
  var variantChange = "0.2s linear";
  var shadow = (0, _react2.useColorModeValue)("14px 17px 40px 4px rgba(112, 144, 176, 0.08)", "unset");
  // Chakra Color Mode
  var sidebarBg = (0, _react2.useColorModeValue)("white", "navy.800");
  var sidebarMargins = "0px";

  // SIDEBAR
  return /*#__PURE__*/_react.default.createElement(_react2.Box, {
    display: {
      sm: "none",
      xl: "block"
    },
    w: "100%",
    position: "fixed",
    minH: "100%"
  }, /*#__PURE__*/_react.default.createElement(_react2.Box, {
    bg: sidebarBg,
    transition: variantChange,
    w: "300px",
    h: "100vh",
    m: sidebarMargins,
    minH: "100%",
    overflowX: "hidden",
    boxShadow: shadow
  }, /*#__PURE__*/_react.default.createElement(_reactCustomScrollbars.Scrollbars, {
    autoHide: true,
    renderTrackVertical: _Scrollbar.renderTrack,
    renderThumbVertical: _Scrollbar.renderThumb,
    renderView: _Scrollbar.renderView
  }, /*#__PURE__*/_react.default.createElement(_Content.default, {
    routes: routes
  }))));
}

// FUNCTIONS
function SidebarResponsive(props) {
  var sidebarBackgroundColor = (0, _react2.useColorModeValue)("white", "navy.800");
  var menuColor = (0, _react2.useColorModeValue)("gray.400", "white");
  // // SIDEBAR
  var _useDisclosure = (0, _react2.useDisclosure)(),
    isOpen = _useDisclosure.isOpen,
    onOpen = _useDisclosure.onOpen,
    onClose = _useDisclosure.onClose;
  var btnRef = _react.default.useRef();
  var routes = props.routes;
  // let isWindows = navigator.platform.startsWith("Win");
  //  BRAND

  return /*#__PURE__*/_react.default.createElement(_react2.Flex, {
    display: {
      sm: "flex",
      xl: "none"
    },
    alignItems: "center"
  }, /*#__PURE__*/_react.default.createElement(_react2.Flex, {
    ref: btnRef,
    w: "max-content",
    h: "max-content",
    onClick: onOpen
  }, /*#__PURE__*/_react.default.createElement(_react2.Icon, {
    as: _io.IoMenuOutline,
    color: menuColor,
    my: "auto",
    w: "20px",
    h: "20px",
    me: "10px",
    _hover: {
      cursor: "pointer"
    }
  })), /*#__PURE__*/_react.default.createElement(_react2.Drawer, {
    isOpen: isOpen,
    onClose: onClose,
    placement: document.documentElement.dir === "rtl" ? "right" : "left",
    finalFocusRef: btnRef
  }, /*#__PURE__*/_react.default.createElement(_react2.DrawerOverlay, null), /*#__PURE__*/_react.default.createElement(_react2.DrawerContent, {
    w: "285px",
    maxW: "285px",
    bg: sidebarBackgroundColor
  }, /*#__PURE__*/_react.default.createElement(_react2.DrawerCloseButton, {
    zIndex: "3",
    onClose: onClose,
    _focus: {
      boxShadow: "none"
    },
    _hover: {
      boxShadow: "none"
    }
  }), /*#__PURE__*/_react.default.createElement(_react2.DrawerBody, {
    maxW: "285px",
    px: "0rem",
    pb: "0"
  }, /*#__PURE__*/_react.default.createElement(_reactCustomScrollbars.Scrollbars, {
    autoHide: true,
    renderTrackVertical: _Scrollbar.renderTrack,
    renderThumbVertical: _Scrollbar.renderThumb,
    renderView: _Scrollbar.renderView
  }, /*#__PURE__*/_react.default.createElement(_Content.default, {
    routes: routes
  }))))));
}
// PROPS

Sidebar.propTypes = {
  logoText: _propTypes.default.string,
  routes: _propTypes.default.arrayOf(_propTypes.default.object),
  variant: _propTypes.default.string
};
var _default = Sidebar;
exports.default = _default;