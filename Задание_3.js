const SOME_VALUE = prompt("Введите значение");
function reverse(SOME_VALUE){
    return SOME_VALUE.split("").reverse().join("");
}
console.log(reverse(SOME_VALUE));

или

function reverseString(str) {    
    let newString = "";     

     for (var i = str.length - 1; i >= 0; i--) {        
         newString += str[i]   
        }   

     return newString; 
} 

console.log(reverseString('hello')); 
