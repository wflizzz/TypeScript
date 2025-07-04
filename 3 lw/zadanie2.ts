/*Задача 2: Полиморфизм и интерфейсы
Реализуйте систему отчетов, где:
•	У каждого отчета (Report) есть title, content и метод generate().
•	Есть два типа отчетов:
o	HTMLReport (возвращает HTML-код)
o	JSONReport (возвращает JSON-объект)
•	Используйте интерфейс IReport.
*/
interface IReport {
    title: string;
    content: string;
    generate(): string;
}
class HTMLReports implements IReport {
    constructor(public title: string, public content: string) {}
    generate(): string {
        return `<h1>${this.title}</h1><p>${this.content}</p>`;
    }
}
class JSONReports implements IReport {
    constructor(public title: string, public content: string) {}

    generate(): string {
        return JSON.stringify({ title: this.title, content: this.content });
    }
}
const htmlReports = new HTMLReports("oтчет 1", "cодержимое отчета в HTML");
const jsonReports = new JSONReports("oтчет 2", "cодержимое отчета в JSON");

console.log(htmlReports.generate());
console.log(jsonReports.generate());
