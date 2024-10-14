interface BlogTagsProps {
    tags: string[];
  }
  
  const BlogTags = ({ tags } : BlogTagsProps) => {
    return (
      <div className="mt-2 flex gap-2">
        {tags.map((tag, idx) => (
          <span
            key={idx}
            className="text-xs bg-gray-100 border border-gray-200 rounded-full px-3 py-1"
          >
            {tag}
          </span>
        ))}
      </div>
    );
  };
  
  export default BlogTags;  