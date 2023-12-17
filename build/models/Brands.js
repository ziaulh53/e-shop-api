"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _mongoose = _interopRequireDefault(require("mongoose"));
var BrandsSchema = new _mongoose["default"].Schema({
  name: {
    type: String,
    required: true
  },
  logo: {
    type: String
  }
}, {
  timestamps: true
});
var _default = _mongoose["default"].model('brands', BrandsSchema);
exports["default"] = _default;