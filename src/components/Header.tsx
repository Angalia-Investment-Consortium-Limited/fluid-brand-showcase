import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import rakestarLogo from "@/assets/rakestar-white-logo.png";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 bg-white backdrop-blur-md shadow-soft border-b border-border/50 translate-y-0`}
    >
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo - Only visible when scrolled */}

          <a
            href="#home"
            className="flex items-center space-x-3 fade-in-left hover:opacity-80 transition-opacity"
          >
            <img
              src={rakestarLogo}
              alt="Rakestar Group Logo"
              className="h-10 w-auto transition-transform duration-300 hover:scale-105"
            />
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <a
                key={item.name}
                href={item.href}
                className={`text-sm font-medium text-foreground/80 hover:text-primary transition-colors duration-300 fade-in-up stagger-${
                  index + 1
                }`}
              >
                {item.name}
              </a>
            ))}
            <a href="#contact">
              <Button
                variant="default"
                className="fade-in-up stagger-6 hover-glow"
              >
                Contact
              </Button>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-6 border-t border-border/50 pt-6 animate-fade-in-up">
            <div className="flex flex-col space-y-4">
              {navItems.map((item, index) => (
                <a
                  key={item.name}
                  href={item.href}
                  className={`text-sm font-medium text-foreground/80 hover:text-primary transition-colors fade-in-up stagger-${
                    index + 1
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <a href="#contact">
                <Button variant="default" className="mt-4 w-fit hover-glow">
                  Contact
                </Button>
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
