"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Overview;
var _react = require("@chakra-ui/react");
var _Banner = _interopRequireDefault(require("views/admin/profile/components/Banner"));
var _General = _interopRequireDefault(require("views/admin/profile/components/General"));
var _Notifications = _interopRequireDefault(require("views/admin/profile/components/Notifications"));
var _Projects = _interopRequireDefault(require("views/admin/profile/components/Projects"));
var _Storage = _interopRequireDefault(require("views/admin/profile/components/Storage"));
var _Upload = _interopRequireDefault(require("views/admin/profile/components/Upload"));
var _banner = _interopRequireDefault(require("assets/img/auth/banner.png"));
var _avatar = _interopRequireDefault(require("assets/img/avatars/avatar4.png"));
var _react2 = _interopRequireDefault(require("react"));
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

// Custom components

// Assets

function Overview() {
  return /*#__PURE__*/_react2.default.createElement(_react.Box, {
    pt: {
      base: "130px",
      md: "80px",
      xl: "80px"
    }
  }, /*#__PURE__*/_react2.default.createElement(_react.Grid, {
    templateColumns: {
      base: "1fr",
      lg: "1.34fr 1fr 1.62fr"
    },
    templateRows: {
      base: "repeat(3, 1fr)",
      lg: "1fr"
    },
    gap: {
      base: "20px",
      xl: "20px"
    }
  }, /*#__PURE__*/_react2.default.createElement(_Banner.default, {
    gridArea: "1 / 1 / 2 / 2",
    banner: _banner.default,
    avatar: _avatar.default,
    name: "Adela Parkson",
    job: "Product Designer",
    posts: "17",
    followers: "9.7k",
    following: "274"
  }), /*#__PURE__*/_react2.default.createElement(_Storage.default, {
    gridArea: {
      base: "2 / 1 / 3 / 2",
      lg: "1 / 2 / 2 / 3"
    },
    used: 25.6,
    total: 50
  }), /*#__PURE__*/_react2.default.createElement(_Upload.default, {
    gridArea: {
      base: "3 / 1 / 4 / 2",
      lg: "1 / 3 / 2 / 4"
    },
    minH: {
      base: "auto",
      lg: "420px",
      "2xl": "365px"
    },
    pe: "20px",
    pb: {
      base: "100px",
      lg: "20px"
    }
  })), /*#__PURE__*/_react2.default.createElement(_react.Grid, {
    mb: "20px",
    templateColumns: {
      base: "1fr",
      lg: "repeat(2, 1fr)",
      "2xl": "1.34fr 1.62fr 1fr"
    },
    templateRows: {
      base: "1fr",
      lg: "repeat(2, 1fr)",
      "2xl": "1fr"
    },
    gap: {
      base: "20px",
      xl: "20px"
    }
  }, /*#__PURE__*/_react2.default.createElement(_Projects.default, {
    gridArea: "1 / 2 / 2 / 2",
    banner: _banner.default,
    avatar: _avatar.default,
    name: "Adela Parkson",
    job: "Product Designer",
    posts: "17",
    followers: "9.7k",
    following: "274"
  }), /*#__PURE__*/_react2.default.createElement(_General.default, {
    gridArea: {
      base: "2 / 1 / 3 / 2",
      lg: "1 / 2 / 2 / 3"
    },
    minH: "365px",
    pe: "20px"
  }), /*#__PURE__*/_react2.default.createElement(_Notifications.default, {
    used: 25.6,
    total: 50,
    gridArea: {
      base: "3 / 1 / 4 / 2",
      lg: "2 / 1 / 3 / 3",
      "2xl": "1 / 3 / 2 / 4"
    }
  })));
}