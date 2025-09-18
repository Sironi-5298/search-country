export interface PackageCountry {
    flags: {
        alt: string;
        png: string;
    }
    name: {
        common: string;
        official: string;
    }
    region: string;
    subregion?: string;
    capital?: string[];
    languages?: {
        [key: string]: string;
    }
    maps: {
        googleMaps: string;
        openStreetMaps: string;
    }
    currencies?: {
        [key: string]: {
            name: string;
            symbol: string;
        }
    }
    latlng: number[]
}