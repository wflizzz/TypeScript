"use strict";
exports.__esModule = true;
var react_1 = require("react");
var RegistrationForm = function () {
    var _a = react_1.useState(""), email = _a[0], setEmail = _a[1];
    var _b = react_1.useState(""), password = _b[0], setPassword = _b[1];
    var _c = react_1.useState(""), confirmPassword = _c[0], setConfirmPassword = _c[1];
    var handleSubmit = function (e) {
        e.preventDefault();
        if (password !== confirmPassword) {
            alert("Пароли не совпадают!");
            return;
        }
        alert("Вы успешно зарегистрировались!");
    };
    return (react_1["default"].createElement("form", { onSubmit: handleSubmit, className: "space-y-4" },
        react_1["default"].createElement("div", null,
            react_1["default"].createElement("label", { className: "block text-sm text-gray-600 mb-1" }, "E-mail"),
            react_1["default"].createElement("input", { type: "email", value: email, onChange: function (e) { return setEmail(e.target.value); }, placeholder: "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 e-mail", className: "w-full px-4 py-2 border rounded-md shadow-sm focus:ring-2 focus:ring-yellow-400" })),
        react_1["default"].createElement("div", null,
            react_1["default"].createElement("label", { className: "block text-sm text-gray-600 mb-1" }, "\u041F\u0430\u0440\u043E\u043B\u044C"),
            react_1["default"].createElement("input", { type: "password", value: password, onChange: function (e) { return setPassword(e.target.value); }, placeholder: "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043F\u0430\u0440\u043E\u043B\u044C", className: "w-full px-4 py-2 border rounded-md shadow-sm focus:ring-2 focus:ring-yellow-400" })),
        react_1["default"].createElement("div", null,
            react_1["default"].createElement("label", { className: "block text-sm text-gray-600 mb-1" }, "\u041F\u043E\u0434\u0442\u0432\u0435\u0440\u0434\u0438\u0442\u0435 \u043F\u0430\u0440\u043E\u043B\u044C"),
            react_1["default"].createElement("input", { type: "password", value: confirmPassword, onChange: function (e) { return setConfirmPassword(e.target.value); }, placeholder: "\u041F\u043E\u0434\u0442\u0432\u0435\u0440\u0434\u0438\u0442\u0435 \u043F\u0430\u0440\u043E\u043B\u044C", className: "w-full px-4 py-2 border rounded-md shadow-sm focus:ring-2 focus:ring-yellow-400" })),
        react_1["default"].createElement("button", { type: "submit", className: "w-full bg-yellow-400 text-white py-2 rounded-md shadow-md hover:bg-yellow-500 transition-transform transform hover:scale-105" }, "\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044F")));
};
exports["default"] = RegistrationForm;
