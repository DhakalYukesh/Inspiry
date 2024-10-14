"use client";
import Image from "next/image";
import Link from "next/link";
import { BsLinkedin, BsTwitter, BsGithub } from "react-icons/bs";
import { useState } from "react";

const Footer = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert(`Subscribed with: ${email}`);
    setEmail("");
  };

  return (
    <footer className="bg-white pt-12 pb-8 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-10">
          {/* Newsletter Section */}
          <div className="md:col-span-2 lg:col-span-2">
            <h3 className="text-xl font-semibold mb-4">
              Sign up to our newsletter
            </h3>
            <p className="text-gray-500 mb-6">
              Stay up to date with the latest news, announcements, and articles.
            </p>
            {/* Input Field */}
            <form className="flex max-w-sm" onSubmit={handleSubmit}>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="w-full px-4 py-2 border border-gray-300 rounded-l-lg focus:ring-indigo-500 focus:border-indigo-500"
                required
              />
              <button
                type="submit"
                className="bg-inspiry-dark text-white px-4 py-2 rounded-r-lg hover:bg-inspiry-dark transition"
              >
                Subscribe
              </button>
            </form>
          </div>

          {/* Footer Links Section */}
          <div className="">
            <h4 className="text-sm font-semibold text-gray-900 mb-4">
              Product
            </h4>
            <ul className="space-y-2 text-gray-500">
              <li>
                <Link href="/overview">Overview</Link>
              </li>
              <li>
                <Link href="/features">Features</Link>
              </li>
              <li>
                <Link href="/solutions">
                  <span className="flex items-center">
                    Solutions
                    <span className="ml-2 px-2 py-0.5 text-xs bg-gray-200 rounded-full">
                      New
                    </span>
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/tutorials">Tutorials</Link>
              </li>
              <li>
                <Link href="/pricing">Pricing</Link>
              </li>
              <li>
                <Link href="/releases">Releases</Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-gray-900 mb-4">
              Company
            </h4>
            <ul className="space-y-2 text-gray-500">
              <li>
                <Link href="/about">About us</Link>
              </li>
              <li>
                <Link href="/careers">Careers</Link>
              </li>
              <li>
                <Link href="/press">Press</Link>
              </li>
              <li>
                <Link href="/news">News</Link>
              </li>
              <li>
                <Link href="/media-kit">Media kit</Link>
              </li>
              <li>
                <Link href="/contact">Contact</Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-gray-900 mb-4">
              Resources
            </h4>
            <ul className="space-y-2 text-gray-500">
              <li>
                <Link href="/blog">Blog</Link>
              </li>
              <li>
                <Link href="/newsletter">Newsletter</Link>
              </li>
              <li>
                <Link href="/events">Events</Link>
              </li>
              <li>
                <Link href="/help-center">Help centre</Link>
              </li>
              <li>
                <Link href="/tutorials">Tutorials</Link>
              </li>
              <li>
                <Link href="/support">Support</Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom section with logo and social links */}
        <div className="mt-20 flex justify-between items-center">
          <div className="flex items-center space-x-4 flex-wrap">
            <div className="flex-shrink-0">
              <Image
                src="/inspiry.jpg"
                width={70}
                height={70}
                alt="Logo"
                className="h-auto w-auto"
              />
            </div>
            <p className="text-gray-500">
              Post your interesting stories and creativity!
            </p>
          </div>

          <div className="flex space-x-4">
            <Link href="https://www.linkedin.com" passHref>
              <div
                className="text-gray-500 hover:text-gray-900"
                aria-label="LinkedIn"
              >
                <BsLinkedin size={20} />
              </div>
            </Link>
            <Link href="https://twitter.com" passHref>
              <div
                className="text-gray-500 hover:text-gray-900"
                aria-label="Twitter"
              >
                <BsTwitter size={20} />
              </div>
            </Link>
            <Link href="https://github.com" passHref>
              <div
                className="text-gray-500 hover:text-gray-900"
                aria-label="GitHub"
              >
                <BsGithub size={20} />
              </div>
            </Link>
          </div>
        </div>
      </div>

      {/* Copyright section */}
      <div className="mt-8 border-t border-gray-200 pt-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-gray-500 text-sm text-center">
            © 2024 Inspiry. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
