"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getProductsAdmin = exports.editProduct = exports.deleteProductAdmin = exports.createProduct = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _models = require("../../models");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
var getProductsAdmin = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
    var result;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return _models.ProductModel.find().populate('category').exec();
        case 3:
          result = _context.sent;
          return _context.abrupt("return", res.status(201).json({
            success: true,
            result: result
          }));
        case 7:
          _context.prev = 7;
          _context.t0 = _context["catch"](0);
          console.log(_context.t0);
        case 10:
        case "end":
          return _context.stop();
      }
    }, _callee, null, [[0, 7]]);
  }));
  return function getProductsAdmin(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();
exports.getProductsAdmin = getProductsAdmin;
var createProduct = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res) {
    var productData, result;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          productData = req.body.productData;
          _context2.prev = 1;
          _context2.next = 4;
          return _models.ProductModel.create(productData);
        case 4:
          result = _context2.sent;
          if (!result._id) {
            _context2.next = 7;
            break;
          }
          return _context2.abrupt("return", res.status(200).json({
            success: true,
            msg: "Product created successfully"
          }));
        case 7:
          _context2.next = 12;
          break;
        case 9:
          _context2.prev = 9;
          _context2.t0 = _context2["catch"](1);
          console.log(_context2.t0);
        case 12:
        case "end":
          return _context2.stop();
      }
    }, _callee2, null, [[1, 9]]);
  }));
  return function createProduct(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();
exports.createProduct = createProduct;
var editProduct = /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(req, res) {
    var productData, id, result;
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          productData = req.body.productData;
          id = req.params.id;
          _context3.prev = 2;
          _context3.next = 5;
          return _models.ProductModel.findByIdAndUpdate(id, _objectSpread({}, productData));
        case 5:
          result = _context3.sent;
          if (!result._id) {
            _context3.next = 8;
            break;
          }
          return _context3.abrupt("return", res.status(200).json({
            success: true,
            msg: "Product Updated successfully"
          }));
        case 8:
          _context3.next = 13;
          break;
        case 10:
          _context3.prev = 10;
          _context3.t0 = _context3["catch"](2);
          console.log(_context3.t0);
        case 13:
        case "end":
          return _context3.stop();
      }
    }, _callee3, null, [[2, 10]]);
  }));
  return function editProduct(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();
exports.editProduct = editProduct;
var deleteProductAdmin = /*#__PURE__*/function () {
  var _ref4 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(req, res) {
    var id, foundProduct;
    return _regenerator["default"].wrap(function _callee4$(_context4) {
      while (1) switch (_context4.prev = _context4.next) {
        case 0:
          id = req.params.id;
          _context4.prev = 1;
          _context4.next = 4;
          return _models.ProductModel.findById(id);
        case 4:
          foundProduct = _context4.sent;
          if (foundProduct) {
            _context4.next = 7;
            break;
          }
          return _context4.abrupt("return", res.status(201).json({
            success: false,
            msg: "Not found the brand"
          }));
        case 7:
          _context4.next = 9;
          return foundProduct.deleteOne();
        case 9:
          return _context4.abrupt("return", res.status(200).json({
            success: true,
            msg: "Delete successfully"
          }));
        case 12:
          _context4.prev = 12;
          _context4.t0 = _context4["catch"](1);
          console.log(_context4.t0);
          throw new CustomError("Something went wrong!", 500);
        case 16:
        case "end":
          return _context4.stop();
      }
    }, _callee4, null, [[1, 12]]);
  }));
  return function deleteProductAdmin(_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}();
exports.deleteProductAdmin = deleteProductAdmin;