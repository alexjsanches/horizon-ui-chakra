"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Conversion;
var _react = require("@chakra-ui/react");
var _Card = _interopRequireDefault(require("components/card/Card.js"));
var _PieChart = _interopRequireDefault(require("components/charts/PieChart"));
var _charts = require("variables/charts");
var _Separator = require("components/separator/Separator");
var _react2 = _interopRequireDefault(require("react"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _objectDestructuringEmpty(obj) { if (obj == null) throw new TypeError("Cannot destructure " + obj); }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); } // Chakra imports
// Custom components
function Conversion(props) {
  var rest = _extends({}, (_objectDestructuringEmpty(props), props));

  // Chakra Color Mode
  var textColor = (0, _react.useColorModeValue)("secondaryGray.900", "white");
  var cardColor = (0, _react.useColorModeValue)("white", "navy.700");
  var cardShadow = (0, _react.useColorModeValue)("0px 18px 40px rgba(112, 144, 176, 0.12)", "unset");
  return /*#__PURE__*/_react2.default.createElement(_Card.default, _extends({
    p: "20px",
    align: "center",
    direction: "column",
    w: "100%"
  }, rest), /*#__PURE__*/_react2.default.createElement(_react.Flex, {
    px: {
      base: "0px",
      "2xl": "10px"
    },
    justifyContent: "space-between",
    alignItems: "center",
    w: "100%",
    mb: "8px"
  }, /*#__PURE__*/_react2.default.createElement(_react.Text, {
    color: textColor,
    fontSize: "md",
    fontWeight: "600",
    mt: "4px"
  }, "Your Pie Chart"), /*#__PURE__*/_react2.default.createElement(_react.Select, {
    fontSize: "sm",
    variant: "subtle",
    defaultValue: "monthly",
    width: "unset",
    fontWeight: "700"
  }, /*#__PURE__*/_react2.default.createElement("option", {
    value: "daily"
  }, "Daily"), /*#__PURE__*/_react2.default.createElement("option", {
    value: "monthly"
  }, "Monthly"), /*#__PURE__*/_react2.default.createElement("option", {
    value: "yearly"
  }, "Yearly"))), /*#__PURE__*/_react2.default.createElement(_PieChart.default, {
    h: "100%",
    w: "100%",
    chartData: _charts.pieChartData,
    chartOptions: _charts.pieChartOptions
  }), /*#__PURE__*/_react2.default.createElement(_Card.default, {
    bg: cardColor,
    flexDirection: "row",
    boxShadow: cardShadow,
    w: "100%",
    p: "15px",
    px: "20px",
    mt: "15px",
    mx: "auto"
  }, /*#__PURE__*/_react2.default.createElement(_react.Flex, {
    direction: "column",
    py: "5px"
  }, /*#__PURE__*/_react2.default.createElement(_react.Flex, {
    align: "center"
  }, /*#__PURE__*/_react2.default.createElement(_react.Box, {
    h: "8px",
    w: "8px",
    bg: "brand.500",
    borderRadius: "50%",
    me: "4px"
  }), /*#__PURE__*/_react2.default.createElement(_react.Text, {
    fontSize: "xs",
    color: "secondaryGray.600",
    fontWeight: "700",
    mb: "5px"
  }, "Your files")), /*#__PURE__*/_react2.default.createElement(_react.Text, {
    fontSize: "lg",
    color: textColor,
    fontWeight: "700"
  }, "63%")), /*#__PURE__*/_react2.default.createElement(_Separator.VSeparator, {
    mx: {
      base: "60px",
      xl: "60px",
      "2xl": "60px"
    }
  }), /*#__PURE__*/_react2.default.createElement(_react.Flex, {
    direction: "column",
    py: "5px",
    me: "10px"
  }, /*#__PURE__*/_react2.default.createElement(_react.Flex, {
    align: "center"
  }, /*#__PURE__*/_react2.default.createElement(_react.Box, {
    h: "8px",
    w: "8px",
    bg: "#6AD2FF",
    borderRadius: "50%",
    me: "4px"
  }), /*#__PURE__*/_react2.default.createElement(_react.Text, {
    fontSize: "xs",
    color: "secondaryGray.600",
    fontWeight: "700",
    mb: "5px"
  }, "System")), /*#__PURE__*/_react2.default.createElement(_react.Text, {
    fontSize: "lg",
    color: textColor,
    fontWeight: "700"
  }, "25%"))));
}