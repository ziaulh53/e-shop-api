"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getColors = exports.editColor = exports.deleteColor = exports.createColor = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _models = require("../../models");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
var getColors = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
    var result;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return _models.ColorModel.find({});
        case 3:
          result = _context.sent;
          return _context.abrupt("return", res.status(200).json({
            success: true,
            result: result
          }));
        case 7:
          _context.prev = 7;
          _context.t0 = _context["catch"](0);
          console.log(_context.t0);
          return _context.abrupt("return", res.status(403).json({
            success: false,
            msg: 'Something went wrong'
          }));
        case 11:
        case "end":
          return _context.stop();
      }
    }, _callee, null, [[0, 7]]);
  }));
  return function getColors(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();
exports.getColors = getColors;
var createColor = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res) {
    var _req$body, colorName, colorCode;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          _req$body = req.body, colorName = _req$body.colorName, colorCode = _req$body.colorCode;
          _context2.prev = 1;
          _context2.next = 4;
          return _models.ColorModel.create({
            colorName: colorName,
            colorCode: colorCode
          });
        case 4:
          return _context2.abrupt("return", res.status(200).json({
            success: true,
            msg: 'Color created'
          }));
        case 7:
          _context2.prev = 7;
          _context2.t0 = _context2["catch"](1);
          console.log(_context2.t0);
          return _context2.abrupt("return", res.status(403).json({
            success: false,
            msg: 'Something went wrong'
          }));
        case 11:
        case "end":
          return _context2.stop();
      }
    }, _callee2, null, [[1, 7]]);
  }));
  return function createColor(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();
exports.createColor = createColor;
var editColor = /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(req, res) {
    var id, colorData;
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          id = req.params.id;
          colorData = req.body.colorData;
          _context3.prev = 2;
          _context3.next = 5;
          return _models.ColorModel.findByIdAndUpdate(id, _objectSpread({}, colorData));
        case 5:
          return _context3.abrupt("return", res.status(200).json({
            success: true,
            msg: 'Update successfully'
          }));
        case 8:
          _context3.prev = 8;
          _context3.t0 = _context3["catch"](2);
          console.log(_context3.t0);
          return _context3.abrupt("return", res.status(403).json({
            success: false,
            msg: 'Something went wrong'
          }));
        case 12:
        case "end":
          return _context3.stop();
      }
    }, _callee3, null, [[2, 8]]);
  }));
  return function editColor(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();
exports.editColor = editColor;
var deleteColor = /*#__PURE__*/function () {
  var _ref4 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(req, res) {
    var id;
    return _regenerator["default"].wrap(function _callee4$(_context4) {
      while (1) switch (_context4.prev = _context4.next) {
        case 0:
          id = req.params.id;
          _context4.prev = 1;
          _context4.next = 4;
          return _models.ColorModel.findByIdAndDelete(id);
        case 4:
          return _context4.abrupt("return", res.status(200).json({
            success: true,
            msg: 'Color deleted successfully'
          }));
        case 7:
          _context4.prev = 7;
          _context4.t0 = _context4["catch"](1);
          console.log(_context4.t0);
          return _context4.abrupt("return", res.status(403).json({
            success: false,
            msg: 'Something went wrong'
          }));
        case 11:
        case "end":
          return _context4.stop();
      }
    }, _callee4, null, [[1, 7]]);
  }));
  return function deleteColor(_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}();
exports.deleteColor = deleteColor;