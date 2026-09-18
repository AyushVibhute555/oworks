import { useParams, Link, Navigate } from "react-router-dom";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { ScrollReveal } from "@/components/shared/ScrollReveal";
import { services } from "@/data/services";

export default function ServiceDetail() {
  const { slug } = useParams<{ slug: string }>();
  
  const serviceIndex = services.findIndex((s) => s.slug === slug);
  const service = services[serviceIndex];
  
  if (!service) {
    return <Navigate to="/services" replace />;
  }

  const nextService = services[(serviceIndex + 1) % services.length];

  return (
    <Layout>
      {/* Hero Image */}
      <section className="pt-24 md:pt-32">
        <div className="w-full">
          <ScrollReveal>
            <div className="aspect-[16/9] md:aspect-[21/9] bg-cream overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80&w=2000"
                alt={`Placeholder — ${service.name} hero image, to be replaced`}
                className="w-full h-full object-cover"
              />
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Service Info */}
      <section className="section-padding">
        <div className="container-editorial px-6 md:px-12 lg:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            {/* Main Content */}
            <div className="lg:col-span-8">
              <ScrollReveal>
                <p className="eyebrow mb-4">{service.category}</p>
              </ScrollReveal>
              <ScrollReveal delay={100}>
                <h1 className="font-serif text-4xl md:text-5xl text-ink mb-8">
                  {service.heading}
                </h1>
              </ScrollReveal>
              <ScrollReveal delay={200}>
                <p className="text-xl text-ink-light leading-relaxed mb-12">
                  {service.intro}
                </p>
              </ScrollReveal>

              {/* Process Section */}
              {service.process && (
                <ScrollReveal delay={300}>
                  <div className="mb-12">
                    <h2 className="font-serif text-3xl text-ink mb-6">
                      {service.processHeading || "Our Process"}
                    </h2>
                    {Array.isArray(service.process) ? (
                      <div className="space-y-6">
                        {service.process.map((step, idx) => (
                          <div key={idx}>
                            {typeof step === 'string' ? (
                              <p className="text-ink-light">{step}</p>
                            ) : (
                              <div>
                                <p className="eyebrow mb-2">{step.title}</p>
                                <p className="text-ink-light">{step.text}</p>
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                    ) : (
                      <p className="text-ink-light">{service.process}</p>
                    )}
                  </div>
                </ScrollReveal>
              )}

              {/* Merchandise specific */}
              {service.merchandiseOfferings && (
                <ScrollReveal delay={400}>
                  <div className="mb-12">
                    <h2 className="font-serif text-3xl text-ink mb-6">Our Merchandise Offerings</h2>
                    <ul className="space-y-3 list-disc pl-5">
                      {service.merchandiseOfferings.map((offering, idx) => (
                        <li key={idx} className="text-ink-light">{offering}</li>
                      ))}
                    </ul>
                  </div>
                </ScrollReveal>
              )}

              {/* Why It Matters */}
              {service.whyItMatters && (
                <ScrollReveal delay={400}>
                  <div className="mb-12">
                    <h2 className="font-serif text-3xl text-ink mb-6">
                      {service.whyItMattersHeading || "Why It Matters"}
                    </h2>
                    {Array.isArray(service.whyItMatters) ? (
                      <div className="space-y-6">
                        {service.whyItMatters.map((item, idx) => (
                          <div key={idx}>
                            <p className="font-medium text-ink mb-2">{item.title}</p>
                            <p className="text-ink-light">{item.text}</p>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <p className="text-ink-light">{service.whyItMatters}</p>
                    )}
                  </div>
                </ScrollReveal>
              )}

              {/* Related Link */}
              {service.relatedLink && (
                <ScrollReveal delay={500}>
                  <Link to={service.relatedLink.url} className="text-ink font-medium hover:opacity-70 transition-opacity underline underline-offset-4">
                    {service.relatedLink.label}
                  </Link>
                </ScrollReveal>
              )}
            </div>

            {/* Sidebar / Supporting Image */}
            <div className="lg:col-span-4">
              <ScrollReveal delay={300}>
                <div className="lg:sticky lg:top-32 space-y-8">
                  <div className="aspect-[4/5] bg-cream overflow-hidden">
                     <img
                      src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=800"
                      alt={`Placeholder — ${service.name} supporting image, to be replaced`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* Let's Get Started CTA */}
      <section className="bg-cream-dark py-24">
        <div className="container-editorial px-6 md:px-12 lg:px-20 text-center">
          <ScrollReveal>
            <h2 className="font-serif text-3xl md:text-5xl text-ink mb-6">Ready to take your brand to the next level?</h2>
            <p className="text-lg text-ink-muted max-w-2xl mx-auto mb-10">
              Our expert team is here to craft the perfect creative marketing campaign for you.
            </p>
            <Link to="/contact" className="btn-primary inline-flex">
              Connect with Us
            </Link>
          </ScrollReveal>
        </div>
      </section>

      {/* Next Service */}
      <section className="border-t border-divider">
        <Link 
          to={`/services/${nextService.slug}`}
          className="group block"
        >
          <div className="container-editorial px-6 md:px-12 lg:px-20 py-16 md:py-24">
            <div className="flex items-center justify-between">
              <div>
                <p className="eyebrow mb-4">Next Service</p>
                <h2 className="font-serif text-3xl md:text-4xl text-ink group-hover:opacity-70 transition-opacity duration-300">
                  {nextService.name}
                </h2>
              </div>
              <ArrowRight 
                size={32} 
                strokeWidth={1} 
                className="text-ink transition-transform duration-300 group-hover:translate-x-2" 
              />
            </div>
          </div>
        </Link>
      </section>

      {/* Back Link */}
      <section className="bg-cream-dark border-t border-divider">
        <div className="container-editorial px-6 md:px-12 lg:px-20 py-8">
          <Link 
            to="/services" 
            className="inline-flex items-center gap-2 text-sm text-ink-muted hover:text-ink transition-colors duration-300"
          >
            <ArrowLeft size={16} strokeWidth={1.5} />
            Back to all services
          </Link>
        </div>
      </section>
    </Layout>
  );
}
