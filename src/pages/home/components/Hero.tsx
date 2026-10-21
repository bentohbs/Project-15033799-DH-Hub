import { stats } from "@/mocks/services";

export default function Hero() {
  return (
    <section id="top" className="relative w-full min-h-[640px] md:min-h-[760px] flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="https://readdy.ai/api/search-image?query=Wide%20warm%20realistic%20editorial%20photograph%2C%20full%20scene%20framing%2C%20of%20a%20smiling%20elderly%20Chinese%20Singaporean%20grandmother%20seated%20comfortably%20in%20a%20soft%20upholstered%20armchair%20on%20the%20right%20side%20of%20the%20frame%2C%20clearly%20visible%20from%20head%20to%20knees%2C%20looking%20up%20happily%20as%20a%20friendly%20Southeast%20Asian%20domestic%20helper%20in%20her%2030s%20wearing%20a%20simple%20neat%20blouse%20leans%20in%20to%20serve%20her%20a%20cup%20of%20tea%20on%20a%20small%20tray%2C%20both%20women%20fully%20inside%20the%20frame%20and%20not%20cropped%2C%20bright%20modern%20Singapore%20HDB%20living%20room%20with%20large%20windows%20and%20soft%20daylight%2C%20warm%20neutral%20tones%2C%20genuine%20relaxed%20smiles%2C%20caring%20atmosphere%2C%20generous%20clear%20open%20space%20on%20the%20left%20half%20of%20the%20image%2C%20lifestyle%20photography%2C%20no%20text%20no%20logos%20no%20watermarks&width=1920&height=1080&seq=hero-living-room-tea-2026&orientation=landscape&nocache=true"
          alt="Friendly domestic helper serving tea to a smiling elderly grandmother seated in an armchair in a bright Singapore living room"
          title="Caring domestic helper services for Singapore households"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground-950/90 via-foreground-950/40 to-transparent"></div>
      </div>

      <div className="relative z-10 w-full px-4 md:px-8 pt-28 pb-16">
        <div className="max-w-2xl">
          <span className="inline-flex items-center gap-2 bg-background-50/15 backdrop-blur border border-background-50/25 text-background-50 text-xs font-semibold uppercase tracking-[0.16em] px-4 py-2 rounded-full mb-6 animate-fade-up">
            <i className="ri-award-line"></i>
            Trusted since 1994 — over 30 years
          </span>

          <h1 className="font-heading text-3xl md:text-5xl lg:text-6xl font-semibold leading-[1.1] text-background-50 animate-fade-up delay-100">
            Reliable domestic helpers for a calmer, happier home
          </h1>

          <p className="mt-6 text-base md:text-lg leading-relaxed text-background-100/90 max-w-xl animate-fade-up delay-200">
            We match households with carefully vetted live-in helpers — whether it's a new worker's first
            placement or an experienced transfer worker seeking a fresh start in Singapore.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-3 animate-fade-up delay-300">
            <a
              href="#contact"
              className="flex items-center justify-center gap-2 bg-primary-500 hover:bg-primary-600 text-background-50 text-base font-semibold px-7 py-3.5 rounded-md whitespace-nowrap cursor-pointer transition-colors"
            >
              Get a Free Consultation
              <i className="ri-arrow-right-line"></i>
            </a>
            <a
              href="#helpers"
              className="flex items-center justify-center gap-2 bg-background-50 hover:bg-background-100 text-foreground-950 text-base font-semibold px-7 py-3.5 rounded-md whitespace-nowrap cursor-pointer transition-colors"
            >
              Browse Helpers
            </a>
          </div>

          <p className="mt-4 text-[11px] md:text-xs tracking-[0.14em] uppercase text-background-100/75 flex items-center gap-1.5 animate-fade-up delay-300">
            <i className="ri-shield-check-line"></i>
            EA Licence No. 20C0288
          </p>

          <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-6 animate-fade-up delay-400">
            {stats.map((stat) => (
              <div key={stat.id} className="border-l border-background-50/25 pl-4">
                <p className="font-heading text-2xl md:text-3xl font-semibold text-background-50">{stat.value}</p>
                <p className="text-xs md:text-sm text-background-100/80 mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}