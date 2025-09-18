import { useState } from "react";
import { VscSearch } from "react-icons/vsc";

interface SearchBarProps {
  onSubmit: (term: string) => void;
}

function SearchBar({ onSubmit }: SearchBarProps) {
  const [term, setTerm] = useState("");

  const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSubmit(term);
    setTerm("");
  };

  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTerm(event.target.value);
    onSubmit(event.target.value);
  };

  return (
    <form
      onSubmit={handleFormSubmit}
      className="flex justify-center mb-6 w-full px-4 sm:px-8 md:px-16 lg:px-24"
    >
      <div className="flex w-full max-w-3xl">
        <div className="relative flex-1">
          <input
            value={term}
            onChange={handleOnChange}
            placeholder="Search"
            className="w-full pl-10 pr-4 py-2 border border-gray-300 bg-white rounded-l-full shadow-sm focus:ring-2 focus:ring-indigo-400 focus:outline-none"
          />
          <span className="absolute inset-y-0 flex items-center pl-3"><VscSearch className="h-5 w-5 text-gray-500"/></span>
        </div>

        <button className="px-5 py-2 bg-indigo-600 text-white font-medium rounded-r-full shadow hover:bg-indigo-700 transition">
          Submit
        </button>
      </div>
    </form>
  );
}

export default SearchBar;
