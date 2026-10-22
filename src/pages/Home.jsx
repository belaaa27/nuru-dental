import { useState } from "react";
import { Link } from "react-router-dom";
import { services } from "../data/services";
import { teamMembers } from "../data/team";
import { faqs } from "../data/faqs";

export default function Home() {
  const [openFaq, setOpenFaq] = useState(0);
  const [imageErrors, setImageErrors] = useState({});

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const handleImageError = (id) => {
    setImageErrors((prev) => ({ ...prev, [id]: true }));
  };

  return (
    <div className="bg-[#F7F5EE] text-[#25352C] selection:bg-[#E8EDE3] selection:text-[#315747]">
      {/* 1. Refined Hero Section */}
      <section className="relative overflow-hidden pt-12 pb-16 lg:pt-16 lg:pb-24 border-b border-[#315747]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Hero Copy */}
            <div className="lg:col-span-7 space-y-5 text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E8EDE3] text-[#315747] text-xs font-medium tracking-wider uppercase">
                <span>Demonstration Site</span>
              </div>
              <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-normal text-[#25352C] leading-[1.15] tracking-tight">
                Modern dentistry,{" "}
                <span className="italic font-normal text-[#315747]">
                  centered on you.
                </span>
              </h1>
              <p className="text-base sm:text-lg text-[#25352C]/80 max-w-xl leading-relaxed">
                A serene studio experience combining gentle care with precision
                dentistry.
              </p>
              <div className="pt-2 flex flex-col sm:flex-row gap-3">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center px-6 py-3 text-sm font-medium text-[#F7F5EE] bg-[#315747] hover:bg-[#25352C] transition-colors focus:outline-none focus:ring-2 focus:ring-[#315747] focus:ring-offset-2"
                >
                  Schedule Consultation
                </Link>
                <Link
                  to="/services"
                  className="inline-flex items-center justify-center px-6 py-3 text-sm font-medium text-[#315747] bg-[#E8EDE3] hover:bg-[#D7CBB9]/40 transition-colors focus:outline-none focus:ring-2 focus:ring-[#315747] focus:ring-offset-2"
                >
                  Explore Services
                </Link>
              </div>
            </div>

            {/* Hero Imagery */}
            <div className="lg:col-span-5">
              <div className="aspect-[4/5] overflow-hidden rounded-sm bg-[#E8EDE3] shadow-sm border border-[#315747]/10">
                <img
                  src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=1000"
                  alt="Bright, serene clinical practice environment"
                  className="w-full h-full object-cover grayscale-[10%] hover:grayscale-0 transition-all duration-500"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Philosophy Section */}
      <section className="py-16 bg-[#E8EDE3]/30 border-b border-[#315747]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-12">
            <h2 className="text-xs uppercase tracking-widest text-[#315747] font-semibold mb-2">
              Our Philosophy
            </h2>
            <p className="font-serif text-3xl sm:text-4xl text-[#25352C]">
              Thoughtful care replacing clinical stress.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 bg-[#F7F5EE] border border-[#315747]/10 space-y-2">
              <span className="font-serif text-2xl text-[#315747]">01</span>
              <h3 className="font-serif text-lg text-[#25352C]">
                Unhurried Visits
              </h3>
              <p className="text-xs text-[#25352C]/75 leading-relaxed">
                Dedicated time reserved for every patient to ensure clear
                communication and complete comfort.
              </p>
            </div>

            <div className="p-6 bg-[#F7F5EE] border border-[#315747]/10 space-y-2">
              <span className="font-serif text-2xl text-[#315747]">02</span>
              <h3 className="font-serif text-lg text-[#25352C]">
                Transparent Process
              </h3>
              <p className="text-xs text-[#25352C]/75 leading-relaxed">
                Step-by-step explanations and clear treatment discussions prior
                to beginning any procedure.
              </p>
            </div>

            <div className="p-6 bg-[#F7F5EE] border border-[#315747]/10 space-y-2">
              <span className="font-serif text-2xl text-[#315747]">03</span>
              <h3 className="font-serif text-lg text-[#25352C]">
                Modern Diagnostics
              </h3>
              <p className="text-xs text-[#25352C]/75 leading-relaxed">
                Contemporary digital imaging tools designed for efficient and
                accurate patient evaluations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Selected Services Section */}
      <section className="py-16 border-b border-[#315747]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4">
            <div>
              <h2 className="text-xs uppercase tracking-widest text-[#315747] font-semibold mb-1">
                Selected Services
              </h2>
              <p className="font-serif text-2xl sm:text-3xl text-[#25352C]">
                Core care offerings.
              </p>
            </div>
            <Link
              to="/services"
              className="text-xs font-semibold text-[#315747] hover:underline uppercase tracking-wider"
            >
              Full Menu &rarr;
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {services.map((svc) => (
              <div
                key={svc.id}
                className="bg-[#F7F5EE] border border-[#315747]/15 p-6 flex flex-col justify-between hover:border-[#315747] transition-colors"
              >
                <div>
                  <span className="text-[10px] uppercase tracking-wider text-[#315747] bg-[#E8EDE3] px-2 py-0.5 font-medium inline-block mb-4">
                    {svc.tag}
                  </span>
                  <h3 className="font-serif text-xl text-[#25352C] mb-2">
                    {svc.title}
                  </h3>
                  <p className="text-xs text-[#25352C]/75 leading-relaxed mb-6">
                    {svc.desc}
                  </p>
                </div>
                <Link
                  to="/services"
                  className="text-xs font-semibold uppercase tracking-wider text-[#315747] hover:underline"
                >
                  Learn details &rarr;
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Team Preview Section */}
      <section className="py-16 bg-[#E8EDE3]/20 border-b border-[#315747]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-10">
            <h2 className="text-xs uppercase tracking-widest text-[#315747] font-semibold mb-1">
              Team Preview
            </h2>
            <p className="font-serif text-2xl sm:text-3xl text-[#25352C] mb-2">
              Demonstration Profiles
            </p>
            <p className="text-xs text-[#25352C]/70">
              Sample staff profiles for layout illustration purposes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {teamMembers.map((member) => (
              <div
                key={member.id}
                className="bg-[#F7F5EE] border border-[#315747]/10 overflow-hidden"
              >
                <div className="aspect-[4/3] bg-[#E8EDE3] relative overflow-hidden">
                  {imageErrors[member.id] ? (
                    <div className="w-full h-full flex items-center justify-center text-[#315747]/60 text-xs italic p-4 text-center">
                      Sample portrait placeholder
                    </div>
                  ) : (
                    <img
                      src={member.image}
                      alt={`Demonstration profile image for ${member.name}`}
                      onError={() => handleImageError(member.id)}
                      className="w-full h-full object-cover"
                    />
                  )}
                </div>
                <div className="p-5">
                  <h3 className="font-serif text-lg text-[#25352C]">
                    {member.name}
                  </h3>
                  <p className="text-[11px] text-[#315747] font-medium uppercase tracking-wider my-1">
                    {member.role}
                  </p>
                  <p className="text-xs text-[#25352C]/75 leading-relaxed">
                    {member.bio}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <Link
              to="/team"
              className="inline-flex items-center justify-center px-5 py-2.5 border border-[#315747] text-xs font-medium text-[#315747] hover:bg-[#315747] hover:text-[#F7F5EE] transition-colors"
            >
              View All Profiles
            </Link>
          </div>
        </div>
      </section>

      {/* 5. FAQ Preview Section */}
      <section className="py-16 border-b border-[#315747]/10">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-xs uppercase tracking-widest text-[#315747] font-semibold mb-1">
              Inquiries
            </h2>
            <p className="font-serif text-2xl sm:text-3xl text-[#25352C]">
              Frequently Asked Questions
            </p>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <div
                  key={faq.id}
                  className="border border-[#315747]/15 bg-[#F7F5EE]"
                >
                  <button
                    type="button"
                    onClick={() => toggleFaq(index)}
                    aria-expanded={isOpen}
                    className="w-full py-4 px-5 text-left flex justify-between items-center focus:outline-none focus:ring-2 focus:ring-[#315747]"
                  >
                    <span className="font-serif text-base text-[#25352C] pr-4">
                      {faq.question}
                    </span>
                    <span className="text-[#315747] font-bold text-lg leading-none">
                      {isOpen ? "−" : "+"}
                    </span>
                  </button>
                  {isOpen && (
                    <div className="px-5 pb-4 text-xs text-[#25352C]/80 border-t border-[#315747]/10 pt-3 leading-relaxed">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          <div className="mt-6 text-center">
            <Link
              to="/faqs"
              className="text-xs font-semibold text-[#315747] hover:underline"
            >
              Read all FAQs &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* 6. Refined Contact CTA Panel */}
      <section className="px-4 py-10 sm:px-6 lg:px-8 lg:py-12">
        <div className="mx-auto max-w-5xl rounded-xl border border-[#315747]/10 bg-[#E8EDE3] px-6 py-8 text-center sm:px-10 sm:py-10">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-[#315747]">
            Your care, your pace
          </p>

          <h2 className="mx-auto max-w-2xl font-display text-2xl font-normal leading-tight text-[#25352C] sm:text-3xl lg:text-4xl">
            Have questions about your dental care?
          </h2>

          <p className="mx-auto mt-3 max-w-lg text-sm leading-relaxed text-[#25352C]/75 sm:text-base">
            Get in touch to learn more about our services and explore your
            options.
          </p>

          <div className="mt-6">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center rounded-md bg-[#315747] px-6 py-3 text-sm font-medium text-[#F7F5EE] transition-colors hover:bg-[#25352C] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#315747] focus-visible:ring-offset-2 focus-visible:ring-offset-[#E8EDE3]"
            >
              Contact Us
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
