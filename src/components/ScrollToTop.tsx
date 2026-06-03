"use client";

import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

const ScrollToTop = () => {
     const [isVisible, setIsVisible] = useState(false);

     useEffect(() => {
          const handleScroll = () => setIsVisible(window.scrollY > 650);

          handleScroll();
          window.addEventListener("scroll", handleScroll);

          return () => window.removeEventListener("scroll", handleScroll);
     }, []);

     return (
          <button
               type="button"
               aria-label="Scroll to top"
               onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
               className={`fixed bottom-6 right-5 z-40 flex h-12 w-12 items-center justify-center rounded-full bg-[#005A31] text-white shadow-[0_18px_40px_rgba(0,90,49,0.28)] ring-1 ring-white/30 transition-all duration-300 hover:-translate-y-1 hover:bg-[#F38500] active:scale-95 sm:bottom-8 sm:right-8 ${
                    isVisible ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-4 opacity-0"
               }`}
          >
               <ArrowUp className="h-5 w-5" />
          </button>
     );
};

export default ScrollToTop;
