
import { useState } from "react";
import { createPortal } from "react-dom";
import { X } from "lucide-react";

export default function LoginUpModal({ isOpen, onClose, onSuccess }) {
  const [formData, setFormData] = useState({ email: "", password: "" });

  if (!isOpen) return null;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Login:", formData);

    setTimeout(() => {
      onSuccess?.();
      onClose();
    }, 500);
  };

  return createPortal(
    <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-[999] px-4">
        <div className="bg-white dark:bg-gray-900 text-black dark:text-white 
                  w-[375px] p-6 pb-8 shadow-md 
                  border border-gray-300 dark:border-gray-700 relative">


        {/* Close button */}
        <button onClick={onClose} className="absolute top-3 right-3 text-gray-600 hover:text-black">
          <X size={22} />
        </button>

        {/* Title */}
        <h2 className="text-lg font-semibold mb-6">login in</h2>

        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Email */}
          <div>
            <label className="text-sm">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full mt-1 px-3 py-2 border border-black rounded-none"
              required
            />
          </div>

          {/* Password */}
          <div>
            <label className="text-sm">Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full mt-1 px-3 py-2 border border-black rounded-none"
              required
            />
          </div>

          {/* Send button */}
          <button
            type="submit"
            className="bg-black text-white px-6 py-2 mt-2"
          >
            Send
          </button>
        </form>

      </div>
    </div>,
    document.body
  );
}
