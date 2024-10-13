import React from "react";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";

const Hero = () => {
  return (
    <section>
      <div className="p-8 md:p-12 lg:px-16 lg:py-24">
        <div className="mx-auto max-w-lg text-center">
          <h2 className="text-2xl font-bold text-inspiry-dark md:text-5xl">
            Inspiry - Thoughtful Blog Stories
          </h2>

          <p className="hidden text-gray-500 sm:mt-4 sm:block">
            Inspiry is a place to explore simple and thoughtful blog posts on
            various topics, from personal experiences to practical advice.
          </p>
        </div>

        <div className="mx-auto mt-8 max-w-xl">
          <form action="#" className="sm:flex sm:gap-4">
            <div className="sm:flex-1">
              <label htmlFor="email" className="sr-only">
                Email
              </label>

              <input
                type="email"
                placeholder="Email address"
                className="w-full rounded-md border border-gray-200 bg-white p-3 text-gray-700 shadow-sm transition focus:border-white focus:outline-none focus:ring focus:ring-inspiry"
              />
            </div>

            <button
              type="submit"
              className="group mt-4 flex w-full items-center justify-center gap-1.5 rounded-md bg-inspiry hover:bg-inspiry-secondary px-5 py-3 text-white transition focus:outline-none focus:ring focus:ring-inspiry sm:mt-0 sm:w-auto"
            >
              <span className="text-sm font-medium"> Subscribe </span>
              <HiOutlineArrowNarrowRight size={20} />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Hero;
