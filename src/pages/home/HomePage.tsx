import type { HomeLoaderResult } from "./homeLoader";
import { useEffect, useState } from "react";
import SearchBar from "../../components/SearchBar";
import ImageList from "../../components/ImageList";
import { useLoaderData } from "react-router-dom";
import searchCountry from "../../api/queries/searchCountry";
import type { PackageCountry } from "../../api/types/PackageCountry";

export default function HomePage() {
  const { countryPackages } = useLoaderData() as HomeLoaderResult;
  const [images, setImages] = useState<PackageCountry[]>(countryPackages);

  useEffect(() => {
    // Apply scrollY if exist
    const posY = sessionStorage.getItem("currentY");
    if (posY) {
      window.scrollTo(0, Number(posY));
    }

    const scrollEvent = () => {
      const scrolledTo = window.scrollY;
      sessionStorage.setItem("currentY", String(scrolledTo));
    };

    // Add scroll event
    window.addEventListener("scroll", scrollEvent);

    return () => {
      // Remove scroll event when go to another page
      window.removeEventListener("scroll", scrollEvent);
    };
  }, []);

  const handleSubmit = async (term: string) => {
    if (term === "") {
      setImages(countryPackages);
    } else {
      const result = await searchCountry(term);
      setImages(result);
    }
  };

  return (
    <div>
      <SearchBar onSubmit={handleSubmit} />
      <ImageList images={images} />
    </div>
  );
}
