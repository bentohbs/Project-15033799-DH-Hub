import SectionHeading from "@/components/base/SectionHeading";

const GOOGLE_REVIEWS_URL =
  "https://www.google.com/maps/search/?api=1&query=AC+Global+Manpower+Domestic+Services+101+Upper+Cross+Street+Peoples+Park+Centre+Singapore";
const WHATSAPP_REVIEW_URL = "https://wa.me/6596651503";

export default function Testimonials() {
  return (
    <section id="reviews" className="bg-background-100 py-16 md:py-24">
      <div className="px-4 md:px-8">
        <SectionHeading
          eyebrow="Reviews from families"
          title="What families say"
          description="We'd rather you read real reviews than take our word for it. Our Google Business Profile holds the honest words of families we've placed helpers with — no editing, no cherry-picking."
        />

        <div className="mt-10 md:mt-12 max-w-3xl mx-auto rounded-lg bg-background-50 border border-background-200/70 p-7 md:p-10">
          <div className="flex flex-col items-center text-center gap-6">
            <span className="w-14 h-14 flex items-center justify-center rounded-full bg-background-100 text-foreground-900">
              <i className="ri-google-fill text-3xl"></i>
            </span>

            <div>
              <p className="font-heading text-lg md:text-xl font-semibold text-foreground-950">
                Read what other families have written
              </p>
              <p className="mt-2 text-sm leading-relaxed text-foreground-600 max-w-md mx-auto">
                Every review is left by a household we've personally matched with a helper.
              </p>
            </div>

            <a
              href={GOOGLE_REVIEWS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2.5 bg-background-50 hover:bg-background-100 border border-foreground-300/60 text-foreground-950 text-sm md:text-base font-semibold px-6 py-3.5 rounded-md whitespace-nowrap cursor-pointer transition-colors"
            >
              <i className="ri-google-fill text-primary-600"></i>
              Read our reviews on Google
              <i className="ri-arrow-right-up-line text-foreground-500"></i>
            </a>

            <div className="w-full border-t border-background-200/70 pt-6">
              <p className="text-sm text-foreground-700 leading-relaxed">
                Worked with us before? We'd love to hear how it went — share your experience with our team on{" "}
                <a
                  href={WHATSAPP_REVIEW_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 font-semibold text-accent-700 hover:text-accent-800 underline decoration-accent-300 underline-offset-2 cursor-pointer"
                >
                  WhatsApp
                  <i className="ri-whatsapp-line"></i>
                </a>
                . Every note helps another family choose with confidence.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}