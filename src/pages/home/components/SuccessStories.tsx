import SectionHeading from "@/components/base/SectionHeading";
import { successStories } from "@/mocks/successStories";

const WHATSAPP_SHARE_URL = "https://wa.me/6596651503";

export default function SuccessStories() {
  return (
    <section id="stories" className="bg-accent-50 py-16 md:py-24">
      <div className="px-4 md:px-8">
        <SectionHeading
          eyebrow="Success stories"
          title="Placements that turned into family"
          description="From a new worker's very first job to an experienced transfer finding a fresh start — a few of the placements we're proud of, and how they came together."
        />

        <div className="mt-12 flex flex-col gap-6 md:gap-8">
          {successStories.map((story, index) => (
            <article
              key={story.id}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-0 rounded-lg overflow-hidden bg-background-50 border border-accent-200/70 ${
                index % 2 === 1 ? "lg:[&>div:first-child]:order-2" : ""
              }`}
            >
              <div className="relative w-full h-64 lg:h-auto lg:min-h-[340px]">
                <img
                  src={story.image}
                  alt={`A helper placement arranged by AC Global Manpower for ${story.family}`}
                  title={`${story.tag} placement — ${story.title}`}
                  className="absolute inset-0 w-full h-full object-cover object-top"
                />
                <span
                  className={`absolute top-4 left-4 text-xs font-semibold px-3 py-1.5 rounded-full ${
                    story.tag === "New Worker"
                      ? "bg-accent-500 text-background-50"
                      : "bg-secondary-500 text-background-50"
                  }`}
                >
                  {story.tag}
                </span>
              </div>

              <div className="flex flex-col justify-center p-7 md:p-10">
                <h3 className="font-heading text-xl md:text-2xl font-semibold text-foreground-950 mb-4">{story.title}</h3>
                <p className="text-sm md:text-base leading-relaxed text-foreground-700">{story.summary}</p>

                <div className="mt-6 flex flex-col gap-2">
                  {story.highlights.map((highlight) => (
                    <div key={highlight} className="flex items-center gap-2.5 text-sm text-foreground-800">
                      <i className="ri-checkbox-circle-fill text-accent-600"></i>
                      {highlight}
                    </div>
                  ))}
                </div>

                <div className="mt-7 pt-6 border-t border-accent-200/70 flex flex-wrap items-center gap-x-6 gap-y-2">
                  <div>
                    <p className="text-sm font-semibold text-foreground-950">{story.family}</p>
                    <p className="text-xs text-foreground-600">{story.location}</p>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-foreground-700">
                    <i className="ri-time-line text-accent-600"></i>
                    {story.duration}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-6 md:mt-8 rounded-lg bg-accent-100 border border-accent-200/70 p-7 md:p-10">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div className="max-w-xl">
              <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-accent-800 mb-3">
                <i className="ri-chat-heart-line"></i>
                Share your experience
              </span>
              <h3 className="font-heading text-xl md:text-2xl font-semibold text-foreground-950 mb-2">
                Recently placed a helper with us?
              </h3>
              <p className="text-sm leading-relaxed text-foreground-700">
                Your story could be the reassurance another family needs. Tell us how the placement has gone — what
                worked, what surprised you, what you'd tell someone starting the search today.
              </p>
            </div>
            <a
              href={WHATSAPP_SHARE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-accent-500 hover:bg-accent-600 text-background-50 text-sm md:text-base font-semibold px-6 py-3.5 rounded-md whitespace-nowrap cursor-pointer self-start md:self-auto transition-colors shrink-0"
            >
              <i className="ri-whatsapp-line text-lg"></i>
              Share on WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}