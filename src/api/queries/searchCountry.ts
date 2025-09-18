import type { PackageCountry } from "../types/PackageCountry";
import axios from "axios";

interface GetCountryResult {
  data: PackageCountry[];
}

const searchCountry = async (term: string): Promise<PackageCountry[]> => {
  try {
    const response: GetCountryResult = await axios.get(
      `https://restcountries.com/v3.1/name/${term}`
    ); 

    return response.data;
  } catch (error) {
    console.log(error);
    return [];
  }
};

export default searchCountry;
