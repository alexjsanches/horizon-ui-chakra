"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Marketplace;
var _react = _interopRequireDefault(require("react"));
var _react2 = require("@chakra-ui/react");
var _Banner = _interopRequireDefault(require("views/admin/marketplace/components/Banner"));
var _TableTopCreators = _interopRequireDefault(require("views/admin/marketplace/components/TableTopCreators"));
var _HistoryItem = _interopRequireDefault(require("views/admin/marketplace/components/HistoryItem"));
var _NFT = _interopRequireDefault(require("components/card/NFT"));
var _Card = _interopRequireDefault(require("components/card/Card.js"));
var _Nft = _interopRequireDefault(require("assets/img/nfts/Nft1.png"));
var _Nft2 = _interopRequireDefault(require("assets/img/nfts/Nft2.png"));
var _Nft3 = _interopRequireDefault(require("assets/img/nfts/Nft3.png"));
var _Nft4 = _interopRequireDefault(require("assets/img/nfts/Nft4.png"));
var _Nft5 = _interopRequireDefault(require("assets/img/nfts/Nft5.png"));
var _Nft6 = _interopRequireDefault(require("assets/img/nfts/Nft6.png"));
var _avatar = _interopRequireDefault(require("assets/img/avatars/avatar1.png"));
var _avatar2 = _interopRequireDefault(require("assets/img/avatars/avatar2.png"));
var _avatar3 = _interopRequireDefault(require("assets/img/avatars/avatar3.png"));
var _avatar4 = _interopRequireDefault(require("assets/img/avatars/avatar4.png"));
var _tableDataTopCreators = _interopRequireDefault(require("views/admin/marketplace/variables/tableDataTopCreators.json"));
var _tableColumnsTopCreators = require("views/admin/marketplace/variables/tableColumnsTopCreators");
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

