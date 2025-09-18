import type { PackageCountry } from "../api/types/PackageCountry";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

interface CreateCountryProps {
  createCountry: (name: string) => void;
}

interface DeleteCountryProps {
  deleteCountry: (name: string) => void;
}

function ImageShow({
  image,
  createCountry,
  deleteCountry,
  isAdded = false,
}: { image: PackageCountry } & CreateCountryProps &
  DeleteCountryProps & { isAdded: boolean }) {
  const [add, setAdd] = useState(false);
  useEffect(() => {
    setAdd(isAdded);
  }, [isAdded]);

  const handleAddClick = () => {
    let nameCountry = image.name.official;
    setAdd(true);
    createCountry(nameCountry);
  };

  const handleDeleteClick = () => {
    let nameCountry = image.name.official;
    setAdd(false);
    deleteCountry(nameCountry);
  };

  let content = (
    <button
      className="bg-indigo-600 text-white px-5 py-1 rounded-full text-sm hover:bg-indigo-700 transition hover:scale-105"
      onClick={handleAddClick}
    >
      + Add
    </button>
  );

  if (add) {
    content = (
      <button
        className="bg-green-500 text-white px-5 py-1 rounded-full text-sm hover:bg-green-600 transition hover:scale-105"
        onClick={handleDeleteClick}
      >
        ✓ Added
      </button>
    );
  }

  return (
    <div className="bg-white rounded-xl shadow-md hover:shadow-lg hover:scale-105 transition p-4 flex flex-col items-center">
      <Link to={`/country/${image.name.official}`}>
        <img
          src={image.flags.png}
          alt={image.flags.alt}
          className="w-60 h-40 rounded-md bg-gray-100 p-2 shadow-sm transform transition duration-300 hover:-translate-y-1"
        />
      </Link>

      <Link to={`/country/${image.name.official}`}>
        <h1 className="mt-3 text-lg font-semibold text-gray-700">
          {image.name.common}
        </h1>
      </Link>

      <div className="mt-2">{content}</div>
    </div>
  );
}

export default ImageShow;
