//zadanie 2

let Calculator = function() {
    this.operations = []
}

Calculator.prototype.add = function(num1, num2) {
    const result = num1 + num2;
    this.operations.push(`added ${num1} to ${num2} got ${result}`);

    return result;
}

Calculator.prototype.multiply = function(num1, num2) {
    const result = num1 * num2;
    this.operations.push(`multiplied ${num1} with ${num2} got ${result}`);

    return result;
}

Calculator.prototype.subtract = function(num1, num2) {
    const result = num1 - num2;
    this.operations.push(`subtracted ${num1} from ${num2} got ${result}`);

    return result;
}

Calculator.prototype.divide = function(num1, num2) {
    if (num2 === 0) {
        throw "Cannot divide by 0!"
    }
    const result = num1 / num2;
    this.operations.push(`divided ${num1} by ${num2} got ${result}`);

    return result;
}

Calculator.prototype.printOperations = function() {
    console.log(this.operations);
}

Calculator.prototype.clearOperations = function() {
    this.operations = [];
}

const calc = new Calculator();
calc.add(1, 2);
calc.subtract(1, 4)
calc.printOperations();
calc.clearOperations();
calc.multiply(6, 7);
calc.divide(3, -2);
calc.printOperations();
calc.divide(1, 0);