function Marketplace() {
  // Chakra Color Mode
  var textColor = (0, _react2.useColorModeValue)("secondaryGray.900", "white");
  var textColorBrand = (0, _react2.useColorModeValue)("brand.500", "white");
  return /*#__PURE__*/_react.default.createElement(_react2.Box, {
    pt: {
      base: "180px",
      md: "80px",
      xl: "80px"
    }
  }, /*#__PURE__*/_react.default.createElement(_react2.Grid, {
    mb: "20px",
    gridTemplateColumns: {
      xl: "repeat(3, 1fr)",
      "2xl": "1fr 0.46fr"
    },
    gap: {
      base: "20px",
      xl: "20px"
    },
    display: {
      base: "block",
      xl: "grid"
    }
  }, /*#__PURE__*/_react.default.createElement(_react2.Flex, {
    flexDirection: "column",
    gridArea: {
      xl: "1 / 1 / 2 / 3",
      "2xl": "1 / 1 / 2 / 2"
    }
  }, /*#__PURE__*/_react.default.createElement(_Banner.default, null), /*#__PURE__*/_react.default.createElement(_react2.Flex, {
    direction: "column"
  }, /*#__PURE__*/_react.default.createElement(_react2.Flex, {
    mt: "45px",
    mb: "20px",
    justifyContent: "space-between",
    direction: {
      base: "column",
      md: "row"
    },
    align: {
      base: "start",
      md: "center"
    }
  }, /*#__PURE__*/_react.default.createElement(_react2.Text, {
    color: textColor,
    fontSize: "2xl",
    ms: "24px",
    fontWeight: "700"
  }, "Trending NFTs"), /*#__PURE__*/_react.default.createElement(_react2.Flex, {
    align: "center",
    me: "20px",
    ms: {
      base: "24px",
      md: "0px"
    },
    mt: {
      base: "20px",
      md: "0px"
    }
  }, /*#__PURE__*/_react.default.createElement(_react2.Link, {
    color: textColorBrand,
    fontWeight: "500",
    me: {
      base: "34px",
      md: "44px"
    },
    to: "#art"
  }, "Art"), /*#__PURE__*/_react.default.createElement(_react2.Link, {
    color: textColorBrand,
    fontWeight: "500",
    me: {
      base: "34px",
      md: "44px"
    },
    to: "#music"
  }, "Music"), /*#__PURE__*/_react.default.createElement(_react2.Link, {
    color: textColorBrand,
    fontWeight: "500",
    me: {
      base: "34px",
      md: "44px"
    },
    to: "#collectibles"
  }, "Collectibles"), /*#__PURE__*/_react.default.createElement(_react2.Link, {
    color: textColorBrand,
    fontWeight: "500",
    to: "#sports"
  }, "Sports"))), /*#__PURE__*/_react.default.createElement(_react2.SimpleGrid, {
    columns: {
      base: 1,
      md: 3
    },
    gap: "20px"
  }, /*#__PURE__*/_react.default.createElement(_NFT.default, {
    name: "Abstract Colors",
    author: "By Esthera Jackson",
    bidders: [_avatar.default, _avatar2.default, _avatar3.default, _avatar4.default, _avatar.default, _avatar.default, _avatar.default, _avatar.default],
    image: _Nft.default,
    currentbid: "0.91 ETH",
    download: "#"
  }), /*#__PURE__*/_react.default.createElement(_NFT.default, {
    name: "ETH AI Brain",
    author: "By Nick Wilson",
    bidders: [_avatar.default, _avatar2.default, _avatar3.default, _avatar4.default, _avatar.default, _avatar.default, _avatar.default, _avatar.default],
    image: _Nft2.default,
    currentbid: "0.91 ETH",
    download: "#"
  }), /*#__PURE__*/_react.default.createElement(_NFT.default, {
    name: "Mesh Gradients ",
    author: "By Will Smith",
    bidders: [_avatar.default, _avatar2.default, _avatar3.default, _avatar4.default, _avatar.default, _avatar.default, _avatar.default, _avatar.default],
    image: _Nft3.default,
    currentbid: "0.91 ETH",
    download: "#"
  })), /*#__PURE__*/_react.default.createElement(_react2.Text, {
    mt: "45px",
    mb: "36px",
    color: textColor,
    fontSize: "2xl",
    ms: "24px",
    fontWeight: "700"
  }, "Recently Added"), /*#__PURE__*/_react.default.createElement(_react2.SimpleGrid, {
    columns: {
      base: 1,
      md: 3
    },
    gap: "20px",
    mb: {
      base: "20px",
      xl: "0px"
    }
  }, /*#__PURE__*/_react.default.createElement(_NFT.default, {
    name: "Swipe Circles",
    author: "By Peter Will",
    bidders: [_avatar.default, _avatar2.default, _avatar3.default, _avatar4.default, _avatar.default, _avatar.default, _avatar.default, _avatar.default],
    image: _Nft4.default,
    currentbid: "0.91 ETH",
    download: "#"
  }), /*#__PURE__*/_react.default.createElement(_NFT.default, {
    name: "Colorful Heaven",
    author: "By Mark Benjamin",
    bidders: [_avatar.default, _avatar2.default, _avatar3.default, _avatar4.default, _avatar.default, _avatar.default, _avatar.default, _avatar.default],
    image: _Nft5.default,
    currentbid: "0.91 ETH",
    download: "#"
  }), /*#__PURE__*/_react.default.createElement(_NFT.default, {
    name: "3D Cubes Art",
    author: "By Manny Gates",
    bidders: [_avatar.default, _avatar2.default, _avatar3.default, _avatar4.default, _avatar.default, _avatar.default, _avatar.default, _avatar.default],
    image: _Nft6.default,
    currentbid: "0.91 ETH",
    download: "#"
  })))), /*#__PURE__*/_react.default.createElement(_react2.Flex, {
    flexDirection: "column",
    gridArea: {
      xl: "1 / 3 / 2 / 4",
      "2xl": "1 / 2 / 2 / 3"
    }
  }, /*#__PURE__*/_react.default.createElement(_Card.default, {
    px: "0px",
    mb: "20px"
  }, /*#__PURE__*/_react.default.createElement(_TableTopCreators.default, {
    tableData: _tableDataTopCreators.default,
    columnsData: _tableColumnsTopCreators.tableColumnsTopCreators
  })), /*#__PURE__*/_react.default.createElement(_Card.default, {
    p: "0px"
  }, /*#__PURE__*/_react.default.createElement(_react2.Flex, {
    align: {
      sm: "flex-start",
      lg: "center"
    },
    justify: "space-between",
    w: "100%",
    px: "22px",
    py: "18px"
  }, /*#__PURE__*/_react.default.createElement(_react2.Text, {
    color: textColor,
    fontSize: "xl",
    fontWeight: "600"
  }, "History"), /*#__PURE__*/_react.default.createElement(_react2.Button, {
    variant: "action"
  }, "See all")), /*#__PURE__*/_react.default.createElement(_HistoryItem.default, {
    name: "Colorful Heaven",
    author: "By Mark Benjamin",
    date: "30s ago",
    image: _Nft5.default,
    price: "0.91 ETH"
  }), /*#__PURE__*/_react.default.createElement(_HistoryItem.default, {
    name: "Abstract Colors",
    author: "By Esthera Jackson",
    date: "58s ago",
    image: _Nft.default,
    price: "0.91 ETH"
  }), /*#__PURE__*/_react.default.createElement(_HistoryItem.default, {
    name: "ETH AI Brain",
    author: "By Nick Wilson",
    date: "1m ago",
    image: _Nft2.default,
    price: "0.91 ETH"
  }), /*#__PURE__*/_react.default.createElement(_HistoryItem.default, {
    name: "Swipe Circles",
    author: "By Peter Will",
    date: "1m ago",
    image: _Nft4.default,
    price: "0.91 ETH"
  }), /*#__PURE__*/_react.default.createElement(_HistoryItem.default, {
    name: "Mesh Gradients ",
    author: "By Will Smith",
    date: "2m ago",
    image: _Nft3.default,
    price: "0.91 ETH"
  }), /*#__PURE__*/_react.default.createElement(_HistoryItem.default, {
    name: "3D Cubes Art",
    author: "By Manny Gates",
    date: "3m ago",
    image: _Nft6.default,
    price: "0.91 ETH"
  })))));
}