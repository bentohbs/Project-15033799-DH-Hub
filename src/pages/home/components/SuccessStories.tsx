import SectionHeading from "@/components/base/SectionHeading";
import { successStories } from "@/mocks/successStories";

export default function SuccessStories() {
  return (
    <section id="stories" className="bg-accent-50 py-16 md:py-24">
      <div className="px-4 md:px-8">
        <SectionHeading
          eyebrow="Success stories"
          title="Placements that turned into family"
          description="From a new worker's very first job to an experienced transfer finding a fresh start — these are real matches that lasted."
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
                  alt={`${story.helperName}'s successful placement with ${story.family}`}
                  title={`${story.tag} success story — ${story.title}`}
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
                <p className="text-sm md:text-base leading-relaxed text-foreground-700 italic">"{story.quote}"</p>

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
      </div>
    </section>
  );
}