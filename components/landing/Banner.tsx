import Link from 'next/link';

const InspiryBanner = () => {
  return (
    <div className="bg-gradient-to-r from-indigo-300 to-inspiry-secondary text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl font-extrabold mb-4">
          Explore Inspiring Blogs
        </h1>
        <p className="text-lg mb-8">
          Dive into the world of knowledge and inspiration with our carefully curated blogs.
        </p>
        <Link href="/blog">
          <div className="inline-block px-6 py-3 bg-white text-inspiry font-semibold rounded-lg shadow-md hover:bg-gray-100 transition">
            Explore More Blogs
          </div>
        </Link>
      </div>
    </div>
  );
};

export default InspiryBanner;
