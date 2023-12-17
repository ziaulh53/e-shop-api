"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getWishItems = exports.addWishItem = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _models = require("../../models");
var getWishItems = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
    var user, result;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          user = req.body.user;
          _context.prev = 1;
          _context.next = 4;
          return _models.WishModel.find({
            user: user === null || user === void 0 ? void 0 : user._id
          }).populate("products");
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
  return function getWishItems(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();
exports.getWishItems = getWishItems;
var addWishItem = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res) {
    var _req$body, user, productId, existingUser, existingProduct, existingWishlistItem;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          _req$body = req.body, user = _req$body.user, productId = _req$body.productId;
          _context2.prev = 1;
          _context2.next = 4;
          return _models.UserModel.findById(user === null || user === void 0 ? void 0 : user._id);
        case 4:
          existingUser = _context2.sent;
          _context2.next = 7;
          return _models.ProductModel.findById(productId);
        case 7:
          existingProduct = _context2.sent;
          if (!(!existingUser || !existingProduct)) {
            _context2.next = 10;
            break;
          }
          return _context2.abrupt("return", res.status(200).json({
            success: false,
            msg: "User or product does not exist"
          }));
        case 10:
          _context2.next = 12;
          return _models.WishModel.findOne({
            user: user === null || user === void 0 ? void 0 : user._id,
            products: productId
          });
        case 12:
          existingWishlistItem = _context2.sent;
          if (!existingWishlistItem) {
            _context2.next = 15;
            break;
          }
          return _context2.abrupt("return", res.status(200).json({
            success: false,
            msg: "Product already in wish list"
          }));
        case 15:
          _context2.next = 17;
          return _models.WishModel.updateOne({
            user: user === null || user === void 0 ? void 0 : user._id
          }, {
            $push: {
              products: productId
            }
          });
        case 17:
          return _context2.abrupt("return", res.status(201).json({
            success: true,
            msg: "Product added to wishlist successfully"
          }));
        case 20:
          _context2.prev = 20;
          _context2.t0 = _context2["catch"](1);
          console.error(_context2.t0.message);
          return _context2.abrupt("return", res.status(500).json({
            success: false,
            msg: "Internal Server Error"
          }));
        case 24:
        case "end":
          return _context2.stop();
      }
    }, _callee2, null, [[1, 20]]);
  }));
  return function addWishItem(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();
exports.addWishItem = addWishItem;