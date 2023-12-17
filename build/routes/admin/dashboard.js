"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = _interopRequireDefault(require("express"));
var _controllers = require("../../controllers");
var _middleware = require("../../middleware");
var router = _express["default"].Router();
router.get("/", _middleware.authorizationAdmin, _controllers.getDahsboardSellingData);
router.get("/by-category", _middleware.authorizationAdmin, _controllers.getCategorySellingData);
var _default = router;
exports["default"] = _default;