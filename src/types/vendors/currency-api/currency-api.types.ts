import type {
  DateString,
  ExchangeRate,
  CurrencySymbol,
} from "_types/bnf.types";

export interface CurrencyApiExchangeRateReturn {
  date: DateString;
  usd: {
    [c: CurrencySymbol]: ExchangeRate;
  };
}
