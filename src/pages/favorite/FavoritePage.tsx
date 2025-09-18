import { useState, useEffect } from "react";
import ImageList from "../../components/ImageList";
import type { PackageCountry } from "../../api/types/PackageCountry";
import { Link } from "react-router-dom";

export default function FavoritePage() {
  const [favList, setFavList] = useState<PackageCountry[]>([]);

  useEffect(() => {
    const getFavData = localStorage.getItem("favList");
    if (getFavData) {
      const favData: PackageCountry[] = JSON.parse(getFavData || "");
      setFavList(favData);
    }
  }, []);

  const clearAllFavorites = () => {
    const confirmed = window.confirm("Are you sure you want to clear all favorites?")
    if (!confirmed) {
        return
    }
    setFavList([])
    localStorage.removeItem("favList")
  }

  return (
    <div>
      <div className="pt-10 pb-20">
        <Link
          to="/"
          className="border border-gray-300 rounded bg-gray-300 active:bg-gray-400 active:border-gray-400 font-bold px-5 py-1 ml-30"
        >
          Back
        </Link>
        <div className="flex flex-col">
            <h1 className="font-bold text-3xl flex items-center justify-center h-20">My Favorite List</h1>
            <button onClick={clearAllFavorites} className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded mt-4 w-auto mx-auto block">Clear All Favorites</button>
            <div className="pb-30 mt-5">
              <ImageList images={favList} />
            </div>
        </div>      
      </div>
    </div>
  );
}
