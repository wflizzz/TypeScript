/*Задача 1: Система управления пользователями
Реализуйте систему пользователей, в которой есть три типа:
1.	Guest — может только просматривать контент.
2.	User — может оставлять комментарии.
3.	Admin — может удалять комментарии и управлять пользователями.
Требования:
•	Создайте абстрактный класс BaseUser с полями id, name и методом getRole(): string.
•	Создайте классы Guest, User, Admin, наследуемые от BaseUser.
•	Реализуйте метод getPermissions(), который возвращает список доступных действий для каждой роли.
*/
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var BaseUser = /** @class */ (function () {
    function BaseUser(id, name) {
        this.id = id;
        this.name = name;
    }
    return BaseUser;
}());
var Guest = /** @class */ (function (_super) {
    __extends(Guest, _super);
    function Guest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Guest.prototype.getRole = function () {
        return "Guest";
    };
    Guest.prototype.getPermissions = function () {
        return ["просмотр контента"];
    };
    return Guest;
}(BaseUser));
var User = /** @class */ (function (_super) {
    __extends(User, _super);
    function User() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    User.prototype.getRole = function () {
        return "User";
    };
    User.prototype.getPermissions = function () {
        return ["просмотр контента", "оставление комментариев"];
    };
    return User;
}(BaseUser));
var Admin = /** @class */ (function (_super) {
    __extends(Admin, _super);
    function Admin() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Admin.prototype.getRole = function () {
        return "Admin";
    };
    Admin.prototype.getPermissions = function () {
        return ["просмотр контента", "оставление комментариев", "удаление комментариев", "управление пользователями"];
    };
    return Admin;
}(BaseUser));
var guest = new Guest(1, "гость");
console.log("\u0440\u043E\u043B\u044C: ".concat(guest.getRole(), ", \u043F\u0440\u0430\u0432\u0430: ").concat(guest.getPermissions().join(", ")));
var user = new User(2, "пользователь");
console.log("\u0440\u043E\u043B\u044C: ".concat(user.getRole(), ", \u043F\u0440\u0430\u0432\u0430: ").concat(user.getPermissions().join(", ")));
var admin = new Admin(3, "администратор");
console.log("\u0440\u043E\u043B\u044C: ".concat(admin.getRole(), ", \u043F\u0440\u0430\u0432\u0430: ").concat(admin.getPermissions().join(", ")));
