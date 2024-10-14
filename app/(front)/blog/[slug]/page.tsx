import React from "react";

interface SlugProps {
  params: {
    slug: string;
  };
}

const page = ({ params }: SlugProps) => {
  return <div>{params.slug}</div>;
};

export default page;
