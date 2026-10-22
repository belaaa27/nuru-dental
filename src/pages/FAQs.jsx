import { useState } from "react";
import { Link } from "react-router-dom";
import { faqs } from "../data/faqs";

export default function FAQs() {
  // Track the currently expanded FAQ by ID
  const [openFaqId, setOpenFaqId] = useState(faqs[0]?.id || null);

  const toggleFaq = (id) => {
    setOpenFaqId((prevId) => (prevId === id ? null : id));
  };

  return (
    <div className="bg-[#F7F5EE] text-[#25352C] selection:bg-[#E8EDE3] selection:text-[#315747]">
      {/* 1. Header & Hero Section with Soft Overlay */}
      <section className="relative isolate overflow-hidden border-b border-[#315747]/10">
        {/* Background Image Layer */}
        <div className="absolute inset-0 -z-20 bg-[#25352C]/5">
          <img
            src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=1600"
            alt=""
            aria-hidden="true"
            className="h-full w-full object-cover object-center grayscale-[15%]"
          />
        </div>

        {/* Ivory Soft Gradient Overlay Layer */}
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#F7F5EE] via-[#F7F5EE]/95 to-[#F7F5EE]/60" />

        <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E8EDE3] text-[#315747] text-xs font-medium tracking-wider uppercase">
              <span>Patient Information</span>
            </div>
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-normal text-[#25352C] leading-tight">
              Frequently asked{" "}
              <span className="italic font-normal text-[#315747]">
                questions.
              </span>
            </h1>
            <p className="text-base sm:text-lg text-[#25352C]/85 leading-relaxed font-normal max-w-2xl">
              Find answers regarding our care approach, first visits, and studio
              experience. Have additional questions? We are always glad to
              assist.
            </p>
          </div>
        </div>
      </section>

      {/* 2. Key Pillars Overview */}
      <section className="py-12 border-b border-[#315747]/10 bg-[#E8EDE3]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex items-start gap-4 p-4">
              <div className="p-2.5 rounded-full bg-[#E8EDE3] text-[#315747] shrink-0">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="1.75"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <div>
                <h3 className="font-serif text-base text-[#25352C] font-medium">
                  Unhurried Pacing
                </h3>
                <p className="text-xs text-[#25352C]/75 leading-relaxed mt-1">
                  Visits are structured with dedicated time for thorough
                  assessments and open dialogue.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4">
              <div className="p-2.5 rounded-full bg-[#E8EDE3] text-[#315747] shrink-0">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="1.75"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
              </div>
              <div>
                <h3 className="font-serif text-base text-[#25352C] font-medium">
                  Anxiety-Free Focus
                </h3>
                <p className="text-xs text-[#25352C]/75 leading-relaxed mt-1">
                  Clear explanations before every step to ensure your complete
                  comfort throughout appointments.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4">
              <div className="p-2.5 rounded-full bg-[#E8EDE3] text-[#315747] shrink-0">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="1.75"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                  />
                </svg>
              </div>
              <div>
                <h3 className="font-serif text-base text-[#25352C] font-medium">
                  Transparent Planning
                </h3>
                <p className="text-xs text-[#25352C]/75 leading-relaxed mt-1">
                  We review treatment recommendations clearly so you can make
                  confident, informed decisions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Main Accordion FAQ Section */}
      <section className="py-16 lg:py-20 border-b border-[#315747]/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10 text-center">
            <h2 className="text-xs uppercase tracking-widest text-[#315747] font-semibold mb-2">
              Common Questions
            </h2>
            <p className="font-serif text-2xl sm:text-3xl text-[#25352C]">
              Everything you need to know before visiting.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => {
              const isOpen = openFaqId === faq.id;
              const buttonId = `faq-button-${faq.id}`;
              const contentId = `faq-content-${faq.id}`;

              return (
                <div
                  key={faq.id}
                  className="bg-[#F7F5EE] border border-[#315747]/15 rounded-sm overflow-hidden transition-colors hover:border-[#315747]/40"
                >
                  <button
                    id={buttonId}
                    type="button"
                    onClick={() => toggleFaq(faq.id)}
                    aria-expanded={isOpen}
                    aria-controls={contentId}
                    className="w-full py-5 px-6 text-left flex justify-between items-center focus:outline-none focus:ring-2 focus:ring-[#315747] focus:ring-inset group"
                  >
                    <span className="font-serif text-lg sm:text-xl text-[#25352C] group-hover:text-[#315747] transition-colors pr-4">
                      <span className="text-[#315747]/60 text-sm font-sans mr-3">
                        0{index + 1}.
                      </span>
                      {faq.question}
                    </span>
                    <span className="p-1 rounded-full bg-[#E8EDE3]/60 group-hover:bg-[#E8EDE3] text-[#315747] shrink-0 transition-colors">
                      <svg
                        className={`w-5 h-5 transition-transform duration-200 ${
                          isOpen ? "rotate-180" : "rotate-0"
                        }`}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2"
                        aria-hidden="true"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </span>
                  </button>

                  {isOpen && (
                    <div
                      id={contentId}
                      role="region"
                      aria-labelledby={buttonId}
                      className="px-6 pb-6 pt-2 text-sm text-[#25352C]/80 leading-relaxed border-t border-[#315747]/10 bg-[#E8EDE3]/10"
                    >
                      <p className="max-w-3xl">{faq.answer}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. Contact CTA Panel */}
      <section className="py-12 lg:py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto bg-[#25352C] text-[#F7F5EE] rounded-lg p-8 sm:p-12 text-center space-y-4 shadow-md border border-[#315747]/20">
          <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-[#F7F5EE]">
            Have a question not covered here?
          </h2>
          <p className="text-xs sm:text-sm text-[#F7F5EE]/85 max-w-lg mx-auto leading-relaxed">
            Reach out to our studio directly. We are happy to discuss
            appointment options or answer any clinical questions you may have.
          </p>
          <div className="pt-3">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-7 py-3 text-xs sm:text-sm font-semibold text-[#25352C] bg-[#F7F5EE] hover:bg-[#E8EDE3] transition-colors rounded-sm focus:outline-none focus:ring-2 focus:ring-[#D7CBB9] focus:ring-offset-2 focus:ring-offset-[#25352C]"
            >
              Contact Studio
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
