import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { ScrollReveal } from "@/components/shared/ScrollReveal";
import { Button } from "@/components/ui/button";

export default function Contact() {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const defaultReason = searchParams.get("reason") || "";

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [priority, setPriority] = useState("");

  useEffect(() => {
    if (defaultReason) {
      if (defaultReason.toLowerCase().includes("monthly") || defaultReason.toLowerCase().includes("partner")) {
        setPriority("Monthly partnership");
      } else if (defaultReason.toLowerCase().includes("brand")) {
        setPriority("Brand project");
      } else if (defaultReason.toLowerCase().includes("film") || defaultReason.toLowerCase().includes("video")) {
        setPriority("Video project");
      } else if (defaultReason.toLowerCase().includes("web")) {
        setPriority("Website project");
      } else {
        setPriority("General enquiry");
      }
    }
  }, [defaultReason]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 1500);
  };

  return (
    <Layout>
      {/* Header */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-24 bg-cream-dark">
        <div className="container-editorial">
          <div className="max-w-4xl">
            <ScrollReveal>
              <h1 className="font-serif text-5xl md:text-7xl text-ink leading-[1.1] mb-8">
                Discuss your priorities.
              </h1>
            </ScrollReveal>
            <ScrollReveal delay={100}>
              <p className="text-xl md:text-2xl text-ink-light leading-relaxed max-w-3xl">
                Tell us what your hospital needs next. We review every brief and aim to reply within two working days.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Main Content Sections */}
      <section className="py-20 md:py-32 bg-white">
        <div className="container-editorial">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
            
            {/* Form */}
            <div className="lg:col-span-7">
              <ScrollReveal>
                <div className="bg-cream-dark p-8 md:p-12 border border-divider">
                  {isSuccess ? (
                    <div className="text-center py-16">
                      <div className="w-16 h-16 bg-cream rounded-full flex items-center justify-center mx-auto mb-6 border border-divider">
                        <svg className="w-8 h-8 text-ink" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <h3 className="font-serif text-3xl text-ink mb-4">Brief Submitted</h3>
                      <p className="text-lg text-ink-light mb-8">We will review your requirements and respond within two working days.</p>
                      <Button onClick={() => setIsSuccess(false)} variant="outline" className="px-8 border-ink text-ink hover:bg-ink hover:text-white transition-colors">
                        Submit another brief
                      </Button>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-8">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="space-y-2">
                          <label htmlFor="name" className="text-sm font-medium text-ink uppercase tracking-wider">Name <span className="text-red-500">*</span></label>
                          <input type="text" id="name" required className="w-full px-4 py-3 border-b border-divider bg-transparent focus:outline-none focus:border-ink transition-colors placeholder:text-ink/30" placeholder="Dr. John Doe" />
                        </div>
                        <div className="space-y-2">
                          <label htmlFor="hospital" className="text-sm font-medium text-ink uppercase tracking-wider">Hospital / Organisation <span className="text-red-500">*</span></label>
                          <input type="text" id="hospital" required className="w-full px-4 py-3 border-b border-divider bg-transparent focus:outline-none focus:border-ink transition-colors placeholder:text-ink/30" placeholder="City General Hospital" />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="space-y-2">
                          <label htmlFor="email" className="text-sm font-medium text-ink uppercase tracking-wider">Email <span className="text-red-500">*</span></label>
                          <input type="email" id="email" required className="w-full px-4 py-3 border-b border-divider bg-transparent focus:outline-none focus:border-ink transition-colors placeholder:text-ink/30" placeholder="john@hospital.com" />
                        </div>
                        <div className="space-y-2">
                          <label htmlFor="phone" className="text-sm font-medium text-ink uppercase tracking-wider">Phone <span className="text-red-500">*</span></label>
                          <input type="tel" id="phone" required className="w-full px-4 py-3 border-b border-divider bg-transparent focus:outline-none focus:border-ink transition-colors placeholder:text-ink/30" placeholder="+91 XXXXX XXXXX" />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <label htmlFor="priority" className="text-sm font-medium text-ink uppercase tracking-wider">What is the priority right now? <span className="text-red-500">*</span></label>
                        <select 
                          id="priority" 
                          required 
                          className="w-full px-4 py-3 border-b border-divider bg-transparent focus:outline-none focus:border-ink transition-colors appearance-none"
                          value={priority}
                          onChange={(e) => setPriority(e.target.value)}
                        >
                          <option value="" disabled>Select a priority</option>
                          <option value="Monthly partnership">Monthly partnership</option>
                          <option value="Brand project">Brand project</option>
                          <option value="Video project">Video project</option>
                          <option value="Website project">Website project</option>
                          <option value="General enquiry">General enquiry</option>
                        </select>
                      </div>

                      <div className="space-y-2">
                        <label htmlFor="message" className="text-sm font-medium text-ink uppercase tracking-wider">Brief description <span className="text-red-500">*</span></label>
                        <textarea id="message" required rows={4} className="w-full px-4 py-3 border-b border-divider bg-transparent focus:outline-none focus:border-ink transition-colors resize-none placeholder:text-ink/30" placeholder="Tell us a little about what you are looking to achieve..."></textarea>
                      </div>

                      <Button type="submit" disabled={isSubmitting} className="w-full py-6 text-lg">
                        {isSubmitting ? "Submitting..." : "Submit Brief"}
                      </Button>
                    </form>
                  )}
                </div>
              </ScrollReveal>
            </div>

            {/* Contact Details */}
            <div className="lg:col-span-5 space-y-16">
              <ScrollReveal delay={100}>
                <div>
                  <h3 className="font-serif text-3xl text-ink mb-6">Direct contact</h3>
                  <div className="space-y-6 text-lg text-ink-light">
                    <div>
                      <p className="text-sm uppercase tracking-widest text-ink-muted mb-1">Email</p>
                      <a href="mailto:connect@oworks.in" className="text-ink hover:opacity-70 transition-opacity">connect@oworks.in</a>
                    </div>
                  </div>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={200}>
                <div>
                  <h3 className="font-serif text-3xl text-ink mb-6">Locations</h3>
                  <div className="space-y-8 text-lg text-ink-light">
                    <div>
                      <p className="text-sm uppercase tracking-widest text-ink-muted mb-2">Bengaluru Base</p>
                      <p className="leading-relaxed max-w-sm">
                        985, 13th Cross, 21st Main Rd, above Heart Care Clinic, Siddanna Layout, Banashankari 2nd Stage,<br />Bengaluru, Karnataka 560070
                      </p>
                    </div>
                    <div>
                      <p className="text-sm uppercase tracking-widest text-ink-muted mb-2">Kalaburagi Base</p>
                      <p className="leading-relaxed max-w-sm">
                        (Production circuit and remote brand briefs)
                      </p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            </div>

          </div>
        </div>
      </section>

    </Layout>
  );
}

