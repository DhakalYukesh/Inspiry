"use client";
import { useRouter } from "next/navigation";
import Image from "next/image";
import BlogTags from "./BlogTags";
import { BlogProps } from "../RecentBlogs";

interface BlogMainItemProps {
  blog: BlogProps;
}

const BlogMainItem = ({ blog }: BlogMainItemProps) => {
  const router = useRouter();

  const handleNavigation = () => {
    router.push(`/blog/${blog.id}`);
  };

  return (
    <div className="relative cursor-pointer" onClick={handleNavigation}>
      <Image
        src={blog.imageUrl}
        alt={blog.title}
        width={1200}
        height={800}
        className="w-full h-auto object-cover rounded-lg"
      />
      <div className="mt-4">
        <p className="text-sm text-gray-500">{`${blog.author} • ${blog.date}`}</p>
        <h3 className="text-lg font-semibold mt-2">{blog.title}</h3>
        <p className="text-gray-600 mt-2">{blog.description}</p>
        <BlogTags tags={blog.tags} />
      </div>
    </div>
  );
};

export default BlogMainItem;
