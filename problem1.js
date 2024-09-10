function calculateMoney(ticketSale) {
  if (ticketSale < 0) {
    return "Need a positive value";
  }
  const perTicketPrice = 120;
  const dailySecurityCost = 500;
  const stuffNumber = 8;
  const perHeadLunchCost = 50;

  const dailyTotalLunchCost = stuffNumber * perHeadLunchCost;
  const dailyIncome =
    perTicketPrice * ticketSale - (dailySecurityCost + dailyTotalLunchCost);
  return dailyIncome <= 0 ? `No income ${dailyIncome}` : dailyIncome;
}
const dailySoldTicket = calculateMoney(10);
console.log(dailySoldTicket);
