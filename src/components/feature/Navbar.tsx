import { useEffect, useState } from "react";

const WHATSAPP_LINK = "https://wa.me/6596651503";

const navLinks = [
  { label: "Home", href: "#top" },
  { label: "About Us", href: "#about" },
  { label: "Hire a Helper", href: "#services" },
  { label: "Our Helpers", href: "#helpers" },
  { label: "Success Stories", href: "#stories" },
  { label: "Contact Us", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const solid = scrolled || menuOpen;

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        solid
          ? "bg-background-50/95 backdrop-blur border-b border-background-200/70"
          : "bg-transparent"
      }`}
    >
      <div className="flex items-center justify-between gap-3 px-4 md:px-6 h-16 md:h-20">
        <a href="#top" className="flex items-center gap-2.5 shrink-0 cursor-pointer">
          <img
            src="https://static.readdy.ai/image/a1d3f700dd8475313919a1185348b467/5f5414dfde30c532f7efa1fdfe144c2d.jpeg"
            alt="AC Global Manpower logo"
            title="AC Global Manpower Domestic Services logo"
            className="w-9 h-9 md:w-10 md:h-10 rounded-lg object-cover shrink-0"
          />
          <span
            className={`font-heading text-base md:text-lg font-semibold tracking-tight whitespace-nowrap ${
              solid ? "text-foreground-950" : "text-background-50"
            }`}
          >
            AC Global Manpower
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-3 lg:gap-6">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`text-xs lg:text-sm font-medium whitespace-nowrap transition-colors cursor-pointer ${
                solid
                  ? "text-foreground-700 hover:text-primary-600"
                  : "text-background-100 hover:text-background-50"
              }`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2 md:gap-3 shrink-0">
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chat with us on WhatsApp"
            className="w-10 h-10 md:w-11 md:h-11 flex items-center justify-center rounded-full bg-[#25D366] hover:bg-[#1EBE5B] text-white transition-colors cursor-pointer"
          >
            <i className="ri-whatsapp-line text-lg md:text-xl"></i>
          </a>
          <a
            href="#contact"
            className="hidden xl:inline-flex items-center gap-2 bg-primary-500 hover:bg-primary-600 text-background-50 text-sm font-semibold px-5 py-2.5 rounded-md whitespace-nowrap cursor-pointer transition-colors"
          >
            Free Consultation
          </a>

          <button
            type="button"
            aria-label="Toggle menu"
            onClick={() => setMenuOpen((v) => !v)}
            className={`md:hidden w-10 h-10 flex items-center justify-center rounded-md cursor-pointer ${
              solid ? "text-foreground-950" : "text-background-50"
            }`}
          >
            <i className={`${menuOpen ? "ri-close-line" : "ri-menu-line"} text-2xl`}></i>
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-background-50 border-b border-background-200/70 px-4 pb-6 pt-2">
          <nav className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="py-3 text-base font-medium text-foreground-800 border-b border-background-200/60 cursor-pointer"
              >
                {link.label}
              </a>
            ))}
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMenuOpen(false)}
              className="mt-4 flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1EBE5B] text-white text-base font-semibold px-5 py-3 rounded-md whitespace-nowrap cursor-pointer transition-colors"
            >
              <i className="ri-whatsapp-line text-lg"></i>
              Chat on WhatsApp
            </a>
            <a
              href="#contact"
              onClick={() => setMenuOpen(false)}
              className="mt-2 flex items-center justify-center gap-2 bg-primary-500 hover:bg-primary-600 text-background-50 text-base font-semibold px-5 py-3 rounded-md whitespace-nowrap cursor-pointer transition-colors"
            >
              Free Consultation
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}