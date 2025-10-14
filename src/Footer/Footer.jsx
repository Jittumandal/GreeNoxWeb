import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="relative bg-[url('/img/globalmap.svg')] bg-contain bg-center bg-no-repeat px-4 pb-4 pt-10 text-gray-200">
      <div className="pointer-events-none absolute inset-0 z-0 bg-[#474747]/90"></div>
      <div className="relative z-10 mx-auto flex max-w-7xl flex-col justify-between gap-8 pt-8 md:flex-row">
        {/* Left: Logo and About */}
        <div className="min-w-[220px] flex-1">
          <div className="mb-4 flex items-center gap-2">
            <img src="/img/logo.png" alt="GreeNox Logo" className="h-10 w-10" />
            <span className="text-2xl font-semibold italic text-white">
              You are what you eat!
            </span>
          </div>
          <p className="mb-4 text-sm text-gray-300">
            The Journey of GreeNox Started in 2016 by Two Engineering Graduate
            with an idea to provide healthy snacking with the aim of catering to
            your craving without compromising on your holistic wellbeing.
          </p>
          <div className="mt-2 flex gap-4">
            <a href="#" className="hover:text-pink-400">
              <svg
                className="inline h-5 w-5"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M24 4.557a9.93 9.93 0 0 1-2.828.775 4.932 4.932 0 0 0 2.165-2.724c-.951.564-2.005.974-3.127 1.195A4.92 4.92 0 0 0 16.616 3c-2.73 0-4.942 2.21-4.942 4.936 0 .386.045.763.127 1.124C7.728 8.816 4.1 6.884 1.671 3.965c-.423.722-.666 1.561-.666 2.475 0 1.708.87 3.216 2.188 4.099a4.904 4.904 0 0 1-2.237-.616c-.054 2.281 1.581 4.415 3.949 4.89a4.936 4.936 0 0 1-2.224.084c.627 1.956 2.444 3.377 4.6 3.417A9.867 9.867 0 0 1 0 21.543a13.94 13.94 0 0 0 7.548 2.209c9.057 0 14.009-7.496 14.009-13.986 0-.213-.005-.425-.014-.636A9.936 9.936 0 0 0 24 4.557z" />
              </svg>
            </a>
            <a href="#" className="hover:text-pink-400">
              <svg
                className="inline h-5 w-5"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.334 3.608 1.308.974.974 1.246 2.241 1.308 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.334 2.633-1.308 3.608-.974.974-2.241 1.246-3.608 1.308-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.334-3.608-1.308-.974-.974-1.246-2.241-1.308-3.608C2.175 15.647 2.163 15.267 2.163 12s.012-3.584.07-4.85c.062-1.366.334-2.633 1.308-3.608.974-.974 2.241-1.246 3.608-1.308C8.416 2.175 8.796 2.163 12 2.163zm0-2.163C8.741 0 8.332.013 7.052.072 5.771.131 4.659.425 3.678 1.406c-.981.981-1.275 2.093-1.334 3.374C2.013 8.332 2 8.741 2 12c0 3.259.013 3.668.072 4.948.059 1.281.353 2.393 1.334 3.374.981.981 2.093 1.275 3.374 1.334C8.332 23.987 8.741 24 12 24s3.668-.013 4.948-.072c1.281-.059 2.393-.353 3.374-1.334.981-.981 1.275-2.093 1.334-3.374.059-1.28.072-1.689.072-4.948 0-3.259-.013-3.668-.072-4.948-.059-1.281-.353-2.393-1.334-3.374-.981-.981-2.093-1.275-3.374-1.334C15.668.013 15.259 0 12 0z" />
                <circle cx="12" cy="12" r="3.5" />
                <circle cx="18.406" cy="5.594" r="1.44" />
              </svg>
            </a>
            <a href="#" className="hover:text-pink-400">
              <svg
                className="inline h-5 w-5"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.334 3.608 1.308.974.974 1.246 2.241 1.308 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.334 2.633-1.308 3.608-.974.974-2.241 1.246-3.608 1.308-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.334-3.608-1.308-.974-.974-1.246-2.241-1.308-3.608C2.175 15.647 2.163 15.267 2.163 12s.012-3.584.07-4.85c.062-1.366.334-2.633 1.308-3.608.974-.974 2.241-1.246 3.608-1.308C8.416 2.175 8.796 2.163 12 2.163zm0-2.163C8.741 0 8.332.013 7.052.072 5.771.131 4.659.425 3.678 1.406c-.981.981-1.275 2.093-1.334 3.374C2.013 8.332 2 8.741 2 12c0 3.259.013 3.668.072 4.948.059 1.281.353 2.393 1.334 3.374.981.981 2.093 1.275 3.374 1.334C8.332 23.987 8.741 24 12 24s3.668-.013 4.948-.072c1.281-.059 2.393-.353 3.374-1.334.981-.981 1.275-2.093 1.334-3.374.059-1.28.072-1.689.072-4.948 0-3.259-.013-3.668-.072-4.948-.059-1.281-.353-2.393-1.334-3.374-.981-.981-2.093-1.275-3.374-1.334C15.668.013 15.259 0 12 0z" />
              </svg>
            </a>
          </div>
        </div>
        {/* Center: Quick Links and Utility Pages */}
        <div className="flex flex-[2] flex-col justify-between gap-8 md:flex-row">
          <div>
            <div className="mb-2 font-semibold">Quick Links</div>
            <ul className="space-y-1 text-sm text-gray-300">
              <li>
                <Link to="/" className="hover:text-white">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-white">
                  About
                </Link>
              </li>
              <li>
                <Link to="/menu" className="hover:text-white">
                  Our Menu
                </Link>
              </li>
              <li>
                <Link to="/balanced-meal" className="hover:text-white">
                  Balanced Meal
                </Link>
              </li>
              <li>
                <Link to="/blog" className="hover:text-white">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-white">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/delivery" className="hover:text-white">
                  Delivery
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <div className="mb-2 font-semibold">Utility Pages</div>
            <ul className="space-y-1 text-sm text-gray-300">
              <li>
                <Link to="/start-here" className="hover:text-white">
                  Start Here
                </Link>
              </li>
              <li>
                <Link to="/styleguide" className="hover:text-white">
                  Styleguide
                </Link>
              </li>
              <li>
                <Link to="/password-protected" className="hover:text-white">
                  Password Protected
                </Link>
              </li>
              <li>
                <Link to="/404" className="hover:text-white">
                  404 Not Found
                </Link>
              </li>
              <li>
                <Link to="/licenses" className="hover:text-white">
                  Licenses
                </Link>
              </li>
              <li>
                <Link to="/changelog" className="hover:text-white">
                  Changelog
                </Link>
              </li>
              <li>
                <Link to="/view-more" className="hover:text-white">
                  View More
                </Link>
              </li>
            </ul>
          </div>
          {/* Instagram */}
          <div>
            <div className="mb-2 font-semibold">Follow Us On Instagram</div>
            <div className="grid grid-cols-2 gap-2">
              <img
                src="/img/insta1.jpg"
                alt="Insta1"
                className="h-24 w-24 rounded-lg object-cover"
              />
              <img
                src="/img/insta2.jpg"
                alt="Insta2"
                className="h-24 w-24 rounded-lg object-cover"
              />
              <img
                src="/img/insta3.jpg"
                alt="Insta3"
                className="h-24 w-24 rounded-lg object-cover"
              />
              <img
                src="/img/insta4.jpg"
                alt="Insta4"
                className="h-24 w-24 rounded-lg object-cover"
              />
            </div>
          </div>
        </div>
      </div>
      {/* Bottom Bar */}
      <div className="relative z-10 mx-auto mt-8 flex max-w-7xl flex-col items-center justify-between gap-4 border-t border-gray-500 pt-4 md:flex-row">
        <div className="text-sm text-gray-400">
          Copyright © 2025{" "}
          <Link to="/" className="underline hover:text-white">
            Geenox
          </Link>
          , All Rights Reserved
        </div>
        <div className="flex gap-4">
          <img src="/img/appstore.png" alt="App Store" className="h-10" />
          <img src="/img/playstore.png" alt="Google Play" className="h-10" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
