const footerLinks = [
  {
    title: "Hire a Helper",
    links: [
      { label: "What We Offer", href: "#services" },
      { label: "Our Matching Process", href: "#process" },
      { label: "Our Helpers", href: "#helpers" },
    ],
  },
  {
    title: "About Us",
    links: [
      { label: "Why Families Choose Us", href: "#about" },
      { label: "Success Stories", href: "#stories" },
      { label: "Family Reviews", href: "#reviews" },
      { label: "Contact Us", href: "#contact" },
    ],
  },
];

const socialLinks = [
  { icon: "ri-facebook-fill", label: "Facebook", href: "#contact" },
  { icon: "ri-instagram-line", label: "Instagram", href: "#contact" },
  { icon: "ri-whatsapp-line", label: "WhatsApp", href: "https://wa.me/6596651503" },
  { icon: "ri-linkedin-fill", label: "LinkedIn", href: "#contact" },
];

export default function Footer() {
  return (
    <footer className="bg-accent-100 text-foreground-950">
      <div className="px-4 md:px-8 py-14 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-8">
          <div className="lg:col-span-2 max-w-sm">
            <div className="flex items-center gap-2.5 mb-4">
              <img
                src="https://static.readdy.ai/image/a1d3f700dd8475313919a1185348b467/5f5414dfde30c532f7efa1fdfe144c2d.jpeg"
                alt="AC Global Manpower logo"
                title="AC Global Manpower Domestic Services logo"
                className="w-10 h-10 rounded-lg object-cover"
              />
              <span className="font-heading text-xl font-semibold text-foreground-950">AC Global Manpower</span>
            </div>
            <p className="text-sm leading-relaxed text-foreground-700 mb-6">
              Connecting households with reliable, carefully vetted domestic helpers for over 40 years. Warmth, trust,
              and care — in every placement.
            </p>
            <div className="flex items-center gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.icon}
                  href={social.href}
                  aria-label={social.label}
                  target={social.href.startsWith("http") ? "_blank" : undefined}
                  rel={social.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className={`w-9 h-9 rounded-full flex items-center justify-center cursor-pointer transition-colors ${
                    social.label === "WhatsApp"
                      ? "bg-[#25D366] hover:bg-[#1EBE5B] text-white"
                      : "bg-accent-50 hover:bg-accent-200"
                  }`}
                >
                  <i
                    className={`${social.icon} ${
                      social.label === "WhatsApp" ? "text-white" : "text-accent-700"
                    }`}
                  ></i>
                </a>
              ))}
            </div>
          </div>

          {footerLinks.map((group) => (
            <div key={group.title}>
              <h4 className="font-heading text-base font-semibold text-foreground-950 mb-4">{group.title}</h4>
              <ul className="flex flex-col gap-3">
                {group.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-foreground-700 hover:text-foreground-950 cursor-pointer transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-8 border-t border-accent-300/60 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-foreground-600 text-center sm:text-left">
            © 2026 AC Global Manpower Domestic Services. Licence No. EA-40-1984. All rights reserved.
          </p>
          <div className="flex items-center gap-5">
            <a href="#contact" className="text-xs text-foreground-600 hover:text-foreground-950 cursor-pointer transition-colors">
              Privacy Policy
            </a>
            <a href="#contact" className="text-xs text-foreground-600 hover:text-foreground-950 cursor-pointer transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}