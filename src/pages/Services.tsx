import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { ScrollReveal } from "@/components/shared/ScrollReveal";
import { services } from "@/data/services";

export default function Services() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-24 bg-cream-dark">
        <div className="container-editorial text-center">
          <div className="max-w-4xl mx-auto">
            <ScrollReveal>
              <h1 className="font-serif text-5xl md:text-7xl text-ink leading-[1.1] mb-8">
                Healthcare communication, brought together.
              </h1>
            </ScrollReveal>
            <ScrollReveal delay={100}>
              <p className="text-xl md:text-2xl text-ink-light leading-relaxed">
                Your brand, films, website and physical touchpoints should work towards the same goal. We begin with your priorities, then build the right mix of support around them.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Services List */}
      <section className="py-20 md:py-32 bg-white border-t border-divider">
        <div className="container-editorial">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
            {services.map((service, index) => (
              <ScrollReveal key={service.slug} delay={index * 100}>
                <Link
                  to={`/services/${service.slug}`}
                  className="group block h-full p-10 bg-cream-dark border border-divider hover:bg-ink transition-colors duration-500"
                >
                  <div className="flex flex-col h-full">
                    <div className="mb-auto">
                      <p className="eyebrow mb-6 text-ink-light group-hover:text-cream/70 transition-colors">Capability 0{index + 1}</p>
                      <h2 className="font-serif text-3xl md:text-4xl text-ink mb-6 group-hover:text-cream transition-colors duration-500">
                        {service.name}
                      </h2>
                      <p className="text-lg text-ink-light leading-relaxed group-hover:text-cream/90 transition-colors duration-500">
                        {service.intro}
                      </p>
                    </div>
                    
                    <div className="mt-12 flex items-center justify-between border-t border-divider group-hover:border-cream/20 pt-6 transition-colors duration-500">
                      <span className="text-sm uppercase tracking-widest font-medium text-ink group-hover:text-cream transition-colors">
                        View scope
                      </span>
                      <div className="w-12 h-12 rounded-full border border-ink flex items-center justify-center group-hover:border-cream group-hover:bg-cream transition-all duration-500">
                        <ArrowRight
                          size={20}
                          strokeWidth={1.5}
                          className="text-ink group-hover:text-ink transition-colors"
                        />
                      </div>
                    </div>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Projects Info */}
      <section className="py-20 bg-cream-dark border-t border-divider">
        <div className="container-editorial">
          <ScrollReveal>
            <div className="max-w-3xl mx-auto text-center">
              <h3 className="font-serif text-3xl text-ink mb-6">Additional projects</h3>
              <p className="text-xl text-ink-light leading-relaxed">
                Launch communication, professional events, podcast production and PR can be scoped around your brief, with the appropriate specialists.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="bg-ink py-24 md:py-32 text-center">
        <div className="container-editorial">
          <ScrollReveal>
            <h2 className="font-serif text-4xl md:text-5xl text-cream mb-6">Start with your priority.</h2>
            <p className="text-xl text-cream-dark opacity-80 max-w-2xl mx-auto mb-12">
              We will define the scope and the people needed to deliver it.
            </p>
            <Link to="/contact" className="btn-primary bg-white text-ink hover:bg-cream inline-flex px-12 py-5 text-lg">
              Discuss your priorities
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </Layout>
  );
}

