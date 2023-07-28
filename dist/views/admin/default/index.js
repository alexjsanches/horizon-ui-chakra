"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = UserReports;
var _react = require("@chakra-ui/react");
var _usa = _interopRequireDefault(require("assets/img/dashboards/usa.png"));
var _MiniCalendar = _interopRequireDefault(require("components/calendar/MiniCalendar"));
var _MiniStatistics = _interopRequireDefault(require("components/card/MiniStatistics"));
var _IconBox = _interopRequireDefault(require("components/icons/IconBox"));
var _react2 = _interopRequireDefault(require("react"));
var _md = require("react-icons/md");
var _CheckTable = _interopRequireDefault(require("views/admin/default/components/CheckTable"));
var _ComplexTable = _interopRequireDefault(require("views/admin/default/components/ComplexTable"));
var _DailyTraffic = _interopRequireDefault(require("views/admin/default/components/DailyTraffic"));
var _PieCard = _interopRequireDefault(require("views/admin/default/components/PieCard"));
var _Tasks = _interopRequireDefault(require("views/admin/default/components/Tasks"));
var _TotalSpent = _interopRequireDefault(require("views/admin/default/components/TotalSpent"));
var _WeeklyRevenue = _interopRequireDefault(require("views/admin/default/components/WeeklyRevenue"));
var _columnsData = require("views/admin/default/variables/columnsData");
var _tableDataCheck = _interopRequireDefault(require("views/admin/default/variables/tableDataCheck.json"));
var _tableDataComplex = _interopRequireDefault(require("views/admin/default/variables/tableDataComplex.json"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
/*!
  _   _  ___  ____  ___ ________  _   _   _   _ ___   
 | | | |/ _ \|  _ \|_ _|__  / _ \| \ | | | | | |_ _| 
 | |_| | | | | |_) || |  / / | | |  \| | | | | || | 
 |  _  | |_| |  _ < | | / /| |_| | |\  | | |_| || |
 |_| |_|\___/|_| \_\___/____\___/|_| \_|  \___/|___|
                                                                                                                                                                                                                                                                                                                                       
=========================================================
* Horizon UI - v1.1.0
=========================================================

* Product Page: https://www.horizon-ui.com/
* Copyright 2023 Horizon UI (https://www.horizon-ui.com/)

* Designed and Coded by Simmmple

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/

// Chakra imports

// Assets

// Custom components

function UserReports() {
  // Chakra Color Mode
  var brandColor = (0, _react.useColorModeValue)("brand.500", "white");
  var boxBg = (0, _react.useColorModeValue)("secondaryGray.300", "whiteAlpha.100");
  return /*#__PURE__*/_react2.default.createElement(_react.Box, {
    pt: {
      base: "130px",
      md: "80px",
      xl: "80px"
    }
  }, /*#__PURE__*/_react2.default.createElement(_react.SimpleGrid, {
    columns: {
      base: 1,
      md: 2,
      lg: 3,
      "2xl": 6
    },
    gap: "20px",
    mb: "20px"
  }, /*#__PURE__*/_react2.default.createElement(_MiniStatistics.default, {
    startContent: /*#__PURE__*/_react2.default.createElement(_IconBox.default, {
      w: "56px",
      h: "56px",
      bg: boxBg,
      icon: /*#__PURE__*/_react2.default.createElement(_react.Icon, {
        w: "32px",
        h: "32px",
        as: _md.MdBarChart,
        color: brandColor
      })
    }),
    name: "Earnings",
    value: "$350.4"
  }), /*#__PURE__*/_react2.default.createElement(_MiniStatistics.default, {
    startContent: /*#__PURE__*/_react2.default.createElement(_IconBox.default, {
      w: "56px",
      h: "56px",
      bg: boxBg,
      icon: /*#__PURE__*/_react2.default.createElement(_react.Icon, {
        w: "32px",
        h: "32px",
        as: _md.MdAttachMoney,
        color: brandColor
      })
    }),
    name: "Spend this month",
    value: "$642.39"
  }), /*#__PURE__*/_react2.default.createElement(_MiniStatistics.default, {
    growth: "+23%",
    name: "Sales",
    value: "$574.34"
  }), /*#__PURE__*/_react2.default.createElement(_MiniStatistics.default, {
    endContent: /*#__PURE__*/_react2.default.createElement(_react.Flex, {
      me: "-16px",
      mt: "10px"
    }, /*#__PURE__*/_react2.default.createElement(_react.FormLabel, {
      htmlFor: "balance"
    }, /*#__PURE__*/_react2.default.createElement(_react.Avatar, {
      src: _usa.default
    })), /*#__PURE__*/_react2.default.createElement(_react.Select, {
      id: "balance",
      variant: "mini",
      mt: "5px",
      me: "0px",
      defaultValue: "usd"
    }, /*#__PURE__*/_react2.default.createElement("option", {
      value: "usd"
    }, "USD"), /*#__PURE__*/_react2.default.createElement("option", {
      value: "eur"
    }, "EUR"), /*#__PURE__*/_react2.default.createElement("option", {
      value: "gba"
    }, "GBA"))),
    name: "Your balance",
    value: "$1,000"
  }), /*#__PURE__*/_react2.default.createElement(_MiniStatistics.default, {
    startContent: /*#__PURE__*/_react2.default.createElement(_IconBox.default, {
      w: "56px",
      h: "56px",
      bg: "linear-gradient(90deg, #4481EB 0%, #04BEFE 100%)",
      icon: /*#__PURE__*/_react2.default.createElement(_react.Icon, {
        w: "28px",
        h: "28px",
        as: _md.MdAddTask,
        color: "white"
      })
    }),
    name: "New Tasks",
    value: "154"
  }), /*#__PURE__*/_react2.default.createElement(_MiniStatistics.default, {
    startContent: /*#__PURE__*/_react2.default.createElement(_IconBox.default, {
      w: "56px",
      h: "56px",
      bg: boxBg,
      icon: /*#__PURE__*/_react2.default.createElement(_react.Icon, {
        w: "32px",
        h: "32px",
        as: _md.MdFileCopy,
        color: brandColor
      })
    }),
    name: "Total Projects",
    value: "2935"
  })), /*#__PURE__*/_react2.default.createElement(_react.SimpleGrid, {
    columns: {
      base: 1,
      md: 2,
      xl: 2
    },
    gap: "20px",
    mb: "20px"
  }, /*#__PURE__*/_react2.default.createElement(_TotalSpent.default, null), /*#__PURE__*/_react2.default.createElement(_WeeklyRevenue.default, null)), /*#__PURE__*/_react2.default.createElement(_react.SimpleGrid, {
    columns: {
      base: 1,
      md: 1,
      xl: 2
    },
    gap: "20px",
    mb: "20px"
  }, /*#__PURE__*/_react2.default.createElement(_CheckTable.default, {
    columnsData: _columnsData.columnsDataCheck,
    tableData: _tableDataCheck.default
  }), /*#__PURE__*/_react2.default.createElement(_react.SimpleGrid, {
    columns: {
      base: 1,
      md: 2,
      xl: 2
    },
    gap: "20px"
  }, /*#__PURE__*/_react2.default.createElement(_DailyTraffic.default, null), /*#__PURE__*/_react2.default.createElement(_PieCard.default, null))), /*#__PURE__*/_react2.default.createElement(_react.SimpleGrid, {
    columns: {
      base: 1,
      md: 1,
      xl: 2
    },
    gap: "20px",
    mb: "20px"
  }, /*#__PURE__*/_react2.default.createElement(_ComplexTable.default, {
    columnsData: _columnsData.columnsDataComplex,
    tableData: _tableDataComplex.default
  }), /*#__PURE__*/_react2.default.createElement(_react.SimpleGrid, {
    columns: {
      base: 1,
      md: 2,
      xl: 2
    },
    gap: "20px"
  }, /*#__PURE__*/_react2.default.createElement(_Tasks.default, null), /*#__PURE__*/_react2.default.createElement(_MiniCalendar.default, {
    h: "100%",
    minW: "100%",
    selectRange: false
  }))));
}