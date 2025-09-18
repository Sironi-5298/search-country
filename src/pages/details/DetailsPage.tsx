import { useLoaderData } from "react-router-dom";
import type { DetailsCountryResult } from "./detailsLoader";
import Map from "../../components/Map";
import { Link } from "react-router-dom";
import { useEffect } from "react";

export default function DetailsPage() {
  const { detailsCountry } = useLoaderData() as DetailsCountryResult;

  const [details] = detailsCountry;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const renderedCapital = (details.capital || []).map((e) => {
    return <div key={e}>{e}</div>;
  });

  let content = "";
  let currencies = "";

  if (details.languages) {
    const [languageKey] = Object.keys(details.languages);
    content = details.languages[languageKey];
  }

  if (details.currencies) {
    const [currenciesKey] = Object.keys(details.currencies);
    currencies =
      details.currencies[currenciesKey].name +
      " (" +
      details.currencies[currenciesKey].symbol +
      ")";
  }

  return (
    <div className="bg-gray-100 min-h-screen p-8">
      <div className="mb-6">
        <Link
          to="/"
          className="inline-block bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold px-4 py-2 rounded-lg shadow transition"
        >
          Back
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
        <div className="flex justify-center items-center">
          <img
            src={details.flags.png}
            alt={details.flags.alt}
            className="w-80 h-48 rounded-md shadow-md"
          />
        </div>

        <div className="space-y-6">
          <div className="bg-white rounded-xl shadow p-5">
            <h1 className="text-2xl font-bold mb-2">Official Name</h1>
            <div className="text-gray-700">{details.name.official}</div>
          </div>

          <div className="bg-white rounded-xl shadow p-5">
            <h1 className="text-2xl font-bold mb-2">Capital</h1>
            <div className="text-gray-700">{renderedCapital}</div>
          </div>

          <div className="bg-white rounded-xl shadow p-5">
            <h1 className="text-2xl font-bold mb-2">Language</h1>
            <div className="text-gray-700">{content}</div>
          </div>

          <div className="bg-white rounded-xl shadow p-5">
            <h1 className="text-2xl font-bold mb-2">Region</h1>
            <div className="text-gray-700">{details.region}</div>
          </div>

          <div className="bg-white rounded-xl shadow p-5">
            <h1 className="text-2xl font-bold mb-2">Subregion</h1>
            <div className="text-gray-700">{details.subregion}</div>
          </div>

          <div className="bg-white rounded-xl shadow p-5">
            <h1 className="text-2xl font-bold mb-2">Currencies</h1>
            <div className="text-gray-700">{currencies}</div>
          </div>
        </div>
      </div>
      <div className="mt-10 bg-white rounded-xl shadow overflow-hidden">
        <div className="h-[500px]">
          <Map place={details} />
        </div>
      </div>
    </div>
  );
}
