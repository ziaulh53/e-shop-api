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
router.get("/", _middleware.authorizationAdmin, _controllers.getProductsAdmin);
router.post("/create", _middleware.authorizationAdmin, _controllers.createProduct);
router.put("/edit/:id", _middleware.authorizationAdmin, _controllers.editProduct);
router["delete"]("/delete/:id", _middleware.authorizationAdmin, _controllers.deleteProductAdmin);
var _default = router;
exports["default"] = _default;