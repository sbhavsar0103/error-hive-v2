import React, { useState, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const megaMenu = {
    title: "Revolutionizing Industries With AI Power",
    cta: "Book A Consultation",
    services: [
      "AI Consultation",
      "Proof Of Concept",
      "MVP",
      "Product Development",
    ],
    capabilities: [
      "LLM",
      "Annotation",
      "Machine Learning",
      "Computer Vision",
      "Web App Development",
      "Deep Learning",
      "Data Science",
      "Generative AI",
    ],
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-black/80 backdrop-blur-xl shadow-lg"
          : "bg-black/40 backdrop-blur-md"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* LOGO */}
          <div className="text-2xl font-bold text-white">
            Error<span className="text-amber-500">Hive</span>
          </div>

          {/* DESKTOP MENU */}
          <div className="hidden md:flex items-center space-x-10">
            <a href="/" className="text-white hover:text-blue-400 transition">
              Home
            </a>

            {/* MEGA MENU */}
            <div
              className="relative"
              onMouseEnter={() => setOpenDropdown("services")}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              {/* Invisible hover buffer */}
              <div className="absolute -inset-x-24 top-0 h-[140px]" />

              <button className="relative z-10 flex items-center text-white hover:text-blue-400 transition">
                Services
                <ChevronDown
                  size={16}
                  className={`ml-1 transition-transform ${
                    openDropdown === "services" ? "rotate-180" : ""
                  }`}
                />
              </button>

              {openDropdown === "services" && (
                <div className="absolute left-1/2 mt-5 top-full pt-8 w-[1220px] -translate-x-1/2 rounded-2xl bg-neutral-900/95 backdrop-blur-xl border border-white/10 shadow-2xl p-8 z-20">
                  <div className="grid grid-cols-12 gap-6">
                    {/* LEFT CARD */}
                    <div className="col-span-4 rounded-xl bg-neutral-800 p-6 flex flex-col justify-between">
                      <h3 className="text-xl font-semibold text-white">
                        {megaMenu.title}
                      </h3>

                      <button className="mt-6 bg-amber-600 hover:bg-amber-500 text-white rounded-lg px-5 py-3 text-sm font-medium transition">
                        {megaMenu.cta} →
                      </button>
                    </div>

                    {/* SERVICES */}
                    <div className="col-span-3">
                      <h4 className="text-sm text-gray-400 mb-4">
                        Services
                      </h4>
                      <ul className="space-y-3">
                        {megaMenu.services.map((item, i) => (
                          <li
                            key={i}
                            className="text-white hover:text-blue-400 cursor-pointer transition"
                          >
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* VERTICAL DIVIDER */}
                    <div className="col-span-1 flex justify-center">
                      <span className="w-px h-full bg-gradient-to-b from-transparent via-amber-600/20 to-transparent" />
                    </div>

                    {/* CAPABILITIES */}
                    <div className="col-span-4">
                      <h4 className="text-sm text-gray-400 mb-4">
                        Capabilities
                      </h4>
                      <ul className="grid grid-cols-2 gap-x-4 gap-y-3">
                        {megaMenu.capabilities.map((item, i) => (
                          <li
                            key={i}
                            className="text-white hover:text-blue-400 cursor-pointer transition"
                          >
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <a href="/about" className="text-white hover:text-blue-400 transition">
              About Us
            </a>

            <a
              href="/contact"
              className="text-white hover:text-blue-400 transition"
            >
              Contact
            </a>

            <button className="ml-4 bg-white text-black px-5 py-2 rounded-full text-sm font-medium hover:bg-gray-200 transition">
              Let’s Talk
            </button>
          </div>

          {/* MOBILE BUTTON */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-white"
            >
              {isMobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </div>
      </div>

      {/* MOBILE MENU */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-black/95 backdrop-blur-xl border-t border-white/10">
          <div className="px-6 py-6 space-y-4">
            <a href="/" className="block text-white">
              Home
            </a>

            <div>
              <button
                onClick={() =>
                  setOpenDropdown(
                    openDropdown === "mobile-services"
                      ? null
                      : "mobile-services"
                  )
                }
                className="w-full flex justify-between items-center text-white"
              >
                Services
                <ChevronDown
                  size={16}
                  className={`transition-transform ${
                    openDropdown === "mobile-services" ? "rotate-180" : ""
                  }`}
                />
              </button>

              {openDropdown === "mobile-services" && (
                <div className="mt-3 pl-4 space-y-2 text-gray-300">
                  {[...megaMenu.services, ...megaMenu.capabilities].map(
                    (item, i) => (
                      <div key={i}>{item}</div>
                    )
                  )}
                </div>
              )}
            </div>

            <a href="/about" className="block text-white">
              About Us
            </a>
            <a href="/contact" className="block text-white">
              Contact
            </a>

            <button className="w-full mt-4 bg-amber-600 text-white py-3 rounded-lg">
              Let’s Talk
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;