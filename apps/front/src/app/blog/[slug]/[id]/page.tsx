import { fetchPostById } from "@/lib/actions/postActions";
import Image from "next/image";
import DOMPurify from "dompurify"; // Already imported, good for sanitization
import SanitizedContent from "./_components/SanitizedContent"; // Assuming this component handles content rendering
import Comments from "./_components/comments";
import { getSession } from "@/lib/session";
import Like from "./_components/like";

type Props = {
  params: {
    id: string;
  };
};

const PostPage = async ({ params }: Props) => {
  const postId = params.id; // Access id directly from params
  const post = await fetchPostById(+postId); // Convert to number

  // Handle case where post is not found
  if (!post) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-gray-50 p-4">
        <div className="rounded-lg bg-white p-8 text-center shadow-md">
          <h1 className="text-2xl font-bold text-gray-800">Post Not Found</h1>
          <p className="mt-2 text-gray-600">
            The post you are looking for does not exist or has been removed.
          </p>
          <a href="/" className="mt-4 inline-block text-indigo-600 hover:underline">
            Go back to home
          </a>
        </div>
      </main>
    );
  }

  const session = await getSession();

  // Format date for better readability
  const formattedDate = new Date(post.createdAt).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <main className="min-h-screen bg-gray-50 py-10 sm:py-12 lg:py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <article className="mx-auto max-w-4xl rounded-2xl bg-white p-6 shadow-xl sm:p-8 lg:p-10">
          {/* Post Header */}
          <header className="mb-8 text-center">
            <h1 className="text-3xl font-extrabold leading-tight text-gray-900 sm:text-4xl lg:text-5xl">
              {post.title}
            </h1>
            <p className="mt-3 text-base text-gray-600 sm:text-lg">
              By <span className="font-medium text-indigo-700">{post.author.name}</span>{" "}
              <span className="mx-1">•</span> {formattedDate}
            </p>
          </header>

          {/* Post Thumbnail Image */}
          <div className="relative mb-8 h-64 w-full overflow-hidden rounded-lg shadow-md sm:h-80 lg:h-96">
            <Image
              src={post.thumbnail ?? "/no-image.png"}
              alt={post.title || "Post thumbnail"}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 700px" // Optimized sizes for Next.js Image
              className="object-cover transition-transform duration-300 hover:scale-105"
            />
          </div>

          {/* Post Content */}
          <section className="prose prose-lg mx-auto max-w-none text-gray-800 sm:prose-xl">
            {/* The SanitizedContent component is assumed to render the HTML content safely */}
            <SanitizedContent content={post.content} />
          </section>

          {/* Actions: Like Button */}
          <div className="mt-10 flex items-center justify-center border-t border-gray-200 pt-8">
            <Like postId={post.id} user={session?.user} />
          </div>

          {/* Comments Section */}
          <section className="mt-12 border-t border-gray-200 pt-10">
            <h2 className="mb-6 text-2xl font-bold text-gray-800 sm:text-3xl">Comments</h2>
            <Comments user={session?.user} postId={post.id} />
          </section>
        </article>
      </div>
    </main>
  );
};

export default PostPage;
