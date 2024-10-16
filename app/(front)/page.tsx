import AllBlogs from "@/components/landing/AllBlogs";
import InspiryBanner from "@/components/landing/Banner";
import Hero from "@/components/landing/Hero";
import RecentBlogs from "@/components/landing/RecentBlogs";

export default function Home() {
  return (
    <>
      <Hero />
      {/* Gradient effect */}
      <div className="absolute top-0 -z-10 h-full w-full bg-white">
        <div className="absolute bottom-auto left-auto right-0 top-0 h-[500px] w-[500px] -translate-x-[30%] translate-y-[20%] rounded-full bg-[rgba(109,156,244,0.48)] opacity-50 blur-[80px]"></div>
      </div>
      <RecentBlogs />
      <AllBlogs blogsLimit={6} />
      <InspiryBanner />
    </>
  );
}
