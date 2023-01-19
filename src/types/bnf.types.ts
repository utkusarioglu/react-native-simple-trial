import { Bnf } from "brands-and-flavors";

export type CurrencySymbol = Bnf<string, "symbol">;
export type CurrencyName = Bnf<string, "currencyName">;
export type ExchangeRate = Bnf<number, "exchangeRate">;
export type DateEpoch = Bnf<number, "epochDate">;
export type DateString = Bnf<number, "dateString">;

export type { Millisecond } from "brands-and-flavors";
