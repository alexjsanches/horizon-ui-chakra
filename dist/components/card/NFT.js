"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = NFT;
var _react = require("@chakra-ui/react");
var _Card = _interopRequireDefault(require("components/card/Card.js"));
var _react2 = _interopRequireWildcard(require("react"));
var _io = require("react-icons/io5");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; } // Chakra imports
// Custom components
// Assets
function NFT(props) {
  var image = props.image,
    name = props.name,
    author = props.author,
    bidders = props.bidders,
    download = props.download,
    currentbid = props.currentbid;
  var _useState = (0, _react2.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    like = _useState2[0],
    setLike = _useState2[1];
  var textColor = (0, _react.useColorModeValue)("navy.700", "white");
  var textColorBid = (0, _react.useColorModeValue)("brand.500", "white");
  return /*#__PURE__*/_react2.default.createElement(_Card.default, {
    p: "20px"
  }, /*#__PURE__*/_react2.default.createElement(_react.Flex, {
    direction: {
      base: "column"
    },
    justify: "center"
  }, /*#__PURE__*/_react2.default.createElement(_react.Box, {
    mb: {
      base: "20px",
      "2xl": "20px"
    },
    position: "relative"
  }, /*#__PURE__*/_react2.default.createElement(_react.Image, {
    src: image,
    w: {
      base: "100%",
      "3xl": "100%"
    },
    h: {
      base: "100%",
      "3xl": "100%"
    },
    borderRadius: "20px"
  }), /*#__PURE__*/_react2.default.createElement(_react.Button, {
    position: "absolute",
    bg: "white",
    _hover: {
      bg: "whiteAlpha.900"
    },
    _active: {
      bg: "white"
    },
    _focus: {
      bg: "white"
    },
    p: "0px !important",
    top: "14px",
    right: "14px",
    borderRadius: "50%",
    minW: "36px",
    h: "36px",
    onClick: function onClick() {
      setLike(!like);
    }
  }, /*#__PURE__*/_react2.default.createElement(_react.Icon, {
    transition: "0.2s linear",
    w: "20px",
    h: "20px",
    as: like ? _io.IoHeart : _io.IoHeartOutline,
    color: "brand.500"
  }))), /*#__PURE__*/_react2.default.createElement(_react.Flex, {
    flexDirection: "column",
    justify: "space-between",
    h: "100%"
  }, /*#__PURE__*/_react2.default.createElement(_react.Flex, {
    justify: "space-between",
    direction: {
      base: "row",
      md: "column",
      lg: "row",
      xl: "column",
      "2xl": "row"
    },
    mb: "auto"
  }, /*#__PURE__*/_react2.default.createElement(_react.Flex, {
    direction: "column"
  }, /*#__PURE__*/_react2.default.createElement(_react.Text, {
    color: textColor,
    fontSize: {
      base: "xl",
      md: "lg",
      lg: "lg",
      xl: "lg",
      "2xl": "md",
      "3xl": "lg"
    },
    mb: "5px",
    fontWeight: "bold",
    me: "14px"
  }, name), /*#__PURE__*/_react2.default.createElement(_react.Text, {
    color: "secondaryGray.600",
    fontSize: {
      base: "sm"
    },
    fontWeight: "400",
    me: "14px"
  }, author)), /*#__PURE__*/_react2.default.createElement(_react.AvatarGroup, {
    max: 3,
    color: textColorBid,
    size: "sm",
    mt: {
      base: "0px",
      md: "10px",
      lg: "0px",
      xl: "10px",
      "2xl": "0px"
    },
    fontSize: "12px"
  }, bidders.map(function (avt, key) {
    return /*#__PURE__*/_react2.default.createElement(_react.Avatar, {
      key: key,
      src: avt
    });
  }))), /*#__PURE__*/_react2.default.createElement(_react.Flex, {
    align: "start",
    justify: "space-between",
    direction: {
      base: "row",
      md: "column",
      lg: "row",
      xl: "column",
      "2xl": "row"
    },
    mt: "25px"
  }, /*#__PURE__*/_react2.default.createElement(_react.Text, {
    fontWeight: "700",
    fontSize: "sm",
    color: textColorBid
  }, "Current Bid: ", currentbid), /*#__PURE__*/_react2.default.createElement(_react.Link, {
    href: download,
    mt: {
      base: "0px",
      md: "10px",
      lg: "0px",
      xl: "10px",
      "2xl": "0px"
    }
  }, /*#__PURE__*/_react2.default.createElement(_react.Button, {
    variant: "darkBrand",
    color: "white",
    fontSize: "sm",
    fontWeight: "500",
    borderRadius: "70px",
    px: "24px",
    py: "5px"
  }, "Place Bid"))))));
}