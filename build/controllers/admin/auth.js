"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getAllAdmins = exports.adminResetPassword = exports.adminLogin = exports.adminForgetPassword = exports.adminCreate = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));
var _bcryptjs = _interopRequireDefault(require("bcryptjs"));
var _models = require("../../models");
var _helpers = require("../../helpers");
var _adminRole = require("../../constant/adminRole");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
var secretKey = "123456Zh";
var getAllAdmins = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
    var role, admins;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          role = req.body.admin.role;
          if (!(role !== _adminRole.adminRole["super"])) {
            _context.next = 4;
            break;
          }
          return _context.abrupt("return", res.status(404).json({
            msg: "Not allowed"
          }));
        case 4:
          _context.next = 6;
          return _models.AdminModel.find({
            role: {
              $ne: _adminRole.adminRole["super"]
            }
          });
        case 6:
          admins = _context.sent;
          return _context.abrupt("return", res.status(200).json({
            success: false,
            result: admins
          }));
        case 10:
          _context.prev = 10;
          _context.t0 = _context["catch"](0);
          console.log(_context.t0);
        case 13:
        case "end":
          return _context.stop();
      }
    }, _callee, null, [[0, 10]]);
  }));
  return function getAllAdmins(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();
exports.getAllAdmins = getAllAdmins;
var adminCreate = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res) {
    var _req$body, fullName, email, password, role, avater, existAdmin, hashPassword, admin, response;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          _req$body = req.body, fullName = _req$body.fullName, email = _req$body.email, password = _req$body.password, role = _req$body.role, avater = _req$body.avater;
          if (email) {
            _context2.next = 4;
            break;
          }
          return _context2.abrupt("return", res.status(404).json({
            msg: "User input not valid"
          }));
        case 4:
          _context2.next = 6;
          return _models.AdminModel.findOne({
            email: email
          });
        case 6:
          existAdmin = _context2.sent;
          if (!(existAdmin !== null && existAdmin !== void 0 && existAdmin._id)) {
            _context2.next = 9;
            break;
          }
          return _context2.abrupt("return", res.status(200).json({
            success: false,
            msg: "Email already exist!"
          }));
        case 9:
          _context2.next = 11;
          return _bcryptjs["default"].hash(password, 12);
        case 11:
          hashPassword = _context2.sent;
          admin = {
            fullName: fullName,
            password: hashPassword,
            email: email,
            role: role,
            avater: avater
          };
          _context2.next = 15;
          return _models.AdminModel.create(_objectSpread({}, admin));
        case 15:
          response = _context2.sent;
          if (!(response !== null && response !== void 0 && response._id)) {
            _context2.next = 18;
            break;
          }
          return _context2.abrupt("return", res.status(200).json({
            success: true,
            msg: "Registration is completed"
          }));
        case 18:
          return _context2.abrupt("return", res.status(200).json({
            success: false,
            msg: "Something went wrong"
          }));
        case 21:
          _context2.prev = 21;
          _context2.t0 = _context2["catch"](0);
          console.log(_context2.t0);
        case 24:
        case "end":
          return _context2.stop();
      }
    }, _callee2, null, [[0, 21]]);
  }));
  return function adminCreate(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();
exports.adminCreate = adminCreate;
var adminLogin = /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(req, res) {
    var _req$body2, email, password, admin, passwordMatch, fullName, _id, _email, _admin$avater, avater, role, response, token;
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          _context3.prev = 0;
          _req$body2 = req.body, email = _req$body2.email, password = _req$body2.password;
          _context3.next = 4;
          return _models.AdminModel.findOne({
            email: email
          });
        case 4:
          admin = _context3.sent;
          if (admin) {
            _context3.next = 7;
            break;
          }
          return _context3.abrupt("return", res.status(201).json({
            success: false,
            msg: "Email doesn't exist"
          }));
        case 7:
          _context3.next = 9;
          return _bcryptjs["default"].compare(password, admin.password);
        case 9:
          passwordMatch = _context3.sent;
          if (!passwordMatch) {
            _context3.next = 17;
            break;
          }
          fullName = admin.fullName, _id = admin._id, _email = admin.email, _admin$avater = admin.avater, avater = _admin$avater === void 0 ? '' : _admin$avater, role = admin.role;
          response = {
            fullName: fullName,
            email: _email,
            _id: _id,
            role: role,
            avater: avater
          };
          token = _jsonwebtoken["default"].sign(_objectSpread({}, response), secretKey);
          return _context3.abrupt("return", res.status(200).json({
            success: true,
            user: response,
            token: token,
            msg: "Login success"
          }));
        case 17:
          return _context3.abrupt("return", res.status(201).json({
            success: false,
            msg: "Password is wrong"
          }));
        case 18:
          _context3.next = 23;
          break;
        case 20:
          _context3.prev = 20;
          _context3.t0 = _context3["catch"](0);
          console.log(_context3.t0);
        case 23:
        case "end":
          return _context3.stop();
      }
    }, _callee3, null, [[0, 20]]);
  }));
  return function adminLogin(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();
exports.adminLogin = adminLogin;
var adminForgetPassword = /*#__PURE__*/function () {
  var _ref4 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(req, res) {
    var email, admin, token, emailTemplate, subject;
    return _regenerator["default"].wrap(function _callee4$(_context4) {
      while (1) switch (_context4.prev = _context4.next) {
        case 0:
          _context4.prev = 0;
          email = req.body.email;
          _context4.next = 4;
          return _models.AdminModel.findOne({
            email: email
          });
        case 4:
          admin = _context4.sent;
          if (admin) {
            _context4.next = 7;
            break;
          }
          return _context4.abrupt("return", res.status(200).json({
            success: false,
            msg: "Admin not found"
          }));
        case 7:
          delete admin.password;
          token = _jsonwebtoken["default"].sign(_objectSpread({}, admin), secretKey);
          emailTemplate = (0, _helpers.AdminResetPasswordTemplate)(token);
          subject = "Reset your password";
          _context4.next = 13;
          return (0, _helpers.sendEmail)(email, subject, emailTemplate);
        case 13:
          return _context4.abrupt("return", res.status(200).json({
            success: true,
            msg: "Reset url sent to email"
          }));
        case 16:
          _context4.prev = 16;
          _context4.t0 = _context4["catch"](0);
          console.log(_context4.t0);
        case 19:
        case "end":
          return _context4.stop();
      }
    }, _callee4, null, [[0, 16]]);
  }));
  return function adminForgetPassword(_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}();
