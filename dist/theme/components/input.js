"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.inputStyles = void 0;
var _themeTools = require("@chakra-ui/theme-tools");
var inputStyles = {
  components: {
    Input: {
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
              border: "1px solid",
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
              fontWeight: "500",
              color: (0, _themeTools.mode)("navy.700", "white")(props),
              bg: (0, _themeTools.mode)("transparent", "transparent")(props),
              border: "1px solid",
              borderColor: (0, _themeTools.mode)("secondaryGray.100", "rgba(135, 140, 189, 0.3)")(props),
              borderRadius: "16px",
              _placeholder: {
                color: "secondaryGray.600",
                fontWeight: "400"
              }
            }
          };
        },
        authSecondary: function authSecondary(props) {
          return {
            field: {
              bg: "transparent",
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
    },
    NumberInput: {
      baseStyle: {
        field: {
          fontWeight: 400
        }
      },
      variants: {
        main: function main(props) {
          return {
            field: {
              bg: "transparent",
              border: "1px solid",
              borderColor: "secondaryGray.100",
              borderRadius: "16px",
              _placeholder: {
                color: "secondaryGray.600"
              }
            }
          };
        },
        auth: function auth(props) {
          return {
            field: {
              bg: "transparent",
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
              bg: "transparent",
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
    },
    Select: {
      baseStyle: {
        field: {
          fontWeight: 400
        }
      },
      variants: {
        main: function main(props) {
          return {
            field: {
              bg: (0, _themeTools.mode)("transparent", "navy.800")(props),
              border: "1px solid",
              color: "secondaryGray.600",
              borderColor: (0, _themeTools.mode)("secondaryGray.100", "whiteAlpha.100")(props),
              borderRadius: "16px",
              _placeholder: {
                color: "secondaryGray.600"
              }
            },
            icon: {
              color: "secondaryGray.600"
            }
          };
        },
        mini: function mini(props) {
          return {
            field: {
              bg: (0, _themeTools.mode)("transparent", "navy.800")(props),
              border: "0px solid transparent",
              fontSize: "0px",
              p: "10px",
              _placeholder: {
                color: "secondaryGray.600"
              }
            },
            icon: {
              color: "secondaryGray.600"
            }
          };
        },
        subtle: function subtle(props) {
          return {
            box: {
              width: "unset"
            },
            field: {
              bg: "transparent",
              border: "0px solid",
              color: "secondaryGray.600",
              borderColor: "transparent",
              width: "max-content",
              _placeholder: {
                color: "secondaryGray.600"
              }
            },
            icon: {
              color: "secondaryGray.600"
            }
          };
        },
        transparent: function transparent(props) {
          return {
            field: {
              bg: "transparent",
              border: "0px solid",
              width: "min-content",
              color: (0, _themeTools.mode)("secondaryGray.600", "secondaryGray.600")(props),
              borderColor: "transparent",
              padding: "0px",
              paddingLeft: "8px",
              paddingRight: "20px",
              fontWeight: "700",
              fontSize: "14px",
              _placeholder: {
                color: "secondaryGray.600"
              }
            },
            icon: {
              transform: "none !important",
              position: "unset !important",
              width: "unset",
              color: "secondaryGray.600",
              right: "0px"
            }
          };
        },
        auth: function auth(props) {
          return {
            field: {
              bg: "transparent",
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
              bg: "transparent",
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
    // PinInputField: {
    //   variants: {
    //     main: (props) => ({
    //       field: {
    //         bg: "red !important",
    //         border: "1px solid",
    //         color: mode("secondaryGray.900", "white")(props),
    //         borderColor: mode("secondaryGray.100", "whiteAlpha.100")(props),
    //         borderRadius: "16px",
    //         _placeholder: { color: "secondaryGray.600" },
    //       },
    //     }),
    //   },
    // },
  }
};
exports.inputStyles = inputStyles;