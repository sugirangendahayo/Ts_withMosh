function calculateTax(income: number): (number | undefined) {
  if (income < 50_000)
    return income * 1.2
  return undefined
}

console.log(calculateTax(100_000)); // should return undefined