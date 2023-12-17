"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _express = _interopRequireDefault(require("express"));
var _cors = _interopRequireDefault(require("cors"));
var _dotenv = _interopRequireDefault(require("dotenv"));
var _helmet = _interopRequireDefault(require("helmet"));
var _db = _interopRequireDefault(require("./config/db"));
var _bodyParser = _interopRequireDefault(require("body-parser"));
var _routes = require("./routes");
var _helpers = require("./helpers");
var _multer = _interopRequireDefault(require("multer"));
_dotenv["default"].config({
  path: "./.env"
});
(0, _db["default"])();
var app = (0, _express["default"])();
app.use((0, _cors["default"])());
var upload = (0, _multer["default"])({
  dest: "/uploads"
});
app.use((0, _helmet["default"])());
app.use(_bodyParser["default"].json({
  limit: "30mb",
  extended: true
}));
app.use(_bodyParser["default"].urlencoded({
  limit: "30mb",
  extended: true
}));

// client
app.use("/auth", _routes.authRoute);
app.use("/category", _routes.categoryRoute);
app.use("/landing", _routes.landingRoute);
app.use("/product", _routes.productRoute);
app.use("/order", _routes.orderRoute);
app.use("/address", _routes.addressRoute);
app.use("/wish", _routes.wishRoute);

// admin
app.use("/admin", _routes.authRouteAdmin);
app.use("/admin/brand", _routes.brandRouteAdmin);
app.use("/admin/category", _routes.categoryRouteAdmin);
app.use("/admin/user", _routes.userRouteAdmin);
app.use("/admin/product", _routes.productRouteAdmin);
app.use("/admin/color", _routes.colorRouteAdmin);
app.use("/admin/landing", _routes.landingRouteAdmin);
app.use("/admin/order", _routes.orderRouteAdmin);
app.use("/admin/dashboard", _routes.dashboardRouteAdmin);

// file uploader
app.post("/file-upload", upload.single("file"), _helpers.singleFileUpload);
var PORT = process.env.PORT || 5000;
app.listen(PORT, console.log("server running"));