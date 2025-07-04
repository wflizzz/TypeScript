/*Задача 4: Дженерик-фабрика объектов
Создайте функцию createInstance<T>(cls: new (...args: any[]) => T, ...args: any[]): T,
которая принимает конструктор класса и аргументы, а затем создает новый объект.
*/
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
function createInstance(cls) {
    var args = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        args[_i - 1] = arguments[_i];
    }
    return new (cls.bind.apply(cls, __spreadArray([void 0], args, false)))();
}
var Person = /** @class */ (function () {
    function Person(name, age) {
        this.name = name;
        this.age = age;
    }
    Person.prototype.info = function () {
        return "".concat(this.name, ", \u0432\u043E\u0437\u0440\u0430\u0441\u0442 ").concat(this.age);
    };
    return Person;
}());
var person = createInstance(Person, "Alina", 19);
console.log(person.info());
