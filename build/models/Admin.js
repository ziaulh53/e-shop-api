"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _mongoose = _interopRequireDefault(require("mongoose"));
var _adminRole = require("../constant/adminRole");
var AdminSchema = new _mongoose["default"].Schema({
  fullName: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  avater: {
    type: String,
    required: false
  },
  role: {
    type: String,
    "enum": [_adminRole.adminRole["super"], _adminRole.adminRole.admin],
    "default": _adminRole.adminRole.admin
  }
}, {
  timestamps: true
});
var _default = _mongoose["default"].model('admin', AdminSchema);
exports["default"] = _default;