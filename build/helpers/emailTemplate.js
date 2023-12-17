"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WelcomeTemplate = exports.ResetPasswordTemplate = exports.PasswordChangeRequest = exports.AdminResetPasswordTemplate = void 0;
var ResetPasswordTemplate = function ResetPasswordTemplate(token) {
  return "<!DOCTYPE html>\n  <html lang=\"en\">\n    <head>\n      <meta charset=\"UTF-8\" />\n      <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\n      <title>Document</title>\n    </head>\n    <body>\n      <div style=\"padding: 0 40px\">\n        <h2 style=\"text-align: center; font-size: 30px\">Reset your password</h2>\n        <div style=\"width: 300px; margin: auto\">\n          <div style=\"font-size: 18px; font-weight: 500; margin-bottom: 10px\">\n            Click on Reset button to reset your password\n          </div>\n          <a style=\"padding: 5px 10px; color: white; background: red\"\n            href=\"".concat(process.env.WEB_URL, "/reset-password?security_key=").concat(token, "\" target=\"_blank\">Reset Password</a\n          >\n        </div>\n      </div>\n    </body>\n  </html>");
};
exports.ResetPasswordTemplate = ResetPasswordTemplate;
var AdminResetPasswordTemplate = function AdminResetPasswordTemplate(token) {
  return "<!DOCTYPE html>\n  <html lang=\"en\">\n    <head>\n      <meta charset=\"UTF-8\" />\n      <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\n      <title>Document</title>\n    </head>\n    <body>\n      <div style=\"padding: 0 40px\">\n        <h2 style=\"text-align: center; font-size: 30px\">Reset your password</h2>\n        <div style=\"width: 300px; margin: auto\">\n          <div style=\"font-size: 18px; font-weight: 500; margin-bottom: 10px\">\n            Click on Reset button to reset your password\n          </div>\n          <a style=\"padding: 5px 10px; color: white; background: red\"\n            href=\"".concat(process.env.ADMIN_WEB_URL, "/reset-password?security_key=").concat(token, "\" target=\"_blank\">Reset Password</a\n          >\n        </div>\n      </div>\n    </body>\n  </html>");
};
exports.AdminResetPasswordTemplate = AdminResetPasswordTemplate;
var WelcomeTemplate = function WelcomeTemplate() {
  return "<!DOCTYPE html>\n    <html lang=\"en\">\n    <head>\n        <meta charset=\"UTF-8\">\n        <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n        <title>Document</title>\n    </head>\n    <body>\n        <div style=\"padding: 0 40px;\">\n            <h2 style=\"text-align: center; font-size: 30px;\"> Welcome</h2>\n           <div style=\"width: 300px; margin: auto;\">\n            <p style=\"font-size: 18px; font-weight: 500;\">Thanks for your interest to shop from US</p>\n            <p style=\"font-size: 18px;\">Your account is ready to login</p>\n           </div>\n        </div>\n    </body>\n    </html>";
};
exports.WelcomeTemplate = WelcomeTemplate;
var PasswordChangeRequest = function PasswordChangeRequest(token) {
  return "<!DOCTYPE html>\n  <html lang=\"en\">\n    <head>\n      <meta charset=\"UTF-8\" />\n      <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\n      <title>Document</title>\n    </head>\n    <body>\n      <div style=\"padding: 0 40px\">\n        <h2 style=\"text-align: center; font-size: 30px\">Change Email</h2>\n        <div style=\"width: 300px; margin: auto\">\n          <div style=\"font-size: 18px; font-weight: 500; margin-bottom: 10px\">\n           Verify your email\n          </div>\n          <a style=\"padding: 5px 10px; color: white; background: red\"\n            href=\"".concat(process.env.ADMIN_WEB_URL, "/change-email-verification?security_key=").concat(token, "\" target=\"_blank\">Verify</a\n          >\n        </div>\n      </div>\n    </body>\n  </html>");
};
exports.PasswordChangeRequest = PasswordChangeRequest;