exports.adminForgetPassword = adminForgetPassword;
var adminResetPassword = /*#__PURE__*/function () {
  var _ref5 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(req, res) {
    var _req$body3, newPassword, token, email, hashPassword, admin;
    return _regenerator["default"].wrap(function _callee5$(_context5) {
      while (1) switch (_context5.prev = _context5.next) {
        case 0:
          _context5.prev = 0;
          _req$body3 = req.body, newPassword = _req$body3.newPassword, token = _req$body3.token;
          email = _jsonwebtoken["default"].verify(token, secretKey)._doc.email;
          _context5.next = 5;
          return _bcryptjs["default"].hash(newPassword, 12);
        case 5:
          hashPassword = _context5.sent;
          _context5.next = 8;
          return _models.AdminModel.findOne({
            email: email
          });
        case 8:
          admin = _context5.sent;
          if (admin) {
            _context5.next = 11;
            break;
          }
          return _context5.abrupt("return", res.status(200).json({
            success: false,
            msg: "Admin not found"
          }));
        case 11:
          _context5.next = 13;
          return _models.AdminModel.findOneAndUpdate({
            email: email
          }, {
            password: hashPassword
          });
        case 13:
          return _context5.abrupt("return", res.status(200).json({
            success: true,
            msg: "Password updated"
          }));
        case 16:
          _context5.prev = 16;
          _context5.t0 = _context5["catch"](0);
          console.log(_context5.t0);
        case 19:
        case "end":
          return _context5.stop();
      }
    }, _callee5, null, [[0, 16]]);
  }));
  return function adminResetPassword(_x9, _x10) {
    return _ref5.apply(this, arguments);
  };
}();
exports.adminResetPassword = adminResetPassword;