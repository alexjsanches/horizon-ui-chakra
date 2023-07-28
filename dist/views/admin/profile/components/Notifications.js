"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Notifications;
var _react = require("@chakra-ui/react");
var _Card = _interopRequireDefault(require("components/card/Card.js"));
var _SwitchField = _interopRequireDefault(require("components/fields/SwitchField"));
var _MainMenu = _interopRequireDefault(require("components/menu/MainMenu"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _objectDestructuringEmpty(obj) { if (obj == null) throw new TypeError("Cannot destructure " + obj); }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); } // Chakra imports
// Custom components
function Notifications(props) {
  var rest = _extends({}, (_objectDestructuringEmpty(props), props));
  // Chakra Color Mode
  var textColorPrimary = (0, _react.useColorModeValue)("secondaryGray.900", "white");
  return /*#__PURE__*/React.createElement(_Card.default, _extends({
    mb: "20px",
    mt: "40px",
    mx: "auto",
    maxW: "410px"
  }, rest), /*#__PURE__*/React.createElement(_react.Flex, {
    align: "center",
    w: "100%",
    justify: "space-between",
    mb: "30px"
  }, /*#__PURE__*/React.createElement(_react.Text, {
    color: textColorPrimary,
    fontWeight: "bold",
    fontSize: "2xl",
    mb: "4px"
  }, "Notifications"), /*#__PURE__*/React.createElement(_MainMenu.default, null)), /*#__PURE__*/React.createElement(_SwitchField.default, {
    isChecked: true,
    reversed: true,
    fontSize: "sm",
    mb: "20px",
    id: "1",
    label: "Item update notifications"
  }), /*#__PURE__*/React.createElement(_SwitchField.default, {
    reversed: true,
    fontSize: "sm",
    mb: "20px",
    id: "2",
    label: "Item comment notifications"
  }), /*#__PURE__*/React.createElement(_SwitchField.default, {
    isChecked: true,
    reversed: true,
    fontSize: "sm",
    mb: "20px",
    id: "3",
    label: "Buyer review notifications"
  }), /*#__PURE__*/React.createElement(_SwitchField.default, {
    isChecked: true,
    reversed: true,
    fontSize: "sm",
    mb: "20px",
    id: "4",
    label: "Rating reminders notifications"
  }), /*#__PURE__*/React.createElement(_SwitchField.default, {
    reversed: true,
    fontSize: "sm",
    mb: "20px",
    id: "5",
    label: "Meetups near you notifications"
  }), /*#__PURE__*/React.createElement(_SwitchField.default, {
    reversed: true,
    fontSize: "sm",
    mb: "20px",
    id: "6",
    label: "Company news notifications"
  }), /*#__PURE__*/React.createElement(_SwitchField.default, {
    isChecked: true,
    reversed: true,
    fontSize: "sm",
    mb: "20px",
    id: "7",
    label: "New launches and projects"
  }), /*#__PURE__*/React.createElement(_SwitchField.default, {
    reversed: true,
    fontSize: "sm",
    mb: "20px",
    id: "8",
    label: "Monthly product changes"
  }), /*#__PURE__*/React.createElement(_SwitchField.default, {
    isChecked: true,
    reversed: true,
    fontSize: "sm",
    mb: "20px",
    id: "9",
    label: "Subscribe to newsletter"
  }), /*#__PURE__*/React.createElement(_SwitchField.default, {
    reversed: true,
    fontSize: "sm",
    id: "10",
    label: "Email me when someone follows me"
  }));
}