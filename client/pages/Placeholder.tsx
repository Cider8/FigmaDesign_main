import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Link } from "react-router-dom";

interface PlaceholderProps {
  title: string;
}

export default function Placeholder({ title }: PlaceholderProps) {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Header />

      <div className="flex-1 max-w-4xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-12 md:py-20 flex flex-col items-center justify-center text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          {title}
        </h1>
        <p className="text-lg text-gray-600 mb-8 max-w-2xl">
          This page is coming soon. Continue prompting to fill in the content
          for this page.
        </p>
        <Link
          to="/"
          className="px-8 py-3 bg-gray-900 text-white rounded hover:bg-gray-800 transition font-medium"
        >
          Back to Home
        </Link>
      </div>

      <Footer />
    </div>
  );
}
