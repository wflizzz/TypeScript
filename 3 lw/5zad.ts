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

enum LogLevel {
    INFO = "INFO",
    WARNING = "WARNING",
    ERROR = "ERROR",
}

type LogEntry = [Date, LogLevel, string];

function logEvent(event: LogEntry): void {
    console.log(`[${event[0].toISOString()}] ${event[1]}: ${event[2]}`);
}

logEvent([new Date(), LogLevel.INFO, "с-ма запущена"]);
