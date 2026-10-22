import { useState } from "react";
import { Link } from "react-router-dom";

export default function Contact() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    topic: "General Inquiry",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [heroImageError, setHeroImageError] = useState(false);

  const topics = [
    "General Inquiry",
    "Consultation & First Visit",
    "Preventive Care",
    "Restorative Care",
    "Cosmetic Enhancements",
  ];

  const validate = () => {
    const newErrors = {};
    if (!formData.fullName.trim()) {
      newErrors.fullName = "Full name is required.";
    }
    if (!formData.email.trim()) {
      newErrors.email = "Email address is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address.";
    }
    if (!formData.message.trim()) {
      newErrors.message = "Please include your message or inquiry.";
    }
    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: null }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      setErrors({});
      setIsSubmitted(true);
    }
  };

  return (
    <div className="bg-[#F7F5EE] text-[#25352C] selection:bg-[#E8EDE3] selection:text-[#315747]">
      {/* 1. Distinctive Hero Section */}
      <section className="relative isolate overflow-hidden border-b border-[#315747]/10">
        {/* Background Image Layer - Direct, verified landscape reception photo */}
        <div className="absolute inset-0 -z-20 bg-[#25352C]/5">
          {!heroImageError ? (
            <img
              src="https://images.unsplash.com/photo-1629909615184-74f495363b67?auto=format&fit=crop&q=80&w=1600"
              alt=""
              aria-hidden="true"
              onError={() => setHeroImageError(true)}
              className="h-full w-full object-cover object-center grayscale-[15%]"
            />
          ) : (
            <div className="h-full w-full bg-[#E8EDE3]" />
          )}
        </div>

        {/* Ivory Soft Gradient Overlay Layer */}
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#F7F5EE] via-[#F7F5EE]/95 to-[#F7F5EE]/60" />

        <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E8EDE3] text-[#315747] text-xs font-medium tracking-wider uppercase">
              <span>Connect With Us</span>
            </div>
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-normal text-[#25352C] leading-tight">
              Begin your journey to{" "}
              <span className="italic font-normal text-[#315747]">
                calm, thoughtful care.
              </span>
            </h1>
            <p className="text-base sm:text-lg text-[#25352C]/85 leading-relaxed font-normal max-w-2xl">
              We welcome inquiries about our studio approach, appointment
              options, and clinical services. Reach out using any channel below.
            </p>
          </div>
        </div>
      </section>

      {/* 2. Demonstration Disclaimer Banner */}
      <div className="bg-[#E8EDE3] border-b border-[#315747]/15 py-3.5 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2 text-center sm:text-left">
          <div className="flex items-center gap-2 text-xs font-medium text-[#315747]">
            <svg
              className="w-4 h-4 shrink-0"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <span>
              Demonstration Notice — Sample practice profile for layout
              illustration.
            </span>
          </div>
          <span className="text-[11px] text-[#25352C]/70 italic">
            Contact details and form submission below are frontend placeholding
            examples.
          </span>
        </div>
      </div>

      {/* 3. Main Content: Contact Details & Inquiry Form */}
      <section className="py-16 lg:py-20 border-b border-[#315747]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Contact Details Column */}
            <div className="lg:col-span-5 space-y-8">
              <div>
                <h2 className="text-xs uppercase tracking-widest text-[#315747] font-semibold mb-2">
                  Get In Touch
                </h2>
                <p className="font-serif text-2xl sm:text-3xl text-[#25352C]">
                  Studio Inquiries & Information
                </p>
                <p className="text-xs text-[#25352C]/75 leading-relaxed mt-2">
                  Replace these template contact placeholders with verified
                  studio details once configured.
                </p>
              </div>

              <div className="space-y-5">
                {/* Phone */}
                <div className="p-4 bg-[#F7F5EE] border border-[#315747]/15 rounded-sm flex items-start gap-4">
                  <div className="p-2.5 rounded-full bg-[#E8EDE3] text-[#315747] shrink-0 mt-0.5">
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
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xs font-semibold text-[#315747] uppercase tracking-wider">
                      Phone Inquiries
                    </h3>
                    <p className="text-sm font-medium text-[#25352C] mt-1">
                      +251 9XX XXX XXX
                    </p>
                    <p className="text-[11px] text-[#25352C]/65 italic mt-0.5">
                      Demo phone placeholder
                    </p>
                  </div>
                </div>

                {/* Email */}
                <div className="p-4 bg-[#F7F5EE] border border-[#315747]/15 rounded-sm flex items-start gap-4">
                  <div className="p-2.5 rounded-full bg-[#E8EDE3] text-[#315747] shrink-0 mt-0.5">
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
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xs font-semibold text-[#315747] uppercase tracking-wider">
                      Email Correspondence
                    </h3>
                    <p className="text-sm font-medium text-[#25352C] mt-1">
                      hello@example.com
                    </p>
                    <p className="text-[11px] text-[#25352C]/65 italic mt-0.5">
                      Demo email placeholder
                    </p>
                  </div>
                </div>

                {/* Location */}
                <div className="p-4 bg-[#F7F5EE] border border-[#315747]/15 rounded-sm flex items-start gap-4">
                  <div className="p-2.5 rounded-full bg-[#E8EDE3] text-[#315747] shrink-0 mt-0.5">
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
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xs font-semibold text-[#315747] uppercase tracking-wider">
                      Studio Location
                    </h3>
                    <p className="text-sm font-medium text-[#25352C] mt-1">
                      Demo clinic address — replace with real address
                    </p>
                    <p className="text-[11px] text-[#25352C]/65 italic mt-0.5">
                      Sample physical location
                    </p>
                  </div>
                </div>

                {/* Hours */}
                <div className="p-4 bg-[#F7F5EE] border border-[#315747]/15 rounded-sm flex items-start gap-4">
                  <div className="p-2.5 rounded-full bg-[#E8EDE3] text-[#315747] shrink-0 mt-0.5">
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
                    <h3 className="text-xs font-semibold text-[#315747] uppercase tracking-wider">
                      Practice Hours
                    </h3>
                    <p className="text-sm font-medium text-[#25352C] mt-1">
                      Demo hours — replace with confirmed clinic hours
                    </p>
                    <p className="text-[11px] text-[#25352C]/65 italic mt-0.5">
                      By appointment only
                    </p>
                  </div>
                </div>
              </div>

              {/* Social Channels */}
              <div className="pt-2">
                <h3 className="text-xs font-semibold text-[#315747] uppercase tracking-wider mb-3">
                  Digital Channels
                </h3>
                <div className="flex flex-wrap gap-3">
                  <a
                    href="https://t.me/your_demo_username"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-3.5 py-2 bg-[#E8EDE3]/60 hover:bg-[#E8EDE3] text-[#315747] rounded-sm text-xs font-medium transition-colors border border-[#315747]/10"
                  >
                    <svg
                      className="w-4 h-4"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69.01-.03.01-.14-.07-.2-.08-.06-.19-.04-.27-.02-.12.02-1.96 1.25-5.54 3.69-.52.36-1 .53-1.42.52-.47-.01-1.37-.26-2.03-.48-.82-.27-1.47-.42-1.42-.88.03-.25.38-.51 1.07-.78 4.18-1.82 6.97-3.02 8.37-3.61 3.98-1.66 4.81-1.95 5.35-1.96.12 0 .38.03.55.17.14.12.18.28.2.45-.02.07-.02.16-.03.26z" />
                    </svg>
                    <span>Telegram (Demo)</span>
                  </a>

                  <a
                    href="https://www.instagram.com/your_demo_username/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-3.5 py-2 bg-[#E8EDE3]/60 hover:bg-[#E8EDE3] text-[#315747] rounded-sm text-xs font-medium transition-colors border border-[#315747]/10"
                  >
                    <svg
                      className="w-4 h-4"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                    </svg>
                    <span>Instagram (Demo)</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Form Column */}
            <div className="lg:col-span-7 bg-[#F7F5EE] border border-[#315747]/15 p-6 sm:p-10 rounded-sm shadow-sm">
              <h2 className="font-serif text-2xl text-[#25352C] mb-1">
                Send an Inquiry
              </h2>
              <p className="text-xs text-[#25352C]/75 mb-6 leading-relaxed">
                Complete this form to test our frontend layout. Please note that
                submission is for demonstration purposes.
              </p>

              {isSubmitted ? (
                <div className="p-6 bg-[#E8EDE3]/50 border border-[#315747]/20 rounded-sm space-y-3 text-center">
                  <div className="w-10 h-10 mx-auto rounded-full bg-[#E8EDE3] text-[#315747] flex items-center justify-center">
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <h3 className="font-serif text-lg text-[#25352C]">
                    Validation Passed
                  </h3>
                  <p className="text-xs text-[#25352C]/80 leading-relaxed max-w-md mx-auto">
                    This form demonstrates client-side input validation and
                    interface layout. Because this is a frontend sample, no real
                    message was transmitted to a backend.
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormData({
                        fullName: "",
                        email: "",
                        topic: "General Inquiry",
                        message: "",
                      });
                    }}
                    className="mt-2 text-xs font-semibold text-[#315747] underline hover:text-[#25352C]"
                  >
                    Reset Form
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-5">
                  {/* Full Name */}
                  <div>
                    <label
                      htmlFor="fullName"
                      className="block text-xs font-semibold uppercase tracking-wider text-[#315747] mb-1.5"
                    >
                      Full Name <span className="text-red-700">*</span>
                    </label>
                    <input
                      type="text"
                      id="fullName"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      placeholder="Jane Doe"
                      className={`w-full px-4 py-2.5 text-xs bg-[#F7F5EE] border ${
                        errors.fullName
                          ? "border-red-600"
                          : "border-[#315747]/25"
                      } rounded-xs text-[#25352C] focus:outline-none focus:ring-2 focus:ring-[#315747] transition-all`}
                    />
                    {errors.fullName && (
                      <p className="text-[11px] text-red-600 mt-1">
                        {errors.fullName}
                      </p>
                    )}
                  </div>

                  {/* Email Address */}
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-xs font-semibold uppercase tracking-wider text-[#315747] mb-1.5"
                    >
                      Email Address <span className="text-red-700">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="jane@example.com"
                      className={`w-full px-4 py-2.5 text-xs bg-[#F7F5EE] border ${
                        errors.email ? "border-red-600" : "border-[#315747]/25"
                      } rounded-xs text-[#25352C] focus:outline-none focus:ring-2 focus:ring-[#315747] transition-all`}
                    />
                    {errors.email && (
                      <p className="text-[11px] text-red-600 mt-1">
                        {errors.email}
                      </p>
                    )}
                  </div>

                  {/* Topic */}
                  <div>
                    <label
                      htmlFor="topic"
                      className="block text-xs font-semibold uppercase tracking-wider text-[#315747] mb-1.5"
                    >
                      Inquiry Topic
                    </label>
                    <select
                      id="topic"
                      name="topic"
                      value={formData.topic}
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 text-xs bg-[#F7F5EE] border border-[#315747]/25 rounded-xs text-[#25352C] focus:outline-none focus:ring-2 focus:ring-[#315747] transition-all"
                    >
                      {topics.map((item) => (
                        <option key={item} value={item}>
                          {item}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Message */}
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-xs font-semibold uppercase tracking-wider text-[#315747] mb-1.5"
                    >
                      Message <span className="text-red-700">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows="4"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="How can we assist you?"
                      className={`w-full px-4 py-2.5 text-xs bg-[#F7F5EE] border ${
                        errors.message
                          ? "border-red-600"
                          : "border-[#315747]/25"
                      } rounded-xs text-[#25352C] focus:outline-none focus:ring-2 focus:ring-[#315747] transition-all resize-y`}
                    />
                    {errors.message && (
                      <p className="text-[11px] text-red-600 mt-1">
                        {errors.message}
                      </p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full sm:w-auto px-7 py-3 text-xs font-semibold uppercase tracking-wider text-[#F7F5EE] bg-[#315747] hover:bg-[#25352C] transition-colors rounded-xs focus:outline-none focus:ring-2 focus:ring-[#315747] focus:ring-offset-2"
                    >
                      Test Form Submission
                    </button>
                    <p className="text-[11px] text-[#25352C]/60 mt-2 italic">
                      Note: This frontend form validates inputs locally without
                      sending real emails.
                    </p>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* 4. Quick Navigation Link to FAQs */}
      <section className="py-12 bg-[#E8EDE3]/30">
        <div className="max-w-4xl mx-auto px-4 text-center space-y-3">
          <h2 className="font-serif text-xl sm:text-2xl text-[#25352C]">
            Looking for general practice details?
          </h2>
          <p className="text-xs text-[#25352C]/75 max-w-lg mx-auto leading-relaxed">
            Review answers about initial assessments, clinical pacing, and our
            anxiety-free care approach.
          </p>
          <div className="pt-1">
            <Link
              to="/faqs"
              className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#315747] hover:underline"
            >
              <span>Explore Frequently Asked Questions</span>
              <span className="font-serif text-sm">&rarr;</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
