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

  // useEffect(() => {
  //   const navbar = navbarRef.current;
  //   if (!navbar) return;

  //   const scrollTrigger = ScrollTrigger.create({
  //     start: "top -80",
  //     end: 99999,
  //     onUpdate: (self) => {
  //       // Don't animate if mobile menu is open
  //       if (openNav) return;
  //       ///so we use self-direction to detect scroll, -1 for up 1 for down
  //       if (self.direction === -1) {
  //         // while up show navbar
  //         gsap.to(navbar, {
  //           yPercent: 0,
  //           duration: 0.5,
  //           ease: "power2.out",
  //         });
  //       } else {
  //         // while down hide navbar
  //         gsap.to(navbar, {
  //           yPercent: -100,
  //           duration: 0.5,
  //           ease: "power2.out",
  //         });
  //       }
  //     },
  //   });

  //   // Cleanup
  //   return () => {
  //     scrollTrigger.kill();
  //   };
  // }, [openNav]);
  // () =>{
  //   let lastScollTop = 0,
  //   navbar = document.getElementById("navbar")
  //   window.addEventListener("scroll", function(){
  //     let scrollTop = this.window.pageYOffset || document.documentElement.scrollTop
  //     if(scrollTop > lastScollTop){
  //       navbar.style.top='-120px'
  //     }else{
  //       navbar.style.top='0'
  //     }
  //     lastScollTop = scrollTop
  //   })
  // }
  useEffect(() => {
    let lastScrollTop = 0;

    const handleScroll = () => {
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;

      if (!navbarRef.current) return;

      if (scrollTop > lastScrollTop) {
        // scrolling down → hide
        navbarRef.current.style.top = "-120px";
      } else {
        // scrolling up → show
        navbarRef.current.style.top = "0";
      }

      lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // avoid negative scroll
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <header
      className="fixed top-0 w-full z-60 bg-transparent text-white h-[120px]"
      ref={navbarRef}
    >
      <nav className="px-6 sm:px-8 lg:px-10">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <button
            type="button"
            aria-label="Hamburger menu"
            className="p-3 text-white cursor-pointer hover:opacity-35"
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
              className="ap-header__logo-image ap-header__logo-image--dark-theme"
              src="https://www.audemarspiguet.com/etc.clientlibs/ap-com/ui/clientlibs/publish/resources/static/audemars-piguet-logo-white.svg"
              alt="Audemars Piguet logo"
            />
          </div>

          <div className="flex items-center space-x-4">
            <Watch className="w-6 h-6 cursor-pointer hover:opacity-35 transition text-white" />
            <Search className="w-6 h-6 cursor-pointer hover:opacity-35 transition text-white" />
            <MapPin className="w-6 h-6 cursor-pointer hover:opacity-35 transition text-white" />
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
