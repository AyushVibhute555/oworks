import { Link } from "react-router-dom";
import { ArrowRight, PlayCircle, Plus } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { ScrollReveal } from "@/components/shared/ScrollReveal";

const formats = [
  {
    title: "Doctor education",
    desc: "Clear explanations shaped around the questions people ask. Planned topics, clinician input and readable captions."
  },
  {
    title: "Hospital and process films",
    desc: "Show the people, spaces and steps behind care. Useful for websites, orientation, launches and professional communication."
  },
  {
    title: "Documentary projects",
    desc: "Explore a meaningful healthcare story through research, interviews and observation. Each project is scoped around access, contributors and production requirements."
  },
  {
    title: "Editing and motion",
    desc: "Bring structure to existing footage, with careful pacing, sound, graphics and channel-specific versions."
  },
  {
    title: "Podcast production",
    desc: "Build a focused conversation, prepare the recording and create agreed episode and short-form edits. Begin with a defined pilot."
  }
];

const faqs = [
  {
    q: "Can you work with our footage?",
    a: "Yes. We review the material, rights, audio quality and delivery requirements before quoting."
  },
  {
    q: "Can we use one film on several channels?",
    a: "Yes. We agree the formats and cutdowns in the scope."
  },
  {
    q: "Who checks medical information?",
    a: "Your authorised clinical reviewer, with Oworks managing the editorial checks and approval record."
  }
];

