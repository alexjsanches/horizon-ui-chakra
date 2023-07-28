"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = DevelopmentTable;
var _react = require("@chakra-ui/react");
var _Card = _interopRequireDefault(require("components/card/Card"));
var _Icons = require("components/icons/Icons");
var _MainMenu = _interopRequireDefault(require("components/menu/MainMenu"));
var _react2 = _interopRequireWildcard(require("react"));
var _reactTable = require("react-table");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); } /* eslint-disable */ // Custom components
function DevelopmentTable(props) {
  var columnsData = props.columnsData,
    tableData = props.tableData;
  var columns = (0, _react2.useMemo)(function () {
    return columnsData;
  }, [columnsData]);
  var data = (0, _react2.useMemo)(function () {
    return tableData;
  }, [tableData]);
  var tableInstance = (0, _reactTable.useTable)({
    columns: columns,
    data: data
  }, _reactTable.useGlobalFilter, _reactTable.useSortBy, _reactTable.usePagination);
  var getTableProps = tableInstance.getTableProps,
    getTableBodyProps = tableInstance.getTableBodyProps,
    headerGroups = tableInstance.headerGroups,
    page = tableInstance.page,
    prepareRow = tableInstance.prepareRow,
    initialState = tableInstance.initialState;
  initialState.pageSize = 11;
  var textColor = (0, _react.useColorModeValue)("secondaryGray.900", "white");
  var iconColor = (0, _react.useColorModeValue)("secondaryGray.500", "white");
  var borderColor = (0, _react.useColorModeValue)("gray.200", "whiteAlpha.100");
  return /*#__PURE__*/_react2.default.createElement(_Card.default, {
    direction: "column",
    w: "100%",
    px: "0px",
    overflowX: {
      sm: "scroll",
      lg: "hidden"
    }
  }, /*#__PURE__*/_react2.default.createElement(_react.Flex, {
    px: "25px",
    justify: "space-between",
    mb: "20px",
    align: "center"
  }, /*#__PURE__*/_react2.default.createElement(_react.Text, {
    color: textColor,
    fontSize: "22px",
    fontWeight: "700",
    lineHeight: "100%"
  }, "Development Table"), /*#__PURE__*/_react2.default.createElement(_MainMenu.default, null)), /*#__PURE__*/_react2.default.createElement(_react.Table, _extends({}, getTableProps(), {
    variant: "simple",
    color: "gray.500",
    mb: "24px"
  }), /*#__PURE__*/_react2.default.createElement(_react.Thead, null, headerGroups.map(function (headerGroup, index) {
    return /*#__PURE__*/_react2.default.createElement(_react.Tr, _extends({}, headerGroup.getHeaderGroupProps(), {
      key: index
    }), headerGroup.headers.map(function (column, index) {
      return /*#__PURE__*/_react2.default.createElement(_react.Th, _extends({}, column.getHeaderProps(column.getSortByToggleProps()), {
        pe: "10px",
        key: index,
        borderColor: borderColor
      }), /*#__PURE__*/_react2.default.createElement(_react.Flex, {
        justify: "space-between",
        align: "center",
        fontSize: {
          sm: "10px",
          lg: "12px"
        },
        color: "gray.400"
      }, column.render("Header")));
    }));
  })), /*#__PURE__*/_react2.default.createElement(_react.Tbody, getTableBodyProps(), page.map(function (row, index) {
    prepareRow(row);
    return /*#__PURE__*/_react2.default.createElement(_react.Tr, _extends({}, row.getRowProps(), {
      key: index
    }), row.cells.map(function (cell, index) {
      var data = "";
      if (cell.column.Header === "NAME") {
        data = /*#__PURE__*/_react2.default.createElement(_react.Text, {
          color: textColor,
          fontSize: "sm",
          fontWeight: "700"
        }, cell.value);
      } else if (cell.column.Header === "TECH") {
        data = /*#__PURE__*/_react2.default.createElement(_react.Flex, {
          align: "center"
        }, cell.value.map(function (item, key) {
          if (item === "apple") {
            return /*#__PURE__*/_react2.default.createElement(_Icons.AppleLogo, {
              key: key,
              color: iconColor,
              me: "16px",
              h: "18px",
              w: "15px"
            });
          } else if (item === "android") {
            return /*#__PURE__*/_react2.default.createElement(_Icons.AndroidLogo, {
              key: key,
              color: iconColor,
              me: "16px",
              h: "18px",
              w: "16px"
            });
          } else if (item === "windows") {
            return /*#__PURE__*/_react2.default.createElement(_Icons.WindowsLogo, {
              key: key,
              color: iconColor,
              h: "18px",
              w: "19px"
            });
          }
        }));
      } else if (cell.column.Header === "DATE") {
        data = /*#__PURE__*/_react2.default.createElement(_react.Text, {
          color: textColor,
          fontSize: "sm",
          fontWeight: "700"
        }, cell.value);
      } else if (cell.column.Header === "PROGRESS") {
        data = /*#__PURE__*/_react2.default.createElement(_react.Flex, {
          align: "center"
        }, /*#__PURE__*/_react2.default.createElement(_react.Text, {
          me: "10px",
          color: textColor,
          fontSize: "sm",
          fontWeight: "700"
        }, cell.value, "%"), /*#__PURE__*/_react2.default.createElement(_react.Progress, {
          variant: "table",
          colorScheme: "brandScheme",
          h: "8px",
          w: "63px",
          value: cell.value
        }));
      }
      return /*#__PURE__*/_react2.default.createElement(_react.Td, _extends({}, cell.getCellProps(), {
        key: index,
        fontSize: {
          sm: "14px"
        },
        minW: {
          sm: "150px",
          md: "200px",
          lg: "auto"
        },
        borderColor: "transparent"
      }), data);
    }));
  }))));
}