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

const mobileNumbers = [
  { display: "9665 1503", tel: "tel:+6596651503", wa: "https://wa.me/6596651503" },
  { display: "8058 1220", tel: "tel:+6580581220", wa: "https://wa.me/6580581220" },
];

export default function Footer() {
  return (
    <footer className="bg-accent-100 text-foreground-950">
      <div className="px-4 md:px-8 pt-14 md:pt-16 pb-24 md:pb-28">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-10 md:gap-8">
          <div className="sm:col-span-2 lg:col-span-4 max-w-sm">
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
              Connecting households with reliable, carefully vetted domestic helpers since 1994 — over 30 years of
              warmth, trust, and care in every placement.
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
            <div key={group.title} className="lg:col-span-2">
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

          <div className="lg:col-span-4">
            <h4 className="font-heading text-base font-semibold text-foreground-950 mb-4">Contact</h4>
            <ul className="flex flex-col gap-4">
              <li className="flex items-start gap-2.5">
                <span className="w-7 h-7 shrink-0 flex items-center justify-center rounded-md bg-accent-50 text-accent-700">
                  <i className="ri-map-pin-2-line text-sm"></i>
                </span>
                <a
                  href="https://www.google.com/maps/search/?api=1&query=101+Upper+Cross+Street+01-34+Peoples+Park+Centre+Singapore+058357"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm leading-relaxed text-foreground-700 hover:text-foreground-950 cursor-pointer transition-colors"
                >
                  101 Upper Cross Street, #01-34
                  <br />
                  People's Park Centre, Singapore 058357
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="w-7 h-7 shrink-0 flex items-center justify-center rounded-md bg-accent-50 text-accent-700">
                  <i className="ri-phone-line text-sm"></i>
                </span>
                <div className="text-sm leading-relaxed text-foreground-700">
                  <a href="tel:+6565335448" className="hover:text-foreground-950 cursor-pointer transition-colors">
                    6533 5448
                  </a>
                  <span className="text-foreground-500"> — office</span>
                </div>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="w-7 h-7 shrink-0 flex items-center justify-center rounded-md bg-accent-50 text-accent-700">
                  <i className="ri-whatsapp-line text-sm"></i>
                </span>
                <div className="text-sm leading-relaxed text-foreground-700 flex flex-col gap-1">
                  {mobileNumbers.map((number) => (
                    <span key={number.display} className="flex flex-wrap items-center gap-x-2">
                      <a href={number.tel} className="hover:text-foreground-950 cursor-pointer transition-colors">
                        {number.display}
                      </a>
                      <a
                        href={number.wa}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs text-accent-800 hover:text-accent-900 underline decoration-accent-300 underline-offset-2 cursor-pointer transition-colors"
                      >
                        WhatsApp
                      </a>
                    </span>
                  ))}
                </div>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="w-7 h-7 shrink-0 flex items-center justify-center rounded-md bg-accent-50 text-accent-700">
                  <i className="ri-mail-line text-sm"></i>
                </span>
                <a
                  href="mailto:acglobalmanpower@gmail.com"
                  className="text-sm leading-relaxed text-foreground-700 hover:text-foreground-950 cursor-pointer transition-colors break-all"
                >
                  acglobalmanpower@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-accent-300/60 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-foreground-600 text-center sm:text-left">
            © 2026 AC Global Manpower Domestic Services. EA Lic No: 20C0288 · UEN: 53420682D. All rights reserved.
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