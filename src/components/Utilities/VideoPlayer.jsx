"use client";

import { Play } from "@phosphor-icons/react";
import { useState } from "react";
import YouTube from "react-youtube";

const VideoPlayer = ({ youtubeId }) => {
  const [isOpen, setIsOpen] = useState(true);

  const handleVideoPlayer = () => {
    setIsOpen((prevState) => !prevState);
  };

  const options = {
    width: "300",
    height: "250",
  };

  const CloseButton = () => {
    return (
      <div className="fixed bottom-2 right-2">
        <button
          onClick={handleVideoPlayer}
          className="text-color-primary float-right bg-color-secondary px-3 mb-1"
        >
          X
        </button>
        <YouTube
          videoId={youtubeId}
          onReady={(event) => event.target.pauseVideo()}
          opts={options}
          onError={() => alert("The video is broken, please try another!")}
        />
      </div>
    );
  };

  const OpenButton = () => {
    return (
      <button
        onClick={handleVideoPlayer}
        className="fixed bottom-5 right-5 p-3 bg-color-primary text-color-dark rounded-full flex gap-2 justify-center items-center hover:bg-color-accent transition-all shadow-xl"
      >
        <Play size={22} />
        Watch Trailer
      </button>
    );
  };

  return isOpen ? <CloseButton /> : <OpenButton />;
};

export default VideoPlayer;
