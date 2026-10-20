import SectionHeading from "@/components/base/SectionHeading";
import { testimonials } from "@/mocks/testimonials";

function Stars({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-0.5">
      {[1, 2, 3, 4, 5].map((n) => (
        <i
          key={n}
          className={`${n <= rating ? "ri-star-fill text-primary-500" : "ri-star-line text-background-300"} text-sm`}
        ></i>
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section id="reviews" className="bg-background-100 py-16 md:py-24">
      <div className="px-4 md:px-8">
        <SectionHeading
          eyebrow="Reviews from families"
          title="Loved by the households we serve"
          description="Genuine feedback from families who found their helper through AC Global Manpower. Every review below comes from a completed placement."
        />

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-10">
          <div className="flex items-center gap-4 px-6 py-4 rounded-lg bg-background-50 border border-background-200/70">
            <span className="font-heading text-4xl font-semibold text-foreground-950">4.9</span>
            <div>
              <Stars rating={5} />
              <p className="text-xs text-foreground-500 mt-1">Based on 640+ reviews</p>
            </div>
          </div>
          <div className="flex items-center gap-4 px-6 py-4 rounded-lg bg-background-50 border border-background-200/70">
            <span className="w-11 h-11 flex items-center justify-center rounded-full bg-accent-100 text-accent-700">
              <i className="ri-heart-3-line text-xl"></i>
            </span>
            <div>
              <p className="font-heading text-xl font-semibold text-foreground-950">98%</p>
              <p className="text-xs text-foreground-500">Would recommend us</p>
            </div>
          </div>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {testimonials.map((review) => (
            <article
              key={review.id}
              className="flex flex-col p-6 md:p-7 rounded-lg bg-background-50 border border-background-200/70"
            >
              <div className="flex items-center justify-between mb-4">
                <Stars rating={review.rating} />
                <span className="text-xs text-foreground-400">{review.date}</span>
              </div>
              <p className="text-sm leading-relaxed text-foreground-700 flex-1">"{review.text}"</p>
              <div className="mt-5 pt-5 border-t border-background-200/70 flex items-center gap-3">
                <span className="w-10 h-10 flex items-center justify-center rounded-full bg-primary-100 text-primary-700 font-heading font-semibold">
                  {review.name.charAt(0)}
                </span>
                <div>
                  <p className="text-sm font-semibold text-foreground-950">{review.name}</p>
                  <p className="text-xs text-foreground-500">{review.location}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}