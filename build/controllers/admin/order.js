"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateStatusAdmin = exports.getSingleOrderAdmin = exports.getOrdersAdmin = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _uuid = require("uuid");
var _models = require("../../models");
var _uniqid = _interopRequireDefault(require("uniqid"));
var _moment = require("moment/moment");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
var SSK = "sk_test_51NiaBnG5LWC441mfG5iQbJADmdDYM3XncuwwhYoHmk1B4vuLCqN5Qgi5qTlp6o9ia5UEA8nnxNsw6eWWOBp00TKB00CLr736Ij";
var stripe = require("stripe")(SSK);
// console.log(process.env.STRIPE_SECRET_KEY, 'xc')

//get orders
var getOrdersAdmin = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
    var _req$query, startDate, endDate, orderId, status, email, phone, page, filter, _result$, pripeline, result;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _req$query = req.query, startDate = _req$query.startDate, endDate = _req$query.endDate, orderId = _req$query.orderId, status = _req$query.status, email = _req$query.email, phone = _req$query.phone, page = _req$query.page;
          filter = {};
          if (startDate) {
            filter = {
              createdAt: {
                $gte: new Date(startDate),
                $lte: new Date(endDate)
              }
            };
          }
          if (orderId) {
            filter = _objectSpread(_objectSpread({}, filter), {}, {
              orderId: orderId
            });
          }
          if (status) {
            filter = _objectSpread(_objectSpread({}, filter), {}, {
              status: status
            });
          }
          if (email) {
            filter = _objectSpread(_objectSpread({}, filter), {}, {
              "user.email": email
            });
          }
          if (phone) {
            filter = _objectSpread(_objectSpread({}, filter), {}, {
              "shippingAddress.phone": phone
            });
          }
          _context.prev = 7;
          pripeline = [{
            $lookup: {
              from: "users",
              localField: "user",
              foreignField: "_id",
              as: "user"
            }
          }, {
            $unwind: "$user"
          }, {
            $match: _objectSpread({}, filter)
          }, {
            $setWindowFields: {
              output: {
                totalCount: {
                  $count: {}
                }
              }
            }
          }, {
            $skip: (page - 1 || 0) * 1
          }, {
            $limit: 15
          }];
          _context.next = 11;
          return _models.OrderModel.aggregate(pripeline);
        case 11:
          result = _context.sent;
          return _context.abrupt("return", res.status(200).json({
            success: true,
            result: {
              orders: result,
              count: ((_result$ = result[0]) === null || _result$ === void 0 ? void 0 : _result$.totalCount) || 0
            }
          }));
        case 15:
          _context.prev = 15;
          _context.t0 = _context["catch"](7);
          console.log(_context.t0);
        case 18:
        case "end":
          return _context.stop();
      }
    }, _callee, null, [[7, 15]]);
  }));
  return function getOrdersAdmin(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();
exports.getOrdersAdmin = getOrdersAdmin;
var getSingleOrderAdmin = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res) {
    var id, result;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          id = req.params.id;
          _context2.prev = 1;
          _context2.next = 4;
          return _models.OrderModel.findById(id).populate("user");
        case 4:
          result = _context2.sent;
          return _context2.abrupt("return", res.status(200).json({
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
  return function getSingleOrderAdmin(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();
exports.getSingleOrderAdmin = getSingleOrderAdmin;
var updateStatusAdmin = /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(req, res) {
    var id, status;
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          id = req.params.id;
          status = req.body.status;
          _context3.prev = 2;
          _context3.next = 5;
          return _models.OrderModel.findByIdAndUpdate(id, {
            status: status
          });
        case 5:
          return _context3.abrupt("return", res.status(200).json({
            success: true,
            msg: status === "Cancelled" ? "Order Cancelled" : "Order status updated"
          }));
        case 8:
          _context3.prev = 8;
          _context3.t0 = _context3["catch"](2);
          console.log(_context3.t0);
        case 11:
        case "end":
          return _context3.stop();
      }
    }, _callee3, null, [[2, 8]]);
  }));
  return function updateStatusAdmin(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();
exports.updateStatusAdmin = updateStatusAdmin;