"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _adminAuth = require("./adminAuth");
Object.keys(_adminAuth).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _adminAuth[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _adminAuth[key];
    }
  });
});
var _userAuth = require("./userAuth");
Object.keys(_userAuth).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _userAuth[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _userAuth[key];
    }
  });
});