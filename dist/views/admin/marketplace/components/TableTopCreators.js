"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = require("@chakra-ui/react");
var _react2 = _interopRequireWildcard(require("react"));
var _reactTable = require("react-table");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function TopCreatorTable(props) {
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
    prepareRow = tableInstance.prepareRow;
  var textColor = (0, _react.useColorModeValue)("navy.700", "white");
  var textColorSecondary = (0, _react.useColorModeValue)("secondaryGray.600", "white");
  return /*#__PURE__*/_react2.default.createElement(_react2.default.Fragment, null, /*#__PURE__*/_react2.default.createElement(_react.Flex, {
    direction: "column",
    w: "100%",
    overflowX: {
      sm: "scroll",
      lg: "hidden"
    }
  }, /*#__PURE__*/_react2.default.createElement(_react.Flex, {
    align: {
      sm: "flex-start",
      lg: "center"
    },
    justify: "space-between",
    w: "100%",
    px: "22px",
    pb: "20px",
    mb: "10px",
    boxShadow: "0px 40px 58px -20px rgba(112, 144, 176, 0.26)"
  }, /*#__PURE__*/_react2.default.createElement(_react.Text, {
    color: textColor,
    fontSize: "xl",
    fontWeight: "600"
  }, "Top Creators"), /*#__PURE__*/_react2.default.createElement(_react.Button, {
    variant: "action"
  }, "See all")), /*#__PURE__*/_react2.default.createElement(_react.Table, _extends({}, getTableProps(), {
    variant: "simple",
    color: "gray.500"
  }), /*#__PURE__*/_react2.default.createElement(_react.Thead, null, headerGroups.map(function (headerGroup, index) {
    return /*#__PURE__*/_react2.default.createElement(_react.Tr, _extends({}, headerGroup.getHeaderGroupProps(), {
      key: index
    }), headerGroup.headers.map(function (column, index) {
      return /*#__PURE__*/_react2.default.createElement(_react.Th, _extends({}, column.getHeaderProps(column.getSortByToggleProps()), {
        pe: "10px",
        key: index,
        borderColor: "transparent"
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
      if (cell.column.Header === "Name") {
        data = /*#__PURE__*/_react2.default.createElement(_react.Flex, {
          align: "center"
        }, /*#__PURE__*/_react2.default.createElement(_react.Avatar, {
          src: cell.value[1],
          w: "30px",
          h: "30px",
          me: "8px"
        }), /*#__PURE__*/_react2.default.createElement(_react.Text, {
          color: textColor,
          fontSize: "sm",
          fontWeight: "600"
        }, cell.value[0]));
      } else if (cell.column.Header === "Artworks") {
        data = /*#__PURE__*/_react2.default.createElement(_react.Text, {
          color: textColorSecondary,
          fontSize: "sm",
          fontWeight: "500"
        }, cell.value);
      } else if (cell.column.Header === "Rating") {
        data = /*#__PURE__*/_react2.default.createElement(_react.Box, null, /*#__PURE__*/_react2.default.createElement(_react.Progress, {
          variant: "table",
          colorScheme: "brandScheme",
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
  })))));
}
var _default = TopCreatorTable;
exports.default = _default;