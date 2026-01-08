import { Link, useLocation } from "react-router-dom";
import { Heart, Menu, X } from "lucide-react";
import { useState } from "react";
import { Button } from "./ui/button";

const navLinks = [
  { href: "/", label: "Главная" },
  { href: "/profiles", label: "Анкеты" },
  { href: "/cities", label: "Города" },
  { href: "/new", label: "Новые" },
  { href: "/online", label: "Онлайн" },
  { href: "/about", label: "О нас" },
  { href: "/rules", label: "Правила" },
  { href: "/faq", label: "FAQ" },
  { href: "/contacts", label: "Контакты" },
];

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass-effect">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 rounded-full gradient-primary flex items-center justify-center group-hover:scale-110 transition-transform">
              <Heart className="w-5 h-5 text-primary-foreground" fill="currentColor" />
            </div>
            <span className="text-xl font-serif font-semibold tracking-wide">
              Love<span className="gradient-text">Meet</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={`nav-link text-sm font-medium ${
                  location.pathname === link.href ? "text-foreground" : ""
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="lg:hidden py-4 border-t border-border animate-fade-in">
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                    location.pathname === link.href
                      ? "bg-primary/10 text-primary"
                      : "text-muted-foreground hover:text-foreground hover:bg-secondary"
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};
