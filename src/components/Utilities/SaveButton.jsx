"use client"

import { BookmarkSimple } from "@phosphor-icons/react/dist/ssr";

const SaveButton = () => {
  return (
    <>
      <button className=" p-2.5 bg-color-primary text-color-dark rounded-3xl flex gap-1.5 justify-center items-center hover:bg-color-accent transition-all shadow-xl">
        <BookmarkSimple size={32} />
        Save
      </button>
    </>
  );
};

export default SaveButton;
