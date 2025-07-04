/*Задача 6: Тип безопасных API-ответов
Реализуйте enum HttpStatus с кодами 200, 400, 401, 500 и тип ApiResponse<T>, содержащий кортеж [status: HttpStatus, data: T | null, error?: string].
Требования:
•	success<T>(data: T): ApiResponse<T> — создает успешный ответ (200).
•	error(message: string, status: HttpStatus): ApiResponse<null> — создает ошибочный ответ.
*/
var HttpStatus;
(function (HttpStatus) {
    HttpStatus[HttpStatus["OK"] = 200] = "OK";
    HttpStatus[HttpStatus["BAD_REQUEST"] = 400] = "BAD_REQUEST";
    HttpStatus[HttpStatus["UNAUTHORIZED"] = 401] = "UNAUTHORIZED";
    HttpStatus[HttpStatus["SERVER_ERROR"] = 500] = "SERVER_ERROR";
})(HttpStatus || (HttpStatus = {}));
function success(data) {
    return [HttpStatus.OK, data];
}
function error(message, status) {
    return [status, null, message];
}
console.log(success("Данные загружены"));
console.log(error("Ошибка запроса", HttpStatus.BAD_REQUEST));
