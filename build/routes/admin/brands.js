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
router.post("/create", _middleware.authorizationAdmin, _controllers.createBrandAdmin);
router.put("/edit/:id", _middleware.authorizationAdmin, _controllers.editBrandAdmin);
router["delete"]("/delete/:id", _middleware.authorizationAdmin, _controllers.deleteBrandAdmin);
router.get("/", _middleware.authorizationAdmin, _controllers.getBrandsAdmin);
var _default = router;
exports["default"] = _default;