/*Задача 4: Дженерик-фабрика объектов
Создайте функцию createInstance<T>(cls: new (...args: any[]) => T, ...args: any[]): T, 
которая принимает конструктор класса и аргументы, а затем создает новый объект.
*/ 

function createInstance<T>(cls: new (...args: any[]) => T, ...args: any[]): T {
    return new cls(...args);
}

class Person {
    constructor(public name: string, public age: number) {}

    info() {
        return `${this.name}, возраст ${this.age}`;
    }
}

const person = createInstance(Person, "Alina", 19);
console.log(person.info()); 
