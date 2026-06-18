"use client";

import { Button, Link } from "@heroui/react";
import Image from "next/image";
import { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "Browse Tasks", href: "/tasks" },
    { label: "Browse Freelancers", href: "/freelancers" },
  ];

  return (
    <nav className=" sticky top-0 z-50 border-b border-slate-800 bg-slate-950/80 backdrop-blur-xl">
      <div className="container mx-auto  px-4 flex h-16 items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-3 transition-opacity duration-200 hover:opacity-90"
        >
          <Image
            src="/assets/logo.png"
            alt="TaskForge Logo"
            width={180}
            height={48}
            priority
            className="h-29 w-auto object-contain"
          />
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden items-center gap-8 md:flex">
          {navLinks.map((item) => (
            <li key={item.label}>
              <Link
                href={item.href}
                className="font-medium text-slate-300 transition hover:text-cyan-400"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Desktop Actions */}
        <div className="hidden items-center gap-3 md:flex">
          <Button
            as={Link}
            href="/login"
            variant="light"
            className="font-medium text-slate-300"
          >
            Login
          </Button>

          <Button
            as={Link}
            href="/register"
            color="primary"
            className="bg-cyan-500 font-semibold text-white"
          >
            Register
          </Button>
        </div>

        {/* Mobile Toggle */}
        <button
          className="text-slate-200 md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? (
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="border-t border-slate-800 bg-slate-900 md:hidden">
          <div className="space-y-2 p-4">
            {navLinks.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="block rounded-lg px-3 py-2 text-slate-300 transition hover:bg-slate-800 hover:text-cyan-400"
              >
                {item.label}
              </Link>
            ))}

            <div className="mt-4 flex flex-col gap-3 border-t border-slate-800 pt-4">
              <Button
                as={Link}
                href="/login"
                variant="bordered"
                className="border-slate-700 text-slate-200"
              >
                Login
              </Button>

              <Button
                as={Link}
                href="/register"
                className="bg-cyan-500 font-semibold text-white"
              >
                Register
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
