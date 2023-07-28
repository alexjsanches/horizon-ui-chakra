"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = DailyTraffic;
var _react = _interopRequireDefault(require("react"));
var _react2 = require("@chakra-ui/react");
var _BarChart = _interopRequireDefault(require("components/charts/BarChart"));
var _Card = _interopRequireDefault(require("components/card/Card.js"));
var _charts = require("variables/charts");
var _ri = require("react-icons/ri");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _objectDestructuringEmpty(obj) { if (obj == null) throw new TypeError("Cannot destructure " + obj); }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); } // Chakra imports
// Custom components
// Assets
function DailyTraffic(props) {
  var rest = _extends({}, (_objectDestructuringEmpty(props), props));

  // Chakra Color Mode
  var textColor = (0, _react2.useColorModeValue)("secondaryGray.900", "white");
  return /*#__PURE__*/_react.default.createElement(_Card.default, _extends({
    align: "center",
    direction: "column",
    w: "100%"
  }, rest), /*#__PURE__*/_react.default.createElement(_react2.Flex, {
    justify: "space-between",
    align: "start",
    px: "10px",
    pt: "5px"
  }, /*#__PURE__*/_react.default.createElement(_react2.Flex, {
    flexDirection: "column",
    align: "start",
    me: "20px"
  }, /*#__PURE__*/_react.default.createElement(_react2.Text, {
    color: "secondaryGray.600",
    fontSize: "sm",
    fontWeight: "500"
  }, "Daily Traffic"), /*#__PURE__*/_react.default.createElement(_react2.Flex, {
    align: "end"
  }, /*#__PURE__*/_react.default.createElement(_react2.Text, {
    color: textColor,
    fontSize: "34px",
    fontWeight: "700",
    lineHeight: "100%"
  }, "2.579"), /*#__PURE__*/_react.default.createElement(_react2.Text, {
    ms: "6px",
    color: "secondaryGray.600",
    fontSize: "sm",
    fontWeight: "500"
  }, "Visitors"))), /*#__PURE__*/_react.default.createElement(_react2.Flex, {
    align: "center"
  }, /*#__PURE__*/_react.default.createElement(_react2.Icon, {
    as: _ri.RiArrowUpSFill,
    color: "green.500"
  }), /*#__PURE__*/_react.default.createElement(_react2.Text, {
    color: "green.500",
    fontSize: "sm",
    fontWeight: "700"
  }, "+2.45%"))), /*#__PURE__*/_react.default.createElement(_react2.Box, {
    h: "240px",
    mt: "auto"
  }, /*#__PURE__*/_react.default.createElement(_BarChart.default, {
    chartData: _charts.barChartDataDailyTraffic,
    chartOptions: _charts.barChartOptionsDailyTraffic
  })));
}