const IS_NUMBER = +prompt('Введите значение', 100);

alert (typeof IS_NUMBER);

if (IS_NUMBER % 2 === 0) {
 console.log("Четное число")

} else if (IS_NUMBER % 2 !== 0) {

console.log("Нечетное число")

} else if ( isNaN(IS_NUMBER)) {

console.log("Не число")

} else
  
console.log("Кажется Вы ошиблись");