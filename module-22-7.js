
// 22-7 Simple Calculator To Call Function Inside A Function

function add(a, b){
    return a + b;
}
function subtraction(a, b){
    return a - b;
}
function multiplication(a, b){
    return a * b;
}
function divide(a, b){
    return a / b;
}

function calculator(a, b, operation){
    if(operation === 'add'){
        return add(a, b);
    }
    else if(operation === 'subtraction'){
        return subtraction(a, b);
    }
    else if(operation === 'multiplication'){
        return multiplication(a, b);
    }
    else if(operation === 'divide'){
        return devide(a, b);
    }
    else{
        return "Only 'add', 'subtraction', 'multiplication', 'devide' operations are allowed."
    }
}
const result = calculator(5, 4, 'add');
console.log(result);