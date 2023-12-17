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
var _brands = require("./brands");
Object.keys(_brands).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _brands[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _brands[key];
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
var _user = require("./user");
Object.keys(_user).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _user[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _user[key];
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
var _colors = require("./colors");
Object.keys(_colors).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _colors[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _colors[key];
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
var _dashboard = require("./dashboard");
Object.keys(_dashboard).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _dashboard[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _dashboard[key];
    }
  });
});