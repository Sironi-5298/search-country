import type { PackageCountry } from "../api/types/PackageCountry";
import ImageShow from "./ImageShow";
import { useState, useEffect } from "react";
import searchCountry from "../api/queries/searchCountry";

function ImageList({ images }: { images: PackageCountry[] }) {
  const [favList, setFavList] = useState<PackageCountry[]>([]);

  useEffect(() => {
    const localStorageFav = localStorage.getItem("favList");
    if (localStorageFav) {
      const local = JSON.parse(localStorageFav);
      setFavList(local);
    }
  }, []);

  const createCountry = async (name: string) => {
    const [newCountry] = await searchCountry(name);
    const newArr = [...favList, newCountry];
    setFavList(newArr);
    localStorage.setItem("favList", JSON.stringify(newArr));
  };

  const deleteCountry = (name: string) => {
    const updatedBooks = favList.filter((c) => {
      return c.name.official !== name;
    });
    setFavList(updatedBooks);

    localStorage.setItem("favList", JSON.stringify(updatedBooks));
  };

  const favListName = favList.map((e) => e.name.common);

  const renderedImages = images.map((image) => {
    const isAdded = favListName.includes(image.name.common);

    return (
      <div key={image.name.common}>
        <ImageShow
          key={image.name.common}
          image={image}
          createCountry={createCountry}
          deleteCountry={deleteCountry}
          isAdded={isAdded}
        />
      </div>
    );
  });

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 p-4">
      {renderedImages}
    </div>
  );
}

export default ImageList;
