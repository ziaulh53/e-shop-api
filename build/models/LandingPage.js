"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _mongoose = _interopRequireDefault(require("mongoose"));
var LandingPageSchema = new _mongoose["default"].Schema({
  banners: [],
  trendings: [{
    type: _mongoose["default"].Schema.Types.ObjectId,
    ref: "products"
  }]
});
var _default = _mongoose["default"].model("landing", LandingPageSchema);
exports["default"] = _default;