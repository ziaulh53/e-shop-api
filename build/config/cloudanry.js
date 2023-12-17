"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.cloudinaryBucket = void 0;
var _cloudinary = require("cloudinary");
var api_key = '443364596599546';
var api_secret = 'dRrscZioGSmEySu6W3jOm_9Wr3Y';
var cloud_name = 'deb3kihjs';
_cloudinary.v2.config({
  cloud_name: cloud_name,
  api_key: api_key,
  api_secret: api_secret
});
var cloudinaryBucket = _cloudinary.v2;
exports.cloudinaryBucket = cloudinaryBucket;