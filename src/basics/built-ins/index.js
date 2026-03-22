function calculateTax(income) {
    if (income < 50000)
        return income * 1.2;
    return undefined;
}
console.log(calculateTax(30000)); // should return a number
console.log(calculateTax(100000)); // should return undefined
