import InfoBanner from "@/components/generic/InfoBanner";
import AllBlogs from "@/components/landing/AllBlogs";
import React from "react";

const page = () => {
  return (
    <>
      <InfoBanner title="All Blogs" />
      <AllBlogs blogsLimit={12} />
    </>
  );
};

export default page;
