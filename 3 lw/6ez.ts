/*Задача 6: Тип безопасных API-ответов
Реализуйте enum HttpStatus с кодами 200, 400, 401, 500 и тип ApiResponse<T>, содержащий кортеж [status: HttpStatus, data: T | null, error?: string].
Требования:
•	success<T>(data: T): ApiResponse<T> — создает успешный ответ (200).
•	error(message: string, status: HttpStatus): ApiResponse<null> — создает ошибочный ответ.
*/
enum HttpStatus {
    OK = 200,
    BAD_REQUEST = 400,
    UNAUTHORIZED = 401,
    SERVER_ERROR = 500,
}

type ApiResponse<T> = [HttpStatus, T | null, string?];

function success<T>(data: T): ApiResponse<T> {
    return [HttpStatus.OK, data];
}

function error(message: string, status: HttpStatus): ApiResponse<null> {
    return [status, null, message];
}

console.log(success("Данные загружены"));
console.log(error("Ошибка запроса", HttpStatus.BAD_REQUEST));
