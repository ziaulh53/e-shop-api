"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _mongoose = _interopRequireDefault(require("mongoose"));
var ColorSchema = new _mongoose["default"].Schema({
  colorName: {
    type: String,
    required: true
  },
  colorCode: {
    type: String,
    required: true
  }
});
var _default = _mongoose["default"].model("colors", ColorSchema);
exports["default"] = _default;