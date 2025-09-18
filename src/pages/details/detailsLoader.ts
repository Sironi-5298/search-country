import searchCountry from "../../api/queries/searchCountry";
import type { Params } from "react-router-dom";
import type { PackageCountry } from "../../api/types/PackageCountry";

interface LoaderArgs {
    params: Params;
}

export interface DetailsCountryResult {
    detailsCountry: PackageCountry[]
}

export async function detailsLoader({ params }: LoaderArgs): Promise<DetailsCountryResult> {
    const { name } = params as { name: string }

    const detailsCountry = await searchCountry(name)
    
    return {
        detailsCountry,
    }
}