import { useState } from "react";
import { createPortal } from "react-dom";
import { X } from "lucide-react";

interface SignUpModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess: () => void; // redirect here
}

export default function SignUpModal({ isOpen, onClose, onSuccess }: SignUpModalProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    agreeTerms: false,
  });

  if (!isOpen) return null;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]:
        type === "checkbox" ? (e.target as HTMLInputElement).checked : value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Sign up:", formData);

    // simulate signup
    setTimeout(() => {
      onSuccess(); // redirect after signup
      onClose();
    }, 800);
  };

  return createPortal(
    <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-[999] px-4">
      <div className="bg-white dark:bg-gray-900 w-full max-w-md rounded-xl shadow-xl p-8 animate-scaleIn relative">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-700 dark:text-gray-300 hover:text-black"
        >
          <X size={22} />
        </button>

        <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">
          Sign up
        </h2>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="text-sm font-semibold dark:text-white">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full mt-1 px-4 py-3 border border-gray-900 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800 focus:ring-2 focus:ring-gray-900"
              required
            />
          </div>

          <div>
            <label className="text-sm font-semibold dark:text-white">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full mt-1 px-4 py-3 border border-gray-900 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800 focus:ring-2 focus:ring-gray-900"
              required
            />
          </div>

          <div>
            <label className="text-sm font-semibold dark:text-white">Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full mt-1 px-4 py-3 border border-gray-900 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800 focus:ring-2 focus:ring-gray-900"
              required
            />
          </div>

          <div>
            <label className="text-sm font-semibold dark:text-white">
              Confirm Password
            </label>
            <input
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              className="w-full mt-1 px-4 py-3 border border-gray-900 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800 focus:ring-2 focus:ring-gray-900"
              required
            />
          </div>

          
            <div className="flex items-center gap-2">
                <input
                    type="checkbox"
                    name="agreeTerms"
                    checked={formData.agreeTerms}
                    onChange={handleChange}
                    className="w-5 h-5 border border-gray-900 dark:border-gray-700 rounded-sm appearance-none checked:bg-gray-900 checked:border-gray-900 dark:checked:bg-white dark:checked:border-white"
                    required
                />

                <p className="text-gray-900 dark:text-gray-300 text-sm">
                    I agree to the terms
                </p>
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
