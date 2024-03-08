import prisma from "@/libs/prisma";
import React from "react";

const CommentList = async ({ anime_mal_id }) => {
  const comments = await prisma.comment.findMany({
    where: { anime_mal_id },
  });
  console.log(comments);

  return (
    <div>
      {comments.map((comment) => {
        return (
          <div key={comment.id} className="text-color-primary">
            <p>{comment.username}</p>
            <p>{comment.comment}</p>
          </div>
        );
      })}
    </div>
  );
};

export default CommentList;
