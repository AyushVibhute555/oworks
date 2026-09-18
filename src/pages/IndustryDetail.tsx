import { useParams, Link, Navigate } from "react-router-dom";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { ScrollReveal } from "@/components/shared/ScrollReveal";
import { industries } from "@/data/industries";

export default function IndustryDetail() {
  const { slug } = useParams<{ slug: string }>();
  
  const industryIndex = industries.findIndex((i) => i.slug === slug);
  const industry = industries[industryIndex];
  
  if (!industry) {
    return <Navigate to="/industries" replace />;
  }

  const nextIndustry = industries[(industryIndex + 1) % industries.length];

  return (
    <Layout>
      {/* Hero Image */}
      <section className="pt-24 md:pt-32">
        <div className="w-full">
          <ScrollReveal>
            <div className="aspect-[16/9] md:aspect-[21/9] bg-cream overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=2000"
                alt={`Placeholder — ${industry.name} hero image, to be replaced`}
                className="w-full h-full object-cover"
              />
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Industry Info */}
      <section className="section-padding">
        <div className="container-editorial px-6 md:px-12 lg:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            {/* Main Content */}
            <div className="lg:col-span-8">
              <ScrollReveal>
                <p className="eyebrow mb-4">Industry</p>
              </ScrollReveal>
              <ScrollReveal delay={100}>
                <h1 className="font-serif text-4xl md:text-5xl text-ink mb-8">
                  {industry.heading}
                </h1>
              </ScrollReveal>
              <ScrollReveal delay={200}>
                <p className="text-xl text-ink-light leading-relaxed mb-12">
                  {industry.intro}
                </p>
              </ScrollReveal>

              {/* Services Included */}
              <ScrollReveal delay={300}>
                <div className="mb-12">
                  <h2 className="font-serif text-3xl text-ink mb-6">Services Included</h2>
                  <ul className="space-y-4 list-disc pl-5">
                    {industry.servicesIncluded.map((service, idx) => (
                      <li key={idx} className="text-ink-light text-lg">
                        {service}
                      </li>
                    ))}
                  </ul>
                </div>
              </ScrollReveal>

              {/* Why Choose Us */}
              <ScrollReveal delay={400}>
                <div className="mb-12">
                  <h2 className="font-serif text-3xl text-ink mb-6">Why Choose Us</h2>
                  <p className="text-ink-light text-lg leading-relaxed">
                    {industry.whyChooseUs}
                  </p>
                </div>
              </ScrollReveal>
            </div>

            {/* Sidebar / Supporting Image */}
            <div className="lg:col-span-4">
              <ScrollReveal delay={300}>
                <div className="lg:sticky lg:top-32 space-y-8">
                  <div className="aspect-[4/5] bg-cream overflow-hidden">
                     <img
                      src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=800"
                      alt={`Placeholder — ${industry.name} supporting image, to be replaced`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="bg-cream-dark py-24 border-t border-divider">
        <div className="container-editorial px-6 md:px-12 lg:px-20 text-center">
          <ScrollReveal>
            <h2 className="font-serif text-3xl md:text-5xl text-ink mb-10">We would love to help you build your Brand!!</h2>
            <Link to="/contact" className="btn-primary inline-flex">
              Connect with Us
            </Link>
          </ScrollReveal>
        </div>
      </section>

      {/* Next Industry */}
      <section className="border-t border-divider">
        <Link 
          to={`/industries/${nextIndustry.slug}`}
          className="group block"
        >
          <div className="container-editorial px-6 md:px-12 lg:px-20 py-16 md:py-24">
            <div className="flex items-center justify-between">
              <div>
                <p className="eyebrow mb-4">Next Industry</p>
                <h2 className="font-serif text-3xl md:text-4xl text-ink group-hover:opacity-70 transition-opacity duration-300">
                  {nextIndustry.name}
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
            to="/industries" 
            className="inline-flex items-center gap-2 text-sm text-ink-muted hover:text-ink transition-colors duration-300"
          >
            <ArrowLeft size={16} strokeWidth={1.5} />
            Back to all industries
          </Link>
        </div>
      </section>
    </Layout>
  );
}
