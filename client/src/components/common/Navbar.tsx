"use client";
import { ChevronRight, Menu, X, Search, MapPin, Watch } from "lucide-react";
import { useEffect, useState, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navbarRef = useRef<HTMLDivElement>(null);
  let [openNav, setOpenNav] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    let lastScrollTop = 0;

    const handleScroll = () => {
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;

      if (!navbarRef.current) return;

      setIsScrolled(scrollTop > 50);

      if (scrollTop > lastScrollTop && scrollTop > 90) {
        ////hide while scrolling up
        // navbarRef.current.style.top = "-120px";
        navbarRef.current.style.transform = "translateY(-100%)";
      } else {
        /////show while going down
        // navbarRef.current.style.top = "0";
        navbarRef.current.style.transform = "translateY(0)";
      }

      lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <header
      className={`fixed top-0 w-full z-60 text-white h-[90px] transition-all duration-300 ease-in-out ${
        isScrolled ? "bg-white shadow-md" : "bg-transparent"
      }`}
      ref={navbarRef}
    >
      <nav className="px-6 sm:px-8 lg:px-10">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <button
            type="button"
            aria-label="Hamburger menu"
            className={`p-3 cursor-pointer hover:opacity-35 transition-colors ${
              isScrolled ? "text-black" : "text-white"
            }`}
          >
            <svg
              viewBox="0 0 200 200"
              width="30"
              height="30"
              stroke="currentColor"
            >
              <g>
                <line
                  x1="0"
                  y1="100"
                  x2="200"
                  y2="100"
                  strokeWidth="10"
                  strokeLinecap="round"
                />
                <line
                  x1="0"
                  y1="150"
                  x2="200"
                  y2="150"
                  strokeWidth="10"
                  strokeLinecap="round"
                />
              </g>
            </svg>
          </button>

          <div className="w-1/6 fill-[#333] hover:opacity-35 cursor-pointer">
            <img
              className=""
              src="https://www.audemarspiguet.com/etc.clientlibs/ap-com/ui/clientlibs/publish/resources/static/audemars-piguet-logo-white.svg"
              // src={
              //   isScrolled
              //     ? "https://www.audemarspiguet.com/etc.clientlibs/ap-com/ui/clientlibs/publish/resources/static/audemars-piguet-logo.svg"
              //     : "https://www.audemarspiguet.com/etc.clientlibs/ap-com/ui/clientlibs/publish/resources/static/audemars-piguet-logo-white.svg"
              // }
              alt="Audemars Piguet logo"
            />
          </div>

          <div className="flex items-center space-x-4">
            <Watch
              className={`w-6 h-6 cursor-pointer hover:opacity-35 transition-colors ${
                isScrolled ? "text-black" : "text-white"
              }`}
            />
            <Search
              className={`w-6 h-6 cursor-pointer hover:opacity-35 transition-colors ${
                isScrolled ? "text-black" : "text-white"
              }`}
            />
            <MapPin
              className={`w-6 h-6 cursor-pointer hover:opacity-35 transition-colors ${
                isScrolled ? "text-black" : "text-white"
              }`}
            />
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden"
            >
              {menuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden bg-black border-t border-gray-800 px-6 py-4">
            <a href="#" className="block py-2 hover:text-gray-300">
              Collections
            </a>
            <a href="#" className="block py-2 hover:text-gray-300">
              Watches
            </a>
            <a href="#" className="block py-2 hover:text-gray-300">
              Heritage
            </a>
            <a href="#" className="block py-2 hover:text-gray-300">
              Hi-Care
            </a>
            <a href="#" className="block py-2 hover:text-gray-300">
              Boutiques
            </a>
          </div>
        )}
      </nav>
    </header>
  );
}
