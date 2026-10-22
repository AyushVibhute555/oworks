import { useParams, Link, useNavigate } from "react-router-dom";
import { ArrowLeft, ArrowRight, CheckCircle2, MapPin, Calendar, Activity, Sparkles, Image as ImageIcon } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { ScrollReveal } from "@/components/shared/ScrollReveal";
import { CASE_STUDIES, getCaseStudy } from "@/data/work";

export default function WorkDetail() {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();

  const study = getCaseStudy(slug) || CASE_STUDIES[0];

  // Find index and next case study for smooth cycling through all 11
  const currentIndex = CASE_STUDIES.findIndex((c) => c.slug === study.slug);
  const nextStudy = CASE_STUDIES[(currentIndex + 1) % CASE_STUDIES.length];

  return (
    <Layout>
      {/* Back Link & Breadcrumbs */}
      <section className="pt-32 pb-8 bg-cream-dark border-b border-divider">
        <div className="container-editorial">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <Link
              to="/work"
              className="inline-flex items-center gap-2.5 text-sm font-medium text-ink-muted hover:text-ink transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to all healthcare work</span>
            </Link>

            <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-ink-muted">
              <span>{study.category}</span>
              <span>•</span>
              <span>{study.location}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Case Study Header */}
      <section className="py-16 md:py-24 bg-cream-dark border-b border-divider">
        <div className="container-editorial">
          <div className="max-w-4xl">
            <ScrollReveal>
              {/* Client Logo & Tag */}
              <div className="flex items-center gap-4 mb-8">
                <div className="bg-white p-3 md:p-4 rounded border border-divider shadow-sm inline-flex items-center justify-center">
                  <img
                    src={encodeURI(study.logo)}
                    alt={`${study.client} logo`}
                    className="h-8 md:h-10 w-auto max-w-[140px] md:max-w-[180px] object-contain"
                  />
                </div>
                <div>
                  <h2 className="text-xl md:text-2xl font-serif text-ink">{study.client}</h2>
                  <p className="text-xs uppercase tracking-widest text-ink-muted">{study.specialty}</p>
                </div>
              </div>

              <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl text-ink leading-[1.12] mb-8">
                {study.title}
              </h1>

              <p className="text-xl md:text-2xl text-ink-light leading-relaxed mb-12">
                {study.summary}
              </p>
            </ScrollReveal>

            {/* Quick Fact Bar */}
            <ScrollReveal delay={100}>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-8 border-t border-divider">
                <div>
                  <span className="text-xs uppercase tracking-widest text-ink-muted block mb-1">Client</span>
                  <p className="text-base font-serif text-ink">{study.client}</p>
                </div>
                <div>
                  <span className="text-xs uppercase tracking-widest text-ink-muted block mb-1">Location</span>
                  <p className="text-base font-serif text-ink">{study.location}</p>
                </div>
                <div>
                  <span className="text-xs uppercase tracking-widest text-ink-muted block mb-1">Year</span>
                  <p className="text-base font-serif text-ink">{study.year}</p>
                </div>
                <div>
                  <span className="text-xs uppercase tracking-widest text-ink-muted block mb-1">Specialty</span>
                  <p className="text-base font-serif text-ink truncate">{study.specialty}</p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Hero Visual Banner */}
      <section className="bg-cream py-10 md:py-16">
        <div className="container-editorial">
          <ScrollReveal>
            <div className="relative aspect-[16/9] md:aspect-[21/9] bg-neutral-900 overflow-hidden border border-divider group">
              <img
                src={study.heroImage}
                alt={`${study.client} case study hero`}
                className="w-full h-full object-cover transition-transform duration-1000 ease-editorial group-hover:scale-102"
              />
              <div className="absolute bottom-4 right-4 bg-ink/80 text-cream text-xs px-3 py-1.5 rounded backdrop-blur-sm flex items-center gap-2">
                <ImageIcon className="w-3.5 h-3.5" />
                <span>Placeholder image — ready for project photograph</span>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Case Study Core Body */}
      <section className="py-20 md:py-32 bg-white">
        <div className="container-editorial">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
            {/* Left Narrative Column */}
            <div className="lg:col-span-7 space-y-16">
              {/* The Challenge */}
              <ScrollReveal>
                <div>
                  <span className="eyebrow block mb-4">The Clinical & Institutional Challenge</span>
                  <h2 className="font-serif text-3xl md:text-4xl text-ink mb-6">
                    What needed solving
                  </h2>
                  <p className="text-xl text-ink-light leading-relaxed">
                    {study.challenge}
                  </p>
                </div>
              </ScrollReveal>

              {/* Target Audience */}
              <ScrollReveal delay={100}>
                <div className="p-8 bg-cream border-l-4 border-ink">
                  <span className="eyebrow block mb-2">Target Audience</span>
                  <p className="text-lg text-ink font-medium leading-relaxed">
                    {study.audience}
                  </p>
                </div>
              </ScrollReveal>

              {/* Strategic Approach */}
              <ScrollReveal delay={150}>
                <div>
                  <span className="eyebrow block mb-4">The Strategic Approach</span>
                  <h2 className="font-serif text-3xl md:text-4xl text-ink mb-6">
                    How we structured the work
                  </h2>
                  <p className="text-xl text-ink-light leading-relaxed">
                    {study.approach}
                  </p>
                </div>
              </ScrollReveal>

              {/* Impact / Outcome */}
              <ScrollReveal delay={200}>
                <div className="pt-8 border-t border-divider">
                  <span className="eyebrow block mb-4">Outcome & Delivery</span>
                  <h2 className="font-serif text-3xl md:text-4xl text-ink mb-6">
                    What this created for the hospital
                  </h2>
                  <p className="text-xl text-ink-light leading-relaxed mb-8">
                    {study.impact}
                  </p>

                  {study.quote && (
                    <blockquote className="bg-cream-dark p-8 md:p-10 border border-divider">
                      <p className="font-serif text-2xl text-ink italic mb-6 leading-snug">
                        "{study.quote.text}"
                      </p>
                      <div>
                        <p className="font-serif text-lg text-ink font-bold">{study.quote.author}</p>
                        <p className="text-sm text-ink-muted">{study.quote.role}</p>
                      </div>
                    </blockquote>
                  )}
                </div>
              </ScrollReveal>
            </div>

            {/* Right Sidebar Column */}
            <div className="lg:col-span-5">
              <div className="lg:sticky lg:top-32 space-y-8">
                {/* Scope Box */}
                <ScrollReveal delay={100}>
                  <div className="bg-cream-dark p-8 md:p-10 border border-divider">
                    <h3 className="font-serif text-2xl text-ink mb-6">Scope of Work</h3>
                    <ul className="space-y-4">
                      {study.scope.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-3.5 text-base text-ink-light">
                          <CheckCircle2 className="w-5 h-5 text-ink shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </ScrollReveal>

                {/* Verified Deliverables */}
                <ScrollReveal delay={150}>
                  <div className="bg-white p-8 md:p-10 border border-divider shadow-sm">
                    <h3 className="font-serif text-2xl text-ink mb-6">Key Deliverables</h3>
                    <ul className="space-y-3.5">
                      {study.deliverables.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-3 text-base text-ink-light">
                          <span className="w-2 h-2 rounded-full bg-ink shrink-0 mt-2" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </ScrollReveal>

                {/* Direct Action Box */}
                <ScrollReveal delay={200}>
                  <div className="p-8 bg-ink text-cream">
                    <h4 className="font-serif text-2xl mb-3">Discuss a similar brief</h4>
                    <p className="text-sm text-cream-dark opacity-80 mb-6 leading-relaxed">
                      Facing a similar launch or communication priority for your hospital? We can prepare an initial scope and roadmap.
                    </p>
                    <Link
                      to="/contact"
                      className="btn-primary bg-white text-ink hover:bg-cream w-full text-center block py-3.5 text-sm"
                    >
                      Discuss with our team
                    </Link>
                  </div>
                </ScrollReveal>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Visual Execution Gallery */}
      <section className="py-20 md:py-32 bg-cream-dark border-t border-divider">
        <div className="container-editorial">
          <div className="max-w-3xl mb-16">
            <ScrollReveal>
              <span className="eyebrow block mb-4">Project Gallery & Executions</span>
              <h2 className="font-serif text-4xl md:text-5xl text-ink mb-6">
                Execution across touchpoints.
              </h2>
              <p className="text-lg md:text-xl text-ink-light">
                Visual applications created for {study.client}. Each asset was planned, approved, and integrated with clinical workflows.
              </p>
            </ScrollReveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {study.galleryImages.map((img, idx) => (
              <ScrollReveal key={idx} delay={idx * 100}>
                <div className="bg-white border border-divider overflow-hidden group flex flex-col h-full">
                  <div className="aspect-[4/3] bg-neutral-900 relative overflow-hidden">
                    <img
                      src={img.url}
                      alt={img.caption}
                      className="w-full h-full object-cover transition-transform duration-700 ease-editorial group-hover:scale-105"
                    />
                    <div className="absolute top-3 left-3 bg-ink/80 text-white text-[11px] uppercase tracking-wider px-2.5 py-1 rounded backdrop-blur-sm font-medium">
                      {img.type === "installed" && "Installed Signage"}
                      {img.type === "published" && "Clinical Collateral"}
                      {img.type === "film" && "Film Production"}
                      {img.type === "identity" && "Brand Application"}
                    </div>
                  </div>
                  <div className="p-6 flex flex-col flex-grow justify-between">
                    <p className="text-base text-ink font-medium mb-3">
                      {img.caption}
                    </p>
                    <p className="text-xs text-ink-muted italic flex items-center gap-1.5 pt-3 border-t border-divider">
                      <ImageIcon className="w-3 h-3 shrink-0" />
                      <span>Placeholder photo — easily replaceable</span>
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Next Case Study Navigation */}
      <section className="py-20 md:py-28 bg-white border-t border-divider">
        <div className="container-editorial">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
            <div>
              <span className="eyebrow block mb-2">Next Case Study</span>
              <h3 className="font-serif text-3xl md:text-4xl text-ink">
                {nextStudy.client}
              </h3>
              <p className="text-lg text-ink-light mt-2 max-w-xl">
                {nextStudy.title}
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-4">
              <Link to={`/work/${nextStudy.slug}`} className="btn-primary flex items-center gap-2">
                <span>View next case</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link to="/work" className="btn-outline">
                All case studies
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
