"use client";
import { useState } from "react";
import BlogMainItem from "./Blog/BlogMainItem";
import ReactPaginate from "react-paginate";

const blogs = [
  {
    id: 1,
    title: "A Continually Unfolding History — Hillview by Made by Hand",
    author: "Alec Whitten",
    date: "17 Jan 2024",
    tags: ["Design", "Architecture"],
    description:
      "A single building occupies the hillside at Hillview, a historic 240-hectare former sheep farm...",
    imageUrl: "/images/example_blog.webp",
  },
  {
    id: 2,
    title: "Cognitive Dissonance Theory: Crash Course for UX Designers",
    author: "Demi Wilkinson",
    date: "16 Jan 2024",
    tags: ["Product", "Research", "Frameworks"],
    description:
      "We all like to think of ourselves in certain ways. We consider ourselves to be truthful...",
    imageUrl: "/images/example_blog.webp",
  },
  {
    id: 3,
    title: "How Remote Work Drastically Improved My Design Skills",
    author: "Candice Wu",
    date: "15 Jan 2024",
    tags: ["Design", "Research"],
    description:
      "Remote working might not only be feasible but beneficial. Stanford University found...",
    imageUrl: "/images/example_blog.webp",
  },
  {
    id: 4,
    title: "Exclusive Interview with Designer, Jasmin Chew",
    author: "Natali Craig",
    date: "14 Jan 2024",
    tags: ["Design", "Research", "Interviews"],
    description:
      "Jasmin Chew is a 23-year-old photographer and photo editor from Toronto, Ontario...",
    imageUrl: "/images/example_blog.webp",
  },
  {
    id: 5,
    title: "Improve Your UI Design Skills and Develop an 'Eye' for Design",
    author: "Drew Cano",
    date: "13 Jan 2024",
    tags: ["Design", "Tools", "Research"],
    description:
      "The design industry is constantly evolving, but good design is timeless. Learn how...",
    imageUrl: "/images/example_blog.webp",
  },
  {
    id: 6,
    title: "The Design Dilemma: Is Best UX Practice the Enemy of Creativity",
    author: "Orlando Diggs",
    date: "12 Jan 2024",
    tags: ["Design", "Theory", "Research"],
    description:
      "Frankie Sullivan explores the 'Design Dilemma' — what happens when best practice UX...",
    imageUrl: "/images/example_blog.webp",
  },
  {
    id: 6,
    title: "The Design Dilemma: Is Best UX Practice the Enemy of Creativity",
    author: "Orlando Diggs",
    date: "12 Jan 2024",
    tags: ["Design", "Theory", "Research"],
    description:
      "Frankie Sullivan explores the 'Design Dilemma' — what happens when best practice UX...",
    imageUrl: "/images/example_blog.webp",
  },
];

const AllBlogs = ({ blogsLimit }: { blogsLimit: number | bigint }) => {
  const [currentPage, setCurrentPage] = useState(0);
  const blogsPerPage =
    typeof blogsLimit === "bigint" ? Number(blogsLimit) : blogsLimit;

  // Get current blogs based on the page
  const offset = currentPage * blogsPerPage;
  const currentBlogs = blogs.slice(offset, offset + blogsPerPage);
  const pageCount = Math.ceil(blogs.length / blogsPerPage);

  const handlePageClick = (selectedItem: { selected: number }) => {
    setCurrentPage(selectedItem.selected);
  };

  return (
    <div className="max-w-screen-xl mx-auto px-4 py-8">
      <h2 className="text-[1.4rem] font-semibold mb-4">All blog posts</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 border-b border-gray-300 pb-10">
        {currentBlogs.map((blog) => {
          return (
            <div key={blog.id}>
              <BlogMainItem blog={blog} />
            </div>
          );
        })}
      </div>

      {/* Pagination Section */}
      <div className="my-10 flex justify-center">
        <ReactPaginate
          previousLabel={"Previous"}
          nextLabel={"Next"}
          breakLabel={"..."}
          pageCount={pageCount}
          marginPagesDisplayed={2}
          pageRangeDisplayed={3}
          onPageChange={handlePageClick}
          containerClassName={"flex space-x-2"}
          pageClassName={"page-item"}
          pageLinkClassName={
            "px-3 py-1 border border-gray-300 rounded-lg hover:bg-gray-100 transition-colors"
          }
          previousClassName={"prev-item"}
          previousLinkClassName={
            "px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-100 transition-colors"
          }
          nextClassName={"next-item"}
          nextLinkClassName={
            "px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-100 transition-colors"
          }
          breakClassName={"break-item"}
          breakLinkClassName={"px-3 py-1 border border-gray-300 rounded-lg"}
          activeClassName={"active"}
          activeLinkClassName={
            "bg-inspiry text-white border-inspiry-secondary hover:bg-inspiry"
          }
        />
      </div>
    </div>
  );
};

export default AllBlogs;
