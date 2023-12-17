"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CustomError = void 0;
var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));
var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));
var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));
var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));
var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));
var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));
var _wrapNativeSuper2 = _interopRequireDefault(require("@babel/runtime/helpers/wrapNativeSuper"));
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
var CommonError = /*#__PURE__*/function (_Error) {
  (0, _inherits2["default"])(CommonError, _Error);
  var _super = _createSuper(CommonError);
  function CommonError() {
    var _this;
    var msg = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
    var code = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";
    (0, _classCallCheck2["default"])(this, CommonError);
    for (var _len = arguments.length, params = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
      params[_key - 2] = arguments[_key];
    }
    _this = _super.call.apply(_super, [this].concat(params));
    if (Error.captureStackTrace) {
      Error.captureStackTrace((0, _assertThisInitialized2["default"])(_this), CustomError);
    }
    _this.code = code;
    _this.message = msg;
    return _this;
  }
  return (0, _createClass2["default"])(CommonError);
}( /*#__PURE__*/(0, _wrapNativeSuper2["default"])(Error));
var CustomError = CommonError;
exports.CustomError = CustomError;