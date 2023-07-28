"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = GeneralInformation;
var _react = require("@chakra-ui/react");
var _Card = _interopRequireDefault(require("components/card/Card.js"));
var _react2 = _interopRequireDefault(require("react"));
var _Information = _interopRequireDefault(require("views/admin/profile/components/Information"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _objectDestructuringEmpty(obj) { if (obj == null) throw new TypeError("Cannot destructure " + obj); }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); } // Chakra imports
// Custom components
// Assets
function GeneralInformation(props) {
  var rest = _extends({}, (_objectDestructuringEmpty(props), props));
  // Chakra Color Mode
  var textColorPrimary = (0, _react.useColorModeValue)("secondaryGray.900", "white");
  var textColorSecondary = "gray.400";
  var cardShadow = (0, _react.useColorModeValue)("0px 18px 40px rgba(112, 144, 176, 0.12)", "unset");
  return /*#__PURE__*/_react2.default.createElement(_Card.default, _extends({
    mb: {
      base: "0px",
      "2xl": "20px"
    }
  }, rest), /*#__PURE__*/_react2.default.createElement(_react.Text, {
    color: textColorPrimary,
    fontWeight: "bold",
    fontSize: "2xl",
    mt: "10px",
    mb: "4px"
  }, "General Information"), /*#__PURE__*/_react2.default.createElement(_react.Text, {
    color: textColorSecondary,
    fontSize: "md",
    me: "26px",
    mb: "40px"
  }, "As we live, our hearts turn colder. Cause pain is what we go through as we become older. We get insulted by others, lose trust for those others. We get back stabbed by friends. It becomes harder for us to give others a hand. We get our heart broken by people we love, even that we give them all..."), /*#__PURE__*/_react2.default.createElement(_react.SimpleGrid, {
    columns: "2",
    gap: "20px"
  }, /*#__PURE__*/_react2.default.createElement(_Information.default, {
    boxShadow: cardShadow,
    title: "Education",
    value: "Stanford University"
  }), /*#__PURE__*/_react2.default.createElement(_Information.default, {
    boxShadow: cardShadow,
    title: "Languages",
    value: "English, Spanish, Italian"
  }), /*#__PURE__*/_react2.default.createElement(_Information.default, {
    boxShadow: cardShadow,
    title: "Department",
    value: "Product Design"
  }), /*#__PURE__*/_react2.default.createElement(_Information.default, {
    boxShadow: cardShadow,
    title: "Work History",
    value: "Google, Facebook"
  }), /*#__PURE__*/_react2.default.createElement(_Information.default, {
    boxShadow: cardShadow,
    title: "Organization",
    value: "Simmmple Web LLC"
  }), /*#__PURE__*/_react2.default.createElement(_Information.default, {
    boxShadow: cardShadow,
    title: "Birthday",
    value: "20 July 1986"
  })));
}