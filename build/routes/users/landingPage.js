"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = _interopRequireDefault(require("express"));
var _controllers = require("../../controllers");
var router = _express["default"].Router();
router.get("/", _controllers.getLandingPage);
router.get("/brands", _controllers.getBrands);
var _default = router;
exports["default"] = _default;