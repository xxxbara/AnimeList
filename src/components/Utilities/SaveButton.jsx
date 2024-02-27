"use client";
import { BookmarkSimple, CheckSquare } from "@phosphor-icons/react/dist/ssr";
import { useState } from "react";

const SaveButton = ({ anime_mal_id, user_email }) => {
  const [isCreated, setIsCreated] = useState(false);

  const handleCollection = async (event) => {
    const data = { anime_mal_id, user_email };
    const response = await fetch("/api/v1/collection", {
      method: "POST",
      body: JSON.stringify(data),
    });
    const collection = await response.json();
    if (collection.status === 200) {
      setIsCreated(true);
    }
  };

  return (
    <>
      <div>
        {isCreated ? (
          <button
            className="p-2.5 bg-color-primary text-color-dark rounded-3xl flex gap-1.5 justify-center items-center hover:bg-color-accent transition-all shadow-xl"
            disabled
          >
            <CheckSquare size={32} />
            Saved To Collection
          </button>
        ) : (
          <button
            onClick={handleCollection}
            className="p-2.5 bg-color-primary text-color-dark rounded-3xl flex gap-1.5 justify-center items-center hover:bg-color-accent transition-all shadow-xl"
          >
            <BookmarkSimple size={32} />
            Add To Collection
          </button>
        )}
      </div>
    </>
  );
};

export default SaveButton;
