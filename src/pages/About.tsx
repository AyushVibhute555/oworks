import { Link } from "react-router-dom";
import { ArrowRight, MapPin, Users, Target } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { ScrollReveal } from "@/components/shared/ScrollReveal";

export default function About() {
  return (
    <Layout>
      {/* Header */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-24 bg-cream-dark">
        <div className="container-editorial">
          <div className="max-w-4xl">
            <ScrollReveal>
              <h1 className="font-serif text-5xl md:text-7xl text-ink leading-[1.1] mb-8">
                Built for healthcare.
              </h1>
            </ScrollReveal>
            <ScrollReveal delay={100}>
              <p className="text-xl md:text-2xl text-ink-light leading-relaxed max-w-3xl">
                Oworks was started to bring clarity to healthcare marketing. Since 2019, we have helped hospitals, specialists and healthtech businesses build brands that people understand and trust.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Main Content Sections */}
      <section className="py-20 md:py-32 bg-white">
        <div className="container-editorial">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-32 mb-32">
            
            {/* Two bases */}
            <ScrollReveal>
              <div className="h-full flex flex-col justify-center">
                <MapPin className="w-8 h-8 text-ink-light mb-8" strokeWidth={1.5} />
                <h2 className="text-3xl md:text-4xl font-serif text-ink mb-6">Two bases, one standard.</h2>
                <p className="text-xl text-ink-light leading-relaxed mb-8">
                  We work from Bengaluru, with a scheduled production circuit covering Kalaburagi and Kalyan Karnataka. This means you get city-standard production with an understanding of regional audiences.
                </p>
                <p className="text-lg text-ink-muted leading-relaxed">
                  We also accept remote brand and editing briefs globally, handling logistics, language review and market-specific requirements seamlessly.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={100}>
              <div className="aspect-[4/5] bg-cream overflow-hidden border border-divider">
                <img 
                  src="https://images.unsplash.com/photo-1596422846543-75c6fc197f07?auto=format&fit=crop&q=80&w=1000" 
                  alt="Bengaluru office location" 
                  className="w-full h-full object-cover grayscale opacity-90"
                />
              </div>
            </ScrollReveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-32">
            {/* Team Image */}
            <ScrollReveal>
              <div className="aspect-[4/5] bg-cream overflow-hidden border border-divider order-2 md:order-1">
                <img 
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1000" 
                  alt="Oworks team working together" 
                  className="w-full h-full object-cover grayscale opacity-90"
                />
              </div>
            </ScrollReveal>

            {/* The right people */}
            <ScrollReveal delay={100}>
              <div className="h-full flex flex-col justify-center order-1 md:order-2">
                <Users className="w-8 h-8 text-ink-light mb-8" strokeWidth={1.5} />
                <h2 className="text-3xl md:text-4xl font-serif text-ink mb-6">The right people for the brief.</h2>
                <p className="text-xl text-ink-light leading-relaxed mb-8">
                  We keep our core team small and accountable. You work directly with the strategists and creators making your brand.
                </p>
                <p className="text-lg text-ink-muted leading-relaxed">
                  When a brief requires it, we bring in specialist partners for technical interiors, custom development and large-scale video production, while remaining your single point of coordination.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Stat Bar (Optional but looks premium) */}
      <section className="py-16 bg-cream border-y border-divider">
        <div className="container-editorial">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <ScrollReveal>
              <div>
                <p className="text-4xl font-serif text-ink mb-2">2019</p>
                <p className="text-sm uppercase tracking-widest text-ink-muted">Established</p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={100}>
              <div>
                <p className="text-4xl font-serif text-ink mb-2">02</p>
                <p className="text-sm uppercase tracking-widest text-ink-muted">Studio Bases</p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={200}>
              <div>
                <p className="text-4xl font-serif text-ink mb-2">100+</p>
                <p className="text-sm uppercase tracking-widest text-ink-muted">Films Produced</p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={300}>
              <div>
                <p className="text-4xl font-serif text-ink mb-2">100%</p>
                <p className="text-sm uppercase tracking-widest text-ink-muted">Healthcare Focus</p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 md:py-32 bg-ink text-cream text-center">
        <div className="container-editorial">
          <ScrollReveal>
            <Target className="w-12 h-12 text-cream/50 mx-auto mb-8" strokeWidth={1} />
            <h2 className="text-4xl md:text-5xl font-serif mb-6">Bring clarity to your healthcare brand.</h2>
            <p className="text-xl text-cream-dark opacity-80 mb-12 max-w-2xl mx-auto">
              Our team is ready to plan, produce and coordinate your next communication priority.
            </p>
            <Link to="/contact" className="btn-primary bg-white text-ink hover:bg-cream inline-flex px-12 py-5 text-lg">
              Work with us
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </Layout>
  );
}

