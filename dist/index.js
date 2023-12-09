"use strict";

var _react = _interopRequireDefault(require("react"));
var _reactDom = _interopRequireDefault(require("react-dom"));
var _Layout = _interopRequireDefault(require("./Layout"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
//react entry point

window.onload = function () {
  console.log("5o");
  _reactDom["default"].render( /*#__PURE__*/_react["default"].createElement(_Layout["default"], null), document.getElementById("root"));
};