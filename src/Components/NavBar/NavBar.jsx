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

  // ✅ All nav items in one array
  const navItems = [
    { label: "Home", href: "/" },
    {
      label: "Services",
      submenu: [
        "Python Development",
        "AI",
        "LLM",
        "Web Development",
        "Machine Learning",
        "Data Science",
        "Cloud Solutions",
        "API Development",
      ],
    },
    { label: "About Us", href: "/about" },
    { label: "Contact Us", href: "/contact" },
  ];

  // Helper for toggling dropdown
  const toggleDropdown = (label) => {
    setOpenDropdown((prev) => (prev === label ? null : label));
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-black/80 backdrop-blur-md shadow-lg"
          : "bg-gray-800/30 backdrop-blur-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center">
            <span className="text-2xl font-bold text-amber-500">
              Error-Hive Solution
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item, index) =>
              item.submenu ? (
                <div
                  key={index}
                  className="relative group"
                  onMouseEnter={() => setOpenDropdown(item.label)}
                  onMouseLeave={() => setOpenDropdown(null)}
                >
                  <button
                    className="text-white hover:text-amber-500 transition-colors duration-200 flex items-center"
                  >
                    {item.label}
                    <ChevronDown
                      size={16}
                      className={`ml-1 transition-transform duration-200 ${
                        openDropdown === item.label ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {openDropdown === item.label && (
                    <div className="absolute top-full left-0 mt-2 w-56 bg-black/90 backdrop-blur-md rounded-lg shadow-xl py-2 border border-amber-500/20">
                      {item.submenu.map((sub, subIndex) => (
                        <a
                          key={subIndex}
                          href="#services"
                          className="block px-4 py-2 text-white hover:bg-amber-500/20 hover:text-amber-500 transition-colors duration-200"
                        >
                          {sub}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <a
                  key={index}
                  href={item.href}
                  className="text-white hover:text-amber-500 transition-colors duration-200"
                >
                  {item.label}
                </a>
              )
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-white hover:text-amber-500 transition-colors"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-gray-900/95 backdrop-blur-md border-t border-amber-500/20">
          <div className="px-4 py-4 space-y-3">
            {navItems.map((item, index) =>
              item.submenu ? (
                <div key={index}>
                  <button
                    className="w-full text-left text-white hover:text-amber-500 transition-colors duration-200 py-2 flex items-center justify-between"
                    onClick={() => toggleDropdown(item.label)}
                  >
                    {item.label}
                    <ChevronDown
                      size={16}
                      className={`transition-transform duration-200 ${
                        openDropdown === item.label ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {openDropdown === item.label && (
                    <div className="pl-4 space-y-2 mt-2">
                      {item.submenu.map((sub, subIndex) => (
                        <a
                          key={subIndex}
                          href="#services"
                          className="block text-gray-300 hover:text-amber-500 transition-colors duration-200 py-1"
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          {sub}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <a
                  key={index}
                  href={item.href}
                  className="block text-white hover:text-amber-500 transition-colors duration-200 py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label}
                </a>
              )
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;