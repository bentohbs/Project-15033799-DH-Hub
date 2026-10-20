import { helperProfiles } from "@/mocks/helpers";

export default function HelperProfiles() {
  return (
    <section id="helpers" className="bg-background-100 py-16 md:py-24">
      <div className="px-4 md:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
          <div className="max-w-2xl">
            <span className="block text-[11px] md:text-xs font-semibold uppercase tracking-[0.22em] text-accent-700 mb-2">
              Our Helpers
            </span>
            <h2 className="font-heading text-3xl md:text-[2.6rem] font-semibold leading-[1.1] tracking-tight text-foreground-950">
              Carefully screened helpers
            </h2>
          </div>
          <a
            href="#contact"
            className="group inline-flex items-center gap-2 text-sm font-semibold text-primary-700 hover:text-primary-800 whitespace-nowrap cursor-pointer self-start sm:self-end transition-colors"
          >
            View all helpers
            <i className="ri-arrow-right-line transition-transform group-hover:translate-x-0.5"></i>
          </a>
        </div>

        <div className="mt-10 md:mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
          {helperProfiles.map((helper) => (
            <article
              key={helper.id}
              className="group flex flex-col overflow-hidden rounded-xl bg-background-50 border border-background-200/70 hover:border-accent-400 transition-colors"
            >
              <div className="relative w-full aspect-[16/10] overflow-hidden bg-background-200">
                <img
                  src={helper.image}
                  alt={helper.alt}
                  title={`${helper.nationality} domestic helper — screened and ready for placement`}
                  className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.04]"
                />
              </div>

              <div className="flex flex-col gap-2.5 p-4 md:p-5">
                <span className="self-start inline-flex items-center rounded-full bg-accent-100 text-accent-800 text-[11px] md:text-xs font-semibold px-3 py-1">
                  {helper.nationality}
                </span>
                <p className="text-xs md:text-sm leading-relaxed text-foreground-800">
                  {helper.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}