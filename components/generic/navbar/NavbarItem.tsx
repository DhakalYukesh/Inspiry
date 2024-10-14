import Link from "next/link";
import React from "react";

interface NavbarItemProps {
  href: string;
  children: React.ReactNode;
  className?: string;
}

const NavbarItem = ({ href, children, className }: NavbarItemProps) => {
  return (
    <li>
      <Link
        className={`text-inspiry-dark text-[0.92rem] transition hover:text-inspiry-dark/75 ${className}`}
        href={href}
      >
        {children}
      </Link>
    </li>
  );
};

export default NavbarItem;