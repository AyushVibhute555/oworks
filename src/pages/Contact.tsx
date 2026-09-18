import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { ScrollReveal } from "@/components/shared/ScrollReveal";
import { Button } from "@/components/ui/button";

export default function Contact() {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const defaultReason = searchParams.get("reason") === "work" ? "I want to work with Oworks" : "";

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

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
      {/* Contact Header */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-24">
        <div className="container-editorial px-6 md:px-12 lg:px-20">
          <div className="max-w-4xl mx-auto text-center">
            <ScrollReveal>
              <h1 className="font-serif text-5xl md:text-7xl text-ink mb-8">
                Reach out to us
              </h1>
            </ScrollReveal>
            <ScrollReveal delay={100}>
              <p className="text-xl md:text-2xl text-ink-light leading-relaxed">
                Have questions or need more information? Reach out to us today. We're here to help with all your marketing needs.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Contact Info & Form */}
      <section className="section-padding bg-cream-dark">
        <div className="container-editorial px-6 md:px-12 lg:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            
            {/* Contact Details & Map */}
            <div className="lg:col-span-5 space-y-12">
              <ScrollReveal>
                <div>
                  <h3 className="font-serif text-2xl text-ink mb-4">Contact Information</h3>
                  <div className="space-y-4 text-ink-light">
                    <p>
                      <strong>Address:</strong><br />
                      985, 13th Cross, 21st Main Rd, above Heart Care Clinic, Siddanna Layout, Banashankari 2nd Stage, Bengaluru, Karnataka 560070
                    </p>
                    <p>
                      <strong>Phone:</strong><br />
                      <a href="tel:+917892039090" className="hover:text-ink transition-colors">+91 789 203 9090</a>
                    </p>
                    <p>
                      <strong>Email:</strong><br />
                      <a href="mailto:connect@oworks.in" className="hover:text-ink transition-colors">connect@oworks.in</a>
                    </p>
                  </div>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={100}>
                <div className="w-full aspect-square bg-cream border border-divider">
                  <iframe 
                    title="Oworks Location"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15555.24151752399!2d77.56149485!3d12.91992765!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae156310100001%3A0x70bb62f9011706!2sBanashankari%20Stage%20II%2C%20Banashankari%2C%20Bengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1716382902345!5m2!1sen!2sin" 
                    width="100%" 
                    height="100%" 
                    style={{ border: 0, filter: "grayscale(100%)" }} 
                    allowFullScreen 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </ScrollReveal>
            </div>

            {/* Form */}
            <div className="lg:col-span-7">
              <ScrollReveal delay={200}>
                <div className="bg-white p-8 md:p-12 border border-divider shadow-sm">
                  {isSuccess ? (
                    <div className="text-center py-16">
                      <div className="w-16 h-16 bg-cream rounded-full flex items-center justify-center mx-auto mb-6">
                        <svg className="w-8 h-8 text-ink" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <h3 className="font-serif text-3xl text-ink mb-4">Message Sent!</h3>
                      <p className="text-ink-light mb-8">Thank you for reaching out to us. We will get back to you shortly.</p>
                      <Button onClick={() => setIsSuccess(false)} variant="outline">
                        Send another message
                      </Button>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <h3 className="font-serif text-3xl text-ink mb-8">Send us a message</h3>
                      
                      {defaultReason && (
                        <div className="bg-cream-dark p-4 border border-divider text-sm text-ink-light mb-6">
                          Pre-selected inquiry: <strong>{defaultReason}</strong>
                        </div>
                      )}

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <label htmlFor="name" className="text-sm font-medium text-ink">Name</label>
                          <input type="text" id="name" required className="w-full px-4 py-3 border border-divider bg-transparent focus:outline-none focus:border-ink transition-colors" placeholder="John Doe" />
                        </div>
                        <div className="space-y-2">
                          <label htmlFor="email" className="text-sm font-medium text-ink">Email</label>
                          <input type="email" id="email" required className="w-full px-4 py-3 border border-divider bg-transparent focus:outline-none focus:border-ink transition-colors" placeholder="john@example.com" />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <label htmlFor="phone" className="text-sm font-medium text-ink">Phone</label>
                          <input type="tel" id="phone" className="w-full px-4 py-3 border border-divider bg-transparent focus:outline-none focus:border-ink transition-colors" placeholder="+91 XXXXX XXXXX" />
                        </div>
                        <div className="space-y-2">
                          <label htmlFor="company" className="text-sm font-medium text-ink">Company</label>
                          <input type="text" id="company" className="w-full px-4 py-3 border border-divider bg-transparent focus:outline-none focus:border-ink transition-colors" placeholder="Your Company" />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <label htmlFor="message" className="text-sm font-medium text-ink">Message</label>
                        <textarea id="message" required rows={5} className="w-full px-4 py-3 border border-divider bg-transparent focus:outline-none focus:border-ink transition-colors resize-none" placeholder="How can we help you?"></textarea>
                      </div>

                      <Button type="submit" disabled={isSubmitting} className="w-full py-6">
                        {isSubmitting ? "Sending..." : "Connect with Us"}
                      </Button>
                    </form>
                  )}
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* Dual CTA Section */}
      <section className="bg-cream border-t border-divider py-24 md:py-32">
        <div className="container-editorial px-6 md:px-12 lg:px-20 text-center max-w-4xl mx-auto">
          <ScrollReveal>
            <h2 className="font-serif text-4xl md:text-5xl text-ink mb-6">We would love to hear your Ideas!!</h2>
            <p className="text-lg text-ink-light mb-16">
              Elevate your competitive edge with our SEO-optimized branding and marketing services, incorporating global perspectives, local insights, diasporic experience, and cultural intelligence.
            </p>
          </ScrollReveal>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            <ScrollReveal delay={100}>
              <div className="p-8 bg-white border border-divider h-full flex flex-col justify-center items-center rounded-sm">
                <p className="text-xl text-ink font-medium mb-6">Do you have a business/brand requiring marketing assistance?</p>
                <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="btn-primary">
                  Connect with Us
                </button>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={200}>
              <div className="p-8 bg-white border border-divider h-full flex flex-col justify-center items-center rounded-sm">
                <p className="text-xl text-ink font-medium mb-6">Are you a freelancer, student or a service provider interested to work with us?</p>
                <Link to="/contact?reason=work" className="btn-outline" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                  Work with Us
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </Layout>
  );
}