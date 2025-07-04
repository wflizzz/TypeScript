/*2. Дженерики (Generics)
Задача 3: Обобщенный кеш данных
Создайте класс Cache<T>, который позволяет хранить данные в кеше на определенное время.
Требования:
•	add(key: string, value: T, ttl: number) — добавляет элемент с временем жизни ttl (в мс).
•	get(key: string): T | null — возвращает значение или null, если время истекло.
•	clearExpired() — очищает просроченные элементы.
приватное хранилище на основе мепа*/ 

class MyCache<T> {
    private storage: Map<string, { value: T; expires: number }> = new Map();

    add(key: string, value: T, ttl: number): void {
        const expires = Date.now() + ttl;
        this.storage.set(key, { value, expires });
    }

    get(key: string): T | null {
        const item = this.storage.get(key);
        if (!item || item.expires < Date.now()) {
            this.storage.delete(key);
            return null;
        }
        return item.value;
    }

    clearExpired(): void {
        const now = Date.now();
        this.storage.forEach((item, key) => {
            if (item.expires < now) {
                this.storage.delete(key);
            }
        });
    }
}
const cache = new MyCache<number>();
cache.add("key1", 42, 5000);
setTimeout(() => console.log(cache.get("key1")), 3000);
setTimeout(() => console.log(cache.get("key1")), 6000);

