"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.singleFileUpload = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _cloudanry = require("../config/cloudanry");
var singleFileUpload = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
    var result;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return _cloudanry.cloudinaryBucket.uploader.upload(req.file.path);
        case 3:
          result = _context.sent;
          return _context.abrupt("return", res.status(200).json({
            success: true,
            result: result
          }));
        case 7:
          _context.prev = 7;
          _context.t0 = _context["catch"](0);
          console.log(_context.t0);
          return _context.abrupt("return", res.status(200).json({
            success: false,
            msg: 'Something went wrong'
          }));
        case 11:
        case "end":
          return _context.stop();
      }
    }, _callee, null, [[0, 7]]);
  }));
  return function singleFileUpload(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();
exports.singleFileUpload = singleFileUpload;