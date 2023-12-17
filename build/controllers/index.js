"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _users = require("./users");
Object.keys(_users).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _users[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _users[key];
    }
  });
});
var _admin = require("./admin");
Object.keys(_admin).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _admin[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _admin[key];
    }
  });
});