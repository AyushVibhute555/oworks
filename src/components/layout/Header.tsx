import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { SlideTabs } from "@/components/ui/slide-tabs";
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from "framer-motion";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Services", path: "/services" },
  { name: "Industries", path: "/industries" },
  { name: "Contact", path: "/contact" },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50);
  });

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 260, damping: 20 }}
        className={cn(
          "fixed top-0 left-0 right-0 z-50 flex justify-center transition-all duration-500 ease-out",
          isScrolled ? "pt-4 md:pt-6" : "pt-0"
        )}
      >
        <div
          className={cn(
            "flex items-center justify-between relative transition-all duration-500 ease-out",
            isScrolled
              ? "w-[95%] md:w-[85%] max-w-6xl rounded-full bg-white/80 dark:bg-neutral-950/80 backdrop-blur-xl border border-black/10 dark:border-white/10 shadow-[0_8px_30px_rgb(0,0,0,0.08)] py-3 px-6 md:px-8"
              : "w-full bg-gradient-to-b from-black/30 to-transparent border-b border-transparent py-6 md:py-8 px-6 md:px-12 lg:px-20"
          )}
        >
          {/* Logo */}
          <Link
            to="/"
            className={cn(
              "font-serif text-xl md:text-2xl transition-colors duration-500 relative z-20",
              isScrolled ? "text-ink" : "text-white drop-shadow-md"
            )}
          >
            Oworks
          </Link>

          {/* Desktop Navigation - Absolutely Centered */}
          <div className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full justify-center pointer-events-none z-10">
            <motion.div 
              layout
              className="pointer-events-auto"
            >
              <SlideTabs links={navLinks} />
            </motion.div>
          </div>

          {/* Desktop Right Spacer to balance the Logo */}
          <div className="hidden md:block w-[100px]" />

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(true)}
            className={cn(
              "md:hidden p-2 -mr-2 transition-colors duration-500 relative z-20",
              isScrolled ? "text-ink hover:opacity-70" : "text-white drop-shadow-md hover:opacity-70"
            )}
            aria-label="Open menu"
          >
            <Menu size={24} strokeWidth={1.5} />
          </button>
        </div>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation"
        aria-hidden={!isMobileMenuOpen}
        {...(!isMobileMenuOpen ? ({ inert: "" } as Record<string, string>) : {})}
        className={cn(
          "fixed inset-0 z-[100] bg-background transition-all duration-500 ease-editorial md:hidden h-dvh",
          isMobileMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        )}
      >
        <div className="flex flex-col h-full px-6 py-6">
          {/* Mobile Menu Header */}
          <div className="flex items-center justify-between">
            <Link
              to="/"
              className="font-serif text-xl text-ink"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Oworks
            </Link>
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="p-2 -mr-2 text-ink transition-opacity duration-300 hover:opacity-70"
              aria-label="Close menu"
            >
              <X size={24} strokeWidth={1.5} />
            </button>
          </div>

          {/* Mobile Menu Links */}
          <nav className="flex-1 flex flex-col justify-center">
            <ul className="space-y-8">
              {navLinks.map((link, index) => (
                <li
                  key={link.path}
                  className={cn(
                    "opacity-0",
                    isMobileMenuOpen && "animate-fade-in"
                  )}
                  style={{ animationDelay: `${index * 100 + 100}ms` }}
                >
                  <Link
                    to={link.path}
                    className={cn(
                      "font-serif text-4xl text-ink-light transition-colors duration-300 hover:text-ink",
                      location.pathname === link.path && "text-ink"
                    )}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Mobile Menu Footer */}
          <div
            className={cn(
              "pt-8 border-t border-divider opacity-0",
              isMobileMenuOpen && "animate-fade-in animate-delay-500"
            )}
          >
            <div className="flex gap-6">
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-ink-muted transition-colors duration-300 hover:text-ink"
              >
                Facebook
              </a>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-ink-muted transition-colors duration-300 hover:text-ink"
              >
                Instagram
              </a>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-ink-muted transition-colors duration-300 hover:text-ink"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
