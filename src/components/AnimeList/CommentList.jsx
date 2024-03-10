import prisma from "@/libs/prisma";
import React from "react";

const CommentList = async ({ anime_mal_id }) => {
  const comments = await prisma.comment.findMany({
    where: { anime_mal_id },
  });

  return (
    <div>
      {comments.length > 0 ? (
        <div>
          {comments.map((comment) => {
            return (
              <div
                key={comment.id}
                className="text-color-primary border-color-accent border-2 p-2 m-2 w-[300px] rounded-md"
              >
                <p className="text-xl font-bold">{comment.username}</p>
                <p>{comment.comment}</p>
              </div>
            );
          })}
        </div>
      ) : (
        <div className="flex items-center justify-center">
          <p>There's no comment</p>
        </div>
      )}
    </div>
  );
};

export default CommentList;
