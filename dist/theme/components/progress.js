"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.progressStyles = void 0;
var _themeTools = require("@chakra-ui/theme-tools");
var progressStyles = {
  components: {
    Progress: {
      baseStyle: {
        field: {
          fontWeight: 400,
          w: "16px",
          h: "16px",
          borderRadius: "20px",
          _checked: {
            transform: "translate(20px, 0px)"
          }
        },
        track: {
          w: "40px",
          h: "20px",
          borderRadius: "20px",
          _focus: {
            boxShadow: "none"
          }
        }
      },
      variants: {
        table: function table(props) {
          return {
            field: {
              bg: "brand.500",
              borderRadius: "16px",
              fontSize: "sm"
            },
            track: {
              borderRadius: "20px",
              bg: (0, _themeTools.mode)("blue.50", "whiteAlpha.50")(props),
              h: "8px",
              w: "54px"
            },
            thumb: {
              w: "250px"
            }
          };
        }
      }
    }
  }
};
exports.progressStyles = progressStyles;