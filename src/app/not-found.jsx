"use client";

import { ArrowLeft } from "@phosphor-icons/react";
import { FileSearch } from "@phosphor-icons/react/dist/ssr";
import { useRouter } from "next/navigation";

const Page = () => {
  const router = useRouter();

  return (
    <div className="min-h-screen max-w-xl mx-auto flex justify-center items-center">
      <div className="flex justify-center items-center gap-3 flex-col">
        <FileSearch size={42} className="text-color-primary" />
        <h1 className="font-bold text-4xl text-color-primary">NOT FOUND</h1>
        <button
          onClick={() => router.back()}
          className="hover:text-color-primary text-color-accent transition-all flex items-center gap-1 underline"
        >
          <ArrowLeft className="mt-0.5" />
          Back
        </button>
      </div>
    </div>
  );
};

export default Page;
