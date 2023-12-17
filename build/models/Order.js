"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _mongoose = _interopRequireDefault(require("mongoose"));
var OrderSchema = new _mongoose["default"].Schema({
  user: {
    type: _mongoose["default"].Schema.Types.ObjectId,
    ref: "users"
  },
  orderId: String,
  items: [],
  totalPrice: Number,
  shippingAddress: {
    type: Object,
    required: true
  },
  billingAddress: {
    type: Object,
    required: true
  },
  payment: {
    type: Object,
    required: true
  },
  status: {
    type: String,
    "enum": ['Pending', 'Accepted', 'Shipped', 'Cancelled', 'Delivered'],
    "default": 'Pending'
  },
  logistics: {
    trackingUrl: String,
    name: String
  },
  refunded: {
    type: Boolean,
    "default": false
  },
  cancelNote: String
}, {
  timestamps: true
});
var _default = _mongoose["default"].model("orders", OrderSchema);
exports["default"] = _default;