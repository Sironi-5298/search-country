import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="w-full bg-white shadow-md mb-6">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo / Title */}
        <Link
          to="/"
          className="text-2xl font-bold text-indigo-600 hover:text-indigo-700 transition"
        >
          🌍 Country Explorer
        </Link>

        {/* Nav Links */}
        <div className="flex items-center space-x-6">
          <Link
            to="/"
            className="text-gray-600 hover:text-indigo-600 transition"
          >
            Home
          </Link>
          <Link
            to="/favorite"
            className="text-gray-600 hover:text-indigo-600 transition"
          >
            My Favorite
          </Link>
        </div>
      </div>
    </div>
  );
}
