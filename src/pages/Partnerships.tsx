import { Link } from "react-router-dom";
import { Check, ArrowRight, Plus } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { ScrollReveal } from "@/components/shared/ScrollReveal";

const plans = [
  {
    name: "Focus",
    price: "₹60,000",
    period: "/month",
    bestFor: "One specialty or a focused communication programme",
    summary: "Keep one clear priority visible.",
    action: "Explore Focus",
    recommended: false,
    features: [
      "Monthly plan",
      "One four-hour shoot",
      "Four short videos",
      "Four designed posts",
      "Instagram and Facebook scheduling",
      "Monthly summary"
    ]
  },
  {
    name: "Healthcare Partner",
    price: "₹85,000",
    period: "/month",
    bestFor: "An ongoing hospital communication programme",
    summary: "Bring your hospital's communication into one plan.",
    action: "Discuss this partnership",
    recommended: true,
    features: [
      "Monthly plan",
      "One four-hour shoot",
      "Eight short videos",
      "Four designed posts",
      "Instagram and Facebook scheduling",
      "One monthly review and report"
    ]
  },
  {
    name: "Campaign Partner",
    price: "₹1,20,000",
    period: "/month",
    bestFor: "A hospital with an agreed campaign priority and more production needs",
    summary: "Build a focused campaign with a stronger content programme.",
    action: "Plan your campaign",
    recommended: false,
    features: [
      "Monthly plan",
      "One four-hour shoot",
      "Twelve short videos",
      "Six designed posts",
      "One quarterly campaign message and rollout plan",
      "Scheduling",
      "Monthly review and report"
    ]
  }
];

const faqs = [
  {
    q: "Will the plan be tailored to our hospital?",
    a: "Yes. The production allowance is defined, while the positioning, audience, topics and calendar are built around your priorities."
  },
  {
    q: "How much time will our doctors need to give?",
    a: "We prepare topics and group filming into agreed sessions. Your clinical reviewers still need to confirm medical facts. The required time is agreed during planning."
  },
  {
    q: "Do the monthly plans include ads or SEO?",
    a: "They include the listed communication and production scope. Ad management, media spend and ongoing SEO require a separate brief and budget."
  },
  {
    q: "Can you coordinate print, uniforms, interiors and events?",
    a: "Yes, where the project scope and specialist delivery are agreed. These purchases and technical services are quoted separately from monthly communication."
  },
  {
    q: "Do you guarantee patient numbers or media coverage?",
    a: "We agree measurable communication goals and report available evidence. Patient numbers depend on factors including clinical demand, capacity and enquiry handling; earned media decisions remain with publishers."
  },
  {
    q: "Can we start with a project?",
    a: "Yes. A review, film or brand project can be the first step before an ongoing partnership."
  },
  {
    q: "Who owns the accounts and work?",
    a: "Your organisation retains its domain and platform accounts. Usage rights, artwork, footage, source files and handover are set out in the agreement."
  },
  {
    q: "Do you work internationally?",
    a: "We welcome remote brand and editing briefs. Local filming, language review, data handling and market-specific requirements are agreed before work starts."
  }
];

