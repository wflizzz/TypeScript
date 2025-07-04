"use strict";
exports.__esModule = true;
var react_1 = require("react");
var react_router_dom_1 = require("react-router-dom");
var _____png_1 = require("../assets/\u041B\u041E\u0413\u041E.png");
var catr_icon_png_1 = require("../assets/catr-icon.png");
var search_icon_png_1 = require("../assets/search-icon.png");
var Header = function (_a) {
    var toggleTheme = _a.toggleTheme, isDarkMode = _a.isDarkMode, isLoggedIn = _a.isLoggedIn, userAvatar = _a.userAvatar;
    var _b = react_1.useState(false), isContactsOpen = _b[0], setIsContactsOpen = _b[1];
    return (React.createElement("header", { className: "bg-[#414D56] " + (isDarkMode ? "dark:bg-gray-800" : "bg-[#414D56]") + " shadow-md" },
        React.createElement("div", { className: "container mx-auto flex justify-between items-center py-4 px-6" },
            React.createElement("div", { className: "flex items-center" },
                React.createElement("img", { src: _____png_1["default"], alt: "\u041B\u043E\u0433\u043E\u0442\u0438\u043F", className: "h-19 w-auto" })),
            React.createElement("nav", { className: "flex space-x-12 relative" },
                React.createElement(react_router_dom_1.Link, { to: "/", className: "text-white dark:text-gray-300 border-b-2 border-transparent hover:border-white dark:hover:border-gray-300 pb-1 transition" }, "\u0413\u043B\u0430\u0432\u043D\u0430\u044F"),
                React.createElement(react_router_dom_1.Link, { to: "/catalog", className: "text-white dark:text-gray-300 border-b-2 border-transparent hover:border-white dark:hover:border-gray-300 pb-1 transition" }, "\u041A\u0430\u0442\u0430\u043B\u043E\u0433"),
                React.createElement("a", { href: "#", className: "text-white dark:text-gray-300 border-b-2 border-transparent hover:border-white dark:hover:border-gray-300 pb-1 transition" }, "\u041D\u0430\u0448\u0438 \u0440\u0430\u0431\u043E\u0442\u044B"),
                React.createElement("div", { className: "relative" },
                    React.createElement("button", { onClick: function () { return setIsContactsOpen(!isContactsOpen); }, className: "text-white dark:text-gray-300 border-b-2 border-transparent hover:border-white dark:hover:border-gray-300 pb-1 transition focus:outline-none" }, "\u041A\u043E\u043D\u0442\u0430\u043A\u0442\u044B"),
                    isContactsOpen && (React.createElement("div", { className: "absolute top-8 left-0 bg-white dark:bg-gray-700 text-black dark:text-white rounded-lg shadow-lg w-72 p-5 z-10 transition-transform transform scale-95 animate-fade-in" },
                        React.createElement("h3", { className: "text-lg font-semibold mb-4 text-[#414D56] dark:text-yellow-400" }, "\u0421\u0432\u044F\u0436\u0438\u0442\u0435\u0441\u044C \u0441 \u043D\u0430\u043C\u0438:"),
                        React.createElement("div", { className: "flex items-center mb-3" },
                            React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: "1.5", stroke: "currentColor", className: "w-6 h-6 mr-3 text-blue-500" },
                                React.createElement("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M3.75 7.5l8.25 6.825L20.25 7.5M3.75 16.5h16.5" })),
                            React.createElement("p", { className: "text-sm" }, "E-mail: info@typographi.by")),
                        React.createElement("div", { className: "flex items-center mb-3" },
                            React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: "1.5", stroke: "currentColor", className: "w-6 h-6 mr-3 text-green-500" },
                                React.createElement("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M3.75 9.75l16.5-4.5M12 19.5v-6" })),
                            React.createElement("p", { className: "text-sm" }, "\u0422\u0435\u043B\u0435\u0444\u043E\u043D: +375 (29) 123-45-67")),
                        React.createElement("div", { className: "flex items-center" },
                            React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: "1.5", stroke: "currentColor", className: "w-6 h-6 mr-3 text-red-500" },
                                React.createElement("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M7.5 3.75h9" }),
                                React.createElement("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M3.75 19.5l16.5-4.5M7.5 21.75V3.75" })),
                            React.createElement("p", { className: "text-sm" }, "\u0410\u0434\u0440\u0435\u0441: \u041C\u0438\u043D\u0441\u043A, \u0443\u043B. \u0421\u0442\u0430\u043D\u0438\u0441\u043B\u0430\u0432\u0441\u043A\u043E\u0433\u043E, \u0434. 19")))))),
            React.createElement("div", { className: "flex items-center space-x-4" },
                React.createElement("div", { className: "relative" },
                    React.createElement("input", { type: "text", placeholder: "\u041F\u043E\u0438\u0441\u043A...", className: "w-[300px] border rounded-full pl-10 py-2 pr-4 focus:outline-none focus:ring " + (isDarkMode
                            ? "bg-gray-700 text-gray-300 border-gray-600 focus:ring-gray-500"
                            : "bg-white text-gray-700 border-gray-300 focus:ring-blue-300") }),
                    React.createElement("img", { src: search_icon_png_1["default"], alt: "\u041F\u043E\u0438\u0441\u043A", className: "absolute left-3 top-2.5 w-5 h-5 " + (isDarkMode ? "text-gray-400" : "text-gray-500") })),
                React.createElement("div", null,
                    React.createElement("img", { src: catr_icon_png_1["default"], alt: "\u041A\u043E\u0440\u0437\u0438\u043D\u0430", className: "w-6 h-6 cursor-pointer" })),
                isLoggedIn ? (React.createElement(react_router_dom_1.Link, { to: "/profile" },
                    React.createElement("img", { src: userAvatar || "https://via.placeholder.com/40", alt: "\u0410\u0432\u0430\u0442\u0430\u0440 \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044F", className: "w-10 h-10 rounded-full border-2 border-gray-300 cursor-pointer" }))) : (React.createElement(react_router_dom_1.Link, { to: "/auth", className: "bg-white dark:bg-gray-700 text-[#414D56] dark:text-yellow-400 px-9 py-1 rounded hover:bg-gray-400 dark:hover:bg-gray-600" }, "\u0412\u0445\u043E\u0434")),
                React.createElement("button", { onClick: toggleTheme, className: "bg-yellow-400 text-black px-4 py-2 rounded hover:bg-yellow-500 dark:bg-gray-700 dark:text-yellow-400" }, isDarkMode ? "Светлая тема" : "Тёмная тема")))));
};
exports["default"] = Header;
