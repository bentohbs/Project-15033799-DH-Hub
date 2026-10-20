import { stats } from "@/mocks/services";

export default function Hero() {
  return (
    <section id="top" className="relative w-full min-h-[640px] md:min-h-[760px] flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="https://public.readdy.ai/ai/img_res/edited_92de76807ae69f02f30e00030812e0f0_22c887aa.jpg"
          alt="A warm, sunlit family home with a caring domestic helper"
          title="Trusted domestic helper services for your household"
          className="w-full h-full object-cover object-top"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground-950/80 via-foreground-950/55 to-foreground-950/25"></div>
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
              className="flex items-center justify-center gap-2 bg-background-50/10 hover:bg-background-50/20 backdrop-blur border border-background-50/30 text-background-50 text-base font-semibold px-7 py-3.5 rounded-md whitespace-nowrap cursor-pointer transition-colors"
            >
              Browse Helpers
            </a>
          </div>

          <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-6 animate-fade-up delay-400">
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