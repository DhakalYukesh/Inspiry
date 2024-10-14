import BlogItem from "./Blog/BlogItem";
import BlogMainItem from "./Blog/BlogMainItem";

export interface BlogProps {
  id: number;
  title: string;
  author: string;
  date: string;
  tags: string[];
  description: string;
  imageUrl: string;
}

const blogs: BlogProps[] = [
  {
    id: 1,
    title: "Conversations with London Makr & Co.",
    author: "Olivia Rhye",
    date: "20 Jan 2024",
    tags: ["Design", "Research", "Interviews"],
    description:
      "We sat down with London’s fast-growing brand and product design studio, Makr & Co., to find out how they’ve used Untitled to 2x their revenue.",
    imageUrl: "/images/example_blog.webp",
  },
  {
    id: 2,
    title: "A Relentless Pursuit of Perfection in Product Design",
    author: "Phoenix Baker",
    date: "19 Jan 2024",
    tags: ["Design", "Research"],
    description:
      "I began to notice that there was a sharp contrast between well-made...",
    imageUrl: "/images/example_blog.webp",
  },
  {
    id: 3,
    title: "How to Run a Successful Business With Your Partner",
    author: "Lana Steiner",
    date: "18 Jan 2024",
    tags: ["Business", "Research"],
    description:
      "Starting a business with your spouse or significant other is exciting...",
    imageUrl: "/images/example_blog.webp",
  },
  {
    id: 4,
    title: "Why Food Matters — Disease Prevention & Treatment",
    author: "Lana Steiner",
    date: "18 Jan 2024",
    tags: ["Health", "Research"],
    description:
      "Eating more plants and less meat has been tied to a longer life...",
    imageUrl: "/images/example_blog.webp",
  },
];

const RecentBlogs = () => {
  return (
    <div className="mx-auto max-w-screen-xl p-6">
      <h2 className="text-[1.4rem] font-semibold mb-4 text-inspiry-dark">
        Recent blog posts
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
        <div className="col-span-1 md:col-span-2">
          <BlogMainItem blog={blogs[0]} />
        </div>
        <div className="col-span-1 space-y-6">
          {blogs.slice(1).map((blog) => (
            <BlogItem key={blog.id} blog={blog} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default RecentBlogs;
