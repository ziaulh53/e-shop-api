"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.authorizationAdmin = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));
var _helpers = require("../helpers");
var _models = require("../models");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
var secretKey = "123456Zh";
var authorizationAdmin = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res, next) {
    var token, _jwt$verify, _id, admin;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return req.headers.authorization.split(" ")[1];
        case 3:
          token = _context.sent;
          _jwt$verify = _jsonwebtoken["default"].verify(token, secretKey), _id = _jwt$verify._id;
          _context.next = 7;
          return _models.AdminModel.findById(_id);
        case 7:
          admin = _context.sent;
          if (admin) {
            _context.next = 10;
            break;
          }
          throw new _helpers.CustomError("Unauthorized", 401);
        case 10:
          req.body = _objectSpread(_objectSpread({}, req.body), {}, {
            admin: admin
          });
          next();
          _context.next = 17;
          break;
        case 14:
          _context.prev = 14;
          _context.t0 = _context["catch"](0);
          return _context.abrupt("return", res.status(401).json({
            msg: "Unauthorized",
            success: false
          }));
        case 17:
        case "end":
          return _context.stop();
      }
    }, _callee, null, [[0, 14]]);
  }));
  return function authorizationAdmin(_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
}();
exports.authorizationAdmin = authorizationAdmin;