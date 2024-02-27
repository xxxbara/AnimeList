"use client";

import React, { useState } from "react";

const SynopsisAnimeOverview = ({ anime }) => {
  const [showFullSynopsis, setShowFullSynopsis] = useState(false);

  const handleToggleSynopsis = () => {
    setShowFullSynopsis(!showFullSynopsis);
  };

  return (
    <>
      <h3>Overview:</h3>
      <p>
        {showFullSynopsis
          ? anime.synopsis
          : `${anime.synopsis.slice(0, 500)}...`}
      </p>
      <div
        onClick={handleToggleSynopsis}
        className="text-color-accent cursor-pointer underline"
      >
        {showFullSynopsis ? "Hide" : "Show more"}
      </div>
    </>
  );
};

export default SynopsisAnimeOverview;
