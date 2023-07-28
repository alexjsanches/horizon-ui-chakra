"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Projects;
var _react = require("@chakra-ui/react");
var _Project = _interopRequireDefault(require("assets/img/profile/Project1.png"));
var _Project2 = _interopRequireDefault(require("assets/img/profile/Project2.png"));
var _Project3 = _interopRequireDefault(require("assets/img/profile/Project3.png"));
var _Card = _interopRequireDefault(require("components/card/Card.js"));
var _react2 = _interopRequireDefault(require("react"));
var _Project4 = _interopRequireDefault(require("views/admin/profile/components/Project"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
// Chakra imports

// Assets

// Custom components

function Projects(props) {
  // Chakra Color Mode
  var textColorPrimary = (0, _react.useColorModeValue)("secondaryGray.900", "white");
  var textColorSecondary = "gray.400";
  var cardShadow = (0, _react.useColorModeValue)("0px 18px 40px rgba(112, 144, 176, 0.12)", "unset");
  return /*#__PURE__*/_react2.default.createElement(_Card.default, {
    mb: {
      base: "0px",
      "2xl": "20px"
    }
  }, /*#__PURE__*/_react2.default.createElement(_react.Text, {
    color: textColorPrimary,
    fontWeight: "bold",
    fontSize: "2xl",
    mt: "10px",
    mb: "4px"
  }, "All projects"), /*#__PURE__*/_react2.default.createElement(_react.Text, {
    color: textColorSecondary,
    fontSize: "md",
    me: "26px",
    mb: "40px"
  }, "Here you can find more details about your projects. Keep you user engaged by providing meaningful information."), /*#__PURE__*/_react2.default.createElement(_Project4.default, {
    boxShadow: cardShadow,
    mb: "20px",
    image: _Project.default,
    ranking: "1",
    link: "#",
    title: "Technology behind the Blockchain"
  }), /*#__PURE__*/_react2.default.createElement(_Project4.default, {
    boxShadow: cardShadow,
    mb: "20px",
    image: _Project2.default,
    ranking: "2",
    link: "#",
    title: "Greatest way to a good Economy"
  }), /*#__PURE__*/_react2.default.createElement(_Project4.default, {
    boxShadow: cardShadow,
    image: _Project3.default,
    ranking: "3",
    link: "#",
    title: "Most essential tips for Burnout"
  }));
}