const pillars = [
  {
    icon: "ri-building-2-line",
    title: "Four decades of matching",
    text: "Family-run since 1984, we've built our reputation one happy household at a time — and a generation of families now return to us.",
  },
  {
    icon: "ri-shield-user-line",
    title: "Vetting you can trust",
    text: "Every helper passes identity checks, reference verification, and a personal interview before they ever meet your family.",
  },
  {
    icon: "ri-hand-heart-line",
    title: "Care that continues",
    text: "Our relationship doesn't end at placement. We check in regularly and offer a free replacement guarantee for peace of mind.",
  },
];

export default function Credibility() {
  return (
    <section id="about" className="bg-background-50 py-16 md:py-24">
      <div className="px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div className="relative">
            <div className="w-full h-[320px] md:h-[460px] rounded-lg overflow-hidden">
              <img
                src="https://readdy.ai/api/search-image?query=Warm%20editorial%20lifestyle%20photo%20of%20a%20friendly%20Asian%20female%20domestic%20agency%20consultant%20having%20a%20welcoming%20chat%20with%20a%20happy%20Asian%20young%20family%20including%20parents%20and%20a%20child%2C%20sitting%20together%20in%20a%20bright%20cozy%20modern%20office%20with%20plants%20and%20art%20on%20the%20wall%2C%20soft%20natural%20morning%20light%2C%20terracotta%20and%20sage%20tones%2C%20warm%20harmonious%20atmosphere&width=900&height=1100&seq=about-team-asian-02&orientation=portrait"
                alt="An AC Global Manpower consultant meeting with a family"
                title="AC Global Manpower Domestic Services — over 40 years of trusted matching"
                className="w-full h-full object-cover object-top"
              />
            </div>
            <div className="absolute -bottom-5 -right-2 md:right-6 bg-accent-500 text-background-50 rounded-lg px-6 py-5">
              <p className="font-heading text-4xl font-semibold leading-none">40+</p>
              <p className="text-xs mt-1.5 tracking-wide">Years of caring</p>
            </div>
          </div>

          <div>
            <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-primary-600 mb-3">
              <span className="w-5 h-px bg-primary-500"></span>
              Why families choose us
            </span>
            <h2 className="font-heading text-2xl md:text-4xl font-semibold leading-tight tracking-tight text-foreground-950">
              A trusted name in household care since 1984
            </h2>
            <p className="mt-4 text-sm md:text-base leading-relaxed text-foreground-600">
              Finding the right person to care for your home and family is a big decision. For over 40 years, we've made
              that decision easier by combining a personal touch with thorough, uncompromising vetting.
            </p>

            <div className="mt-8 flex flex-col gap-6">
              {pillars.map((pillar) => (
                <div key={pillar.title} className="flex items-start gap-4">
                  <span className="w-11 h-11 shrink-0 flex items-center justify-center rounded-lg bg-secondary-100 text-secondary-700">
                    <i className={`${pillar.icon} text-xl`}></i>
                  </span>
                  <div>
                    <h3 className="font-heading text-base font-semibold text-foreground-950 mb-1">{pillar.title}</h3>
                    <p className="text-sm leading-relaxed text-foreground-600">{pillar.text}</p>
                  </div>
                </div>
              ))}
            </div>

            <a
              href="#contact"
              className="mt-9 inline-flex items-center gap-2 bg-primary-500 hover:bg-primary-600 text-background-50 text-sm font-semibold px-6 py-3 rounded-md whitespace-nowrap cursor-pointer transition-colors"
            >
              Book your free consultation
              <i className="ri-arrow-right-line"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}