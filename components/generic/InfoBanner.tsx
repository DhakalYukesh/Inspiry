import React from "react";

interface InfoBannerProps {
  title: string;
  className?: string;
}

const InfoBanner = ({ title, className }: InfoBannerProps) => {
  return (
    <div
      className={`bg-inspiry py-20 text-center text-3xl text-white font-bold ${className}`}
    >
      {title}
    </div>
  );
};

export default InfoBanner;
