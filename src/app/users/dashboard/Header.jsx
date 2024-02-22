"use client";

import { ArrowLeft } from "@phosphor-icons/react";
import { useRouter } from "next/navigation";

const Header = ({ title }) => {
  const router = useRouter();
  const handleBack = (e) => {
    e.preventDefault();
    router.back();
  };
  return (
    <div className="flex justify-between items-center">
      <button
        href="/users/dashboard"
        className=" text-color-dark px-2 rounded-sm bg-color-accent"
        onClick={handleBack}
      >
        <ArrowLeft size={32} />
      </button>
      <h3 className="text-2xl text-color-primary font-bold mb-4">{title}</h3>
    </div>
  );
};

export default Header;
