"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.badgeStyles = void 0;
var _themeTools = require("@chakra-ui/theme-tools");
var badgeStyles = {
  components: {
    Badge: {
      baseStyle: {
        borderRadius: "10px",
        lineHeight: "100%",
        padding: "7px",
        paddingLeft: "12px",
        paddingRight: "12px"
      },
      variants: {
        outline: function outline() {
          return {
            borderRadius: "16px"
          };
        },
        brand: function brand(props) {
          return {
            bg: (0, _themeTools.mode)("brand.500", "brand.400")(props),
            color: "white",
            _focus: {
              bg: (0, _themeTools.mode)("brand.500", "brand.400")(props)
            },
            _active: {
              bg: (0, _themeTools.mode)("brand.500", "brand.400")(props)
            },
            _hover: {
              bg: (0, _themeTools.mode)("brand.600", "brand.400")(props)
            }
          };
        }
      }
    }
  }
};
exports.badgeStyles = badgeStyles;