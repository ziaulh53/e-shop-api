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
router.post("/create-admin", _controllers.adminCreate);
router.post("/login", _controllers.adminLogin);
router.post("/forget-password", _controllers.adminForgetPassword);
router.post("/reset-password", _controllers.adminResetPassword);
router.get("/", _middleware.authorizationAdmin, _controllers.getAllAdmins);
var _default = router;
exports["default"] = _default;