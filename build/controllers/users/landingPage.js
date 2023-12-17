"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getLandingPage = exports.getBrands = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _models = require("../../models");
var getLandingPage = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
    var result;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return _models.LandingPageModel.find().populate('trendings').exec();
        case 3:
          result = _context.sent;
          return _context.abrupt("return", res.status(200).json({
            success: true,
            result: result[0] || {}
          }));
        case 7:
          _context.prev = 7;
          _context.t0 = _context["catch"](0);
          console.log(_context.t0.message);
          return _context.abrupt("return", res.status(403).json({
            success: false,
            msg: "Something went wrong"
          }));
        case 11:
        case "end":
          return _context.stop();
      }
    }, _callee, null, [[0, 7]]);
  }));
  return function getLandingPage(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();
exports.getLandingPage = getLandingPage;
var getBrands = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res) {
    var brands;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          _context2.next = 3;
          return _models.BrandModel.find({});
        case 3:
          brands = _context2.sent;
          return _context2.abrupt("return", res.status(200).json({
            success: true,
            result: brands
          }));
        case 7:
          _context2.prev = 7;
          _context2.t0 = _context2["catch"](0);
          console.log(_context2.t0);
          throw new CustomError("Something went wrong!", 500);
        case 11:
        case "end":
          return _context2.stop();
      }
    }, _callee2, null, [[0, 7]]);
  }));
  return function getBrands(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();
exports.getBrands = getBrands;