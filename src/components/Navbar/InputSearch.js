"use client";

import { MagnifyingGlass } from "@phosphor-icons/react";
import { useRouter } from "next/navigation";
import { useRef } from "react";

const InputSearch = () => {
  const searchRef = useRef();
  const router = useRouter();

  const handleSearch = (e) => {
    if (e) e.preventDefault();
    const keyword = searchRef.current.value;
    router.push(`/search/${keyword}`);
  };

  const handleKeyPress = (e) => {
    if (e && e.key === "Enter") {
      handleSearch(e);
    }
  };

  return (
    <div className="relative">
      <input
        type="text"
        placeholder="Search anime..."
        className="p-2 rounded w-full"
        ref={searchRef}
        onKeyUp={handleKeyPress}
      />
      <button className="absolute top-1.5 end-1" onClick={handleSearch}>
        <MagnifyingGlass size={24} />
      </button>
    </div>
  );
};

export default InputSearch;
