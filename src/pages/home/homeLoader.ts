import type { PackageCountry } from "../../api/types/PackageCountry";
import { getAllCountry } from "../../api/queries/getAllCountry";

export interface HomeLoaderResult {
    countryPackages: PackageCountry[]
}

export async function homeLoader() {
    const countryPackages = await getAllCountry()
    
    return {
        countryPackages,
    }
}