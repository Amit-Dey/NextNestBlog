import { Post } from "@/lib/types/modelTypes";
import Image from "next/image";
import Link from "next/link";

// Using 'Post' directly for clarity, as the component effectively displays a Post.
// If 'Partial<Post>' is truly intended to allow incomplete Post objects, that's fine.
type PostCardProps = Partial<Post>;

const PostCard = ({
  id,
  title,
  slug,
  thumbnail,
  content,
  createdAt,
}: PostCardProps) => {
  // Ensure we have a slug and ID for the link, and a title for alt text.
  // If these are missing, the component might not render correctly or the link might be broken.
  // Consider adding checks or default values, especially if 'Partial<Post>' allows them to be undefined.
  if (!slug || !id) {
    // Optionally handle cases where essential data is missing,
    // e.g., return null or a placeholder.
    // console.warn("PostCard received incomplete data (missing slug or id).");
    return null; // Or render a fallback UI
  }

  const defaultThumbnail = "/no-image.png";
  const postDate = createdAt
    ? new Date(createdAt).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      })
    : "Date N/A";

  // Using a more robust content snippet logic
  const contentSnippet = content
    ? content.length > 120
      ? content.substring(0, 120) + "..."
      : content
    : "No content available.";

  return (
    <article className="group relative flex flex-col overflow-hidden rounded-xl bg-blue-200 shadow-lg transition-all duration-300 hover:shadow-xl sm:rounded-2xl">
      {/* Image Container */}
      <div className="relative h-48 w-full overflow-hidden bg-gray-100 sm:h-56 lg:h-64">
        <Image
          src={thumbnail || defaultThumbnail}
          alt={title || "Post thumbnail"}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
        {/* Optional: Overlay for subtle effects */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
      </div>

      {/* Content Area */}
      <div className="flex flex-grow flex-col p-4 sm:p-6">
        {/* Date */}
        <time dateTime={createdAt?.toString()} className="text-sm text-gray-500">
          {postDate}
        </time>

        {/* Title */}
        <h3 className="mt-2 text-xl font-semibold leading-snug text-gray-800 transition-colors duration-200 group-hover:text-indigo-700 sm:text-2xl">
          <Link href={`/blog/${slug}/${id}`} className="stretched-link">
            {/* The 'stretched-link' class makes the entire card clickable,
                but for accessibility, ensure the visible link text is meaningful. */}
            <span className="absolute inset-0 z-0"></span>{" "}
            {/* Invisible overlay to make entire card clickable */}
            {title || "Untitled Post"}
          </Link>
        </h3>

        {/* Content Snippet */}
        <p className="mt-3 text-base text-gray-600 line-clamp-3">
          {contentSnippet}
        </p>

        {/* Read More Link - now more prominent and integrated into the title */}
        {/* This link is now largely redundant with the 'stretched-link' pattern on the title,
            but keeping it for explicit "Read more" text if desired.
            If the whole card is clickable, often this is removed or styled differently. */}
        <div className="mt-4 text-right">
          <Link
            href={`/blog/${slug}/${id}`}
            className="relative z-10 inline-flex items-center text-indigo-600 hover:text-indigo-800 transition-colors duration-200"
          >
            Read more
            <svg
              className="ml-1 h-4 w-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </Link>
        </div>
      </div>
    </article>
  );
};

export default PostCard;