import { Link } from "react-router-dom";
import { services } from "../data/services";

// Minimal, elegant SVG line icons mapped by service ID
const ServiceIcon = ({ id }) => {
  const iconProps = {
    className: "w-6 h-6 text-[#315747]",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.75",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    "aria-hidden": "true",
  };

  switch (id) {
    case "preventive":
      // Shield line icon representing preventive care & protection
      return (
        <svg viewBox="0 0 24 24" {...iconProps}>
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          <path d="M9 12l2 2 4-4" />
        </svg>
      );
    case "restorative":
      // Stylized tooth contour representing restorative care & structural integrity
      return (
        <svg viewBox="0 0 24 24" {...iconProps}>
          <path d="M12 4.5c-2.5-2-6-1.5-7.5 1S3 10.5 4.5 13C6 15.5 8 20.5 9.5 21c1.5.5 2.5-2 2.5-4 0 2 1 4.5 2.5 4 1.5-.5 3.5-5.5 5-8 1.5-2.5 1.5-6.5 0-8.5s-5-3-7.5-1z" />
        </svg>
      );
    case "cosmetic":
      // Subtle aesthetic sparkle icon representing cosmetic enhancements
      return (
        <svg viewBox="0 0 24 24" {...iconProps}>
          <path d="M12 3v4m0 10v4M3 12h4m10 0h4M5.6 5.6l2.8 2.8m7.2 7.2l2.8 2.8M5.6 18.4l2.8-2.8m7.2-7.2l2.8-2.8" />
        </svg>
      );
    default:
      return (
        <svg viewBox="0 0 24 24" {...iconProps}>
          <circle cx="12" cy="12" r="9" />
        </svg>
      );
  }
};

export default function Services() {
  return (
    <div className="bg-[#F7F5EE] text-[#25352C] selection:bg-[#E8EDE3] selection:text-[#315747]">
      {/* 1. Header & Hero Section with Background Image & Soft Overlay */}
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

        {/* Ivory Soft Gradient Overlay Layer for Visual Legibility */}
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#F7F5EE] via-[#F7F5EE]/95 to-[#F7F5EE]/30" />

        <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E8EDE3] text-[#315747] text-xs font-medium tracking-wider uppercase">
              <span>Demonstration Care Menu</span>
            </div>
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-normal text-[#25352C] leading-tight">
              Comprehensive dentistry,{" "}
              <span className="italic font-normal text-[#315747]">
                tailored with care.
              </span>
            </h1>
            <p className="text-base sm:text-lg text-[#25352C]/85 leading-relaxed font-normal max-w-2xl">
              Explore our core offerings focused on long-term oral health,
              natural aesthetics, and transparent, patient-first care in an
              unhurried studio setting.
            </p>
          </div>
        </div>
      </section>

      {/* 2. Primary Services Grid */}
      <section className="py-16 lg:py-20 border-b border-[#315747]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-xs uppercase tracking-widest text-[#315747] font-semibold mb-2">
              Our Core Offerings
            </h2>
            <p className="font-serif text-2xl sm:text-3xl text-[#25352C]">
              Focused treatments for every stage of your care.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service) => (
              <div
                key={service.id}
                className="bg-[#F7F5EE] border border-[#315747]/15 p-8 flex flex-col justify-between hover:border-[#315747] transition-all group"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-[10px] sm:text-xs uppercase tracking-wider text-[#315747] bg-[#E8EDE3] px-2.5 py-1 font-medium inline-block">
                      {service.tag}
                    </span>
                    <ServiceIcon id={service.id} />
                  </div>
                  <h3 className="font-serif text-2xl text-[#25352C] mb-4 group-hover:text-[#315747] transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-sm text-[#25352C]/80 leading-relaxed mb-8">
                    {service.desc}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#315747]/10">
                  <Link
                    to="/contact"
                    className="inline-flex items-center text-xs font-semibold uppercase tracking-wider text-[#315747] hover:text-[#25352C] group-hover:translate-x-1 transition-transform"
                  >
                    <span>Inquire about {service.title.toLowerCase()}</span>
                    <span className="ml-2">&rarr;</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Care Standards & Approach */}
      <section className="py-16 lg:py-20 bg-[#E8EDE3]/30 border-b border-[#315747]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-12">
            <h2 className="text-xs uppercase tracking-widest text-[#315747] font-semibold mb-2">
              Our Practice Standards
            </h2>
            <p className="font-serif text-3xl text-[#25352C]">
              What sets our clinical experience apart.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-[#F7F5EE] p-6 border border-[#315747]/10 space-y-3">
              <span className="font-serif text-xl text-[#315747] block">
                01
              </span>
              <h3 className="font-serif text-lg text-[#25352C]">
                Clear Pacing
              </h3>
              <p className="text-xs text-[#25352C]/75 leading-relaxed">
                Every procedure is conducted at a comfortable pace with open
                communication before, during, and after treatment.
              </p>
            </div>

            <div className="bg-[#F7F5EE] p-6 border border-[#315747]/10 space-y-3">
              <span className="font-serif text-xl text-[#315747] block">
                02
              </span>
              <h3 className="font-serif text-lg text-[#25352C]">
                Conservation First
              </h3>
              <p className="text-xs text-[#25352C]/75 leading-relaxed">
                We prioritize preserving natural tooth structure whenever
                possible, using minimally invasive modern restorative methods.
              </p>
            </div>

            <div className="bg-[#F7F5EE] p-6 border border-[#315747]/10 space-y-3">
              <span className="font-serif text-xl text-[#315747] block">
                03
              </span>
              <h3 className="font-serif text-lg text-[#25352C]">
                Transparent Planning
              </h3>
              <p className="text-xs text-[#25352C]/75 leading-relaxed">
                Detailed treatment plans and clear options are provided upfront
                so you can make informed health decisions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Closing Contact CTA Panel */}
      <section className="px-4 py-10 sm:px-6 lg:px-8 lg:py-12">
        <div className="mx-auto max-w-5xl rounded-xl border border-[#315747]/10 bg-[#E8EDE3] px-6 py-8 text-center sm:px-10 sm:py-10">
          <h2 className="mx-auto max-w-2xl font-display text-2xl font-normal leading-tight text-[#25352C] sm:text-3xl lg:text-4xl">
            Have questions about a specific treatment?
          </h2>

          <p className="mx-auto mt-3 max-w-lg text-sm leading-relaxed text-[#25352C]/75 sm:text-base">
            Get in touch with our studio team to discuss your needs or schedule
            an introductory consultation.
          </p>

          <div className="mt-6">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center rounded-md bg-[#315747] px-6 py-3 text-sm font-medium text-[#F7F5EE] transition-colors hover:bg-[#25352C] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#315747] focus-visible:ring-offset-2 focus-visible:ring-offset-[#E8EDE3]"
            >
              Contact Studio
              <span aria-hidden="true" className="ml-2">
                &rarr;
              </span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
