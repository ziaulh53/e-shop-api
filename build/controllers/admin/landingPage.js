"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateTrendings = exports.updateBanners = exports.getLandingPageAdmin = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _models = require("../../models");
var getLandingPageAdmin = /*#__PURE__*/function () {
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
  return function getLandingPageAdmin(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();
exports.getLandingPageAdmin = getLandingPageAdmin;
var updateBanners = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res) {
    var banners, result;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          banners = req.body.banners;
          _context2.prev = 1;
          _context2.next = 4;
          return _models.LandingPageModel.find();
        case 4:
          result = _context2.sent;
          if (result.length) {
            _context2.next = 9;
            break;
          }
          _context2.next = 8;
          return _models.LandingPageModel.create({
            banners: banners
          });
        case 8:
          return _context2.abrupt("return", res.status(200).json({
            success: true,
            msg: "Updated successfully"
          }));
        case 9:
          _context2.next = 11;
          return _models.LandingPageModel.findByIdAndUpdate(result[0]._id, {
            $set: {
              banners: banners
            }
          });
        case 11:
          return _context2.abrupt("return", res.status(200).json({
            success: true,
            msg: "Updated successfully"
          }));
        case 14:
          _context2.prev = 14;
          _context2.t0 = _context2["catch"](1);
          console.log(_context2.t0.message);
          return _context2.abrupt("return", res.status(403).json({
            success: false,
            msg: "Something went wrong"
          }));
        case 18:
        case "end":
          return _context2.stop();
      }
    }, _callee2, null, [[1, 14]]);
  }));
  return function updateBanners(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();
exports.updateBanners = updateBanners;
var updateTrendings = /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(req, res) {
    var trendings, result;
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          trendings = req.body.trendings;
          _context3.prev = 1;
          _context3.next = 4;
          return _models.LandingPageModel.find({});
        case 4:
          result = _context3.sent;
          if (result.length) {
            _context3.next = 9;
            break;
          }
          _context3.next = 8;
          return _models.LandingPageModel.create({
            trendings: trendings
          });
        case 8:
          return _context3.abrupt("return", res.status(200).json({
            success: true,
            msg: "Updated successfully"
          }));
        case 9:
          _context3.next = 11;
          return _models.LandingPageModel.findByIdAndUpdate(result[0]._id, {
            $set: {
              trendings: trendings
            }
          });
        case 11:
          return _context3.abrupt("return", res.status(200).json({
            success: true,
            msg: "Updated successfully"
          }));
        case 14:
          _context3.prev = 14;
          _context3.t0 = _context3["catch"](1);
          console.log(_context3.t0.message);
          return _context3.abrupt("return", res.status(403).json({
            success: false,
            msg: "Something went wrong"
          }));
        case 18:
        case "end":
          return _context3.stop();
      }
    }, _callee3, null, [[1, 14]]);
  }));
  return function updateTrendings(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();
exports.updateTrendings = updateTrendings;