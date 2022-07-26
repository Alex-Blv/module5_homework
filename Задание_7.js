let arr = [20, 7, .4, null, 6, .8, 0, 53, undefined];
let zero = 0;
let digit = 0;
let even = 0;
let odd = 0;

for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === "number" || !isNaN(arr[i])) {
        digit += 1;
        if (arr[i] === 0) {
            zero += 1;
        } else if (arr[i] % 2 === 0) {
            even += 1;
        } else {
            odd += 1;
        }
    }
}

console.log(`В массиве: ${digit} цифр, ${zero} нулей, ${even} чётных, ${odd} нечётных элементов!`);