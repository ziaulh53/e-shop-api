"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getDahsboardSellingData = exports.getCategorySellingData = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _moment = _interopRequireDefault(require("moment/moment"));
var _models = require("../../models");
var _helpers = require("../../helpers");
var getDahsboardSellingData = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
    var type, _formatQuary, chartData, fromDate, dateFormate, result;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          type = req.query.type;
          _context.prev = 1;
          // seven days
          _formatQuary = (0, _helpers.formatQuary)(type), chartData = _formatQuary.chartData, fromDate = _formatQuary.fromDate, dateFormate = _formatQuary.dateFormate;
          _context.next = 5;
          return _models.OrderModel.aggregate([{
            $match: {
              createdAt: {
                $gte: fromDate,
                $lte: (0, _moment["default"])().toDate()
              }
            }
          }, {
            $group: {
              _id: {
                $dateTrunc: {
                  // format: "%Y-%m-%d",
                  date: "$createdAt",
                  unit: type
                }
              },
              count: {
                $sum: 1
              }
            }
          }]);
        case 5:
          result = _context.sent;
          result.forEach(function (_ref2) {
            var _id = _ref2._id,
              count = _ref2.count;
            var findDate = (0, _moment["default"])(_id).format(dateFormate);
            var findIdx = chartData.labels.findIndex(function (item) {
              return item === findDate;
            });
            chartData.data[findIdx] = count;
          });
          return _context.abrupt("return", res.status(200).json({
            success: true,
            result: chartData
          }));
        case 10:
          _context.prev = 10;
          _context.t0 = _context["catch"](1);
          console.log(_context.t0);
          return _context.abrupt("return", res.status(402).json({
            success: false,
            msg: "Something went worng!"
          }));
        case 14:
        case "end":
          return _context.stop();
      }
    }, _callee, null, [[1, 10]]);
  }));
  return function getDahsboardSellingData(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();
exports.getDahsboardSellingData = getDahsboardSellingData;
var getCategorySellingData = function getCategorySellingData(req, res) {
  try {} catch (error) {
    return res.status(402).json({
      success: false,
      msg: "Something went worng!"
    });
    console.log(error);
  }
};
exports.getCategorySellingData = getCategorySellingData;