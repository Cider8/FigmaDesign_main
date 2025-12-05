// import { Link } from "react-router-dom";
// import { useState } from "react";
// import { ChevronDown, Menu, X } from "lucide-react";
// import { ThemeToggle } from "@/components/ThemeToggle";

// export default function Header() {
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

//   return (
//     <header className="bg-white border-b border-gray-700">
//       <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-left justify-between">
//         {/* Desktop Menu */}
//         <div className="hidden md:flex items-left space-x-8">
//           <Link
//             to="/about"
//             className="text-gray-800 hover:text-gray-900 transition"
//           >
//             About us
//           </Link>
//           <Link
//             to="/services"
//             className="text-gray-800 hover:text-gray-900 transition"
//           >
//             Services
//           </Link>
//           <Link
//             to="/blog"
//             className="text-gray-800 hover:text-gray-900 transition"
//           >
//             Blog
//           </Link>
//           <div className="relative group">
//             <button className="text-gray-800 hover:text-gray-900 transition flex items-center gap-1">
//               Resources
//               <ChevronDown size={16} />
//             </button>
//           </div>
//         </div>

//         {/* Auth Buttons and Theme Toggle */}
//         <div className="hidden md:flex items-center space-x-3">
//           <Link
//             to="/sign-up"
//             className="px-4 py-2 border border-gray-900 text-gray-900 hover:bg-gray-50 transition rounded"
//           >
//             Sign up
//           </Link>
//           <Link
//             to="/login"
//             className="px-4 py-2 bg-gray-900 text-white hover:bg-gray-800 transition rounded"
//           >
//             Login
//           </Link>
//           <ThemeToggle />
//         </div>

//         {/* Mobile Menu Button */}
//         <button
//           className="md:hidden"
//           onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
//         >
//           {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
//         </button>
//       </nav>

//       {/* Mobile Menu */}
//       {isMobileMenuOpen && (
//         <div className="md:hidden border-t border-gray-200 bg-white">
//           <div className="px-4 py-4 space-y-3">
//             <Link
//               to="/about"
//               className="block text-gray-700 hover:text-gray-900 py-2"
//             >
//               About us
//             </Link>
//             <Link
//               to="/services"
//               className="block text-gray-700 hover:text-gray-900 py-2"
//             >
//               Services
//             </Link>
//             <Link
//               to="/blog"
//               className="block text-gray-700 hover:text-gray-900 py-2"
//             >
//               Blog
//             </Link>
//             <button className="block text-gray-700 hover:text-gray-900 py-2 w-full text-left">
//               Resources
//             </button>
//             <hr />
//             <Link
//               to="/sign-up"
//               className="block px-4 py-2 border border-gray-900 text-gray-900 text-center rounded"
//             >
//               Sign up
//             </Link>
//             <Link
//               to="/login"
//               className="block px-4 py-2 bg-gray-900 text-white text-center rounded"
//             >
//               Login
//             </Link>
//           </div>
//         </div>
//       )}
//     </header>
//   );
// }
import { Link } from "react-router-dom";
import { useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import { ThemeToggle } from "@/components/ThemeToggle";
import SignUpModal from "@/components/auth/SignUpModal";  // ⬅️ ADD THIS
import LoginUpModal from "@/components/auth/LoginUpModal";  // ⬅️ ADD THIS

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openSignup, setOpenSignup] = useState(false);  // ⬅️ ADD THIS
  const [openLogin, setOpenLogin] = useState(false);    // ⬅️ ADD THIS

  return (
    <header className="bg-white border-b border-gray-800">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-left justify-between">
        
        {/* Desktop Menu */}
        <div className="hidden md:flex items-left space-x-8">
          <Link to="/" className="text-gray-800 hover:text-gray-900 transition">
            About us
          </Link>
          <Link to="/" className="text-gray-800 hover:text-gray-900 transition">
            Services
          </Link>
          <Link to="/" className="text-gray-800 hover:text-gray-900 transition">
            Blog
          </Link>
          <div className="relative group">
            <button className="text-gray-800 hover:text-gray-900 transition flex items-center gap-1">
              Resources
              <ChevronDown size={16} />
            </button>
          </div>
        </div>

        {/* Auth Buttons + Theme Toggle */}
        <div className="hidden md:flex items-center space-x-3">

          {/* SIGNUP NOW OPENS MODAL */}
          <button
            onClick={() => setOpenSignup(true)}
            className="px-4 py-2 border border-gray-900 text-gray-900 hover:bg-gray-50 transition rounded"
          >
            Sign up
          </button>

          {/* <Link
            to="/login"
            className="px-4 py-2 bg-gray-900 text-white hover:bg-gray-800 transition rounded"
          >
            Login
          </Link> */}
          {/* LOGIN NOW OPENS MODAL */}
          <button
            onClick={() => setOpenLogin(true)}
            className="px-4 py-2 bg-gray-900 text-white hover:bg-gray-800 transition rounded"
          >
            Login
          </button>
          <ThemeToggle />
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden border-t border-gray-200 bg-white">
          <div className="px-4 py-4 space-y-3">
            <Link to="/about" className="block text-gray-700 hover:text-gray-900 py-2">
              About us
            </Link>
            <Link to="/services" className="block text-gray-700 hover:text-gray-900 py-2">
              Services
            </Link>
            <Link to="/blog" className="block text-gray-700 hover:text-gray-900 py-2">
              Blog
            </Link>

            <button className="block text-gray-700 hover:text-gray-900 py-2 w-full text-left">
              Resources
            </button>

            <hr />

            {/* Mobile Signup (opens modal too) */}
            <button
              onClick={() => {
                setOpenSignup(true);
                setIsMobileMenuOpen(false);
              }}
              className="block px-4 py-2 border border-gray-900 text-gray-900 text-center rounded"
            >
              Sign up
            </button>

            {/* <Link
              to="/login"
              className="block px-4 py-2 bg-gray-900 text-white text-center rounded"
            >
              Login
            </Link> */}
            <button
              onClick={() => {
                setOpenLogin(true);
                setIsMobileMenuOpen(false);
              }}
              className="block px-4 py-2 border border-gray-900 text-gray-900 text-center rounded"
            >
              Login
            </button>
          </div>
        </div>
      )}

      {/* SIGNUP MODAL INSTANCE */}
      <SignUpModal
        isOpen={openSignup}
        onClose={() => setOpenSignup(false)}
        onSuccess={() => {
          console.log("Signup Success → redirect here");
        }}
      />
      
      {/* LOGIN MODAL INSTANCE */}
      <LoginUpModal
        isOpen={openLogin}
        onClose={() => setOpenLogin(false)}
        onSuccess={() => {
          console.log("Login Success → redirect here");
        }}
      />
      
    </header>
  );
}

             