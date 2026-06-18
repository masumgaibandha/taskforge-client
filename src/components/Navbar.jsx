"use client";

import { signOut, useSession } from "@/lib/auth-client";
import { Avatar, Button, Link } from "@heroui/react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";

const Navbar = () => {
  const router = useRouter();

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { data: session, isPending } = useSession();

  const user = session?.user;

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "Browse Tasks", href: "/tasks" },
    { label: "Browse Freelancers", href: "/freelancers" },
  ];

  const getInitial = (name) => {
    return name?.charAt(0)?.toUpperCase() || "U";
  };

  const handleSignOut = async () => {
    await signOut();

    setIsMenuOpen(false);
    router.replace("/login");
    router.refresh();
  };

  return (
    <nav className="sticky top-0 z-50 border-b border-slate-800 bg-slate-950/80 backdrop-blur-xl">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link href="/" className="flex items-center">
          <Image
            src="/assets/logo.png"
            alt="TaskForge Logo"
            width={180}
            height={48}
            priority
            className="h-32 w-auto object-contain"
          />
        </Link>

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

        <div className="hidden items-center gap-3 md:flex">
          {isPending ? null : user ? (
            <>
              <Link href="/dashboard">
                <Button
                  size="sm"
                  variant="bordered"
                  className="border-slate-700 text-slate-200"
                >
                  Dashboard
                </Button>
              </Link>

              <div className="flex items-center gap-3 rounded-full border border-slate-800 bg-slate-900 px-3 py-1.5">
                <Avatar>
                  <Avatar.Image src={user?.image} alt={user?.name} />
                  <Avatar.Fallback>{getInitial(user?.name)}</Avatar.Fallback>
                </Avatar>

                <div className="hidden lg:block">
                  <p className="max-w-32 truncate text-sm font-medium text-white">
                    {user?.name}
                  </p>
                  <p className="max-w-40 truncate text-xs text-slate-400">
                    {user?.email}
                  </p>
                </div>
              </div>

              <Button size="sm" color="danger" onPress={handleSignOut}>
                Sign Out
              </Button>
            </>
          ) : (
            <>
              <Link href="/login">
                <Button
                  variant="bordered"
                  className="border-slate-700 text-slate-200"
                >
                  Login
                </Button>
              </Link>

              <Link href="/register">
                <Button className="bg-cyan-500 font-semibold text-white">
                  Register
                </Button>
              </Link>
            </>
          )}
        </div>

        <button
          type="button"
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

      {isMenuOpen && (
        <div className="border-t border-slate-800 bg-slate-900 md:hidden">
          <div className="space-y-2 p-4">
            {navLinks.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
                className="block rounded-lg px-3 py-2 text-slate-300 transition hover:bg-slate-800 hover:text-cyan-400"
              >
                {item.label}
              </Link>
            ))}

            <div className="mt-4 border-t border-slate-800 pt-4">
              {isPending ? null : user ? (
                <div className="space-y-4">
                  <Link href="/dashboard" onClick={() => setIsMenuOpen(false)}>
                    <Button
                      variant="bordered"
                      className="w-full border-slate-700 text-slate-200"
                    >
                      Dashboard
                    </Button>
                  </Link>

                  <div className="flex items-center gap-3 rounded-xl border border-slate-800 bg-slate-950 p-3">
                    <Avatar>
                      <Avatar.Image src={user?.image} alt={user?.name} />
                      <Avatar.Fallback>
                        {getInitial(user?.name)}
                      </Avatar.Fallback>
                    </Avatar>

                    <div className="min-w-0">
                      <p className="truncate font-medium text-white">
                        {user?.name}
                      </p>
                      <p className="truncate text-xs text-slate-400">
                        {user?.email}
                      </p>
                    </div>
                  </div>

                  <Button
                    color="danger"
                    onPress={handleSignOut}
                    className="w-full"
                  >
                    Sign Out
                  </Button>
                </div>
              ) : (
                <div className="flex flex-col gap-3">
                  <Link href="/login" onClick={() => setIsMenuOpen(false)}>
                    <Button
                      variant="bordered"
                      className="w-full border-slate-700 text-slate-200"
                    >
                      Login
                    </Button>
                  </Link>

                  <Link href="/register" onClick={() => setIsMenuOpen(false)}>
                    <Button className="w-full bg-cyan-500 font-semibold text-white">
                      Register
                    </Button>
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
