"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getSingleCategory = exports.getCategory = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _helpers = require("../../helpers");
var _models = require("../../models");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
var getCategory = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
    var category;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return _models.CategoryModel.find({}).populate("brands");
        case 3:
          category = _context.sent;
          return _context.abrupt("return", res.status(200).json({
            success: true,
            result: category
          }));
        case 7:
          _context.prev = 7;
          _context.t0 = _context["catch"](0);
          console.log(_context.t0);
          throw new _helpers.CustomError("Something went wrong!", 500);
        case 11:
        case "end":
          return _context.stop();
      }
    }, _callee, null, [[0, 7]]);
  }));
  return function getCategory(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();
exports.getCategory = getCategory;
var getSingleCategory = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res) {
    var id, _req$query, maxPrice, brands, filter, products, category, result;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          id = req.params.id;
          _req$query = req.query, maxPrice = _req$query.maxPrice, brands = _req$query.brands;
          _context2.prev = 2;
          filter = {
            category: id,
            $or: [{
              $and: [{
                discountAvailable: true
              }, {
                discountPrice: {
                  $lte: maxPrice
                }
              }]
            }, {
              price: {
                $lte: maxPrice
              }
            }]
          };
          if (brands) {
            filter = _objectSpread(_objectSpread({}, filter), {}, {
              brands: {
                $in: brands
              }
            });
          }
          _context2.next = 7;
          return _models.ProductModel.find(_objectSpread({}, filter));
        case 7:
          products = _context2.sent;
          _context2.next = 10;
          return _models.CategoryModel.findById(id).populate("brands");
        case 10:
          category = _context2.sent;
          if (category) {
            _context2.next = 13;
            break;
          }
          return _context2.abrupt("return", res.status(201).json({
            success: false,
            msg: "Not found the category"
          }));
        case 13:
          result = _objectSpread(_objectSpread({}, category._doc), {}, {
            products: products
          });
          return _context2.abrupt("return", res.status(200).json({
            success: true,
            result: result
          }));
        case 17:
          _context2.prev = 17;
          _context2.t0 = _context2["catch"](2);
          console.log(_context2.t0);
          throw new _helpers.CustomError("Something went wrong!", 500);
        case 21:
        case "end":
          return _context2.stop();
      }
    }, _callee2, null, [[2, 17]]);
  }));
  return function getSingleCategory(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();
exports.getSingleCategory = getSingleCategory;