import { Link } from "react-router-dom";
//import { Facebook, Instagram, Linkedin, Twitter, Youtube } from "lucide-react";

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
            <div className="max-w-[500px] h-[186px] md:col-span-2">
            <h3 className="text-2xl font-bold mb-4 font-roboto italic flex items-center">
              <img 
                src="/icons/Logo.svg" 
                alt="Logo" 
                className="h-8 w-auto"
              />
            </h3>


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
                className="px-6 py-3 font-medium bg-white text-black 
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
                <img
                  src="/icons/Facebook.svg"
                  alt="Facebook"
                  className="w-6 h-6"
                  aria-hidden={false}
                />
                <span style={{ fontFamily: 'Roboto', fontSize: 'max-w-[61px] h-[21px]', fontWeight: 400 }}>Facebook</span>
              </a>

              {/* Instagram */}
              <a href="#" className="flex items-center gap-4">
                <img
                  src="/icons/Instagram.svg"
                  alt="Instagram"
                  className="w-6 h-6"
                  aria-hidden={false}
                />
                <span className="text-sm" style={{ fontFamily: 'Roboto', fontWeight: 400 }}>
                  Instagram
                </span>
              </a>


              {/* X / Twitter as X */}
              <a href="#" className="flex items-center gap-4">
                <img
                  src="/icons/X.svg"
                  alt="X"
                  className="w-6 h-6"
                  aria-hidden={false}
                />
                
                <span className="text-sm" style={{ fontFamily: 'Roboto', fontSize: 'max-w-[9px] h-[21px]', fontWeight: 400 }}>X</span>
              </a>

              {/* LinkedIn */}
              <a href="#" className="flex items-center gap-4">
                  <img
                    src="/icons/linkedin.svg"
                    alt="Linkedin"
                    className="w-6 h-6"
                    aria-hidden={false}
                  />
                
                <span style={{ fontFamily: 'Roboto', fontSize: 'max-w-[53px] h-[21px]', fontWeight: 400 }}>LinkedIn</span>
              </a>

              {/* YouTube */}
              
              <a href="#" className="flex items-center gap-4">
                <img
                  src="/icons/YouTube.svg"
                  alt="YouTube"
                  className="w-6 h-6"
                  aria-hidden={false}
                />

                <span style={{ fontFamily: "Roboto", fontSize: "max-w-[55px] h-[21px]", fontWeight: 400 }}>
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
