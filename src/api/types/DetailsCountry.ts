export interface DetailsCountry {
    flags: {
        alt: string;
        png: string;
    }
    name: {
        common: string;
        official: string;
    }
    region: string;
    capital: string[];
    languages: {
        [key: string]: string;
    }
    maps: {
        googleMaps: string;
        openStreetMaps: string;
    }
    currencies: {
        [key: string]: {
            name: string;
            symbol: string;
        }
    }
}