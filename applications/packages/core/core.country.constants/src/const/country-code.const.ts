import { CountryName } from "./country-name.const";

export const CountryCode = Object.freeze({
    [CountryName.Hungary]: "HU",
    [CountryName.Malta]: "MT",
    [CountryName.India]: "IN",
    [CountryName.Pakistan]: "PK",
    [CountryName.UnitedStates]: "US",
    [CountryName.Germany]: "DE",
    [CountryName.France]: "FR",
    [CountryName.Austria]: "AT",
    [CountryName.Romania]: "RO",
    [CountryName.Croatia]: "HR",
    [CountryName.Italy]: "IT"
});

export type CountryCode = typeof CountryCode[CountryName];
