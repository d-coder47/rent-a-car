import { ICar } from "../../interfaces";

export const handleGridSize = (vehicles: ICar[], defaultSize: number) => {
  let size = defaultSize;

  const length = vehicles.length;

  if (length === 1) {
    size = 12;
  }

  if (length === 2) {
    size = 6;
  }

  if (length === 3) {
    size = 4;
  }

  return size;
};

export const parsePhoneNumber = (phone: string) => {
  // Remove spaces and special characters
  const cleaned = phone.replace(/\D/g, "");

  // Extract country code and subscriber number
  const countryCode = cleaned.slice(0, 3);
  const subscriberNumber = cleaned.slice(3);

  return {
    cc: countryCode,
    subscriber: subscriberNumber,
  };
};

async function getLiveEurToCveRate() {
  try {
    const exchangeApiUrl = import.meta.env.VITE_EXCHANGE_RATE_API;

    const response = await fetch(exchangeApiUrl);
    const data = await response.json();
    return data.rates.CVE; // Get CVE rate from API response
  } catch (error) {
    console.error("Error fetching exchange rate:", error);
    return 110.265; // Fallback to fixed rate of EUR to CVE
  }
}

export const convertEurToCve = (amountInEur: number) => {
  // const exchangeRate = await getLiveEurToCveRate();
  const exchangeRate = 110.265; // Fixed rate of EUR to CVE
  return amountInEur * exchangeRate;
};
