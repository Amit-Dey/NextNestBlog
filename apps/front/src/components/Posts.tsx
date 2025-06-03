import { Post } from "@/lib/types/modelTypes";
import PostCard from "./postCard";
import Pagination from "./pagination";

type Props = {
  posts: Post[];
  currentPage: number;
  totalPages: number;
};

const Posts = (props: Props) => {
  return (
    <section className="bg-gray-50 py-12 sm:py-16 lg:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <header className="mb-10 text-center sm:mb-12 lg:mb-16">
          <h2 className="text-4xl font-extrabold leading-tight text-gray-900 sm:text-5xl lg:text-6xl">
            Latest Posts
          </h2>
          <div className="mx-auto mt-4 h-1.5 w-24 rounded-full bg-gradient-to-r from-sky-500 to-indigo-600 sm:w-32"></div>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600 sm:text-xl">
            Discover our most recent articles, insights, and stories.
          </p>
        </header>

        {/* Posts Grid */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:gap-10">
          {props.posts.length > 0 ? (
            props.posts.map((post) => (
              <PostCard key={post.id} {...post} />
            ))
          ) : (
            <div className="col-span-full text-center py-12 text-gray-500">
              <p className="text-xl font-medium">No posts found.</p>
              <p className="text-sm">Check back later for new content!</p>
            </div>
          )}
        </div>

        {/* Pagination */}
        {props.totalPages > 1 && (
          <Pagination
            className="mt-12 flex justify-center" // Centered pagination
            currentPage={props.currentPage}
            totalPages={props.totalPages}
          />
        )}
      </div>
    </section>
  );
};

export default Posts;
