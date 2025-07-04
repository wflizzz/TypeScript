"use strict";
exports.__esModule = true;
var react_router_dom_1 = require("react-router-dom");
var AuthPage_1 = require("../pages/AuthPage");
var ResetPasswordForm_1 = require("../components/ResetPasswordForm");
function App() {
    return (React.createElement(react_router_dom_1.BrowserRouter, null,
        React.createElement(react_router_dom_1.Routes, null,
            React.createElement(react_router_dom_1.Route, { path: "/sign-in", element: React.createElement(AuthPage_1["default"], null) }),
            React.createElement(react_router_dom_1.Route, { path: "/sign-up", element: React.createElement(AuthPage_1["default"], null) }),
            React.createElement(react_router_dom_1.Route, { path: "/reset-password", element: React.createElement(ResetPasswordForm_1["default"], null) }),
            React.createElement(react_router_dom_1.Route, { path: "*", element: React.createElement(AuthPage_1["default"], null) }))));
}
exports["default"] = App;
