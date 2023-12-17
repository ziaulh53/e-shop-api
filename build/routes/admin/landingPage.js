"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = _interopRequireDefault(require("express"));
var _middleware = require("../../middleware");
var _controllers = require("../../controllers");
var router = _express["default"].Router();
router.get("/", _middleware.authorizationAdmin, _controllers.getLandingPageAdmin);
router.post("/banner", _middleware.authorizationAdmin, _controllers.updateBanners);
router.post("/trending", _middleware.authorizationAdmin, _controllers.updateTrendings);
var _default = router;
exports["default"] = _default;