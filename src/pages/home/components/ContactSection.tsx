import { useState } from "react";
import SectionHeading from "@/components/base/SectionHeading";

const SUBMIT_ADDR = "https://readdy.ai/api/form/daus3tj2asjjtt1sko20";

const contactDetails = [
  { icon: "ri-phone-line", label: "Call us", value: "+65 6533 5448", href: "tel:+6565335448" },
  { icon: "ri-whatsapp-line", label: "WhatsApp", value: "+65 9665 1503", href: "https://wa.me/6596651503" },
  { icon: "ri-mail-line", label: "Email", value: "acglobalmanpower@gmail.com", href: "mailto:acglobalmanpower@gmail.com" },
  { icon: "ri-map-pin-2-line", label: "Visit us", value: "101 Upper Cross Street, #01-34 Peoples Park Centre, Singapore 058357", href: "#contact" },
  { icon: "ri-time-line", label: "Office hours", value: "Mon – Sat, 10:00am – 7:00pm", href: "#contact" },
];

export default function ContactSection() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const payload = new FormData(form);
    const honeypot = (payload.get("website_alt") as string | null)?.trim() ?? "";

    if (honeypot) {
      setStatus("success");
      return;
    }

    payload.delete("website_alt");
    setStatus("submitting");
    setErrorMessage("");

    try {
      const response = await fetch(SUBMIT_ADDR, {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(payload as unknown as Record<string, string>).toString(),
      });

      const responseText = await response.text();
      let parsed: { code?: string; message?: string; meta?: { message?: string; detail?: string } } | null = null;
      try {
        parsed = JSON.parse(responseText);
      } catch {
        parsed = null;
      }

      const serverMessage =
        parsed?.meta?.message || parsed?.message || parsed?.meta?.detail || responseText || "";
      const isSpam = typeof serverMessage === "string" && serverMessage.toLowerCase().includes("spam");

      if (response.ok && parsed?.code === "OK" && !isSpam) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
        setErrorMessage(serverMessage || "Something went wrong. Please try again.");
      }
    } catch {
      setStatus("error");
      setErrorMessage("We could not reach the server. Please check your connection and try again.");
    }
  };

  const inputClass =
    "w-full text-sm text-foreground-900 bg-background-50 border border-background-300/70 rounded-md px-4 py-3 placeholder:text-foreground-400 focus:outline-none focus:ring-2 focus:ring-primary-400 focus:border-transparent transition";
  const labelClass = "block text-xs font-semibold text-foreground-700 mb-2";

  return (
    <section id="contact" className="bg-background-50 py-16 md:py-24">
      <div className="px-4 md:px-8">
        <SectionHeading
          eyebrow="Get in touch"
          title="Request your free consultation"
          description="Tell us a little about your household and we'll get back to you within one business day. No obligation, no pressure."
        />

        <div className="mt-12 grid grid-cols-1 lg:grid-cols-5 gap-6 md:gap-8">
          <div className="lg:col-span-3 p-6 md:p-8 rounded-lg bg-background-100 border border-background-200/70">
            {status === "success" ? (
              <div className="flex flex-col items-center justify-center text-center py-16">
                <span className="w-16 h-16 flex items-center justify-center rounded-full bg-accent-100 text-accent-700 mb-5">
                  <i className="ri-checkbox-circle-line text-4xl"></i>
                </span>
                <h3 className="font-heading text-xl font-semibold text-foreground-950 mb-2">Thank you!</h3>
                <p className="text-sm text-foreground-600 max-w-sm">
                  Your consultation request has been received. One of our placement consultants will reach out to you
                  shortly.
                </p>
                <button
                  type="button"
                  onClick={() => setStatus("idle")}
                  className="mt-6 text-sm font-semibold text-primary-600 hover:text-primary-700 cursor-pointer"
                >
                  Send another request
                </button>
              </div>
            ) : (
              <form id="consultation-form" data-readdy-form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="name" className={labelClass}>
                      Full name
                    </label>
                    <input id="name" name="name" type="text" required placeholder="e.g. Jennifer Tan" className={inputClass} />
                  </div>
                  <div>
                    <label htmlFor="email" className={labelClass}>
                      Email address
                    </label>
                    <input id="email" name="email" type="email" required placeholder="you@example.com" className={inputClass} />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="min-w-0">
                    <label htmlFor="phone" className={labelClass}>
                      Phone number
                    </label>
                    <input id="phone" name="phone" type="tel" required placeholder="+65 9123 4567" className={inputClass} />
                  </div>
                  <div className="min-w-0">
                    <label htmlFor="preferred_nationality" className={labelClass}>
                      Preferred nationality
                    </label>
                    <select
                      id="preferred_nationality"
                      name="preferred_nationality"
                      required
                      defaultValue=""
                      className={`${inputClass} cursor-pointer`}
                    >
                      <option value="" disabled>
                        Select preferred nationality
                      </option>
                      <option value="Filipino">Filipino</option>
                      <option value="Indonesian">Indonesian</option>
                      <option value="Myanmar">Myanmar</option>
                      <option value="Cambodian">Cambodian</option>
                      <option value="Indian">Indian</option>
                      <option value="No preference">No preference — please advise</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="service_type" className={labelClass}>
                    Type of services
                  </label>
                  <select id="service_type" name="service_type" required defaultValue="" className={`${inputClass} cursor-pointer`}>
                    <option value="" disabled>
                      Select type of services
                    </option>
                    <option value="Elderly care">Elderly care</option>
                    <option value="Infant care">Infant care</option>
                    <option value="General Housekeeping">General housekeeping</option>
                    <option value="All of the above">All of the above</option>
                  </select>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="min-w-0">
                    <label htmlFor="helper_type" className={labelClass}>
                      What kind of helper are you looking for?
                    </label>
                    <select id="helper_type" name="helper_type" required defaultValue="" className={`${inputClass} cursor-pointer`}>
                      <option value="" disabled>
                        Select an option
                      </option>
                      <option value="Live-in">Live-in helper</option>
                      <option value="New Worker">New worker (first placement)</option>
                      <option value="Transfer Worker">Transfer worker (experienced)</option>
                      <option value="Not sure yet">Not sure yet — please advise</option>
                    </select>
                  </div>
                  <div className="min-w-0">
                    <label htmlFor="timeline" className={labelClass}>
                      Timeline
                    </label>
                    <select id="timeline" name="timeline" required defaultValue="" className={`${inputClass} cursor-pointer`}>
                      <option value="" disabled>
                        Select your timeline
                      </option>
                      <option value="Urgent - (1-2) weeks">Urgent — (1-2) weeks</option>
                      <option value="Not Urgent (4-8 weeks)">Not urgent — (4-8 weeks)</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className={labelClass}>
                    Tell us about your needs
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    maxLength={500}
                    placeholder="Share your schedule, the type of support you need, and anything else that would help us match you well."
                    className={`${inputClass} resize-none`}
                  ></textarea>
                </div>

                <input
                  className="form-honey-pot"
                  type="text"
                  name="website_alt"
                  tabIndex={-1}
                  autoComplete="off"
                  aria-hidden="true"
                  readOnly
                />

                {status === "error" && (
                  <div className="flex items-start gap-2 text-sm text-primary-800 bg-primary-100 border border-primary-200 rounded-md px-4 py-3">
                    <i className="ri-error-warning-line mt-0.5"></i>
                    <span>{errorMessage}</span>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={status === "submitting"}
                  className="flex items-center justify-center gap-2 bg-primary-500 hover:bg-primary-600 disabled:opacity-60 disabled:cursor-not-allowed text-background-50 text-base font-semibold px-7 py-3.5 rounded-md whitespace-nowrap cursor-pointer transition-colors"
                >
                  {status === "submitting" ? (
                    <>
                      <i className="ri-loader-4-line animate-spin"></i>
                      Sending...
                    </>
                  ) : (
                    <>
                      Request Free Consultation
                      <i className="ri-arrow-right-line"></i>
                    </>
                  )}
                </button>
                <p className="text-xs text-foreground-500 text-center">
                  We respect your privacy. Your details are only used to respond to your enquiry.
                </p>
              </form>
            )}
          </div>

          <div className="lg:col-span-2 flex flex-col gap-5">
            <div className="p-6 md:p-7 rounded-lg bg-accent-100 border border-accent-200 text-foreground-950">
              <h3 className="font-heading text-lg font-semibold mb-1">Talk to a real person</h3>
              <p className="text-sm text-foreground-700 mb-6">
                Prefer to chat? Our consultants are happy to help over the phone or WhatsApp.
              </p>
              <div className="flex flex-col gap-4">
                {contactDetails.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    target={item.href.startsWith("http") ? "_blank" : undefined}
                    rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="flex items-start gap-3 cursor-pointer group"
                  >
                    <span className="w-9 h-9 flex items-center justify-center rounded-lg bg-accent-50 group-hover:bg-accent-200 transition-colors shrink-0">
                      <i className={`${item.icon} text-accent-700`}></i>
                    </span>
                    <span>
                      <span className="block text-xs uppercase tracking-wide text-foreground-600">{item.label}</span>
                      <span className="block text-sm text-foreground-950">{item.value}</span>
                    </span>
                  </a>
                ))}
              </div>
            </div>

            <div className="rounded-lg overflow-hidden border border-background-200/70 h-56 lg:h-full min-h-[220px]">
              <iframe
                title="AC Global Manpower Domestic Services office location"
                src="https://www.google.com/maps?q=101%20Upper%20Cross%20Street%20Peoples%20Park%20Centre%20Singapore%20058357&output=embed"
                className="w-full h-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}