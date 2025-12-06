import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Mail, Phone, MapPin } from "lucide-react";
import { useState, useRef, useEffect } from "react";

export default function Index() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    agreeTerms: false,
  });
  const [activeCard, setActiveCard] = useState<number | null>(null);
  const statsRef = useRef<HTMLElement | null>(null);
  const startedRef = useRef(false);
  const [countProjects, setCountProjects] = useState(0);
  // Years and partners are static — do not animate
  const [countYears] = useState(18);
  const [countPartners] = useState(45);

  const handleFormChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value, type } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]:
        type === "checkbox" ? (e.target as HTMLInputElement).checked : value,
    }));
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setFormData({ name: "", email: "", message: "", agreeTerms: false });
  };

  useEffect(() => {
    const el = statsRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !startedRef.current) {
            startedRef.current = true;
            // animate only Projects (start from 1) with a slower duration
            const duration = 3000; // ms — slower
            const start = performance.now();
            let rafId: number | null = null;

            const easeOutCubic = (p: number) => 1 - Math.pow(1 - p, 3);

            const step = (t: number) => {
              const progress = Math.min((t - start) / duration, 1);
              const eased = easeOutCubic(progress);
              const projects = Math.max(1, Math.round(eased * 150));

              if (progress >= 1) {
                setCountProjects(150);
                if (rafId) cancelAnimationFrame(rafId);
                return;
              }

              setCountProjects(projects);
              rafId = requestAnimationFrame(step);
            };

            rafId = requestAnimationFrame(step);
            // disconnect observer after start
            observer.disconnect();
          }
        });
      },
      { threshold: 0.25 },
    );

    observer.observe(el);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-gray-950">
      <Header />

      {/* Hero Section */}
      <section className="bg-white dark:bg-gray-950 text-gray-900 dark:text-white py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl lg:text-7xl text-gray-900 dark:text-white font-bold mb-6" style={{ fontFamily: 'Roboto', fontWeight: 700, lineHeight: '1.2' }}>
            Design the future of<br />automotive innovation
          </h1>
          <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 mb-8 max-w-3xl mx-auto" style={{ fontFamily: 'Roboto', fontWeight: 400, lineHeight: '1.6' }}>
            We shape tomorrow's vehicles through precision design and cutting-edge technology. From concept to reality, we deliver solutions that move the industry forward.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="px-8 py-3 bg-black dark:bg-white text-white dark:text-black hover:bg-gray-800 dark:hover:bg-gray-100 transition rounded font-medium" style={{ fontFamily: 'Roboto', fontWeight: 500 }}>
              Explore
            </button>
            <button className="px-8 py-3 bg-white dark:bg-gray-800 text-gray-900 dark:text-white border-2 border-gray-900 dark:border-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition rounded font-medium" style={{ fontFamily: 'Roboto', fontWeight: 500 }}>
              Learn more
            </button>
          </div>
        </div>
      </section>

      {/* Car Image Section */}
      <section className="w-full  py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <img
            src="https://cdn.builder.io/api/v1/image/assets%2F0755ff6263e74c71a9c43f108545303d%2Fed87258741ce48b98994f26a6fa224b1?format=webp&width=800"
            alt="Automotive design"
            className="w-full h-full object-cover"
          />
        </div>
      </section>

      {/* Capabilities Section */}
      <section className="py-16 md:py-24 bg-white dark:bg-gray-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-gray-900 dark:text-gray-400 text-sm font-semibold mb-4" style={{ fontFamily: 'Roboto', fontWeight: 600, letterSpacing: '0.05em' }}>
              Capabilities
            </p>
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-8" style={{ fontFamily: 'Roboto', fontWeight: 700, lineHeight: '1.2' }}>
              What we bring to your project
            </h2>
            <p className="text-lg md:text-xl text-gray-800 dark:text-gray-300 max-w-3xl mx-auto" style={{ fontFamily: 'Roboto', fontWeight: 400, lineHeight: '1.6' }}>
              Our expertise spans the full spectrum of automotive design, from initial sketches to production-ready models.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div
              className={
                `bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-8 hover:shadow-lg dark:hover:shadow-xl transition text-center cursor-pointer transform ${
                  activeCard !== null && activeCard !== 0
                    ? "opacity-0 pointer-events-none translate-y-2"
                    : "opacity-100"
                }`
              }
              onClick={() => setActiveCard((s) => (s === 0 ? null : 0))}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") setActiveCard((s) => (s === 0 ? null : 0));
              }}
            >
              <div className="mb-4">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets%2F0755ff6263e74c71a9c43f108545303d%2F3e8beb4d0e9b4ecfa092c0cc15a006a3?format=webp&width=800"
                  alt="Concept development"
                  className="w-394 h-315 object-cover rounded"
                />
              </div>
              <h3 className="text-base md:text-lg font-semibold text-gray-900 dark:text-white mb-2" style={{ fontFamily: 'Roboto, sans-serif', fontWeight: 600 }}>
                Concept development
              </h3>
              <p className="text-sm text-gray-800 dark:text-gray-400 max-w-xs mx-auto" style={{ fontFamily: 'Roboto, sans-serif', fontWeight: 400, lineHeight: 1.4 }}>
                We translate your vision into compelling design directions that capture market potential.
              </p>
            </div>

            {/* Card 2 */}
            <div
              className={
                `bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-8 hover:shadow-lg dark:hover:shadow-xl transition text-center cursor-pointer transform ${
                  activeCard !== null && activeCard !== 1
                    ? "opacity-0 pointer-events-none translate-y-2"
                    : "opacity-100"
                }`
              }
              onClick={() => setActiveCard((s) => (s === 1 ? null : 1))}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") setActiveCard((s) => (s === 1 ? null : 1));
              }}
            >
              <div className="mb-4">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets%2F0755ff6263e74c71a9c43f108545303d%2Fe2a40c0607ad42b6bb5753f1da4324df?format=webp&width=800"
                  alt="Digital modelling"
                  className="w-394 h-315 object-cover rounded"
                />
              </div>
              <h3 className="text-base md:text-lg font-semibold text-gray-900 dark:text-white mb-2" style={{ fontFamily: 'Roboto, sans-serif', fontWeight: 600 }}>
                Digital modelling
              </h3>
              <p className="text-sm text-gray-800 dark:text-gray-400 max-w-xs mx-auto" style={{ fontFamily: 'Roboto, sans-serif', fontWeight: 400, lineHeight: 1.4 }}>
                Advanced 3D visualization and rendering bring your designs to life with photorealistic precision.
              </p>
            </div>

            {/* Card 3 */}
            <div
              className={
                `bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-8 hover:shadow-lg dark:hover:shadow-xl transition text-center cursor-pointer transform ${
                  activeCard !== null && activeCard !== 2
                    ? "opacity-0 pointer-events-none translate-y-2"
                    : "opacity-100"
                }`
              }
              onClick={() => setActiveCard((s) => (s === 2 ? null : 2))}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") setActiveCard((s) => (s === 2 ? null : 2));
              }}
            >
              <div className="mb-4">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets%2F0755ff6263e74c71a9c43f108545303d%2F16aa6ec92c174e6b9e36d9d33eb023c6?format=webp&width=800"
                  alt="Prototyping"
                  className="w-394 h-315 object-cover rounded"
                />
              </div>
              <h3 className="text-base md:text-lg font-semibold text-gray-900 dark:text-white mb-2" style={{ fontFamily: 'Roboto, sans-serif', fontWeight: 600 }}>
                Prototyping
              </h3>
              <p className="text-sm text-gray-800 dark:text-gray-400 max-w-xs mx-auto" style={{ fontFamily: 'Roboto, sans-serif', fontWeight: 400, lineHeight: 1.4 }}>
                From clay models to functional prototypes, we validate design intent before production.
              </p>
            </div>
          </div>

          <div className="text-center mt-12 font-roboto">
            <a
              href="/services"
              className="inline-flex items-center gap-3  text-gray-800 dark:text-white"
            >
              {/* Services Box */}
              <span className="px-4 py-2 border border-gray-500 dark:border-gray-600 ">
                Services
              </span>

              {/* Arrow Box */}
              <span className="px-3 py-2 border border-gray-500 dark:border-gray-600 "> Arrow
                &gt;
              </span>
            </a>
          </div>

        </div>
      </section>

      {/* Stats Section */}
      <section ref={(el) => (statsRef.current = el)} className="bg-gray-900 dark:bg-black text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-2 text-white">
            Proven track record in automotive design excellence
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-12">
            <div>
              <p className="text-5xl md:text-6xl font-bold mb-2 text-white">
                {countProjects >= 150 ? "150+" : `${countProjects}+`}
              </p>
              <p className="text-gray-300 dark:text-gray-400">
                Projects delivered
              </p>
            </div>
            <div>
              <p className="text-5xl md:text-6xl font-bold mb-2 text-white">
                {countYears}
              </p>
              <p className="text-gray-300 dark:text-gray-400">
                Years in industry
              </p>
            </div>
            <div>
              <p className="text-5xl md:text-6xl font-bold mb-2 text-white">
                {countPartners}
              </p>
              <p className="text-gray-300 dark:text-gray-400">
                Global partners
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 md:py-24 bg-white dark:bg-gray-950" style={{ fontFamily: 'Roboto' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 items-start">
            {/* Left: Contact info */}
            <div>
              <p className="text-sm font-semibold text-gray-900 dark:text-gray-300 mb-4">Connect</p>
              <h2 className="text-6xl md:text-7xl font-bold text-gray-900 dark:text-white mb-6">Get in touch</h2>
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-10">We're ready to discuss your next design challenge.</p>

              <div className="space-y-8">
                <div className="flex items-center gap-6">
                  <Mail size={22} className="text-gray-900 dark:text-gray-300" />
                  <a href="mailto:studio@atomicdesign.co.in" className="text-base text-gray-900 dark:text-gray-300 underline">studio@atomicdesign.co.in</a>
                </div>

                <div className="flex items-center gap-6">
                  <Phone size={22} className="text-gray-900 dark:text-gray-300" />
                  <a href="tel:+919955501471" className="text-base text-gray-900 dark:text-gray-300 underline">+1 91 99555 01471</a>
                </div>

                <div className="flex items-center gap-6">
                  <MapPin size={22} className="text-gray-900 dark:text-gray-300" />
                  <p className="text-base text-gray-900 dark:text-gray-300">Atomic Design, HSR Layout Bangalore</p>
                </div>
              </div>
            </div>

            {/* Right: Boxed form (no outer border) */}
              <div className="w-[600px] p-8 bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700">
                <form onSubmit={handleFormSubmit} className="flex flex-col gap-6">
                  <div className="space-y-6">
                    <div>
                      <label className="block text-sm text-gray-900 dark:text-gray-300 mb-2">Name</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleFormChange}
                        placeholder=""
                        className="w-full border border-black dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 px-4 h-12 rounded-none"
                      />
                    </div>

                    <div>
                      <label className="block text-sm text-gray-900 dark:text-gray-300 mb-2">Email</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleFormChange}
                        placeholder=""
                        className="w-full border border-black px-4 h-12 rounded-none"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm text-gray-900 mb-2">Message</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleFormChange}
                      placeholder="Tell us about your project"
                      className="w-full border border-black dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400 px-4 py-5 rounded-none resize-none h-[212px]"
                    />
                  </div>

                  <div className="flex items-center gap-3">
                    <input
                      id="agreeTerms"
                      type="checkbox"
                      name="agreeTerms"
                      checked={formData.agreeTerms}
                      onChange={handleFormChange}
                      className="h-5 w-5 border border-black dark:border-gray-600 bg-white dark:bg-gray-800"
                    />
                    <label htmlFor="agreeTerms" className="text-sm text-gray-900 dark:text-gray-300">I agree to the terms</label>
                  </div>

                  <div>
                    <button type="submit" className="px-8 py-3 border border-black dark:border-gray-600 rounded-none">Send</button>
                  </div>
                </form>
              </div>
            {/* </div> */}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
