"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sliderStyles = void 0;
var _themeTools = require("@chakra-ui/theme-tools");
var sliderStyles = {
  components: {
    RangeSlider: {
      // baseStyle: {
      //   thumb: {
      //     fontWeight: 400,
      //   },
      //   track: {
      //     display: "flex",
      //   },
      // },

      variants: {
        main: function main(props) {
          return {
            thumb: {
              bg: (0, _themeTools.mode)("brand.500", "brand.400")(props)
            }
          };
        }
      }
    }
  }
};
exports.sliderStyles = sliderStyles;