export default function Films() {
  return (
    <Layout>
      {/* Header */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-24 bg-cream-dark">
        <div className="container-editorial">
          <div className="max-w-4xl">
            <ScrollReveal>
              <h1 className="font-serif text-5xl md:text-7xl text-ink leading-[1.1] mb-8">
                Healthcare stories, carefully made.
              </h1>
            </ScrollReveal>
            <ScrollReveal delay={100}>
              <p className="text-xl md:text-2xl text-ink-light leading-relaxed max-w-3xl">
                Patients, professionals and partners need to understand the people and practice behind a healthcare brand. We plan, shoot and edit films that make that expertise clear.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Why Oworks / Heading */}
      <section className="py-20 md:py-32 bg-white">
        <div className="container-editorial">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">
            <div className="lg:col-span-5">
              <ScrollReveal>
                <h2 className="text-3xl md:text-4xl font-serif text-ink leading-tight mb-6">Make filming easier for your team.</h2>
              </ScrollReveal>
            </div>
            <div className="lg:col-span-7">
              <ScrollReveal delay={100}>
                <p className="text-xl text-ink-light leading-relaxed mb-16">
                  We agree the purpose, prepare the questions and schedule the shoot around available clinicians. Our production team handles filming and editing; your authorised reviewers confirm the clinical facts.
                </p>
              </ScrollReveal>
              
              <ScrollReveal delay={200}>
                <h3 className="eyebrow mb-8 text-ink-light">The formats</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                  {formats.map((format, i) => (
                    <div key={i} className="border-t border-divider pt-6">
                      <h4 className="font-serif text-xl text-ink mb-3">{format.title}</h4>
                      <p className="text-ink-light">{format.desc}</p>
                    </div>
                  ))}
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* Proof Section */}
      <section className="py-20 md:py-32 bg-ink text-cream">
        <div className="container-editorial">
          <div className="mb-16">
            <ScrollReveal>
              <h2 className="text-4xl md:text-5xl font-serif mb-4">Watch the work.</h2>
              <p className="text-xl opacity-80">Understand the purpose.</p>
            </ScrollReveal>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Hospital Process Story", client: "Sadbhava", audience: "Patients & Partners", duration: "02:15", role: "Full Production" },
              { title: "Doctor Education", client: "Adarsh", audience: "Specialist Patients", duration: "01:30", role: "Editing & Motion" },
              { title: "Launch Film", client: "Shree Aaraike", audience: "Community", duration: "03:45", role: "Full Production" }
            ].map((film, i) => (
              <ScrollReveal key={i} delay={i * 100}>
                <Link to={`/films/${film.title.toLowerCase().replace(/ /g, '-')}`} className="group block">
                  <div className="aspect-video bg-neutral-900 relative mb-6 overflow-hidden border border-white/10">
                    <img 
                      src={`https://images.unsplash.com/photo-1581594693702-fbdc51b2763b?auto=format&fit=crop&q=80&w=800&sig=${i}`} 
                      alt={film.title} 
                      className="w-full h-full object-cover opacity-70 group-hover:scale-105 transition-transform duration-1000" 
                    />
                    <div className="absolute inset-0 flex items-center justify-center bg-ink/30 group-hover:bg-ink/50 transition-colors">
                      <PlayCircle className="w-16 h-16 text-white opacity-90 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300" strokeWidth={1} />
                    </div>
                  </div>
                  <h3 className="font-serif text-2xl mb-2">{film.title}</h3>
                  <div className="text-sm opacity-70 space-y-1 mb-4">
                    <p>Client: {film.client}</p>
                    <p>Audience: {film.audience}</p>
                    <p>Scope: {film.role}</p>
                  </div>
                  <p className="text-xs uppercase tracking-widest opacity-50">{film.duration}</p>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Process and First Step */}
      <section className="py-20 md:py-32 bg-cream border-b border-divider">
        <div className="container-editorial">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
            <div>
              <ScrollReveal>
                <h2 className="text-3xl md:text-4xl font-serif text-ink mb-12">How production works</h2>
              </ScrollReveal>
              <div className="space-y-8">
                {[
                  { step: "Brief", desc: "Who should watch, and what should they understand?" },
                  { step: "Prepare", desc: "Research, outline, clinician review and a realistic shoot plan." },
                  { step: "Produce", desc: "Filming, edit, sound, captions and agreed versions." },
                  { step: "Approve", desc: "Clinical facts, permissions and final delivery checked before release." }
                ].map((item, i) => (
                  <ScrollReveal key={i} delay={i * 100}>
                    <div className="flex gap-6">
                      <div className="text-ink-muted font-serif text-xl italic">{i + 1}</div>
                      <div>
                        <h4 className="font-serif text-xl text-ink mb-2">{item.step}</h4>
                        <p className="text-ink-light">{item.desc}</p>
                      </div>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </div>
            
            <div>
              <ScrollReveal delay={200}>
                <div className="bg-white p-10 md:p-12 border border-divider">
                  <h3 className="text-2xl font-serif text-ink mb-4">Starting a project</h3>
                  <div className="mb-8 pb-8 border-b border-divider">
                    <span className="text-2xl font-serif text-ink block mb-2">Hospital Story Film</span>
                    <span className="text-ink-light">Starts at ₹1,50,000</span>
                    <span className="text-ink-muted text-sm ml-1">+ taxes</span>
                  </div>
                  <p className="text-ink-light text-sm leading-relaxed mb-6">
                    Monthly video production is available within our partnership plans. Existing-footage editing and overseas briefs are quoted after review.
                  </p>
                  <p className="text-ink-light text-sm leading-relaxed mb-8">
                    <strong>Remote work:</strong> Based in Bengaluru, we welcome remote brand and editing briefs from healthcare teams worldwide. Location filming, local-language review and market-specific requirements are agreed separately.
                  </p>
                  <Link to="/contact?reason=Hospital Story Film" className="btn-primary w-full text-center">
                    Discuss your film
                  </Link>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* Video FAQs */}
      <section className="py-20 md:py-32 bg-white">
        <div className="container-editorial">
          <div className="max-w-3xl mx-auto">
            <ScrollReveal>
              <h2 className="text-3xl md:text-4xl font-serif text-ink mb-12 text-center">Video Production FAQs</h2>
            </ScrollReveal>
            <div className="space-y-4">
              {faqs.map((faq, idx) => (
                <ScrollReveal key={idx} delay={idx * 50}>
                  <details className="group border border-divider bg-cream-dark [&_summary::-webkit-details-marker]:hidden rounded-sm">
                    <summary className="flex items-center justify-between cursor-pointer p-6 font-serif text-xl text-ink">
                      {faq.q}
                      <span className="relative ml-4 shrink-0 w-6 h-6 flex items-center justify-center">
                        <Plus className="w-5 h-5 transition-transform duration-300 group-open:rotate-45 text-ink-light" />
                      </span>
                    </summary>
                    <div className="p-6 pt-0 text-ink-light leading-relaxed border-t border-divider/50 mt-2">
                      {faq.a}
                    </div>
                  </details>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
