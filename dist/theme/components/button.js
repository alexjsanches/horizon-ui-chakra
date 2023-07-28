"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.buttonStyles = void 0;
var _themeTools = require("@chakra-ui/theme-tools");
var buttonStyles = {
  components: {
    Button: {
      baseStyle: {
        borderRadius: "16px",
        boxShadow: "45px 76px 113px 7px rgba(112, 144, 176, 0.08)",
        transition: ".25s all ease",
        boxSizing: "border-box",
        _focus: {
          boxShadow: "none"
        },
        _active: {
          boxShadow: "none"
        }
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
        },
        darkBrand: function darkBrand(props) {
          return {
            bg: (0, _themeTools.mode)("brand.900", "brand.400")(props),
            color: "white",
            _focus: {
              bg: (0, _themeTools.mode)("brand.900", "brand.400")(props)
            },
            _active: {
              bg: (0, _themeTools.mode)("brand.900", "brand.400")(props)
            },
            _hover: {
              bg: (0, _themeTools.mode)("brand.800", "brand.400")(props)
            }
          };
        },
        lightBrand: function lightBrand(props) {
          return {
            bg: (0, _themeTools.mode)("#F2EFFF", "whiteAlpha.100")(props),
            color: (0, _themeTools.mode)("brand.500", "white")(props),
            _focus: {
              bg: (0, _themeTools.mode)("#F2EFFF", "whiteAlpha.100")(props)
            },
            _active: {
              bg: (0, _themeTools.mode)("secondaryGray.300", "whiteAlpha.100")(props)
            },
            _hover: {
              bg: (0, _themeTools.mode)("secondaryGray.400", "whiteAlpha.200")(props)
            }
          };
        },
        light: function light(props) {
          return {
            bg: (0, _themeTools.mode)("secondaryGray.300", "whiteAlpha.100")(props),
            color: (0, _themeTools.mode)("secondaryGray.900", "white")(props),
            _focus: {
              bg: (0, _themeTools.mode)("secondaryGray.300", "whiteAlpha.100")(props)
            },
            _active: {
              bg: (0, _themeTools.mode)("secondaryGray.300", "whiteAlpha.100")(props)
            },
            _hover: {
              bg: (0, _themeTools.mode)("secondaryGray.400", "whiteAlpha.200")(props)
            }
          };
        },
        action: function action(props) {
          return {
            fontWeight: "500",
            borderRadius: "50px",
            bg: (0, _themeTools.mode)("secondaryGray.300", "brand.400")(props),
            color: (0, _themeTools.mode)("brand.500", "white")(props),
            _focus: {
              bg: (0, _themeTools.mode)("secondaryGray.300", "brand.400")(props)
            },
            _active: {
              bg: (0, _themeTools.mode)("secondaryGray.300", "brand.400")(props)
            },
            _hover: {
              bg: (0, _themeTools.mode)("secondaryGray.200", "brand.400")(props)
            }
          };
        },
        setup: function setup(props) {
          return {
            fontWeight: "500",
            borderRadius: "50px",
            bg: (0, _themeTools.mode)("transparent", "brand.400")(props),
            border: (0, _themeTools.mode)("1px solid", "0px solid")(props),
            borderColor: (0, _themeTools.mode)("secondaryGray.400", "transparent")(props),
            color: (0, _themeTools.mode)("secondaryGray.900", "white")(props),
            _focus: {
              bg: (0, _themeTools.mode)("transparent", "brand.400")(props)
            },
            _active: {
              bg: (0, _themeTools.mode)("transparent", "brand.400")(props)
            },
            _hover: {
              bg: (0, _themeTools.mode)("secondaryGray.100", "brand.400")(props)
            }
          };
        }
      }
    }
  }
};
exports.buttonStyles = buttonStyles;