"use client";

import { MagnifyingGlass } from "@phosphor-icons/react";
import { useRouter } from "next/navigation";
import { useRef } from "react";

const InputSearch = () => {
  const searchRef = useRef();
  const router = useRouter();

  const handleSearch = (e) => {
    const keyword = searchRef.current.value.trim();

    if (!keyword) return;

    if (e.key === "Enter" || e.type === "click") {
      e.preventDefault();
      router.push(`/search/${keyword}`);
    }
  };

  return (
    <div className="relative">
      <input
        type="text"
        placeholder="Search anime..."
        className="p-2 rounded w-full"
        ref={searchRef}
        onKeyDown={handleSearch}
      />
      <button className="absolute top-1.5 end-1" onClick={handleSearch}>
        <MagnifyingGlass size={24} />
      </button>
    </div>
  );
};

export default InputSearch;
