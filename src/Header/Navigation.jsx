import { useState } from "react";
import { Link } from "react-router-dom";

export default function Navigation() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fexed absolute left-0 top-0 z-50 w-full border-b border-gray-200 bg-white shadow-sm">
      <div className="mx-auto w-full max-w-screen-xl px-4">
        <nav className="flex items-center justify-between py-2">
          <Link to="/" className="flex items-center gap-2">
            <img
              src="/img/logo.png"
              alt="GreeNox Logo"
              className="h-20 w-20 object-contain"
            />
          </Link>
          {/* Desktop Menu */}
          <div className="hidden w-full items-center justify-end md:flex">
            {/* Left: Main Links */}
            <div className="flex items-center gap-8 pr-8">
              <Link
                to="/"
                className="border-b-2 border-green-500 pb-1 font-medium text-green-500"
              >
                Home
              </Link>
              <Link to="/menu" className="text-gray-700 hover:text-green-500">
                Menu
              </Link>
              <Link
                to="/subscription"
                className="text-gray-700 hover:text-green-500"
              >
                Subscription Plan
              </Link>
              <Link to="/about" className="text-gray-700 hover:text-green-500">
                About Us
              </Link>
              <Link to="/blog" className="text-gray-700 hover:text-green-500">
                Blog
              </Link>
              <Link
                to="/contact"
                className="text-gray-700 hover:text-green-500"
              >
                Contact
              </Link>
            </div>
            {/* Right: Actions */}
            <div className="flex items-center gap-4">
              <button className="text-gray-700 hover:text-green-500">
                <svg
                  className="inline h-5 w-5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <circle cx="11" cy="11" r="8" />
                  <line x1="21" y1="21" x2="16.65" y2="16.65" />
                </svg>
              </button>
              <span className="mx-2 text-gray-300">|</span>
              <Link to="/login" className="text-gray-700 hover:text-green-500">
                Login
              </Link>
              <Link
                to="/register"
                className="ml-2 rounded border border-green-500 bg-white px-4 py-1 font-medium text-green-500 hover:border-green-600 hover:bg-green-50"
              >
                Register
              </Link>
            </div>
          </div>
          {/* Mobile Hamburger */}
          <button
            className="text-gray-700 hover:text-green-500 md:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <svg
              className="h-7 w-7"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </nav>
        {/* Mobile Menu */}
        {menuOpen && (
          <div className="fixed right-0 top-20 z-50 h-full w-3/4 max-w-xs translate-x-0 transform border-l border-gray-200 bg-white shadow-lg transition-transform duration-300 ease-out md:hidden">
            {/* Main Links */}
            <div className="flex flex-col gap-4 px-4 py-4">
              <Link
                to="/"
                className="font-medium text-green-500"
                onClick={() => setMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                to="/menu"
                className="text-gray-700 hover:text-green-500"
                onClick={() => setMenuOpen(false)}
              >
                Menu
              </Link>
              <Link
                to="/subscription"
                className="text-gray-700 hover:text-green-500"
                onClick={() => setMenuOpen(false)}
              >
                Subscription Plan
              </Link>
              <Link
                to="/about"
                className="text-gray-700 hover:text-green-500"
                onClick={() => setMenuOpen(false)}
              >
                About Us
              </Link>
              <Link
                to="/blog"
                className="text-gray-700 hover:text-green-500"
                onClick={() => setMenuOpen(false)}
              >
                Blog
              </Link>
              <Link
                to="/contact"
                className="text-gray-700 hover:text-green-500"
                onClick={() => setMenuOpen(false)}
              >
                Contact
              </Link>
              <hr className="my-2 border-gray-200" />
              {/* Actions */}
              <button className="mb-2 text-gray-700 hover:text-green-500">
                <svg
                  className="inline h-5 w-5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <circle cx="11" cy="11" r="8" />
                  <line x1="21" y1="21" x2="16.65" y2="16.65" />
                </svg>
              </button>
              <Link
                to="/login"
                className="text-gray-700 hover:text-green-500"
                onClick={() => setMenuOpen(false)}
              >
                Login
              </Link>
              <Link
                to="/register"
                className="rounded border border-green-500 bg-white px-4 py-1 font-medium text-green-500 hover:border-green-600 hover:bg-green-50"
                onClick={() => setMenuOpen(false)}
              >
                Register
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
