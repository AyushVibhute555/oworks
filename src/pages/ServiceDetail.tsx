import { useParams, Link, Navigate } from "react-router-dom";
import { ArrowLeft, ArrowRight, Check, HelpCircle } from "lucide-react";
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
      {/* Hero Header */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-24 bg-cream-dark">
        <div className="container-editorial">
          <div className="max-w-4xl">
            <ScrollReveal>
              <p className="eyebrow mb-6">{service.name}</p>
              <h1 className="font-serif text-5xl md:text-7xl text-ink leading-[1.1] mb-8">
                {service.heading}
              </h1>
            </ScrollReveal>
            <ScrollReveal delay={100}>
              <p className="text-xl md:text-2xl text-ink-light leading-relaxed max-w-3xl">
                {service.intro}
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 md:py-32 bg-white">
        <div className="container-editorial">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">

            {/* Details */}
            <div className="lg:col-span-7">

              {/* Sections (New Schema) */}
              {service.sections && (
                <ScrollReveal>
                  <div className="mb-20 space-y-16">
                    {service.sections.map((section, idx) => (
                      <div key={idx}>
                        <h2 className="font-serif text-3xl md:text-4xl text-ink mb-6">
                          {section.heading}
                        </h2>
                        <p className="text-lg text-ink-light leading-relaxed">
                          {section.body}
                        </p>
                      </div>
                    ))}
                  </div>
                </ScrollReveal>
              )}

              {/* Process Section (Fallback for older schema, if sections not present but process is) */}
              {!service.sections && service.process && (
                <ScrollReveal>
                  <div className="mb-20">
                    <h2 className="font-serif text-3xl md:text-4xl text-ink mb-10">
                      {service.processHeading || "Our Approach"}
                    </h2>
                    {Array.isArray(service.process) ? (
                      <div className="space-y-10">
                        {service.process.map((step, idx) => (
                          <div key={idx} className="flex gap-6 border-t border-divider pt-6">
                            <div className="text-ink/20 font-serif text-2xl italic mt-1">
                              0{idx + 1}
                            </div>
                            <div>
                              {typeof step === 'string' ? (
                                <p className="text-lg text-ink-light leading-relaxed">{step}</p>
                              ) : (
                                <div>
                                  <h3 className="font-serif text-2xl text-ink mb-3">{step.title}</h3>
                                  <p className="text-lg text-ink-light leading-relaxed">{step.text}</p>
                                </div>
                              )}
                            </div>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <p className="text-lg text-ink-light leading-relaxed">{service.process}</p>
                    )}
                  </div>
                </ScrollReveal>
              )}

              {/* Scope List */}
              {service.scopeList && (
                <ScrollReveal delay={100}>
                  <div className="mb-20 bg-cream-dark p-10 md:p-12 border border-divider">
                    <h2 className="font-serif text-3xl text-ink mb-8">Scope of work</h2>
                    <ul className="space-y-4">
                      {service.scopeList.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-4 text-lg text-ink-light">
                          <Check className="w-6 h-6 text-ink shrink-0" strokeWidth={1.5} />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </ScrollReveal>
              )}

              {/* Project Line / Pricing */}
              {service.projectLine && (
                <ScrollReveal delay={100}>
                  <div className="mb-20 p-8 border border-ink/10 bg-white shadow-sm">
                    <p className="text-lg text-ink font-medium leading-relaxed">
                      {service.projectLine}
                    </p>
                  </div>
                </ScrollReveal>
              )}

              {/* FAQ Section */}
              {service.faq && service.faq.length > 0 && (
                <ScrollReveal delay={150}>
                  <div className="mb-20">
                    <h2 className="font-serif text-3xl text-ink mb-8 flex items-center gap-3">
                      <HelpCircle className="w-8 h-8 text-ink-light" strokeWidth={1.5} />
                      Common questions
                    </h2>
                    <div className="space-y-8">
                      {service.faq.map((faq, idx) => (
                        <div key={idx} className="border-b border-divider pb-8 last:border-0 last:pb-0">
                          <h3 className="text-xl font-serif text-ink mb-3">{faq.question}</h3>
                          <p className="text-lg text-ink-light leading-relaxed">"{faq.answer}"</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </ScrollReveal>
              )}

              {/* Related Link */}
              {service.relatedLink && (
                <ScrollReveal delay={200}>
                  <Link to={service.relatedLink.url} className="text-ink font-medium hover:text-ink-light transition-colors inline-flex items-center gap-2 text-lg">
                    {service.relatedLink.label} <ArrowRight className="w-5 h-5" />
                  </Link>
                </ScrollReveal>
              )}
            </div>

            {/* Sidebar Image */}
            <div className="lg:col-span-5">
              <ScrollReveal delay={200}>
                <div className="lg:sticky lg:top-32">
                  <div className="aspect-[4/5] bg-cream overflow-hidden border border-divider">
                    <img
                      src={`https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=800&sig=${serviceIndex}`}
                      alt={`${service.name} execution example`}
                      className="w-full h-full object-cover grayscale opacity-90 hover:grayscale-0 transition-all duration-1000"
                    />
                  </div>
                  <p className="text-sm text-ink-muted mt-4 text-center">
                    Proof of work available on request.
                  </p>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* Let's Get Started CTA */}
      <section className="bg-ink py-24 md:py-32">
        <div className="container-editorial text-center">
          <ScrollReveal>
            <h2 className="font-serif text-4xl md:text-5xl text-cream mb-6">Let us review your {service.name.toLowerCase()}.</h2>
            <p className="text-xl text-cream-dark opacity-80 max-w-2xl mx-auto mb-12">
              Start with your priority. We will define the scope and the people needed to deliver it.
            </p>
            <Link to={`/contact?reason=${encodeURIComponent(service.name)}`} className="btn-primary bg-white text-ink hover:bg-cream inline-flex px-12 py-5 text-lg">
              {service.actionLabel || "Discuss this capability"}
            </Link>
          </ScrollReveal>
        </div>
      </section>

      {/* Next Service */}
      <section className="border-t border-divider bg-cream-dark">
        <Link
          to={`/services/${nextService.slug}`}
          className="group block"
        >
          <div className="container-editorial py-20 md:py-28">
            <div className="flex items-center justify-between">
              <div>
                <p className="eyebrow mb-6 text-ink-light">Next Capability</p>
                <h2 className="font-serif text-4xl md:text-5xl text-ink group-hover:text-ink-light transition-colors duration-500">
                  {nextService.name}
                </h2>
              </div>
              <div className="w-16 h-16 rounded-full border border-ink flex items-center justify-center group-hover:bg-ink transition-colors duration-500 shrink-0">
                <ArrowRight
                  size={24}
                  strokeWidth={1.5}
                  className="text-ink group-hover:text-white transition-colors duration-500"
                />
              </div>
            </div>
          </div>
        </Link>
      </section>

      {/* Back Link */}
      <section className="bg-white border-t border-divider">
        <div className="container-editorial py-10">
          <Link
            to="/services"
            className="inline-flex items-center gap-3 text-ink-light hover:text-ink transition-colors duration-300 font-medium"
          >
            <ArrowLeft size={20} strokeWidth={1.5} />
            Back to all capabilities
          </Link>
        </div>
      </section>
    </Layout>
  );
}

