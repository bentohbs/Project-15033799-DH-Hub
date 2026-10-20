import SectionHeading from "@/components/base/SectionHeading";
import { services } from "@/mocks/services";

export default function Services() {
  return (
    <section id="services" className="bg-background-50 py-16 md:py-24">
      <div className="px-4 md:px-8">
        <SectionHeading
          eyebrow="What we offer"
          title="The right helper for every household"
          description="From full-time live-in support to new and transferring worker placements, we match you with helpers who genuinely fit your family — and support them every step of the way."
        />

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {services.map((service) => (
            <article
              key={service.id}
              className="group flex flex-col p-6 md:p-7 rounded-lg bg-background-100 border border-background-200/70 hover:border-primary-300 transition-colors"
            >
              <span className="w-12 h-12 flex items-center justify-center rounded-lg bg-primary-100 text-primary-600 mb-5 group-hover:bg-primary-500 group-hover:text-background-50 transition-colors">
                <i className={`${service.icon} text-2xl`}></i>
              </span>
              <h3 className="font-heading text-lg font-semibold text-foreground-950 mb-2">{service.title}</h3>
              <p className="text-sm leading-relaxed text-foreground-600 mb-5">{service.description}</p>
              <ul className="mt-auto flex flex-col gap-2">
                {service.points.map((point) => (
                  <li key={point} className="flex items-center gap-2 text-xs text-foreground-700">
                    <i className="ri-check-line text-accent-600"></i>
                    {point}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}