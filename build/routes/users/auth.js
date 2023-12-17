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
router.post("/register", _controllers.register);
router.post("/login", _controllers.login);
router.post("/forget-password", _controllers.forgetPassword);
router.post("/reset-password", _controllers.resetPassword);
router.post("/edit-profile", _middleware.authorization, _controllers.updateProfile);
router.post("/change-email-request", _middleware.authorization, _controllers.changeEmailRequest);
router.post("/change-password", _middleware.authorization, _controllers.changePassword);
router.post("/change-email", _controllers.changeEmail);
var _default = router;
exports["default"] = _default;