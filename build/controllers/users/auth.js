"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateProfile = exports.resetPassword = exports.register = exports.login = exports.forgetPassword = exports.changePassword = exports.changeEmailRequest = exports.changeEmail = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));
var _models = require("../../models");
var _bcryptjs = _interopRequireDefault(require("bcryptjs"));
var _helpers = require("../../helpers");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
var secretKey = "123456Zh";
var register = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
    var _req$body, firstName, lastName, email, phone, password, existUser, hashPassword, user, response, emailTemplate, subject;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _req$body = req.body, firstName = _req$body.firstName, lastName = _req$body.lastName, email = _req$body.email, phone = _req$body.phone, password = _req$body.password;
          if (email) {
            _context.next = 4;
            break;
          }
          return _context.abrupt("return", res.status(404).json({
            msg: "User input not valid"
          }));
        case 4:
          _context.next = 6;
          return _models.UserModel.findOne({
            email: email
          });
        case 6:
          existUser = _context.sent;
          if (!(existUser !== null && existUser !== void 0 && existUser._id)) {
            _context.next = 9;
            break;
          }
          return _context.abrupt("return", res.status(200).json({
            success: false,
            msg: "Email already exist!"
          }));
        case 9:
          _context.next = 11;
          return _bcryptjs["default"].hash(password, 12);
        case 11:
          hashPassword = _context.sent;
          user = {
            firstName: firstName,
            lastName: lastName,
            password: hashPassword,
            email: email,
            phone: phone
          };
          _context.next = 15;
          return _models.UserModel.create(_objectSpread({}, user));
        case 15:
          response = _context.sent;
          _context.next = 18;
          return _models.WishModel.create({
            user: response === null || response === void 0 ? void 0 : response._id,
            products: []
          });
        case 18:
          if (!(response !== null && response !== void 0 && response._id)) {
            _context.next = 24;
            break;
          }
          emailTemplate = (0, _helpers.WelcomeTemplate)();
          subject = "Registration confirmation";
          _context.next = 23;
          return (0, _helpers.sendEmail)(email, subject, emailTemplate);
        case 23:
          return _context.abrupt("return", res.status(200).json({
            success: true,
            msg: "Registration is completed"
          }));
        case 24:
          return _context.abrupt("return", res.status(200).json({
            success: false,
            msg: "Something went wrong"
          }));
        case 27:
          _context.prev = 27;
          _context.t0 = _context["catch"](0);
          console.log(_context.t0);
        case 30:
        case "end":
          return _context.stop();
      }
    }, _callee, null, [[0, 27]]);
  }));
  return function register(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();
exports.register = register;
var login = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res) {
    var _req$body2, email, password, user, passwordMatch, firstName, lastName, _id, phone, _email, _user$avatar, avatar, response, token;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          _req$body2 = req.body, email = _req$body2.email, password = _req$body2.password;
          _context2.next = 4;
          return _models.UserModel.findOne({
            email: email
          });
        case 4:
          user = _context2.sent;
          if (user) {
            _context2.next = 7;
            break;
          }
          return _context2.abrupt("return", res.status(201).json({
            success: false,
            msg: "Email doesn't exist"
          }));
        case 7:
          _context2.next = 9;
          return _bcryptjs["default"].compare(password, user.password);
        case 9:
          passwordMatch = _context2.sent;
          if (!passwordMatch) {
            _context2.next = 17;
            break;
          }
          firstName = user.firstName, lastName = user.lastName, _id = user._id, phone = user.phone, _email = user.email, _user$avatar = user.avatar, avatar = _user$avatar === void 0 ? "" : _user$avatar;
          response = {
            firstName: firstName,
            lastName: lastName,
            email: _email,
            _id: _id,
            phone: phone,
            avatar: avatar
          };
          token = _jsonwebtoken["default"].sign(_objectSpread({}, response), secretKey);
          return _context2.abrupt("return", res.status(200).json({
            success: true,
            user: response,
            token: token,
            msg: "Login success"
          }));
        case 17:
          return _context2.abrupt("return", res.status(201).json({
            success: false,
            msg: "Password is wrong"
          }));
        case 18:
          _context2.next = 23;
          break;
        case 20:
          _context2.prev = 20;
          _context2.t0 = _context2["catch"](0);
          console.log(_context2.t0);
        case 23:
        case "end":
          return _context2.stop();
      }
    }, _callee2, null, [[0, 20]]);
  }));
  return function login(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();
exports.login = login;
var forgetPassword = /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(req, res) {
    var email, user, token, emailTemplate, subject;
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          _context3.prev = 0;
          email = req.body.email;
          _context3.next = 4;
          return _models.UserModel.findOne({
            email: email
          });
        case 4:
          user = _context3.sent;
          if (user) {
            _context3.next = 7;
            break;
          }
          return _context3.abrupt("return", res.status(200).json({
            success: false,
            msg: "User not found"
          }));
        case 7:
          delete user.password;
          token = _jsonwebtoken["default"].sign(_objectSpread({}, user), secretKey);
          emailTemplate = (0, _helpers.ResetPasswordTemplate)(token);
          subject = "Reset your password";
          _context3.next = 13;
          return (0, _helpers.sendEmail)(email, subject, emailTemplate);
        case 13:
          return _context3.abrupt("return", res.status(200).json({
            success: true,
            msg: "Reset url sent to email"
          }));
        case 16:
          _context3.prev = 16;
          _context3.t0 = _context3["catch"](0);
          console.log(_context3.t0);
        case 19:
        case "end":
          return _context3.stop();
      }
    }, _callee3, null, [[0, 16]]);
  }));
  return function forgetPassword(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();
exports.forgetPassword = forgetPassword;
var resetPassword = /*#__PURE__*/function () {
  var _ref4 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(req, res) {
    var _req$body3, newPassword, token, email, hashPassword, user;
    return _regenerator["default"].wrap(function _callee4$(_context4) {
      while (1) switch (_context4.prev = _context4.next) {
        case 0:
          _context4.prev = 0;
          _req$body3 = req.body, newPassword = _req$body3.newPassword, token = _req$body3.token;
          email = _jsonwebtoken["default"].verify(token, secretKey)._doc.email;
          _context4.next = 5;
          return _bcryptjs["default"].hash(newPassword, 12);
        case 5:
          hashPassword = _context4.sent;
          _context4.next = 8;
          return _models.UserModel.findOne({
            email: email
          });
        case 8:
          user = _context4.sent;
          if (user) {
            _context4.next = 11;
            break;
          }
          return _context4.abrupt("return", res.status(200).json({
            success: false,
            msg: "User not found"
          }));
        case 11:
          _context4.next = 13;
          return _models.UserModel.findOneAndUpdate({
            email: email
          }, {
            password: hashPassword
          });
        case 13:
          return _context4.abrupt("return", res.status(200).json({
            success: true,
            msg: "Password updated"
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
  return function resetPassword(_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}();
exports.resetPassword = resetPassword;
var updateProfile = /*#__PURE__*/function () {
  var _ref5 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(req, res) {
    var _req$body4, user, profileData, foundUser;
    return _regenerator["default"].wrap(function _callee5$(_context5) {
      while (1) switch (_context5.prev = _context5.next) {
        case 0:
          _req$body4 = req.body, user = _req$body4.user, profileData = _req$body4.profileData;
          _context5.prev = 1;
          _context5.next = 4;
          return _models.UserModel.findById(user === null || user === void 0 ? void 0 : user._id);
        case 4:
          foundUser = _context5.sent;
          if (foundUser) {
            _context5.next = 7;
            break;
          }
          return _context5.abrupt("return", res.status(200).json({
            success: false,
            msg: "User not found"
          }));
        case 7:
          _context5.next = 9;
          return _models.UserModel.findByIdAndUpdate(user === null || user === void 0 ? void 0 : user._id, _objectSpread({}, profileData));
        case 9:
          return _context5.abrupt("return", res.status(200).json({
            success: true,
            msg: "Profile updated"
          }));
        case 12:
          _context5.prev = 12;
          _context5.t0 = _context5["catch"](1);
          console.log(_context5.t0);
        case 15:
        case "end":
          return _context5.stop();
      }
    }, _callee5, null, [[1, 12]]);
  }));
  return function updateProfile(_x9, _x10) {
    return _ref5.apply(this, arguments);
  };
}();
exports.updateProfile = updateProfile;
var changeEmailRequest = /*#__PURE__*/function () {
  var _ref6 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee6(req, res) {
    var _req$body5, user, newEmail, password, foundUser, passwordMatch, response, token, emailTemplate, subject;
    return _regenerator["default"].wrap(function _callee6$(_context6) {
      while (1) switch (_context6.prev = _context6.next) {
        case 0:
          _req$body5 = req.body, user = _req$body5.user, newEmail = _req$body5.newEmail, password = _req$body5.password;
          _context6.prev = 1;
          _context6.next = 4;
          return _models.UserModel.findById(user === null || user === void 0 ? void 0 : user._id);
        case 4:
          foundUser = _context6.sent;
          if (foundUser) {
            _context6.next = 7;
            break;
          }
          return _context6.abrupt("return", res.status(200).json({
            success: false,
            msg: "User not found!"
          }));
        case 7:
          _context6.next = 9;
          return _bcryptjs["default"].compare(password, foundUser.password);
        case 9:
          passwordMatch = _context6.sent;
          if (passwordMatch) {
            _context6.next = 12;
            break;
          }
          return _context6.abrupt("return", res.status(200).json({
            success: false,
            msg: "Password mismatch!"
          }));
        case 12:
          response = {
            email: newEmail,
            _id: foundUser._id
          };
          token = _jsonwebtoken["default"].sign(_objectSpread({}, response), secretKey);
          emailTemplate = (0, _helpers.PasswordChangeRequest)(token);
          subject = "Change Email";
          _context6.next = 18;
          return (0, _helpers.sendEmail)(newEmail, subject, emailTemplate);
        case 18:
          return _context6.abrupt("return", res.status(200).json({
            success: true,
            msg: "We have sent a link in your new email"
          }));
        case 21:
          _context6.prev = 21;
          _context6.t0 = _context6["catch"](1);
          console.log(_context6.t0);
        case 24:
        case "end":
          return _context6.stop();
      }
    }, _callee6, null, [[1, 21]]);
  }));
  return function changeEmailRequest(_x11, _x12) {
    return _ref6.apply(this, arguments);
  };
}();
exports.changeEmailRequest = changeEmailRequest;
var changeEmail = /*#__PURE__*/function () {
  var _ref7 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee7(req, res) {
    var security_key, _jwt$verify, _id, email, foundUser;
    return _regenerator["default"].wrap(function _callee7$(_context7) {
      while (1) switch (_context7.prev = _context7.next) {
        case 0:
          security_key = req.body.security_key;
          _jwt$verify = _jsonwebtoken["default"].verify(security_key, secretKey), _id = _jwt$verify._id, email = _jwt$verify.email;
          _context7.prev = 2;
          _context7.next = 5;
          return _models.UserModel.findById(_id);
        case 5:
          foundUser = _context7.sent;
          if (foundUser) {
            _context7.next = 8;
            break;
          }
          return _context7.abrupt("return", res.status(200).json({
            success: false,
            msg: "User not found!"
          }));
        case 8:
          foundUser.email = email;
          _context7.next = 11;
          return foundUser.save();
        case 11:
          return _context7.abrupt("return", res.status(200).json({
            success: true,
            msg: "Email updated successfully"
          }));
        case 14:
          _context7.prev = 14;
          _context7.t0 = _context7["catch"](2);
          console.log(_context7.t0);
        case 17:
        case "end":
          return _context7.stop();
      }
    }, _callee7, null, [[2, 14]]);
  }));
  return function changeEmail(_x13, _x14) {
    return _ref7.apply(this, arguments);
  };
}();
exports.changeEmail = changeEmail;
var changePassword = /*#__PURE__*/function () {
  var _ref8 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee8(req, res) {
    var _req$body6, user, currentPassword, newPassword, foundUser, passwordMatch, hashPassword;
    return _regenerator["default"].wrap(function _callee8$(_context8) {
      while (1) switch (_context8.prev = _context8.next) {
        case 0:
          _req$body6 = req.body, user = _req$body6.user, currentPassword = _req$body6.currentPassword, newPassword = _req$body6.newPassword;
          _context8.prev = 1;
          _context8.next = 4;
          return _models.UserModel.findById(user === null || user === void 0 ? void 0 : user._id);
        case 4:
          foundUser = _context8.sent;
          if (foundUser) {
            _context8.next = 7;
            break;
          }
          return _context8.abrupt("return", res.status(200).json({
            success: false,
            msg: "User not found!"
          }));
        case 7:
          _context8.next = 9;
          return _bcryptjs["default"].compare(currentPassword, foundUser.password);
        case 9:
          passwordMatch = _context8.sent;
          if (passwordMatch) {
            _context8.next = 12;
            break;
          }
          return _context8.abrupt("return", res.status(200).json({
            success: false,
            msg: "Password mismatch!"
          }));
        case 12:
          _context8.next = 14;
          return _bcryptjs["default"].hash(newPassword, 12);
        case 14:
          hashPassword = _context8.sent;
          _context8.next = 17;
          return _models.UserModel.findByIdAndUpdate(user === null || user === void 0 ? void 0 : user._id, {
            password: hashPassword
          });
        case 17:
          return _context8.abrupt("return", res.status(200).json({
            success: true,
            msg: "Password updated"
          }));
        case 20:
          _context8.prev = 20;
          _context8.t0 = _context8["catch"](1);
          console.log(_context8.t0);
        case 23:
        case "end":
          return _context8.stop();
      }
    }, _callee8, null, [[1, 20]]);
  }));
  return function changePassword(_x15, _x16) {
    return _ref8.apply(this, arguments);
  };
}();
exports.changePassword = changePassword;