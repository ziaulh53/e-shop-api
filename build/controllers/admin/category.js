"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getSingleCategoryAdmin = exports.getCategoryAdmin = exports.editCategoryAdmin = exports.deleteCategoryAdmin = exports.createCategoryAdmin = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _helpers = require("../../helpers");
var _models = require("../../models");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
var getCategoryAdmin = /*#__PURE__*/function () {
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
          throw new _helpers.CustomError('Something went wrong!', 500);
        case 11:
        case "end":
          return _context.stop();
      }
    }, _callee, null, [[0, 7]]);
  }));
  return function getCategoryAdmin(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();
exports.getCategoryAdmin = getCategoryAdmin;
var getSingleCategoryAdmin = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res) {
    var id, products, category, result;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          id = req.params.id;
          _context2.prev = 1;
          _context2.next = 4;
          return _models.ProductModel.find({
            category: id
          }).populate('brands');
        case 4:
          products = _context2.sent;
          _context2.next = 7;
          return _models.CategoryModel.findById(id).populate('brands');
        case 7:
          category = _context2.sent;
          if (category) {
            _context2.next = 10;
            break;
          }
          return _context2.abrupt("return", res.status(201).json({
            success: false,
            msg: "Not found the category"
          }));
        case 10:
          result = _objectSpread(_objectSpread({}, category._doc), {}, {
            products: products
          });
          return _context2.abrupt("return", res.status(200).json({
            success: true,
            result: result
          }));
        case 14:
          _context2.prev = 14;
          _context2.t0 = _context2["catch"](1);
          console.log(_context2.t0);
          throw new _helpers.CustomError('Something went wrong!', 500);
        case 18:
        case "end":
          return _context2.stop();
      }
    }, _callee2, null, [[1, 14]]);
  }));
  return function getSingleCategoryAdmin(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();
exports.getSingleCategoryAdmin = getSingleCategoryAdmin;
var createCategoryAdmin = /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(req, res) {
    var _req$body, name, _req$body$coverImage, coverImage, _req$body$brands, brands, isExist;
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          _context3.prev = 0;
          _req$body = req.body, name = _req$body.name, _req$body$coverImage = _req$body.coverImage, coverImage = _req$body$coverImage === void 0 ? "" : _req$body$coverImage, _req$body$brands = _req$body.brands, brands = _req$body$brands === void 0 ? [] : _req$body$brands;
          if (!(!name || !brands)) {
            _context3.next = 4;
            break;
          }
          return _context3.abrupt("return", res.status(201).json({
            success: false,
            msg: "Invalid input"
          }));
        case 4:
          _context3.next = 6;
          return _models.CategoryModel.findOne({
            name: name
          });
        case 6:
          isExist = _context3.sent;
          if (!isExist) {
            _context3.next = 9;
            break;
          }
          return _context3.abrupt("return", res.status(201).json({
            success: false,
            msg: "The category is already exist"
          }));
        case 9:
          _context3.next = 11;
          return _models.CategoryModel.create({
            name: name,
            coverImage: coverImage,
            brands: brands
          });
        case 11:
          return _context3.abrupt("return", res.status(200).json({
            success: true,
            msg: "".concat(name, " added into category list")
          }));
        case 14:
          _context3.prev = 14;
          _context3.t0 = _context3["catch"](0);
          console.log(_context3.t0);
          throw new _helpers.CustomError('Something went wrong!', 500);
        case 18:
        case "end":
          return _context3.stop();
      }
    }, _callee3, null, [[0, 14]]);
  }));
  return function createCategoryAdmin(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();
exports.createCategoryAdmin = createCategoryAdmin;
var editCategoryAdmin = /*#__PURE__*/function () {
  var _ref4 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(req, res) {
    var id, _req$body2, name, coverImage, brands, foundBrand;
    return _regenerator["default"].wrap(function _callee4$(_context4) {
      while (1) switch (_context4.prev = _context4.next) {
        case 0:
          id = req.params.id;
          _req$body2 = req.body, name = _req$body2.name, coverImage = _req$body2.coverImage, brands = _req$body2.brands;
          _context4.prev = 2;
          _context4.next = 5;
          return _models.CategoryModel.findById(id);
        case 5:
          foundBrand = _context4.sent;
          if (foundBrand) {
            _context4.next = 8;
            break;
          }
          return _context4.abrupt("return", res.status(201).json({
            success: false,
            msg: "Not found the brand"
          }));
        case 8:
          if (name) foundBrand.name = name;
          if (coverImage) foundBrand.coverImage = coverImage;
          if (brands) foundBrand.brands = brands;
          _context4.next = 13;
          return foundBrand.save();
        case 13:
          return _context4.abrupt("return", res.status(200).json({
            success: true,
            msg: "Update successfully"
          }));
        case 16:
          _context4.prev = 16;
          _context4.t0 = _context4["catch"](2);
          console.log(_context4.t0);
          throw new _helpers.CustomError('Something went wrong!', 500);
        case 20:
        case "end":
          return _context4.stop();
      }
    }, _callee4, null, [[2, 16]]);
  }));
  return function editCategoryAdmin(_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}();
exports.editCategoryAdmin = editCategoryAdmin;
var deleteCategoryAdmin = /*#__PURE__*/function () {
  var _ref5 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(req, res) {
    var id, foundBrand;
    return _regenerator["default"].wrap(function _callee5$(_context5) {
      while (1) switch (_context5.prev = _context5.next) {
        case 0:
          id = req.params.id;
          _context5.prev = 1;
          _context5.next = 4;
          return _models.CategoryModel.findById(id);
        case 4:
          foundBrand = _context5.sent;
          if (foundBrand) {
            _context5.next = 7;
            break;
          }
          return _context5.abrupt("return", res.status(201).json({
            success: false,
            msg: "Not found the brand"
          }));
        case 7:
          _context5.next = 9;
          return foundBrand.deleteOne();
        case 9:
          return _context5.abrupt("return", res.status(200).json({
            success: true,
            msg: "Delete successfully"
          }));
        case 12:
          _context5.prev = 12;
          _context5.t0 = _context5["catch"](1);
          console.log(_context5.t0);
          throw new _helpers.CustomError('Something went wrong!', 500);
        case 16:
        case "end":
          return _context5.stop();
      }
    }, _callee5, null, [[1, 12]]);
  }));
  return function deleteCategoryAdmin(_x9, _x10) {
    return _ref5.apply(this, arguments);
  };
}();
exports.deleteCategoryAdmin = deleteCategoryAdmin;