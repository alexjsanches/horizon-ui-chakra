"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.textareaStyles = void 0;
var _themeTools = require("@chakra-ui/theme-tools");
var textareaStyles = {
  components: {
    Textarea: {
      baseStyle: {
        field: {
          fontWeight: 400,
          borderRadius: "8px"
        }
      },
      variants: {
        main: function main(props) {
          return {
            field: {
              bg: (0, _themeTools.mode)("transparent", "navy.800")(props),
              border: "1px solid !important",
              color: (0, _themeTools.mode)("secondaryGray.900", "white")(props),
              borderColor: (0, _themeTools.mode)("secondaryGray.100", "whiteAlpha.100")(props),
              borderRadius: "16px",
              fontSize: "sm",
              p: "20px",
              _placeholder: {
                color: "secondaryGray.400"
              }
            }
          };
        },
        auth: function auth(props) {
          return {
            field: {
              bg: "white",
              border: "1px solid",
              borderColor: "secondaryGray.100",
              borderRadius: "16px",
              _placeholder: {
                color: "secondaryGray.600"
              }
            }
          };
        },
        authSecondary: function authSecondary(props) {
          return {
            field: {
              bg: "white",
              border: "1px solid",
              borderColor: "secondaryGray.100",
              borderRadius: "16px",
              _placeholder: {
                color: "secondaryGray.600"
              }
            }
          };
        },
        search: function search(props) {
          return {
            field: {
              border: "none",
              py: "11px",
              borderRadius: "inherit",
              _placeholder: {
                color: "secondaryGray.600"
              }
            }
          };
        }
      }
    }
  }
};
exports.textareaStyles = textareaStyles;