function monthlySavings(arr, livingCost) {
  if (!Array.isArray(arr) || typeof livingCost !== "number") {
    return "Invalid Input!";
  }

  let totalPayments = 0;
  for (const payment of arr) {
    if (payment >= 3000) {
      const tax = payment - (payment * 20) / 100;
      totalPayments += tax;
    } else {
      totalPayments += payment;
    }
  }
  return totalPayments - livingCost < 0
    ? "earn more"
    : totalPayments - livingCost;
}

const inputs = monthlySavings(100, [900, 2700, 3400]);
// const inputs = monthlySavings([900,2700,3400],10000);
// const inputs = monthlySavings([1000,2000,2500], 5000);
// const inputs = monthlySavings([1000,2000,3000], 5400);
console.log(inputs);
