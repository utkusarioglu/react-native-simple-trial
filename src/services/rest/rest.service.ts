import type { DateEpoch } from "_types/bnf.types";
import type { CurrencyApiExchangeRateReturn } from "_types/vendors/currency-api/currency-api.types";
import type { BaseCurrencies } from "./rest.service.types";

const CURRENCIES_LIST_API =
  "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies.json";

const RATES_API =
  "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/usd.json";

class RestService {
  public async currencyList() {
    return fetch(CURRENCIES_LIST_API)
      .then(data => data.json())
      .then(rawJson => {
        return Object.entries<string>(rawJson).map(([symbol, name]) => ({
          symbol,
          name,
        }));
      });
  }

  public async exchangeRates(baseCurrencySymbol: BaseCurrencies) {
    return fetch(RATES_API)
      .then(data => data.json())
      .then(rawJson => {
        const baseCurrencyLowercase = baseCurrencySymbol.toLowerCase();
        const rates = rawJson[
          baseCurrencyLowercase
        ] as CurrencyApiExchangeRateReturn["usd"];
        return {
          date: +new Date(rawJson.date) as DateEpoch,
          list: Object.entries(rates).map(([symbol, rate]) => ({
            symbol,
            rate,
          })),
        };
      });
  }
}

export default new RestService();
