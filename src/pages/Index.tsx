import { Link } from "react-router-dom";
import { ArrowRight, PlayCircle, CheckCircle2 } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { ScrollReveal } from "@/components/shared/ScrollReveal";
import CreativeHero from "@/components/ui/creative-hero";
import { ClientMarquee } from "@/components/shared/ClientMarquee";

export default function Index() {
  return (
    <Layout>
      {/* Visual Video Hero (Text removed from inside as per previous request) */}
      <CreativeHero />

      {/* Section 1: Hero Copy (Placed below video for readability as requested previously) */}
      <section className="py-20 md:py-28 bg-cream border-b border-divider">
        <div className="container-editorial">
          <div className="max-w-4xl">
            <ScrollReveal>
              <span className="eyebrow block mb-6">Healthcare branding, marketing and experience</span>
              <h1 className="font-serif text-5xl md:text-7xl text-ink leading-[1.1] mb-8">
                Your healthcare brand, in capable hands.
              </h1>
            </ScrollReveal>
            <ScrollReveal delay={100}>
              <p className="text-xl md:text-2xl text-ink-light leading-relaxed mb-10 max-w-2xl">
                We bring brand strategy, video storytelling and marketing into one accountable partnership—so you can focus on patients, staff and your hospital.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 items-start sm:items-center">
                <Link to="/contact" className="btn-primary">
                  Discuss your priorities
                </Link>
                <Link to="/work" className="text-ink hover:text-ink-light transition-colors font-medium flex items-center gap-2">
                  See our healthcare work <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
              <p className="text-sm text-ink-muted mt-10">Based in Bengaluru. Working across Kalyan Karnataka.</p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Section 2: Confidence & Client Logos */}
      <section className="py-24 bg-white border-b border-divider overflow-hidden">
        <div className="container-editorial text-center max-w-4xl mx-auto">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl font-serif text-ink mb-6">Over five years of focused healthcare work.</h2>
            <p className="text-xl text-ink-light mb-4">Brand identities, hospital launches, doctor education and everyday communication.</p>
            <p className="text-ink-muted font-medium tracking-wide text-sm uppercase">For hospitals, specialist practices and healthcare businesses.</p>
          </ScrollReveal>
        </div>
        
        <ScrollReveal delay={150}>
          <div className="mt-14 w-full">
            <ClientMarquee speed={32} />
          </div>
        </ScrollReveal>
      </section>

      {/* Section 3: The owner problem */}
      <section className="py-24 md:py-32 bg-cream-dark">
        <div className="container-editorial">
          <div className="max-w-3xl">
            <ScrollReveal>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-ink mb-8 leading-tight">
                Your hospital needs a clear voice.<br />You need fewer things to chase.
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={100}>
              <p className="text-xl md:text-2xl text-ink-light leading-relaxed mb-12">
                Different vendors. Last-minute content. Repeated corrections. We bring the priorities, people and production into one plan, with a coordinator who keeps the work moving.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={200}>
              <ul className="space-y-6">
                {[
                  'A plan built around your hospital', 
                  'Production scheduled around your team', 
                  'Clear scope and approvals'
                ].map((point, i) => (
                  <li key={i} className="flex items-center gap-5 text-lg text-ink font-medium">
                    <CheckCircle2 className="w-6 h-6 text-ink-light/50" />
                    {point}
                  </li>
                ))}
              </ul>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Section 4: Selected work */}
      <section className="py-24 md:py-32 bg-white">
        <div className="container-editorial">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-8">
            <div className="max-w-2xl">
              <ScrollReveal>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-ink mb-6">Healthcare work with a purpose.</h2>
                <p className="text-xl text-ink-light leading-relaxed">See how we turn a hospital's priorities into identities, films and communication people can understand.</p>
              </ScrollReveal>
            </div>
            <ScrollReveal>
              <Link to="/work" className="btn-outline shrink-0">Explore our work</Link>
            </ScrollReveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            {[
              { client: "Shree Aaraike", title: "Building a consistent launch identity." },
              { client: "Sadbhava", title: "Connecting the brand across hospital touchpoints." },
              { client: "Adarsh", title: "Making specialty communication clear." }
            ].map((work, i) => (
              <ScrollReveal key={i} delay={i * 100}>
                <Link to={`/work/${work.client.toLowerCase().replace(' ', '-')}`} className="group block">
                  <div className="aspect-[4/3] bg-cream mb-6 overflow-hidden relative border border-divider">
                    <img 
                      src={`https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&q=80&w=800&sig=${i}`} 
                      alt={work.client} 
                      className="w-full h-full object-cover transition-transform duration-1000 ease-editorial group-hover:scale-105" 
                    />
                    <div className="absolute inset-0 bg-ink/0 group-hover:bg-ink/5 transition-colors duration-500" />
                  </div>
                  <h3 className="font-serif text-2xl text-ink mb-3 group-hover:text-ink-light transition-colors">{work.client}</h3>
                  <p className="text-ink-light text-lg">{work.title}</p>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Section 5: Services */}
      <section className="py-24 md:py-32 bg-cream-dark">
        <div className="container-editorial">
          <div className="max-w-2xl mb-20">
            <ScrollReveal>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-ink mb-6">The right support, around one clear strategy.</h2>
            </ScrollReveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-16">
            {[
              { title: "Brand and marketing", desc: "Make your position clear. Bring your identity, campaigns and everyday communication into one direction." },
              { title: "Films and video", desc: "Explain expertise through doctor education, hospital stories and carefully planned production." },
              { title: "Websites and digital", desc: "Help people understand your services and take the next step through a clear website and coordinated digital presence." },
              { title: "Spaces and essentials", desc: "Carry your brand into signage, print and staff essentials, with specialist partners for production and technical delivery." }
            ].map((service, i) => (
              <ScrollReveal key={i} delay={i * 50}>
                <div className="border-t border-ink/10 pt-8">
                  <h3 className="font-serif text-2xl md:text-3xl text-ink mb-4">{service.title}</h3>
                  <p className="text-lg md:text-xl text-ink-light leading-relaxed">{service.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <div className="mt-20">
            <ScrollReveal>
              <Link to="/services" className="btn-outline">Explore services</Link>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Section 6: Video strength */}
      <section className="py-24 md:py-32 bg-ink text-cream">
        <div className="container-editorial">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <ScrollReveal>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif mb-8 leading-tight">Real expertise deserves a well-told story.</h2>
                <p className="text-xl md:text-2xl text-cream-dark opacity-80 leading-relaxed mb-12">
                  We plan the questions, prepare the shoot and shape the edit. Your authorised clinical team reviews the facts. The result is clear, thoughtful video made for the audience you need to reach.
                </p>
                <div className="flex flex-wrap gap-6">
                  <Link to="/films" className="btn-primary bg-white text-ink hover:bg-cream">Watch selected films</Link>
                  <Link to="/contact" className="btn-outline border-cream text-cream hover:bg-cream/10">Discuss a film</Link>
                </div>
              </ScrollReveal>
            </div>
            <ScrollReveal delay={100}>
              <div className="aspect-video bg-neutral-900 relative group cursor-pointer overflow-hidden border border-white/10">
                <img src="https://images.unsplash.com/photo-1581594693702-fbdc51b2763b?auto=format&fit=crop&q=80&w=1200" alt="Hospital process film poster" className="w-full h-full object-cover opacity-80 transition-transform duration-1000 group-hover:scale-105" />
                <div className="absolute inset-0 flex items-center justify-center bg-ink/20 group-hover:bg-ink/40 transition-colors duration-500">
                  <PlayCircle className="w-20 h-20 text-white opacity-90 group-hover:opacity-100 transition-all group-hover:scale-110 duration-500" strokeWidth={1} />
                </div>
                <div className="absolute bottom-6 left-6 right-6 flex justify-between text-sm uppercase tracking-widest text-white/90">
                  <span>Hospital Process</span>
                  <span>02:15</span>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Section 7: Partnerships */}
      <section className="py-24 md:py-32 bg-cream">
        <div className="container-editorial">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <ScrollReveal>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-ink mb-8">Know how the partnership starts.</h2>
              <p className="text-xl md:text-2xl text-ink-light leading-relaxed">Choose a focused monthly plan or a defined project. We agree the priorities, production allowance and review process before work begins.</p>
            </ScrollReveal>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            {[
              { name: "Focus", price: "₹60,000", period: "/month" },
              { name: "Healthcare Partner", price: "₹85,000", period: "/month", recommended: true },
              { name: "Campaign Partner", price: "₹1,20,000", period: "/month" }
            ].map((plan, i) => (
              <ScrollReveal key={i} delay={i * 100}>
                <div className={`p-10 border transition-all duration-500 ${plan.recommended ? 'border-ink bg-white shadow-2xl relative scale-100 lg:scale-105 z-10' : 'border-divider bg-transparent hover:bg-white/50'}`}>
                  {plan.recommended && <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-ink text-white text-xs px-4 py-1.5 uppercase tracking-widest font-bold">Recommended</div>}
                  <h3 className="font-serif text-2xl md:text-3xl text-ink mb-4">{plan.name}</h3>
                  <div className="mb-10"><span className="text-4xl font-serif text-ink">{plan.price}</span><span className="text-ink-light">{plan.period}</span></div>
                  <Link to="/partnerships" className={plan.recommended ? "btn-primary w-full text-center block py-4" : "btn-outline w-full text-center block py-4"}>
                    Compare scope
                  </Link>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <div className="text-center max-w-4xl mx-auto">
            <ScrollReveal>
              <p className="text-sm text-ink-muted leading-relaxed mb-8">
                Prices exclude applicable taxes. The listed filming allowance applies to Bengaluru or a scheduled Kalaburagi production circuit, at one location. Other travel is quoted before booking. Advertising spend, website builds, printing, interiors, events, PR, long-form films and extra versions are quoted separately.
              </p>
              <Link to="/partnerships" className="text-ink font-medium hover:text-ink-light transition-colors inline-flex items-center gap-2 text-lg">
                Compare partnerships <ArrowRight className="w-5 h-5" />
              </Link>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Section 8: Process and closing */}
      <section className="py-24 md:py-32 bg-white border-t border-divider">
        <div className="container-editorial">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
            <div>
              <ScrollReveal>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-ink mb-16 leading-tight">A plan you can follow.<br />A team you can reach.</h2>
              </ScrollReveal>
              <div className="space-y-12">
                {[
                  { step: "Understand", desc: "We begin with your hospital, audience and most important priority." },
                  { step: "Plan", desc: "We agree the scope, calendar and people responsible for approvals." },
                  { step: "Produce", desc: "We create the work and coordinate the approved rollout." },
                  { step: "Review", desc: "We report what was delivered, what the available data shows and what to do next." }
                ].map((item, i) => (
                  <ScrollReveal key={i} delay={i * 100}>
                    <div className="flex gap-8 group">
                      <div className="text-ink/20 font-serif text-4xl italic transition-colors duration-500 group-hover:text-ink">0{i + 1}</div>
                      <div>
                        <h4 className="font-serif text-2xl text-ink mb-3">{item.step}</h4>
                        <p className="text-lg text-ink-light leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
              <ScrollReveal delay={400}>
                <p className="text-sm text-ink-muted mt-16 pt-8 border-t border-divider leading-relaxed">
                  AI supports research, transcription and production workflows. Our team checks the work, and your authorised reviewers approve clinical content.
                </p>
              </ScrollReveal>
            </div>
            
            <div className="flex items-center justify-center lg:justify-end">
              <ScrollReveal delay={200} className="w-full max-w-lg">
                <div className="bg-cream-dark p-12 md:p-16 border border-divider">
                  <h3 className="text-3xl md:text-4xl font-serif text-ink mb-6 leading-tight">What does your healthcare brand need next?</h3>
                  <p className="text-lg md:text-xl text-ink-light leading-relaxed mb-10">Tell us the priority. We will help you define a clear next step.</p>
                  <Link to="/contact" className="btn-primary w-full py-5 text-center text-lg shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 block">
                    Discuss your priorities
                  </Link>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

