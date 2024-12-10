import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

export const NavHeader = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/80 backdrop-blur-lg shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="text-xl font-semibold text-secondary hover:text-primary transition-colors duration-300 cursor-pointer">
            InvestorTinder
          </div>
          <nav className="hidden md:flex items-center space-x-8">
            <a
              href="#features"
              className="text-secondary/80 hover:text-secondary transition-colors duration-300 relative after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-primary after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300"
            >
              Features
            </a>
            <a
              href="#how-it-works"
              className="text-secondary/80 hover:text-secondary transition-colors duration-300 relative after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-primary after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300"
            >
              How it works
            </a>
            <Button
              variant="ghost"
              className="text-secondary hover:text-secondary/80 hover:scale-105 transition-all duration-300"
            >
              Log in
            </Button>
            <Button className="bg-primary text-white hover:bg-primary/90 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-primary/25">
              Get Started
            </Button>
          </nav>
          <Button
            variant="ghost"
            className="md:hidden hover:scale-105 transition-transform duration-300"
            size="icon"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="4" x2="20" y1="12" y2="12" />
              <line x1="4" x2="20" y1="6" y2="6" />
              <line x1="4" x2="20" y1="18" y2="18" />
            </svg>
          </Button>
        </div>
      </div>
    </header>
  );
};