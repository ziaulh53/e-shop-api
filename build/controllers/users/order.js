"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateStatus = exports.getSingleOrder = exports.getOrders = exports.createOrder = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _uuid = require("uuid");
var _models = require("../../models");
var _uniqid = _interopRequireDefault(require("uniqid"));
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
var SSK = "sk_test_51NiaBnG5LWC441mfG5iQbJADmdDYM3XncuwwhYoHmk1B4vuLCqN5Qgi5qTlp6o9ia5UEA8nnxNsw6eWWOBp00TKB00CLr736Ij";
var stripe = require("stripe")(SSK);
// console.log(process.env.STRIPE_SECRET_KEY, 'xc')
var createOrder = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
    var _req$body, token, shippingAddress, billingAddress, user, items, _charge$payment_metho, _charge$payment_metho2, _charge$payment_metho3, _yield$inVentoryCheck, isStockout, totalPrice, charge, orderData;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _req$body = req.body, token = _req$body.token, shippingAddress = _req$body.shippingAddress, billingAddress = _req$body.billingAddress, user = _req$body.user, items = _req$body.items; // calculate total price and store productid
          _context.prev = 1;
          _context.next = 4;
          return inVentoryCheckedAndUpdate(items);
        case 4:
          _yield$inVentoryCheck = _context.sent;
          isStockout = _yield$inVentoryCheck.isStockout;
          totalPrice = _yield$inVentoryCheck.totalPrice;
          if (!isStockout) {
            _context.next = 9;
            break;
          }
          return _context.abrupt("return", res.status(200).json({
            success: false,
            msg: "Stock out",
            isStockout: isStockout
          }));
        case 9:
          _context.next = 11;
          return stripePayment({
            user: user,
            token: token,
            totalPrice: totalPrice
          });
        case 11:
          charge = _context.sent;
          if (!(!(charge !== null && charge !== void 0 && charge.status) === "succeeded")) {
            _context.next = 14;
            break;
          }
          return _context.abrupt("return", res.status(401).json({
            success: false,
            msg: "Payment failed"
          }));
        case 14:
          orderData = {
            user: user === null || user === void 0 ? void 0 : user._id,
            shippingAddress: shippingAddress,
            billingAddress: billingAddress,
            payment: {
              cardType: charge === null || charge === void 0 || (_charge$payment_metho = charge.payment_method_details) === null || _charge$payment_metho === void 0 || (_charge$payment_metho = _charge$payment_metho.card) === null || _charge$payment_metho === void 0 ? void 0 : _charge$payment_metho.brand,
              cardNo: charge === null || charge === void 0 || (_charge$payment_metho2 = charge.payment_method_details) === null || _charge$payment_metho2 === void 0 || (_charge$payment_metho2 = _charge$payment_metho2.card) === null || _charge$payment_metho2 === void 0 ? void 0 : _charge$payment_metho2.last4,
              cardFunding: charge === null || charge === void 0 || (_charge$payment_metho3 = charge.payment_method_details) === null || _charge$payment_metho3 === void 0 || (_charge$payment_metho3 = _charge$payment_metho3.card) === null || _charge$payment_metho3 === void 0 ? void 0 : _charge$payment_metho3.funding,
              chargeId: charge === null || charge === void 0 ? void 0 : charge.id
            },
            items: items,
            orderId: "ESHOP-".concat(_uniqid["default"].time()).toUpperCase()
          };
          _context.next = 17;
          return _models.OrderModel.create(_objectSpread({}, orderData));
        case 17:
          return _context.abrupt("return", res.status(201).json({
            success: true,
            msg: "Order created successfully"
          }));
        case 20:
          _context.prev = 20;
          _context.t0 = _context["catch"](1);
          console.log(_context.t0);
        case 23:
        case "end":
          return _context.stop();
      }
    }, _callee, null, [[1, 20]]);
  }));
  return function createOrder(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();
exports.createOrder = createOrder;
var stripePayment = /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(_ref2) {
    var user, token, totalPrice, customer, idempotencyKey, charge;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          user = _ref2.user, token = _ref2.token, totalPrice = _ref2.totalPrice;
          _context2.prev = 1;
          _context2.next = 4;
          return stripe.customers.create({
            email: user === null || user === void 0 ? void 0 : user.email,
            source: token === null || token === void 0 ? void 0 : token.id
          });
        case 4:
          customer = _context2.sent;
          idempotencyKey = (0, _uuid.v4)();
          _context2.next = 8;
          return stripe.charges.create({
            amount: Math.round(totalPrice + 80) * 100,
            currency: "usd",
            customer: customer.id
          }, {
            idempotencyKey: idempotencyKey
          });
        case 8:
          charge = _context2.sent;
          return _context2.abrupt("return", charge);
        case 12:
          _context2.prev = 12;
          _context2.t0 = _context2["catch"](1);
          console.log(_context2.t0);
        case 15:
        case "end":
          return _context2.stop();
      }
    }, _callee2, null, [[1, 12]]);
  }));
  return function stripePayment(_x3) {
    return _ref3.apply(this, arguments);
  };
}();
var inVentoryCheckedAndUpdate = /*#__PURE__*/function () {
  var _ref4 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(items) {
    var totalPrice, isStockout, productIds, products, updateQuantities;
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          _context3.prev = 0;
          totalPrice = 0, isStockout = false;
          productIds = items === null || items === void 0 ? void 0 : items.map(function (pr) {
            totalPrice += (pr !== null && pr !== void 0 && pr.discountAvailable ? pr === null || pr === void 0 ? void 0 : pr.discountPrice : pr === null || pr === void 0 ? void 0 : pr.price) * (pr === null || pr === void 0 ? void 0 : pr.quantity);
            return pr === null || pr === void 0 ? void 0 : pr._id;
          });
          _context3.next = 5;
          return _models.ProductModel.find({
            _id: {
              $in: productIds
            }
          });
        case 5:
          products = _context3.sent;
          updateQuantities = items.map(function (it) {
            var colors = products.find(function (pr) {
              return String(pr === null || pr === void 0 ? void 0 : pr._id) === String(it._id);
            }).colors;
            var color = colors === null || colors === void 0 ? void 0 : colors.find(function (color) {
              var _it$colors;
              return String(color === null || color === void 0 ? void 0 : color._id) === String(it === null || it === void 0 || (_it$colors = it.colors) === null || _it$colors === void 0 ? void 0 : _it$colors._id);
            });
            if ((it === null || it === void 0 ? void 0 : it.quantity) > (color === null || color === void 0 ? void 0 : color.quantity)) {
              isStockout = true;
            }
            return {
              quantity: (color === null || color === void 0 ? void 0 : color.quantity) - (it === null || it === void 0 ? void 0 : it.quantity),
              colorsId: color === null || color === void 0 ? void 0 : color._id
            };
          });
          if (!isStockout) {
            updateQuantity(productIds, updateQuantities, items);
          }
          return _context3.abrupt("return", {
            totalPrice: totalPrice,
            isStockout: isStockout
          });
        case 11:
          _context3.prev = 11;
          _context3.t0 = _context3["catch"](0);
        case 13:
        case "end":
          return _context3.stop();
      }
    }, _callee3, null, [[0, 11]]);
  }));
  return function inVentoryCheckedAndUpdate(_x4) {
    return _ref4.apply(this, arguments);
  };
}();
var updateQuantity = function updateQuantity(productIds, updateQuantities) {
  productIds.forEach( /*#__PURE__*/function () {
    var _ref5 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(documentId, idx) {
      return _regenerator["default"].wrap(function _callee4$(_context4) {
        while (1) switch (_context4.prev = _context4.next) {
          case 0:
            _context4.next = 2;
            return _models.ProductModel.updateOne({
              _id: documentId,
              "colors._id": updateQuantities[idx].colorsId
            }, {
              $set: {
                "colors.$.quantity": updateQuantities[idx].quantity
              }
            });
          case 2:
          case "end":
            return _context4.stop();
        }
      }, _callee4);
    }));
    return function (_x5, _x6) {
      return _ref5.apply(this, arguments);
    };
  }());
};

