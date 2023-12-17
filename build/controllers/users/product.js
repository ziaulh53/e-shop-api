"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getSuggestionProduct = exports.getSingleProduct = exports.getProductOnBrand = exports.getNewArrivalProduct = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _mongoose = require("mongoose");
var _models = require("../../models");
var getSingleProduct = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
    var id, result;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          id = req.params.id;
          _context.prev = 1;
          if (!id) {
            _context.next = 7;
            break;
          }
          _context.next = 5;
          return _models.ProductModel.findById(id).populate("category brands colors.color").exec();
        case 5:
          result = _context.sent;
          return _context.abrupt("return", res.status(201).json({
            success: true,
            result: result
          }));
        case 7:
          _context.next = 12;
          break;
        case 9:
          _context.prev = 9;
          _context.t0 = _context["catch"](1);
          console.log(_context.t0);
        case 12:
        case "end":
          return _context.stop();
      }
    }, _callee, null, [[1, 9]]);
  }));
  return function getSingleProduct(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();
exports.getSingleProduct = getSingleProduct;
var getSuggestionProduct = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res) {
    var _req$query, productId, categoryId, result;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          _req$query = req.query, productId = _req$query.productId, categoryId = _req$query.categoryId;
          _context2.prev = 1;
          _context2.next = 4;
          return _models.ProductModel.find({
            category: categoryId,
            _id: {
              $ne: productId
            }
          }).populate("colors.color");
        case 4:
          result = _context2.sent;
          return _context2.abrupt("return", res.status(201).json({
            success: true,
            result: result
          }));
        case 8:
          _context2.prev = 8;
          _context2.t0 = _context2["catch"](1);
          console.log(_context2.t0);
        case 11:
        case "end":
          return _context2.stop();
      }
    }, _callee2, null, [[1, 8]]);
  }));
  return function getSuggestionProduct(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();
exports.getSuggestionProduct = getSuggestionProduct;
var getNewArrivalProduct = /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(req, res) {
    var result;
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          _context3.prev = 0;
          _context3.next = 3;
          return _models.ProductModel.find({
            newArrival: true
          });
        case 3:
          result = _context3.sent;
          return _context3.abrupt("return", res.status(201).json({
            success: true,
            result: result
          }));
        case 7:
          _context3.prev = 7;
          _context3.t0 = _context3["catch"](0);
          console.log(_context3.t0);
        case 10:
        case "end":
          return _context3.stop();
      }
    }, _callee3, null, [[0, 7]]);
  }));
  return function getNewArrivalProduct(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();
exports.getNewArrivalProduct = getNewArrivalProduct;
var getProductOnBrand = /*#__PURE__*/function () {
  var _ref4 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(req, res) {
    var brandId, result;
    return _regenerator["default"].wrap(function _callee4$(_context4) {
      while (1) switch (_context4.prev = _context4.next) {
        case 0:
          brandId = req.params.id;
          _context4.prev = 1;
          _context4.next = 4;
          return _models.ProductModel.find({
            brands: brandId
          });
        case 4:
          result = _context4.sent;
          return _context4.abrupt("return", res.status(201).json({
            success: true,
            result: result
          }));
        case 8:
          _context4.prev = 8;
          _context4.t0 = _context4["catch"](1);
          console.log(_context4.t0);
        case 11:
        case "end":
          return _context4.stop();
      }
    }, _callee4, null, [[1, 8]]);
  }));
  return function getProductOnBrand(_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}();
exports.getProductOnBrand = getProductOnBrand;