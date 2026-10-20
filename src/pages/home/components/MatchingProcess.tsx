import SectionHeading from "@/components/base/SectionHeading";
import { processSteps } from "@/mocks/helpers";

export default function MatchingProcess() {
  return (
    <section id="process" className="bg-background-100 py-16 md:py-24">
      <div className="px-4 md:px-8">
        <SectionHeading
          eyebrow="How matching works"
          title="Four simple steps to your ideal helper"
          description="No endless forms or guesswork. We get to know your household, then guide you from first conversation to a settled, happy placement."
        />

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
          {processSteps.map((step) => (
            <div key={step.id} className="relative flex flex-col p-6 md:p-7 rounded-lg bg-background-50 border border-background-200/70">
              <div className="flex items-center justify-between mb-5">
                <span className="w-12 h-12 flex items-center justify-center rounded-lg bg-accent-100 text-accent-700">
                  <i className={`${step.icon} text-2xl`}></i>
                </span>
                <span className="font-heading text-3xl font-semibold text-background-300">{step.step}</span>
              </div>
              <h3 className="font-heading text-lg font-semibold text-foreground-950 mb-2">{step.title}</h3>
              <p className="text-sm leading-relaxed text-foreground-600">{step.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <a
            href="#contact"
            className="flex items-center gap-2 bg-foreground-950 hover:bg-foreground-800 text-background-50 text-sm font-semibold px-6 py-3 rounded-md whitespace-nowrap cursor-pointer transition-colors"
          >
            Start with a free consultation
            <i className="ri-arrow-right-line"></i>
          </a>
        </div>
      </div>
    </section>
  );
}