//get orders
var getOrders = /*#__PURE__*/function () {
  var _ref6 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(req, res) {
    var user, status, query, result;
    return _regenerator["default"].wrap(function _callee5$(_context5) {
      while (1) switch (_context5.prev = _context5.next) {
        case 0:
          user = req.body.user;
          status = req.query.status;
          query = {
            user: user === null || user === void 0 ? void 0 : user._id
          };
          if (status) {
            query.status = status;
          }
          _context5.prev = 4;
          _context5.next = 7;
          return _models.OrderModel.find(query);
        case 7:
          result = _context5.sent;
          return _context5.abrupt("return", res.status(200).json({
            success: true,
            result: result
          }));
        case 11:
          _context5.prev = 11;
          _context5.t0 = _context5["catch"](4);
          console.log(_context5.t0);
        case 14:
        case "end":
          return _context5.stop();
      }
    }, _callee5, null, [[4, 11]]);
  }));
  return function getOrders(_x7, _x8) {
    return _ref6.apply(this, arguments);
  };
}();
exports.getOrders = getOrders;
var getSingleOrder = /*#__PURE__*/function () {
  var _ref7 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee6(req, res) {
    var id, result;
    return _regenerator["default"].wrap(function _callee6$(_context6) {
      while (1) switch (_context6.prev = _context6.next) {
        case 0:
          id = req.params.id;
          _context6.prev = 1;
          _context6.next = 4;
          return _models.OrderModel.findById(id);
        case 4:
          result = _context6.sent;
          return _context6.abrupt("return", res.status(200).json({
            success: true,
            result: result
          }));
        case 8:
          _context6.prev = 8;
          _context6.t0 = _context6["catch"](1);
          console.log(_context6.t0);
        case 11:
        case "end":
          return _context6.stop();
      }
    }, _callee6, null, [[1, 8]]);
  }));
  return function getSingleOrder(_x9, _x10) {
    return _ref7.apply(this, arguments);
  };
}();
exports.getSingleOrder = getSingleOrder;
var updateStatus = /*#__PURE__*/function () {
  var _ref8 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee7(req, res) {
    var id, status;
    return _regenerator["default"].wrap(function _callee7$(_context7) {
      while (1) switch (_context7.prev = _context7.next) {
        case 0:
          id = req.params.id;
          status = req.body.status;
          _context7.prev = 2;
          _context7.next = 5;
          return _models.OrderModel.findByIdAndUpdate(id, {
            status: status
          });
        case 5:
          return _context7.abrupt("return", res.status(200).json({
            success: true,
            msg: status === 'Cancelled' ? "Order Cancelled" : "Order status updated"
          }));
        case 8:
          _context7.prev = 8;
          _context7.t0 = _context7["catch"](2);
          console.log(_context7.t0);
        case 11:
        case "end":
          return _context7.stop();
      }
    }, _callee7, null, [[2, 8]]);
  }));
  return function updateStatus(_x11, _x12) {
    return _ref8.apply(this, arguments);
  };
}();
exports.updateStatus = updateStatus;