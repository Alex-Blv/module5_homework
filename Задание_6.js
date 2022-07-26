let fruits = ['Apple', 'Cherry', 'Strawberry', 'Banana', 'Orange'];

function GetTheSame(array) {
    for(var i = 0; i < array.length; i++) {
        if(array[i] !== array[i+1]) {
            return false;
        }
    }
    return true;
}

console.log(GetTheSame(fruits));
