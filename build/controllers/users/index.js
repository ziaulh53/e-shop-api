"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _auth = require("./auth");
Object.keys(_auth).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _auth[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _auth[key];
    }
  });
});
var _category = require("./category");
Object.keys(_category).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _category[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _category[key];
    }
  });
});
var _landingPage = require("./landingPage");
Object.keys(_landingPage).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _landingPage[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _landingPage[key];
    }
  });
});
var _product = require("./product");
Object.keys(_product).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _product[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _product[key];
    }
  });
});
var _order = require("./order");
Object.keys(_order).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _order[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _order[key];
    }
  });
});
var _address = require("./address");
Object.keys(_address).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _address[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _address[key];
    }
  });
});
var _wish = require("./wish");
Object.keys(_wish).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _wish[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _wish[key];
    }
  });
});