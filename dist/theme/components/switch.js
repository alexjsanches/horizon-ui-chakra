"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.switchStyles = void 0;
var _themeTools = require("@chakra-ui/theme-tools");
var switchStyles = {
  components: {
    Switch: {
      baseStyle: {
        thumb: {
          fontWeight: 400,
          borderRadius: "50%",
          w: "16px",
          h: "16px",
          _checked: {
            transform: "translate(20px, 0px)"
          }
        },
        track: {
          display: "flex",
          alignItems: "center",
          boxSizing: "border-box",
          w: "40px",
          h: "20px",
          p: "2px",
          ps: "2px",
          _focus: {
            boxShadow: "none"
          }
        }
      },
      variants: {
        main: function main(props) {
          return {
            track: {
              bg: (0, _themeTools.mode)("gray.300", "navy.700")(props)
            }
          };
        }
      }
    }
  }
};
exports.switchStyles = switchStyles;