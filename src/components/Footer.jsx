import Link from "next/link";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaGithub,
  FaXTwitter,
} from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="border-t border-slate-800 bg-slate-950">
      <div className="container mx-auto max-w-7xl px-6 py-16">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
          {/* Brand */}
          <div className="space-y-5">
            <h2 className="text-3xl font-bold text-white">
              Task<span className="text-cyan-400">Forge</span>
            </h2>

            <p className="max-w-md text-base leading-7 text-slate-400">
              Connect with skilled freelancers, post tasks, hire talent, and
              complete projects securely on one modern platform.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-5 text-xl font-semibold text-white">
              Quick Links
            </h3>

            <ul className="space-y-4">
              <li>
                <Link
                  href="/"
                  className="text-slate-400 transition-colors duration-300 hover:text-cyan-400"
                >
                  Home
                </Link>
              </li>

              <li>
                <Link
                  href="/tasks"
                  className="text-slate-400 transition-colors duration-300 hover:text-cyan-400"
                >
                  Browse Tasks
                </Link>
              </li>

              <li>
                <Link
                  href="/freelancers"
                  className="text-slate-400 transition-colors duration-300 hover:text-cyan-400"
                >
                  Browse Freelancers
                </Link>
              </li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h3 className="mb-5 text-xl font-semibold text-white">Connect</h3>

            <a
              href="mailto:support@taskforge.com"
              className="block text-slate-400 transition hover:text-cyan-400"
            >
              support@taskforge.com
            </a>

            <div className="mt-6 flex items-center gap-3">
              <a
                href="#"
                className="flex h-11 w-11 items-center justify-center rounded-xl border border-slate-800 text-slate-400 transition-all duration-300 hover:border-cyan-500 hover:text-cyan-400"
              >
                <FaFacebookF size={16} />
              </a>

              <a
                href="#"
                className="flex h-11 w-11 items-center justify-center rounded-xl border border-slate-800 text-slate-400 transition-all duration-300 hover:border-cyan-500 hover:text-cyan-400"
              >
                <FaLinkedinIn size={16} />
              </a>

              <a
                href="#"
                className="flex h-11 w-11 items-center justify-center rounded-xl border border-slate-800 text-slate-400 transition-all duration-300 hover:border-cyan-500 hover:text-cyan-400"
              >
                <FaGithub size={16} />
              </a>

              <a
                href="#"
                className="flex h-11 w-11 items-center justify-center rounded-xl border border-slate-800 text-slate-400 transition-all duration-300 hover:border-cyan-500 hover:text-cyan-400"
              >
                <FaXTwitter size={16} />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-14 border-t border-slate-800 pt-8 text-center">
          <p className="text-sm text-slate-500">
            © {new Date().getFullYear()} TaskForge. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
