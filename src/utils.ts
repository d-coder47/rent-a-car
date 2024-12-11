export const formatPrice = (amount: number, currency: string): string => {
  if (currency === "EUR") {
    return "€" + amount;
  }

  if (currency === "CVE") {
    return amount + " " + currency;
  }

  return amount.toString();
};
