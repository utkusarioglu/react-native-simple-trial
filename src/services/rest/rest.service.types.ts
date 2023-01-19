import type {
  CurrencySymbol,
  CurrencyName,
  ExchangeRate,
  DateEpoch,
  Millisecond,
} from "_types/bnf.types";

export type BaseCurrencies = "USD" | "EUR";

interface CurrencyListing {
  symbol: CurrencySymbol; // ex: USD
  name: CurrencyName; // ex: United States Dollar
}

export interface CurrencyListings {
  timestamp: Millisecond; // epoch
  list: CurrencyListing[];
}

interface Rate {
  symbol: CurrencySymbol;
  rate: ExchangeRate;
}

export type Rates = RestServiceRates & {
  timestamp: Millisecond;
};

interface RestServiceRates {
  date: DateEpoch;
  list: Rate[];
}
