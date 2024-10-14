"use client";
import { useRouter } from "next/navigation";
import Image from "next/image";
import BlogTags from "./BlogTags";
import { BlogProps } from "../RecentBlogs";

interface BlogItemProps {
  blog: BlogProps;
}

const BlogItem = ({ blog }: BlogItemProps) => {
  const router = useRouter();

  const handleNavigation = () => {
    router.push(`/blog/${blog.id}`);
  };

  return (
    <div className="flex gap-4 cursor-pointer" onClick={handleNavigation}>
      <Image
        src={blog.imageUrl}
        alt={blog.title}
        width={250}
        height={200}
        className="w-32 h-32 object-cover rounded-lg"
      />
      <div>
        <p className="text-sm text-gray-500">{`${blog.author} • ${blog.date}`}</p>
        <h3 className="text-lg font-semibold mt-1">{blog.title}</h3>
        <p className="text-gray-600 mt-1">{blog.description}</p>
        <BlogTags tags={blog.tags} />
      </div>
    </div>
  );
};

export default BlogItem;
