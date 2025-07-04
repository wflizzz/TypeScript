/*3. Кортежи и Enum
Задача 5: Логирование событий с кортежами
Создайте систему логирования, где каждое событие представляется кортежем [timestamp, level, message].
Требования:
•	timestamp — дата в формате Date.
•	level — enum LogLevel с уровнями (INFO, WARNING, ERROR).
•	message — строка.
•	Реализуйте функцию logEvent(event: LogEntry), которая принимает кортеж и выводит его в консоль.
Пример использования:
*/
var LogLevel;
(function (LogLevel) {
    LogLevel["INFO"] = "INFO";
    LogLevel["WARNING"] = "WARNING";
    LogLevel["ERROR"] = "ERROR";
})(LogLevel || (LogLevel = {}));
function logEvent(event) {
    console.log("[".concat(event[0].toISOString(), "] ").concat(event[1], ": ").concat(event[2]));
}
logEvent([new Date(), LogLevel.INFO, "с-ма запущена"]);
