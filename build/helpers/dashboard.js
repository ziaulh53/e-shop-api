"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.formatQuary = void 0;
var _moment = _interopRequireDefault(require("moment"));
var formatQuary = function formatQuary(type) {
  var chartData = {
    labels: [],
    data: []
  };
  var fromDate = "";
  var dateFormate = "";
  if (type === "day") {
    fromDate = (0, _moment["default"])().subtract(7, "d").startOf("day").toDate();
    dateFormate = "ddd";
    Array(7).fill(null).forEach(function (_, i) {
      chartData.labels.push((0, _moment["default"])().subtract(8 - (i + 1), "d").format("ddd"));
      chartData.data.push(0);
    });
  } else {
    fromDate = (0, _moment["default"])().subtract(6, "month").startOf("month").toDate();
    dateFormate = "MMM YYYY";
    Array(6).fill(null).forEach(function (_, i) {
      chartData.labels.push((0, _moment["default"])().subtract(7 - (i + 1), "month").format("MMM YYYY"));
      chartData.data.push(0);
    });
  }
  return {
    chartData: chartData,
    fromDate: fromDate,
    dateFormate: dateFormate
  };
};
exports.formatQuary = formatQuary;