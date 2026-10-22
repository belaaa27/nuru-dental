import { Link } from "react-router-dom";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "Team", path: "/team" },
    { name: "FAQs", path: "/faqs" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <footer className="bg-[#25352C] text-[#F7F5EE] border-t border-[#315747]/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-12">
          {/* Column 1: Brand & Philosophy */}
          <div className="md:col-span-6 space-y-4">
            <Link
              to="/"
              className="inline-block focus:outline-none focus:ring-2 focus:ring-[#D7CBB9]"
            >
              <span className="font-serif text-2xl sm:text-3xl font-normal tracking-tight text-[#F7F5EE]">
                Nuru Dental
              </span>
            </Link>
            <p className="text-xs sm:text-sm text-[#F7F5EE]/75 leading-relaxed max-w-md font-normal">
              A gentle, modern studio practice dedicated to serene patient
              experiences, transparent care, and long-term oral health.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div className="md:col-span-3 space-y-3">
            <h3 className="text-xs font-semibold uppercase tracking-widest text-[#D7CBB9]">
              Navigation
            </h3>
            <ul className="space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-xs sm:text-sm text-[#F7F5EE]/80 hover:text-[#E8EDE3] transition-colors focus:outline-none focus:ring-2 focus:ring-[#D7CBB9]"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact & Inquiries */}
          <div className="md:col-span-3 space-y-3">
            <h3 className="text-xs font-semibold uppercase tracking-widest text-[#D7CBB9]">
              Consultations
            </h3>
            <p className="text-xs text-[#F7F5EE]/75 leading-relaxed">
              Have questions or ready to inquire about appointment options?
            </p>
            <div className="pt-1">
              <Link
                to="/contact"
                className="inline-flex items-center text-xs font-semibold uppercase tracking-wider text-[#E8EDE3] hover:text-[#D7CBB9] border-b border-[#D7CBB9]/40 hover:border-[#D7CBB9] pb-0.5 transition-all focus:outline-none focus:ring-2 focus:ring-[#D7CBB9]"
              >
                Inquire or Schedule &rarr;
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Disclaimer */}
        <div className="mt-12 pt-6 border-t border-[#F7F5EE]/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#F7F5EE]/60">
          <p>&copy; {currentYear} Nuru Dental. All rights reserved.</p>
          <p className="text-center sm:text-right italic">
            Demonstration website — sample studio profile.
          </p>
        </div>
      </div>
    </footer>
  );
}
