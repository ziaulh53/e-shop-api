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
router.get("/", _middleware.authorization, _controllers.getAddress);
router.post("/create", _middleware.authorization, _controllers.createAddress);
router.put("/edit/:id", _middleware.authorization, _controllers.editAddress);
router["delete"]("/delete/:id", _middleware.authorization, _controllers.deleteAddress);
var _default = router;
exports["default"] = _default;