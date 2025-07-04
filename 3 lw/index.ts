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

abstract class BaseUsers {
    constructor(protected id: number, protected name: string) {}
    abstract getRole(): string;
    abstract getPermissions(): string[];
}
class Guests extends BaseUsers {
    getRole(): string {
        return "Guest";
    }
    getPermissions(): string[] {
        return ["просмотр контента"];
    }
}
class Users extends BaseUsers {
    getRole(): string {
        return "User";
    }
    getPermissions(): string[] {
        return ["просмотр контента", "оставление комментариев"];
    }
}
class Admins extends BaseUsers {
    getRole(): string {
        return "Admin";
    }
    getPermissions(): string[] {
        return ["просмотр контента", "оставление комментариев", "удаление комментариев", "управление пользователями"];
    }
}
const guests = new Guests(1, "гость");
console.log(`роль: ${guests.getRole()}, права: ${guests.getPermissions().join(", ")}`);

const users = new Users(2, "пользователь");
console.log(`роль: ${users.getRole()}, права: ${users.getPermissions().join(", ")}`);

const admins = new Admins(3, "администратор");
console.log(`роль: ${admins.getRole()}, права: ${admins.getPermissions().join(", ")}`);

