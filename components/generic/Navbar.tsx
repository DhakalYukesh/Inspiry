"use client";
import Link from "next/link";
import NavbarItem from "./navbar/NavbarItem";
import Image from "next/image";
import { IoMenu, IoClose } from "react-icons/io5";
import { useState } from "react";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const menuItems = [
    { name: "Home", href: "/" },
    { name: "Company", href: "/" },
    { name: "Blog", href: "/blogs" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header className="py-2">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex-1 md:flex md:items-center md:gap-12">
            <Link className="block text-teal-600" href="/">
              <Image
                src="/inspiry.jpg"
                alt="inspiry logo"
                width={110}
                height={110}
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden mr-6 md:flex md:items-center md:gap-6">
            <nav aria-label="Global">
              <ul className="flex items-center gap-6 text-sm">
                {menuItems.map((item) => (
                  <NavbarItem key={item.name} href={item.href}>
                    {item.name}
                  </NavbarItem>
                ))}
              </ul>
            </nav>
          </div>

          {/* Buttons for both desktop and mobile */}
          <div className="flex items-center gap-2">
            <Link
              className="rounded-md bg-inspiry hover:bg-inspiry-secondary hover:transition-colors px-6 py-2.5 text-sm font-medium text-white shadow"
              href="#"
            >
              Login
            </Link>
            <Link
              className="hidden sm:inline-block rounded-md bg-gray-100 hover:bg-gray-200/80 hover:transition-colors px-6 py-2.5 text-sm font-medium text-inspiry"
              href="#"
            >
              Register
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden ml-2">
            <button
              className="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <IoClose size={28} /> : <IoMenu size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <nav aria-label="Mobile Navigation" className="md:hidden mt-4">
            <ul className="flex flex-col gap-4 text-sm">
              {menuItems.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="block rounded-lg bg-gray-100 px-4 py-2 text-gray-900 hover:bg-gray-200"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Navbar;
