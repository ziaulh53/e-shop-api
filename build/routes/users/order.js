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
router.get("/", _middleware.authorization, _controllers.getOrders);
router.get("/:id", _middleware.authorization, _controllers.getSingleOrder);
router.post("/create", _middleware.authorization, _controllers.createOrder);
router.put("/update-status/:id", _middleware.authorization, _controllers.updateStatus);
var _default = router;
exports["default"] = _default;