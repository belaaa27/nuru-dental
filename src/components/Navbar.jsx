import { useState } from "react";
import { NavLink, Link } from "react-router-dom";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "Team", path: "/team" },
    { name: "FAQs", path: "/faqs" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-[#F7F5EE]/90 backdrop-blur-md border-b border-[#315747]/10 transition-colors">
      <nav
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between"
        aria-label="Main Navigation"
      >
        {/* Brand Logo */}
        <Link
          to="/"
          onClick={closeMobileMenu}
          className="flex items-center gap-2 group focus:outline-none focus:ring-2 focus:ring-[#315747] focus:ring-offset-2 rounded-sm"
        >
          <span className="font-serif text-2xl font-bold text-[#25352C] tracking-tight group-hover:text-[#315747] transition-colors">
            Nuru Dental
          </span>
          <span className="text-xs uppercase tracking-widest px-2 py-0.5 rounded bg-[#E8EDE3] text-[#315747] font-medium hidden sm:inline-block">
            Care Studio
          </span>
        </Link>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              end={link.path === "/"}
              className={({ isActive }) =>
                `text-sm font-medium transition-colors hover:text-[#315747] focus:outline-none focus:ring-2 focus:ring-[#315747] focus:ring-offset-2 rounded-sm ${
                  isActive
                    ? "text-[#315747] font-semibold border-b-2 border-[#315747] pb-1"
                    : "text-[#25352C]/80"
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
        </div>

        {/* Desktop Call To Action */}
        <div className="hidden md:flex items-center">
          <Link
            to="/contact"
            className="inline-flex items-center justify-center px-5 py-2.5 text-sm font-medium text-[#F7F5EE] bg-[#315747] hover:bg-[#25352C] rounded-none transition-all shadow-sm focus:outline-none focus:ring-2 focus:ring-[#315747] focus:ring-offset-2"
          >
            Book Visit
          </Link>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          type="button"
          onClick={toggleMobileMenu}
          aria-expanded={isMobileMenuOpen}
          aria-controls="mobile-menu"
          aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
          className="md:hidden p-2 rounded-md text-[#25352C] hover:bg-[#E8EDE3] focus:outline-none focus:ring-2 focus:ring-[#315747]"
        >
          <svg
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            aria-hidden="true"
          >
            {isMobileMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile Menu Panel */}
      {isMobileMenuOpen && (
        <div
          id="mobile-menu"
          className="md:hidden bg-[#F7F5EE] border-b border-[#315747]/10 px-4 pt-2 pb-6 space-y-3 animate-fade-in"
        >
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              end={link.path === "/"}
              onClick={closeMobileMenu}
              className={({ isActive }) =>
                `block px-3 py-2 text-base font-medium transition-colors rounded-sm ${
                  isActive
                    ? "bg-[#E8EDE3] text-[#315747] font-semibold"
                    : "text-[#25352C] hover:bg-[#E8EDE3]/50"
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
          <div className="pt-2">
            <Link
              to="/contact"
              onClick={closeMobileMenu}
              className="block w-full text-center px-5 py-3 text-sm font-medium text-[#F7F5EE] bg-[#315747] hover:bg-[#25352C] transition-all"
            >
              Book Visit
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
