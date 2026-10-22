import { useState } from "react";
import { Link } from "react-router-dom";
import { teamMembers } from "../data/team";

export default function Team() {
  const [imageErrors, setImageErrors] = useState({});

  const handleImageError = (id) => {
    setImageErrors((prev) => ({ ...prev, [id]: true }));
  };

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

        {/* Ivory Soft Gradient Overlay Layer */}
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#F7F5EE] via-[#F7F5EE]/95 to-[#F7F5EE]/60" />

        <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E8EDE3] text-[#315747] text-xs font-medium tracking-wider uppercase">
              <span>Demonstration Studio Profile</span>
            </div>
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-normal text-[#25352C] leading-tight">
              A calm, patient-first{" "}
              <span className="italic font-normal text-[#315747]">
                care environment.
              </span>
            </h1>
            <p className="text-base sm:text-lg text-[#25352C]/85 leading-relaxed font-normal max-w-2xl">
              Meet the sample practitioner profiles illustrating our approach to
              gentle communication, serene clinical pacing, and personalized
              oral health guidance.
            </p>
          </div>
        </div>
      </section>

      {/* 2. Team Principles Section */}
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
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  />
                </svg>
              </div>
              <div>
                <h3 className="font-serif text-base text-[#25352C] font-medium">
                  Empathy First
                </h3>
                <p className="text-xs text-[#25352C]/75 leading-relaxed mt-1">
                  Listening carefully to patient concerns and pacing treatments
                  to ensure individual comfort.
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
                    d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                  />
                </svg>
              </div>
              <div>
                <h3 className="font-serif text-base text-[#25352C] font-medium">
                  Clear Communication
                </h3>
                <p className="text-xs text-[#25352C]/75 leading-relaxed mt-1">
                  Explaining procedures step-by-step before treatment so you
                  feel informed and relaxed.
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
                  Gentle Maintenance
                </h3>
                <p className="text-xs text-[#25352C]/75 leading-relaxed mt-1">
                  Focusing on preventive routines and conservative techniques to
                  protect natural tooth health.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Team Profiles Grid */}
      <section className="py-16 lg:py-20 border-b border-[#315747]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-xs uppercase tracking-widest text-[#315747] font-semibold mb-2">
              Practitioner Profiles
            </h2>
            <p className="font-serif text-2xl sm:text-3xl text-[#25352C]">
              Sample studio staff representation.
            </p>
            <p className="text-xs text-[#25352C]/70 mt-1">
              Note: The profiles below are demonstration entries for site layout
              presentation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member) => (
              <div
                key={member.id}
                className="bg-[#F7F5EE] border border-[#315747]/15 overflow-hidden flex flex-col justify-between hover:border-[#315747] transition-all group"
              >
                <div>
                  <div className="aspect-[4/3] bg-[#E8EDE3] relative overflow-hidden">
                    {imageErrors[member.id] ? (
                      <div className="w-full h-full flex flex-col items-center justify-center text-[#315747]/60 text-xs italic p-4 text-center bg-[#E8EDE3]">
                        <svg
                          className="w-8 h-8 mb-2 opacity-40"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth="1.5"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                          />
                        </svg>
                        <span>Sample profile portrait</span>
                      </div>
                    ) : (
                      <img
                        src={member.image}
                        alt={`Demonstration portrait for ${member.name}`}
                        onError={() => handleImageError(member.id)}
                        className="w-full h-full object-cover grayscale-[10%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
                      />
                    )}
                  </div>

                  <div className="p-6 space-y-3">
                    <span className="text-[10px] sm:text-xs uppercase tracking-wider text-[#315747] bg-[#E8EDE3] px-2.5 py-1 font-medium inline-block">
                      {member.role}
                    </span>
                    <h3 className="font-serif text-2xl text-[#25352C]">
                      {member.name}
                    </h3>
                    <p className="text-xs text-[#25352C]/80 leading-relaxed">
                      {member.bio}
                    </p>
                  </div>
                </div>

                <div className="p-6 pt-0">
                  <div className="pt-4 border-t border-[#315747]/10 flex items-center justify-between text-xs text-[#315747] font-medium">
                    <span className="uppercase tracking-wider text-[10px]">
                      Studio Practice
                    </span>
                    <span className="text-xs">&bull; Consultation</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Care Environment Standards */}
      <section className="py-16 lg:py-20 bg-[#E8EDE3]/30 border-b border-[#315747]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-12">
            <h2 className="text-xs uppercase tracking-widest text-[#315747] font-semibold mb-2">
              Our Studio Philosophy
            </h2>
            <p className="font-serif text-3xl text-[#25352C]">
              Designed around patient comfort and peace of mind.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-[#F7F5EE] p-6 border border-[#315747]/10 space-y-3">
              <span className="font-serif text-xl text-[#315747] block">
                01
              </span>
              <h3 className="font-serif text-lg text-[#25352C]">
                Unhurried Appointments
              </h3>
              <p className="text-xs text-[#25352C]/75 leading-relaxed">
                We reserve full schedule blocks to give every patient attentive,
                unhurried care without crowded waiting rooms.
              </p>
            </div>

            <div className="bg-[#F7F5EE] p-6 border border-[#315747]/10 space-y-3">
              <span className="font-serif text-xl text-[#315747] block">
                02
              </span>
              <h3 className="font-serif text-lg text-[#25352C]">
                Transparent Process
              </h3>
              <p className="text-xs text-[#25352C]/75 leading-relaxed">
                Options, costs, and procedure steps are clearly reviewed
                together before any treatment begins.
              </p>
            </div>

            <div className="bg-[#F7F5EE] p-6 border border-[#315747]/10 space-y-3">
              <span className="font-serif text-xl text-[#315747] block">
                03
              </span>
              <h3 className="font-serif text-lg text-[#25352C]">
                Serene Space
              </h3>
              <p className="text-xs text-[#25352C]/75 leading-relaxed">
                Quiet treatment environments created with natural light and
                minimalist design elements to reduce anxiety.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Closing Contact CTA Panel */}
      <section className="py-12 lg:py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto bg-[#25352C] text-[#F7F5EE] rounded-lg p-8 sm:p-12 text-center space-y-4 shadow-md border border-[#315747]/20">
          <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-[#F7F5EE]">
            Would you like to schedule an introductory visit?
          </h2>
          <p className="text-xs sm:text-sm text-[#F7F5EE]/85 max-w-lg mx-auto leading-relaxed">
            Reach out to our team to submit an inquiry or learn more about
            consultation options.
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
