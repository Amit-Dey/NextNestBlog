"use client";
import { getPostComments } from "@/lib/actions/commentActions";
import { DEFAULT_PAGE_SIZE } from "@/lib/constants";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import CommentCard from "./commentCard";
import CommentPagination from "./CommentPagination";
import CommentCardSkeleton from "./commentCardSkeleton";
import { SessionUser } from "@/lib/session";
import AddComment from "./addComment";

type Props = {
  postId: number;
  user?: SessionUser;
};

const Comments = ({ postId, user }: Props) => {
  // Initialize page to 1 for 1-based pagination display, but use 0 for skip calculation
  const [page, setPage] = useState(1);

  const { data, isLoading, refetch, isError } = useQuery({
    queryKey: ["GET_POST_COMMENTS", postId, page],
    queryFn: async () => {
      // Calculate skip based on 0-indexed page for API, but display 1-indexed to user
      const skipValue = (page - 1) * DEFAULT_PAGE_SIZE;
      return await getPostComments({
        postId,
        skip: skipValue,
        take: DEFAULT_PAGE_SIZE,
      });
    },
    // Keep data for 5 minutes, refetch in background if stale
    staleTime: 1000 * 60 * 5,
    // Refetch on window focus
    refetchOnWindowFocus: true,
  });

  // Calculate total pages, ensuring at least 1 page even if count is 0
  const totalPages = Math.max(1, Math.ceil((data?.count ?? 0) / DEFAULT_PAGE_SIZE));

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 sm:p-8 border border-gray-100">
      <div className="flex items-center justify-between mb-6 border-b pb-4 border-gray-100">
        <h2 className="text-2xl font-bold text-gray-800">Comments ({data?.count ?? 0})</h2>
        {/* Optional: Add a refresh button */}
        <button
          onClick={() => refetch()}
          className="inline-flex items-center rounded-full bg-indigo-50 p-2 text-indigo-600 hover:bg-indigo-100 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition-colors duration-200"
          title="Refresh Comments"
          aria-label="Refresh Comments"
        >
          <svg
            className="h-5 w-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 4v5h.582m15.356 2A8.001 8.001 0 0020 13a8 8 0 01-15.356 2m15.356-2H15V9m1.816 11.356A8.001 8.001 0 004 11a8 8 0 0115.356 2m-15.356 2H9v-5"
            />
          </svg>
        </button>
      </div>

      {/* Add Comment Section */}
      {!!user && (
        <div className="mb-8 p-4 bg-gray-50 rounded-lg border border-gray-200">
          <h3 className="text-lg font-semibold text-gray-700 mb-4">Leave a Comment</h3>
          <AddComment user={user} postId={postId} refetch={refetch} />
        </div>
      )}

      {/* Comments List */}
      <div className="flex flex-col gap-6">
        {isLoading ? (
          // Display 3 skeleton cards during loading
          Array.from({ length: 3 }).map((_, index) => (
            <CommentCardSkeleton key={index} />
          ))
        ) : isError ? (
          <div className="text-center py-8 text-red-600 bg-red-50 rounded-md">
            <p className="font-medium">Failed to load comments.</p>
            <p className="text-sm">Please try again later.</p>
          </div>
        ) : data?.comments && data.comments.length > 0 ? (
          data.comments.map((comment) => (
            <CommentCard key={comment.id} comment={comment} />
          ))
        ) : (
          <div className="text-center py-8 text-gray-500">
            <p className="text-lg font-medium">No comments yet.</p>
            <p className="text-sm">Be the first to share your thoughts!</p>
          </div>
        )}
      </div>

      {/* Pagination */}
      {totalPages > 1 && ( // Only show pagination if there's more than one page
        <CommentPagination
          className="mt-8 flex justify-center" // Added flex and justify-center for better alignment
          currentPage={page}
          setCurrentPage={(p) => setPage(p)}
          totalPages={totalPages}
        />
      )}
    </div>
  );
};

export default Comments;