export default function Partnerships() {
  return (
    <Layout>
      {/* Header Section */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-24 bg-cream-dark">
        <div className="container-editorial">
          <div className="max-w-4xl">
            <ScrollReveal>
              <h1 className="font-serif text-5xl md:text-7xl text-ink leading-[1.1] mb-8">
                A clear scope. A team that stays with it.
              </h1>
            </ScrollReveal>
            <ScrollReveal delay={100}>
              <p className="text-xl md:text-2xl text-ink-light leading-relaxed max-w-3xl">
                Choose a monthly programme, a focused project or a review before you begin. We tailor the priorities to your healthcare organisation and agree the work before production starts.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Pricing Cards Section */}
      <section className="py-20 md:py-32 bg-white">
        <div className="container-editorial">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16 items-stretch">
            {plans.map((plan, i) => (
              <ScrollReveal key={i} delay={i * 100}>
                <div className={`h-full flex flex-col p-8 md:p-10 border transition-all duration-500 ${plan.recommended ? 'border-ink shadow-2xl relative z-10 scale-100 lg:scale-105 bg-white' : 'border-divider bg-transparent hover:bg-cream-dark'}`}>
                  {plan.recommended && (
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-ink text-white text-xs px-4 py-1.5 uppercase tracking-widest font-bold">
                      Recommended for ongoing communication
                    </div>
                  )}
                  
                  <div className="mb-8">
                    <h3 className="font-serif text-3xl text-ink mb-4">{plan.name}</h3>
                    <p className="text-ink-light min-h-[48px]">{plan.summary}</p>
                  </div>
                  
                  <div className="mb-10 pb-8 border-b border-divider">
                    <div className="flex items-baseline mb-2">
                      <span className="text-4xl font-serif text-ink">{plan.price}</span>
                      <span className="text-ink-muted ml-2">{plan.period}</span>
                    </div>
                    <p className="text-sm text-ink-light">Best for: {plan.bestFor}</p>
                  </div>

                  <div className="flex-grow mb-10">
                    <p className="eyebrow mb-6">Included each month</p>
                    <ul className="space-y-4">
                      {plan.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-3 text-ink-light">
                          <Check className="w-5 h-5 text-ink shrink-0 mt-0.5" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Link 
                    to={`/contact?reason=${encodeURIComponent(plan.name)}`} 
                    className={`mt-auto w-full py-4 text-center font-medium transition-colors ${
                      plan.recommended 
                        ? 'bg-ink text-white hover:bg-ink-light' 
                        : 'border border-ink text-ink hover:bg-ink hover:text-white'
                    }`}
                  >
                    {plan.action}
                  </Link>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal>
            <div className="max-w-4xl mx-auto text-center p-8 bg-cream-dark border border-divider">
              <p className="text-sm text-ink-muted leading-relaxed">
                <strong>Prices exclude applicable taxes.</strong> The listed filming allowance applies to Bengaluru or a scheduled Kalaburagi production circuit, at one location. Other travel is quoted before booking. Advertising spend, website builds, printing, interiors, events, PR, long-form films and extra versions are quoted separately.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Projects and Review Section */}
      <section className="py-20 md:py-32 bg-cream-dark border-y border-divider">
        <div className="container-editorial">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
            
            {/* Clarity Review */}
            <div>
              <ScrollReveal>
                <div className="bg-white p-10 md:p-12 border border-ink/10 h-full shadow-sm">
                  <span className="eyebrow block mb-4 text-ink-light">Low-risk first step</span>
                  <h2 className="text-3xl font-serif text-ink mb-4">Unsure where to begin?</h2>
                  <div className="mb-6 pb-6 border-b border-divider">
                    <span className="text-3xl font-serif text-ink">₹25,000</span>
                    <span className="text-ink-muted ml-2">Clarity Review</span>
                  </div>
                  <p className="text-xl text-ink-light leading-relaxed mb-8">
                    "Know what to fix before you spend more. We review your positioning, public communication and priority touchpoints, then give you a focused 90-day action plan."
                  </p>
                  <div className="space-y-3 text-ink-muted text-sm mb-10 bg-cream p-6 border border-divider">
                    <p><strong>Fixed scope:</strong> one leadership interview; desk review of one website and up to three public channels; a positioning summary; five priorities; a 90-day plan; one presentation.</p>
                    <p><strong>Timeline:</strong> Target ten working days after access and inputs.</p>
                    <p><strong>Excludes:</strong> an on-site audit, ad-account forensic analysis and implementation.</p>
                  </div>
                  <Link to="/contact?reason=Clarity Review" className="btn-primary w-full text-center">
                    Start with a Clarity Review
                  </Link>
                </div>
              </ScrollReveal>
            </div>

            {/* Projects */}
            <div className="flex flex-col justify-center">
              <ScrollReveal delay={100}>
                <h2 className="text-3xl md:text-4xl font-serif text-ink mb-6">Need one important thing done well?</h2>
                <p className="text-xl text-ink-light leading-relaxed mb-10">
                  Brand foundations, websites, story films and launch communication are available as defined projects. See the starting scopes or bring us your brief.
                </p>
                <ul className="space-y-6 mb-12">
                  {[
                    { name: "Brand Foundation", price: "Starts at ₹1,00,000" },
                    { name: "Healthcare Website", price: "Starts at ₹1,00,000" },
                    { name: "Hospital Story Film", price: "Starts at ₹1,50,000" },
                    { name: "Launch Communication", price: "Starts at ₹2,50,000" },
                    { name: "Experience & Wayfinding", price: "Starts at ₹50,000" }
                  ].map((proj, idx) => (
                    <li key={idx} className="flex items-center justify-between border-b border-divider pb-4">
                      <span className="font-medium text-ink text-lg">{proj.name}</span>
                      <span className="text-ink-light">{proj.price}</span>
                    </li>
                  ))}
                </ul>
                <Link to="/services" className="text-ink font-medium hover:text-ink-light transition-colors inline-flex items-center gap-2">
                  Explore full project scopes <ArrowRight className="w-5 h-5" />
                </Link>
              </ScrollReveal>
            </div>

          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20 md:py-32 bg-white">
        <div className="container-editorial">
          <div className="max-w-3xl mx-auto">
            <ScrollReveal>
              <h2 className="text-3xl md:text-4xl font-serif text-ink mb-12 text-center">Frequently asked questions</h2>
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

      {/* CTA */}
      <section className="py-20 md:py-32 bg-ink text-center">
        <div className="container-editorial">
          <ScrollReveal>
            <h2 className="text-4xl md:text-5xl font-serif text-cream mb-6">Let us put the right scope around your priority.</h2>
            <p className="text-xl text-cream-dark opacity-80 mb-12 max-w-2xl mx-auto">
              Tell us what needs to happen next. We will tailor the timeline and allowance to fit your hospital.
            </p>
            <Link to="/contact" className="btn-primary bg-white text-ink hover:bg-cream inline-flex px-12 py-5 text-lg">
              Discuss your partnership
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </Layout>
  );
}
