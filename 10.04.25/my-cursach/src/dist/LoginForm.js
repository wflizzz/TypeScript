"use strict";
exports.__esModule = true;
var react_1 = require("react");
var react_router_dom_1 = require("react-router-dom");
var LoginForm = function (_a) {
    var setUser = _a.setUser;
    var _b = react_1.useState(""), email = _b[0], setEmail = _b[1];
    var _c = react_1.useState(""), password = _c[0], setPassword = _c[1];
    var navigate = react_router_dom_1.useNavigate();
    var handleSubmit = function (e) {
        e.preventDefault();
        var mockUser = {
            email: "al.cyvvv@gmail.com",
            avatar: "https://via.placeholder.com/100",
            name: "Цывинская Алина"
        };
        setUser(mockUser);
        navigate("/");
    };
    return (react_1["default"].createElement("form", { onSubmit: handleSubmit, className: "space-y-4" },
        react_1["default"].createElement("div", null,
            react_1["default"].createElement("label", { className: "block text-sm text-gray-600 mb-1" }, "E-mail"),
            react_1["default"].createElement("input", { type: "email", value: email, onChange: function (e) { return setEmail(e.target.value); }, placeholder: "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 e-mail", className: "w-full px-4 py-2 border rounded-md shadow-sm focus:ring-2 focus:ring-yellow-400" })),
        react_1["default"].createElement("div", null,
            react_1["default"].createElement("label", { className: "block text-sm text-gray-600 mb-1" }, "\u041F\u0430\u0440\u043E\u043B\u044C"),
            react_1["default"].createElement("input", { type: "password", value: password, onChange: function (e) { return setPassword(e.target.value); }, placeholder: "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043F\u0430\u0440\u043E\u043B\u044C", className: "w-full px-4 py-2 border rounded-md shadow-sm focus:ring-2 focus:ring-yellow-400" })),
        react_1["default"].createElement("button", { type: "submit", className: "w-full bg-yellow-400 text-white py-2 rounded-md shadow-md hover:bg-yellow-500 transition-transform transform hover:scale-105" }, "\u0412\u043E\u0439\u0442\u0438")));
};
exports["default"] = LoginForm;
