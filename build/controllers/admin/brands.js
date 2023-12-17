"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getBrandsAdmin = exports.editBrandAdmin = exports.deleteBrandAdmin = exports.createBrandAdmin = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _helpers = require("../../helpers");
var _models = require("../../models");
var getBrandsAdmin = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
    var brands;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return _models.BrandModel.find({});
        case 3:
          brands = _context.sent;
          return _context.abrupt("return", res.status(200).json({
            success: true,
            result: brands
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
  return function getBrandsAdmin(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();
exports.getBrandsAdmin = getBrandsAdmin;
var createBrandAdmin = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res) {
    var _req$body, name, logo, isExist;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          _req$body = req.body, name = _req$body.name, logo = _req$body.logo;
          if (name) {
            _context2.next = 4;
            break;
          }
          return _context2.abrupt("return", res.status(201).json({
            success: false,
            msg: "Invalid input"
          }));
        case 4:
          _context2.next = 6;
          return _models.BrandModel.findOne({
            name: name
          });
        case 6:
          isExist = _context2.sent;
          if (!isExist) {
            _context2.next = 9;
            break;
          }
          return _context2.abrupt("return", res.status(201).json({
            success: false,
            msg: "The brand is already exist"
          }));
        case 9:
          _context2.next = 11;
          return _models.BrandModel.create({
            name: name,
            logo: logo
          });
        case 11:
          return _context2.abrupt("return", res.status(200).json({
            success: true,
            msg: "".concat(name, " added into brand list")
          }));
        case 14:
          _context2.prev = 14;
          _context2.t0 = _context2["catch"](0);
          console.log(_context2.t0);
          throw new _helpers.CustomError("Something went wrong!", 500);
        case 18:
        case "end":
          return _context2.stop();
      }
    }, _callee2, null, [[0, 14]]);
  }));
  return function createBrandAdmin(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();
exports.createBrandAdmin = createBrandAdmin;
var editBrandAdmin = /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(req, res) {
    var id, _req$body2, name, logo, foundBrand;
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          id = req.params.id;
          _req$body2 = req.body, name = _req$body2.name, logo = _req$body2.logo;
          _context3.prev = 2;
          _context3.next = 5;
          return _models.BrandModel.findById(id);
        case 5:
          foundBrand = _context3.sent;
          if (foundBrand) {
            _context3.next = 8;
            break;
          }
          return _context3.abrupt("return", res.status(201).json({
            success: false,
            msg: "Not found the brand"
          }));
        case 8:
          if (name) foundBrand.name = name;
          if (logo) foundBrand.logo = logo;
          _context3.next = 12;
          return foundBrand.save();
        case 12:
          return _context3.abrupt("return", res.status(200).json({
            success: true,
            msg: "Update successfully"
          }));
        case 15:
          _context3.prev = 15;
          _context3.t0 = _context3["catch"](2);
          console.log(_context3.t0);
          throw new _helpers.CustomError("Something went wrong!", 500);
        case 19:
        case "end":
          return _context3.stop();
      }
    }, _callee3, null, [[2, 15]]);
  }));
  return function editBrandAdmin(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();
exports.editBrandAdmin = editBrandAdmin;
var deleteBrandAdmin = /*#__PURE__*/function () {
  var _ref4 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(req, res) {
    var id, foundBrand;
    return _regenerator["default"].wrap(function _callee4$(_context4) {
      while (1) switch (_context4.prev = _context4.next) {
        case 0:
          id = req.params.id;
          _context4.prev = 1;
          _context4.next = 4;
          return _models.BrandModel.findById(id);
        case 4:
          foundBrand = _context4.sent;
          if (foundBrand) {
            _context4.next = 7;
            break;
          }
          return _context4.abrupt("return", res.status(201).json({
            success: false,
            msg: "Not found the brand"
          }));
        case 7:
          _context4.next = 9;
          return foundBrand.deleteOne();
        case 9:
          return _context4.abrupt("return", res.status(200).json({
            success: true,
            msg: "Delete successfully"
          }));
        case 12:
          _context4.prev = 12;
          _context4.t0 = _context4["catch"](1);
          console.log(_context4.t0);
          throw new _helpers.CustomError("Something went wrong!", 500);
        case 16:
        case "end":
          return _context4.stop();
      }
    }, _callee4, null, [[1, 12]]);
  }));
  return function deleteBrandAdmin(_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}();
exports.deleteBrandAdmin = deleteBrandAdmin;