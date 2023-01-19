import { useState, useEffect } from "react";
import restService from "_services/rest/rest.service";
import type {
  BaseCurrencies,
  CurrencyListings,
  Rates,
} from "_services/rest/rest.service.types";
import type { DateEpoch } from "_types/bnf.types";

const INITIAL_CURRENCY_LISTING = {
  timestamp: 0,
  list: [],
};

const INITIAL_RATES_LISTING: Rates = {
  timestamp: 0,
  date: "" as unknown as DateEpoch,
  list: [],
};

/**
 * Produces the list of available currencies using the rest service
 * @returns a react component compatible list of currency listings
 */
export function useCurrencyListings() {
  const [currencies, setCurrencies] = useState<CurrencyListings>(
    INITIAL_CURRENCY_LISTING,
  );
  useEffect(() => {
    restService.currencyList().then(json => {
      const list = json.slice(0, 30);
      const timestamp = Date.now();
      setCurrencies({ timestamp, list });
    });
  }, []);
  return currencies;
}

/**
 * Retrieves the latest exchange rates using the rest service
 * @param baseCurrency a currency symbol such as "usd", "eur"
 * @returns updated exchange rate in a format that the react
 * component can use
 */
export function useExchangeRates(baseCurrency: BaseCurrencies) {
  const [exchangeRates, setExchangeRates] = useState<Rates>(
    INITIAL_RATES_LISTING,
  );
  useEffect(() => {
    const timestamp = Date.now();
    restService
      .exchangeRates(baseCurrency)
      .then(content => ({
        timestamp,
        date: content.date,
        list: content.list.slice(0, 30),
      }))
      .then(rates => setExchangeRates(rates));
  }, [baseCurrency]);
  return exchangeRates;
}
