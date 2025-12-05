import { Link } from "react-router-dom";
import { Facebook, Instagram, Linkedin, Twitter, Youtube } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-white dark:bg-black text-gray-900 dark:text-white" style={{ fontFamily: 'Roboto, sans-serif' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Main Content: Newsletter + Footer Links Side by Side */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-12 pb-12 border-b border-gray-300 dark:border-gray-700">
          {/* Newsletter Section - Left Column */}
          {/* <div className="md:col-span-2">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4" style={{ fontFamily: 'Roboto', fontWeight: 700 }}>
              Logo
            </h3>
            <p className="text-base text-gray-900 dark:text-gray-300 mb-6" style={{ fontFamily: 'Roboto, sans-serif', fontWeight: 400 }}>
              Get design insights and industry updates delivered monthly.
            </p>
            <div className="flex items-start gap-4 w-full">
              <input
                type="email"
                placeholder="Email address"
                className="flex-1 px-4 py-3 bg-white dark:bg-black text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none"
                style={{ fontFamily: 'Roboto', borderStyle: 'solid', borderColor: '#000', borderWidth: '2px 1px 1px 2px' }}
              />
              <button
                className="px-6 py-3 text-gray-900 dark:text-white transition font-medium rounded-none whitespace-nowrap bg-white dark:bg-black"
                style={{ fontFamily: 'Roboto', fontWeight: 500, borderStyle: 'solid', borderColor: '#000', borderWidth: '1px 2px 2px 1px' }}
              >
                Subscribe
              </button>
            </div>
            <p className="text-sm text-gray-700 dark:text-gray-400 mt-3" style={{ fontFamily: 'Roboto', fontWeight: 400 }}>
              We respect your inbox and handle your data with care.
            </p> */}
            <div className="md:col-span-2">
            <h3 className="text-2xl font-bold mb-4">Logo</h3>

            {/* FIXED: text-gray-800 changed to dark:text-gray-300 for readability */}
            <p className="text-base text-gray-700 dark:text-gray-300 mb-6">
              Get design insights and industry updates delivered monthly.
            </p>

            {/* FIXED: removed forced white/black inline borders */}
            <div className="flex items-start gap-4 w-full">
              <input
                type="email"
                placeholder="Email address"
                className="flex-1 px-4 py-3 bg-gray-100 dark:bg-gray-800 
                           text-gray-900 dark:text-white
                           placeholder-gray-500 dark:placeholder-gray-400 
                           focus:outline-none border border-gray-400 dark:border-gray-600"
              />

              <button
                className="px-6 py-3 font-medium bg-black text-white 
                           dark:bg-white dark:text-black border border-gray-700"
              >
                Subscribe
              </button>
            </div>

            <p className="text-sm text-gray-700 dark:text-gray-400 mt-3">
              We respect your inbox and handle your data with care.
            </p>
          </div>

          {/* Footer Links - Right Columns */}
          <div>
            <h4 className="font-bold text-gray-900 dark:text-white mb-4" style={{ fontFamily: 'Roboto', fontWeight: 700 }}>
              Services
            </h4>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/about"
                  className="text-gray-900 dark:text-gray-300 hover:text-black dark:hover:text-white transition"
                  style={{ fontFamily: 'Roboto', fontWeight: 400 }}
                >
                  About us
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="text-gray-900 dark:text-gray-300 hover:text-black dark:hover:text-white transition"
                  style={{ fontFamily: 'Roboto', fontWeight: 400 }}
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  to="/blog"
                  className="text-gray-900 dark:text-gray-300 hover:text-black dark:hover:text-white transition"
                  style={{ fontFamily: 'Roboto, sans-serif', fontWeight: 400 }}
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-gray-900 dark:text-gray-300 hover:text-black dark:hover:text-white transition"
                  style={{ fontFamily: 'Roboto, sans-serif', fontWeight: 400 }}
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  className="text-gray-900 dark:text-gray-300 hover:text-black dark:hover:text-white transition"
                  style={{ fontFamily: 'Roboto, sans-serif', fontWeight: 400 }}
                >
                  Resources
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-gray-900 dark:text-white mb-4" style={{ fontFamily: 'Roboto, sans-serif', fontWeight: 700 }}>
              Legal
            </h4>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/privacy"
                  className="text-gray-900 dark:text-gray-300 hover:text-black dark:hover:text-white transition"
                  style={{ fontFamily: 'Roboto', fontWeight: 400 }}
                >
                  Privacy
                </Link>
              </li>
              <li>
                <Link
                  to="/terms"
                  className="text-gray-900 dark:text-gray-300 hover:text-black dark:hover:text-white transition"
                  style={{ fontFamily: 'Roboto', fontWeight: 400 }}
                >
                  Terms
                </Link>
              </li>
              <li>
                <Link
                  to="/cookies"
                  className="text-gray-900 dark:text-gray-300 hover:text-black dark:hover:text-white transition"
                  style={{ fontFamily: 'Roboto', fontWeight: 400 }}
                >
                  Cookies
                </Link>
              </li>
              <li>
                <Link
                  to="/support"
                  className="text-gray-900 dark:text-gray-300 hover:text-black dark:hover:text-white transition"
                  style={{ fontFamily: 'Roboto', fontWeight: 400 }}
                >
                  Support
                </Link>
              </li>
              <li>
                <Link
                  to="/faq"
                  className="text-gray-900 dark:text-gray-300 hover:text-black dark:hover:text-white transition"
                  style={{ fontFamily: 'Roboto', fontWeight: 400 }}
                >
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-gray-900 dark:text-white mb-4" style={{ fontFamily: 'Roboto, sans-serif', fontWeight: 700 }}>
              Follow us
            </h4>
            <div className="flex flex-col gap-5 md:justify-end">
              {/* Facebook */}
              <a href="#" className="flex items-center gap-4">
                <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-black text-white">
                  <svg width="20" height="25" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                    <path d="M15.12 8.5h1.88V5.5h-1.9c-1.88 0-3.12 1.1-3.12 3.12v1.38H9.5v2.5h2.48V19h2.77v-6.5h2.05l.4-2.5h-2.45V9.12c0-.6.16-.62.9-.62z" fill="#fff"/>
                  </svg>
                </span>
                <span style={{ fontFamily: 'Roboto', fontWeight: 400 }}>Facebook</span>
              </a>

              {/* Instagram */}
              <a href="#" className="flex items-center gap-4">
                <span className="inline-flex items-center justify-center w-6 h-6 bg-white text-gray-900">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                    <rect x="3" y="3.24" width="18" height="18" rx="4" stroke="#282424ff" strokeWidth="2.6" fill="none" />
                    <circle cx="12" cy="12" r="3.1" stroke="#0d0b0bff" strokeWidth="1.6" fill="none" />
                    <circle cx="17" cy="7" r="0.8" fill="#0a0a0aff" />
                  </svg>
                </span>
                <span style={{ fontFamily: 'Roboto', fontWeight: 400 }}>Instagram</span>
              </a>

              {/* X / Twitter as X */}
              <a href="#" className="flex items-center gap-4">
                <span className="inline-flex items-center justify-center w-6 h-6 bg-white text-gray-800">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                    <path d="M18 6L6 18" stroke="#0f0f0fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M6 6L18 18" stroke="#0f0f0fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
                <span style={{ fontFamily: 'Roboto', fontWeight: 400 }}>X</span>
              </a>

              {/* LinkedIn */}
              <a href="#" className="flex items-center gap-4">
                <span className="inline-flex items-center justify-center w-6 h-6 square-full bg-black text-white">
                  <svg width="24" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                    <path d="M4.98 3.5C4.98 4.6 4.08 5.5 2.98 5.5C1.88 5.5 1 4.6 1 3.5C1 2.4 1.9 1.5 3 1.5C4.1 1.5 4.98 2.4 4.98 3.5ZM1.5 8.5H4.5V20.5H1.5V8.5ZM8.5 8.5H11.2V10H11.3C11.8 9 13.3 7.8 15.5 7.8C19 7.8 19.5 10.2 19.5 13.2V20.5H16.5V13.9C16.5 12.2 16.4 10 14 10C11.6 10 11.2 11.9 11.2 13.8V20.5H8.5V8.5Z" fill="#fff" />
                  </svg>
                </span>
                <span style={{ fontFamily: 'Roboto', fontWeight: 400 }}>LinkedIn</span>
              </a>

              {/* YouTube */}
              {/* <a href="#" className="flex items-center gap-4">
                <span className="inline-flex items-center justify-center w-6 h-6 rect-full bg-black text-white">
                  <svg width="20" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                    <path d="M10 8L16 12L10 16V8Z" fill="#fff" />
                    <rect x="3" y="6" width="20" height="14" rx="2" stroke="#fff" strokeWidth="0" fill="none" />
                  </svg>
                </span>
                <span style={{ fontFamily: 'Roboto, sans-serif', fontWeight: 400 }}>YouTube</span>
              </a> */}
              {/* YouTube */}
              <a href="#" className="flex items-center gap-4">
                <span className="inline-flex items-center justify-center">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                    className="block"
                  >
                    <rect
                      x="2"
                      y="6"
                      width="20"
                      height="14"
                      rx="2"
                      fill="black"
                    />
                    <path d="M10 9L15 12L10 15V9Z" fill="white" />
                  </svg>
                </span>

                <span style={{ fontFamily: "Roboto", fontWeight: 400 }}>
                  YouTube
                </span>
              </a>

            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 dark:border-gray-00 pt-6 flex flex-col md:flex-row justify-between items-center gap-5">
          <p className="text-base text-gray-900 dark:text-gray-300" style={{ fontFamily: 'Roboto, sans-serif', fontWeight: 400 }}>
            © 2025 Automotive Design Studio. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link
              to="/privacy"
              className="text-base text-gray-900 dark:text-gray-300 hover:text-black dark:hover:text-white transition underline"
              style={{ fontFamily: 'Roboto, sans-serif', fontWeight: 400 }}
            >
              Privacy policy
            </Link>
            <Link
              to="/terms"
              className="text-base text-gray-900 dark:text-gray-300 hover:text-black dark:hover:text-white transition underline"
              style={{ fontFamily: 'Roboto, sans-serif', fontWeight: 400 }}
            >
              Terms of service
            </Link>
            <Link
              to="/cookies"
              className="text-base text-gray-900 dark:text-gray-300 hover:text-black dark:hover:text-white transition underline"
              style={{ fontFamily: 'Roboto, sans-serif', fontWeight: 400 }}
            >
              Cookie settings
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
