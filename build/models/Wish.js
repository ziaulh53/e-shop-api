"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _mongoose = _interopRequireDefault(require("mongoose"));
var WishSchema = new _mongoose["default"].Schema({
  user: {
    type: _mongoose["default"].Schema.Types.ObjectId,
    ref: "users",
    required: true
  },
  products: [{
    type: _mongoose["default"].Schema.Types.ObjectId,
    ref: "products"
  }]
}, {
  timestamps: true
});
var _default = _mongoose["default"].model("wishlist", WishSchema);
exports["default"] = _default;