import { isoCountries } from './mock';

export function getCountryName(countryCode: string): string {
  if (isoCountries[countryCode]) {
    return isoCountries[countryCode];
  }
  return countryCode;
}
