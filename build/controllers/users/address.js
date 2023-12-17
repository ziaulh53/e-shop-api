"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getAddress = exports.editAddress = exports.deleteAddress = exports.createAddress = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _models = require("../../models");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
var getAddress = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
    var user, result;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          user = req.body.user;
          _context.prev = 1;
          _context.next = 4;
          return _models.AddressModel.find({
            user: user === null || user === void 0 ? void 0 : user._id
          });
        case 4:
          result = _context.sent;
          return _context.abrupt("return", res.status(200).json({
            success: true,
            result: result
          }));
        case 8:
          _context.prev = 8;
          _context.t0 = _context["catch"](1);
          console.log(_context.t0.message);
        case 11:
        case "end":
          return _context.stop();
      }
    }, _callee, null, [[1, 8]]);
  }));
  return function getAddress(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();
exports.getAddress = getAddress;
var createAddress = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res) {
    var _req$body, user, address;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          _req$body = req.body, user = _req$body.user, address = _req$body.address;
          _context2.prev = 1;
          _context2.next = 4;
          return _models.AddressModel.create(_objectSpread(_objectSpread({}, address), {}, {
            user: user === null || user === void 0 ? void 0 : user._id
          }));
        case 4:
          return _context2.abrupt("return", res.status(201).json({
            success: true,
            msg: "Address added"
          }));
        case 7:
          _context2.prev = 7;
          _context2.t0 = _context2["catch"](1);
          console.log(_context2.t0.message);
        case 10:
        case "end":
          return _context2.stop();
      }
    }, _callee2, null, [[1, 7]]);
  }));
  return function createAddress(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();
exports.createAddress = createAddress;
var editAddress = /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(req, res) {
    var address, id;
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          address = req.body.address;
          id = req.params.id;
          _context3.prev = 2;
          _context3.next = 5;
          return _models.AddressModel.findByIdAndUpdate(id, _objectSpread({}, address));
        case 5:
          return _context3.abrupt("return", res.status(201).json({
            success: true,
            msg: "Address Updated"
          }));
        case 8:
          _context3.prev = 8;
          _context3.t0 = _context3["catch"](2);
          console.log(_context3.t0.message);
        case 11:
        case "end":
          return _context3.stop();
      }
    }, _callee3, null, [[2, 8]]);
  }));
  return function editAddress(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();
exports.editAddress = editAddress;
var deleteAddress = /*#__PURE__*/function () {
  var _ref4 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(req, res) {
    var id;
    return _regenerator["default"].wrap(function _callee4$(_context4) {
      while (1) switch (_context4.prev = _context4.next) {
        case 0:
          id = req.params.id;
          _context4.prev = 1;
          _context4.next = 4;
          return _models.AddressModel.findByIdAndDelete(id);
        case 4:
          return _context4.abrupt("return", res.status(201).json({
            success: true,
            msg: "Address Deleted"
          }));
        case 7:
          _context4.prev = 7;
          _context4.t0 = _context4["catch"](1);
          console.log(_context4.t0.message);
        case 10:
        case "end":
          return _context4.stop();
      }
    }, _callee4, null, [[1, 7]]);
  }));
  return function deleteAddress(_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}();
exports.deleteAddress = deleteAddress;