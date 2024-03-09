"use client";

import { PaperPlaneRight } from "@phosphor-icons/react/dist/ssr";
import { useRouter } from "next/navigation";
import { useState } from "react";

const CommentInput = ({ anime_mal_id, user_email, username, anime_title }) => {
  const [comment, setComment] = useState("");
  const [isCreated, setIsCreated] = useState(false);

  const router = useRouter();

  const handleInput = (event) => {
    setComment(event.target.value);
  };

  const handlePostComment = async (event) => {
    event.preventDefault();
    const data = { user_email, anime_mal_id, comment, username, anime_title };
    const response = await fetch("/api/v1/comment", {
      method: "POST",
      body: JSON.stringify(data),
    });
    const postComment = await response.json();
    if (postComment.status === 200) {
      setIsCreated(true);
      setComment("");
      router.refresh();
    }
    return;
  };

  return (
    <>
      <div>
        {isCreated && <p className="text-color-primary">Comment added...</p>}
        <div className="flex :flex-col gap-2 text-color-dark">
          <input
            type="text"
            onChange={handleInput}
            value={comment}
            className="w-full rounded-md p-4"
            placeholder="add a comment..."
          />
          <button
            onClick={handlePostComment}
            className="w-52 py-2 px-3 bg-color-accent flex justify-center items-center rounded-md"
          >
            <PaperPlaneRight size={32} />
          </button>
        </div>
      </div>
    </>
  );
};

export default CommentInput;
