"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sendEmail = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _mail = _interopRequireDefault(require("@sendgrid/mail"));
var sendEmail = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(email, subject, template) {
    var msg, res;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _mail["default"].setApiKey(process.env.SENDGRID_API_KEY);
          _context.prev = 1;
          msg = {
            to: email,
            from: "ziaul@chillfitrave.com",
            subject: subject,
            html: template
          };
          _context.next = 5;
          return _mail["default"].send(msg);
        case 5:
          res = _context.sent;
          return _context.abrupt("return", res);
        case 9:
          _context.prev = 9;
          _context.t0 = _context["catch"](1);
          console.log(_context.t0);
        case 12:
        case "end":
          return _context.stop();
      }
    }, _callee, null, [[1, 9]]);
  }));
  return function sendEmail(_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
}();
exports.sendEmail = sendEmail;