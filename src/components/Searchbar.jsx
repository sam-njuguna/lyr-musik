import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FiSearch } from "react-icons/fi";

const Searchbar = () => {
  const navigate = useNavigate();
  const [term, setTerm] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();

    navigate(`/search/${term}`);
  };
  return (
    <form
      onSubmit={handleSubmit}
      autoComplete="off"
      className="p-2  md:h-16 text-gray-200 focus-within:text-gray-400 fixed z-40 bg-[#0a0414] w-full"
    >
      <label htmlFor="search-field" className="sr-only">
        search all songs
      </label>
      <div className="flex flex-row justify-start items-center">
        <FiSearch className="w-5 h-5 ml-5" />
        <input
          name="search-field"
          autoComplete="off"
          id="search-field"
          className="flex-1 bg-transparent placeholder-gray-500 outline-none text-base text-white p-4"
          placeholder="Search"
          type="text"
          value={term}
          onChange={(e) => setTerm(e.target.value)}
        />
      </div>
    </form>
  );
};

export default Searchbar;
