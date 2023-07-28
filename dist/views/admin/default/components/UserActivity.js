"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = UserActivity;
var _react = require("@chakra-ui/react");
var _Card = _interopRequireDefault(require("components/card/Card.js"));
var _BarChart = _interopRequireDefault(require("components/charts/BarChart"));
var _react2 = _interopRequireDefault(require("react"));
var _charts = require("variables/charts");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _objectDestructuringEmpty(obj) { if (obj == null) throw new TypeError("Cannot destructure " + obj); }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); } // Chakra imports
// Custom components
function UserActivity(props) {
  var rest = _extends({}, (_objectDestructuringEmpty(props), props));

  // Chakra Color Mode
  var textColor = (0, _react.useColorModeValue)("secondaryGray.900", "white");
  return /*#__PURE__*/_react2.default.createElement(_Card.default, _extends({
    align: "center",
    direction: "column",
    w: "100%"
  }, rest), /*#__PURE__*/_react2.default.createElement(_react.Flex, {
    align: "center",
    w: "100%",
    px: "15px",
    py: "10px"
  }, /*#__PURE__*/_react2.default.createElement(_react.Text, {
    me: "auto",
    color: textColor,
    fontSize: "xl",
    fontWeight: "700",
    lineHeight: "100%"
  }, "User Activity"), /*#__PURE__*/_react2.default.createElement(_react.Select, {
    id: "user_type",
    w: "unset",
    variant: "transparent",
    display: "flex",
    alignItems: "center",
    defaultValue: "Weekly"
  }, /*#__PURE__*/_react2.default.createElement("option", {
    value: "Weekly"
  }, "Weekly"), /*#__PURE__*/_react2.default.createElement("option", {
    value: "Daily"
  }, "Daily"), /*#__PURE__*/_react2.default.createElement("option", {
    value: "Monthly"
  }, "Monthly"))), /*#__PURE__*/_react2.default.createElement(_react.Box, {
    h: "240px",
    mt: "auto"
  }, /*#__PURE__*/_react2.default.createElement(_BarChart.default, {
    chartData: _charts.barChartDataUserActivity,
    chartOptions: _charts.barChartOptionsUserActivity
  })));
}