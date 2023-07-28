"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = TotalSpent;
var _react = require("@chakra-ui/react");
var _Card = _interopRequireDefault(require("components/card/Card.js"));
var _LineChart = _interopRequireDefault(require("components/charts/LineChart"));
var _react2 = _interopRequireDefault(require("react"));
var _io = require("react-icons/io5");
var _md = require("react-icons/md");
var _ri = require("react-icons/ri");
var _charts = require("variables/charts");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _objectDestructuringEmpty(obj) { if (obj == null) throw new TypeError("Cannot destructure " + obj); }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); } // Chakra imports
// Custom components
// Assets
function TotalSpent(props) {
  var rest = _extends({}, (_objectDestructuringEmpty(props), props));

  // Chakra Color Mode

  var textColor = (0, _react.useColorModeValue)("secondaryGray.900", "white");
  var textColorSecondary = (0, _react.useColorModeValue)("secondaryGray.600", "white");
  var boxBg = (0, _react.useColorModeValue)("secondaryGray.300", "whiteAlpha.100");
  var iconColor = (0, _react.useColorModeValue)("brand.500", "white");
  var bgButton = (0, _react.useColorModeValue)("secondaryGray.300", "whiteAlpha.100");
  var bgHover = (0, _react.useColorModeValue)({
    bg: "secondaryGray.400"
  }, {
    bg: "whiteAlpha.50"
  });
  var bgFocus = (0, _react.useColorModeValue)({
    bg: "secondaryGray.300"
  }, {
    bg: "whiteAlpha.100"
  });
  return /*#__PURE__*/_react2.default.createElement(_Card.default, _extends({
    justifyContent: "center",
    align: "center",
    direction: "column",
    w: "100%",
    mb: "0px"
  }, rest), /*#__PURE__*/_react2.default.createElement(_react.Flex, {
    justify: "space-between",
    ps: "0px",
    pe: "20px",
    pt: "5px"
  }, /*#__PURE__*/_react2.default.createElement(_react.Flex, {
    align: "center",
    w: "100%"
  }, /*#__PURE__*/_react2.default.createElement(_react.Button, {
    bg: boxBg,
    fontSize: "sm",
    fontWeight: "500",
    color: textColorSecondary,
    borderRadius: "7px"
  }, /*#__PURE__*/_react2.default.createElement(_react.Icon, {
    as: _md.MdOutlineCalendarToday,
    color: textColorSecondary,
    me: "4px"
  }), "This month"), /*#__PURE__*/_react2.default.createElement(_react.Button, _extends({
    ms: "auto",
    align: "center",
    justifyContent: "center",
    bg: bgButton,
    _hover: bgHover,
    _focus: bgFocus,
    _active: bgFocus,
    w: "37px",
    h: "37px",
    lineHeight: "100%",
    borderRadius: "10px"
  }, rest), /*#__PURE__*/_react2.default.createElement(_react.Icon, {
    as: _md.MdBarChart,
    color: iconColor,
    w: "24px",
    h: "24px"
  })))), /*#__PURE__*/_react2.default.createElement(_react.Flex, {
    w: "100%",
    flexDirection: {
      base: "column",
      lg: "row"
    }
  }, /*#__PURE__*/_react2.default.createElement(_react.Flex, {
    flexDirection: "column",
    me: "20px",
    mt: "28px"
  }, /*#__PURE__*/_react2.default.createElement(_react.Text, {
    color: textColor,
    fontSize: "34px",
    textAlign: "start",
    fontWeight: "700",
    lineHeight: "100%"
  }, "$37.5K"), /*#__PURE__*/_react2.default.createElement(_react.Flex, {
    align: "center",
    mb: "20px"
  }, /*#__PURE__*/_react2.default.createElement(_react.Text, {
    color: "secondaryGray.600",
    fontSize: "sm",
    fontWeight: "500",
    mt: "4px",
    me: "12px"
  }, "Total Spent"), /*#__PURE__*/_react2.default.createElement(_react.Flex, {
    align: "center"
  }, /*#__PURE__*/_react2.default.createElement(_react.Icon, {
    as: _ri.RiArrowUpSFill,
    color: "green.500",
    me: "2px",
    mt: "2px"
  }), /*#__PURE__*/_react2.default.createElement(_react.Text, {
    color: "green.500",
    fontSize: "sm",
    fontWeight: "700"
  }, "+2.45%"))), /*#__PURE__*/_react2.default.createElement(_react.Flex, {
    align: "center"
  }, /*#__PURE__*/_react2.default.createElement(_react.Icon, {
    as: _io.IoCheckmarkCircle,
    color: "green.500",
    me: "4px"
  }), /*#__PURE__*/_react2.default.createElement(_react.Text, {
    color: "green.500",
    fontSize: "md",
    fontWeight: "700"
  }, "On track"))), /*#__PURE__*/_react2.default.createElement(_react.Box, {
    minH: "260px",
    minW: "75%",
    mt: "auto"
  }, /*#__PURE__*/_react2.default.createElement(_LineChart.default, {
    chartData: _charts.lineChartDataTotalSpent,
    chartOptions: _charts.lineChartOptionsTotalSpent
  }))));
}