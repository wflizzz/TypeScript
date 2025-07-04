/*2. Дженерики (Generics)
Задача 3: Обобщенный кеш данных
Создайте класс Cache<T>, который позволяет хранить данные в кеше на определенное время.
Требования:
•	add(key: string, value: T, ttl: number) — добавляет элемент с временем жизни ttl (в мс).
•	get(key: string): T | null — возвращает значение или null, если время истекло.
•	clearExpired() — очищает просроченные элементы.*/
var MyCache = /** @class */ (function () {
    function MyCache() {
        this.storage = new Map();
    }
    MyCache.prototype.add = function (key, value, ttl) {
        var expires = Date.now() + ttl;
        this.storage.set(key, { value: value, expires: expires });
    };
    MyCache.prototype.get = function (key) {
        var item = this.storage.get(key);
        if (!item || item.expires < Date.now()) {
            this.storage.delete(key);
            return null;
        }
        return item.value;
    };
    MyCache.prototype.clearExpired = function () {
        var _this = this;
        var now = Date.now();
        this.storage.forEach(function (item, key) {
            if (item.expires < now) {
                _this.storage.delete(key);
            }
        });
    };
    return MyCache;
}());
var cache = new MyCache();
cache.add("key1", 42, 5000);
setTimeout(function () { return console.log(cache.get("key1")); }, 3000);
setTimeout(function () { return console.log(cache.get("key1")); }, 6000);
