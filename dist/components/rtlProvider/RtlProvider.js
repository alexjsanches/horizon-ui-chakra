"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.RtlProvider = RtlProvider;
var _react = require("@emotion/react");
var _cache = _interopRequireDefault(require("@emotion/cache"));
var _stylisPluginRtl = _interopRequireDefault(require("stylis-plugin-rtl"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
// NB: A unique `key` is important for it to work!
var options = {
  rtl: {
    key: "css-ar",
    stylisPlugins: [_stylisPluginRtl.default]
  },
  ltr: {
    key: "css-en"
  }
};
function RtlProvider(_ref) {
  var children = _ref.children;
  var dir = document.documentElement.dir === "ar" ? "rtl" : "ltr";
  var cache = (0, _cache.default)(options[dir]);
  return /*#__PURE__*/React.createElement(_react.CacheProvider, {
    value: cache,
    children: children
  });
}