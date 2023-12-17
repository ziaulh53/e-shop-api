"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _mongoose = require("mongoose");
var ProductSchema = new _mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  discountPrice: {
    type: Number
  },
  discountAvailable: {
    type: Boolean,
    "default": false
  },
  newArrival: {
    type: Boolean,
    "default": false
  },
  quantity: {
    type: Number,
    "default": 0
  },
  colors: [{
    color: {
      type: _mongoose.Schema.Types.ObjectId,
      ref: "colors"
    },
    quantity: {
      type: Number,
      "default": 0
    },
    images: {
      type: Array
    }
  }],
  description: {
    type: String
  },
  brands: {
    type: _mongoose.Schema.Types.ObjectId,
    ref: "brands"
  },
  category: {
    type: _mongoose.Schema.Types.ObjectId,
    ref: "category"
  }
}, {
  timestamps: true
});
var _default = (0, _mongoose.model)("products", ProductSchema);
exports["default"] = _default;