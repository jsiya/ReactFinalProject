export interface Country {
    name: {
      common: string;
      official: string;
    };
    altSpellings: string[];
    area: number;
    capital: string[];
    capitalInfo: {
      latlng: [number, number];
    };
    car: {
      signs: string[];
      side: string;
    };
    cca2: string;
    cca3: string;
    ccn3: string;
    cioc: string;
    coatOfArms: {
      png: string;
      svg: string;
    };
    continents: string[];
    currencies: {
      [currencyCode: string]: {
        name: string;
        symbol: string;
      };
    };
    demonyms: {
      [languageCode: string]: {
        f: string;
        m: string;
      };
    };
    fifa: string;
    flag: string;
    flags: {
      png: string;
      svg: string;
      alt: string;
    };
    gini: {
      [year: number]: number;
    };
    idd: {
      root: string;
      suffixes: string[];
    };
    independent: boolean;
    landlocked: boolean;
    languages: {
      [languageCode: string]: string;
    };
    latlng: [number, number];
    maps: {
      googleMaps: string;
      openStreetMaps: string;

    };
    population: number;
    postalCode: {
      format: string;
      regex: string;
    };
    region: string;
    startOfWeek: string;
    status: string;
    subregion: string;
    timezones: string[];
    tld: string[];
    translations: {
      [languageCode: string]: {
        official: string;
        common: string;
      };
    };
    unMember: boolean;
}
  