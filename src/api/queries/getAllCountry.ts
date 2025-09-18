import type { PackageCountry } from "../types/PackageCountry"
import axios from "axios"

interface GetAllCountryResult {
    data: PackageCountry[];
}

export async function getAllCountry() {
    const response: GetAllCountryResult = await axios.get("https://restcountries.com/v3.1/all?fields=name,flags")
    
    return response.data.sort((a, b) => a.name.common.localeCompare(b.name.common))
}