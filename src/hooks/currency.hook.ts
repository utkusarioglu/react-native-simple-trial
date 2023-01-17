import { useState, useEffect } from "react";

const CURRENCIES_LIST_API =
  "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies.json";

interface CurrencyListing {
  symbol: string; // ex: USD
  name: string; // ex: United States Dollar
}

interface CurrencyListings {
  timestamp: number; // epoch
  list: CurrencyListing[];
}

const INITIAL_CURRENCY_LISTING = {
  timestamp: 0,
  list: [],
};

export function useCurrencyListings() {
  const [currencies, setCurrencies] = useState<CurrencyListings>(
    INITIAL_CURRENCY_LISTING,
  );
  useEffect(() => {
    fetch(CURRENCIES_LIST_API)
      .then(data => data.json())
      .then(json => {
        const list = Object.entries<string>(json)
          .map(([key, value]) => ({
            symbol: key!,
            name: value!,
          }))
          .slice(0, 30);
        const timestamp = Date.now();
        setCurrencies({ timestamp, list });
      });
  }, []);
  return currencies;
}
