

function add(num1, num2){
    return (num1 + num2);
}
function subtract(num1, num2){
    return (num1 - num2);
}
function multiplication(num1, num2){
    return (num1 * num2);
}
function division(num1, num2){
    let div = num1 / num2;
    div = div.toFixed(2);
    return (div);
}

export default add;
export {subtract,multiplication,division};