const X = ["Bla bla bla", true, 725, 3 * undefined];
X.forEach((elem) => {
if(typeof(elem) ===  'string' || 'boolean' || 'number'){
    console.log(`X - ${typeof(elem)}`)
} else if (isNaN(elem)) {
    console.log('Тип X не определен')
}
}); 