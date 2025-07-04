/*Напишите функцию, которая принимает массив из 10 целых чисел (от 0 до 9) 
/и возвращает строку этих чисел в виде номера телефона. Формат номера 
телефона должен соответствовать "(xxx) xxx-xxxx".
Пример:
createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0])
// => returns "(123) 456-7890"*/

function formatPhoneNumber(numbers: number[]): string {  
    if (numbers.length !== 10) {
        throw new Error("10 чисел должно быть");
    }
    return `(${numbers[0]}${numbers[1]}${numbers[2]}) ${numbers[3]}${numbers[4]}${numbers[5]}-${numbers[6]}${numbers[7]}${numbers[8]}${numbers[9]}`;
    /*const formattedNumber = `(${numbers.slice(0, 3).join('')}) ${numbers.slice(3, 6).join('')}-${numbers.slice(6, 10).join('')}`;*/
}

console.log(formatPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]));

/*function createPhoneNumber(numbers: number[]): string {
    if (numbers.length !== 10) {
        throw new Error("массив должен иметь ровно 10 цифр");
    }
    
    const formattedNumber = `(${numbers.slice(0, 3).join('')}) ${numbers.slice(3, 6).join('')}-${numbers.slice(6, 10).join('')}`;
    return formattedNumber;
}*/
/*Если перечислить все натуральные числа до 10, кратные 3 или 5, то получим 3, 5, 6 и 9. Сумма этих чисел равна 23.
Завершите метод так, чтобы он возвращал сумму всех чисел, кратных 3 или 5, меньше переданного числа. 
Кроме того, если число отрицательное, верните 0.

Примечание. Если число кратно и 3, и 5, считайте его только один раз.
 class Challenge {
 static solution(number: number) {
    //... 
   }
 }*/

   class Challenges {
    static solution(number: number): number {
        if(number<0) {
            return 0;
        }
        let sum=0;
        for (let i=0; i<number; i++){
            if(i%3===0||i%5===0){
                sum += i;
            }
        }
        return sum;
    }
}
console.log(Challenges.solution(10));
console.log(Challenges.solution(-3));

/*Дан целочисленный массив nums, поверните массив вправо на k шагов, где k неотрицательно.

 Пример:
 Ввод: nums = [1,2,3,4,5,6,7], k = 3
 Вывод: [5,6,7,1,2,3,4]
 Объяснение:
 повернуть на 1 шаг вправо: [7,1,2,3,4,5,6]
 повернуть на 2 шага вправо: [6,7,1,2,3,4,5]
 повернуть на 3 шага вправо: [5,6,7,1,2,3,4]*/

 function arrays(num: number[], q: number): void {
    const n = num.length;
    q=q%n;

    const lastPart = num.slice(-q);
    const firstPart = num.slice(0, n-q);
    num.length = 0;
    num.push(...lastPart, ...firstPart);
 }
 let num = [1,2,3,4,5,6,7];
 let q = 3;
 arrays(num,q);
 console.log(num);

 /*Есть два отсортированных массива nums1 и nums2 размера m и n соответственно, вернуть 
 медиану двух отсортированных массивов. Медиана число 
 (два числа) находящееся в середине массива.

 Пример 1:
 Ввод: nums1 = [1,3], nums2 = [2]
 Вывод: 2.00000
 Объяснение: 
 объединение массивов = [1,2,3], медиана - 2.

 Пример 2:
 Ввод: nums1 = [1,2], nums2 = [3,4]
 Вывод: 2.50000
 Объяснение: объединение массивов = [1,2,3,4], медиана (2 + 3) / 2 = 2.5.
 */

 function findMedians(nums1: number[], nums2: number[]): number{
    const twoArray = [...nums1, ...nums2];
    twoArray.sort((a,b)=> a-b);

    const n = twoArray.length; 
    if(n%2 === 1){
        return twoArray[Math.floor(n/2)];
    }
    else {
        const mediana = n/2;
        return (twoArray[mediana-1]+twoArray[mediana])/2;
    }
 }
console.log(findMedians([1,3], [2]));
console.log(findMedians([3,4], [5,6]));

