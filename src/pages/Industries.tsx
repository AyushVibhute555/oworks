import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { ScrollReveal } from "@/components/shared/ScrollReveal";
import { industries } from "@/data/industries";
import { Helmet } from "react-helmet"; // Will fall back to manual if react-helmet is missing, but this template might not have it. I'll use simple document.title instead.

export default function Industries() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-24">
        <div className="container-editorial px-6 md:px-12 lg:px-20">
          <div className="max-w-4xl mx-auto text-center">
            <ScrollReveal>
              <h1 className="font-serif text-5xl md:text-7xl text-ink mb-8">
                Industries We Serve
              </h1>
            </ScrollReveal>
            <ScrollReveal delay={100}>
              <p className="text-xl md:text-2xl text-ink-light leading-relaxed mb-6">
                At Oworks Marketing Tech Pvt Ltd, we specialise in crafting tailored digital marketing solutions for a diverse range of industries. Our expertise spans across healthcare, real estate, education, technology, and more. We understand that each industry has unique challenges and opportunities, and we leverage our in-depth knowledge and experience to deliver results that matter.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={200}>
              <p className="text-lg text-ink-muted">
                Explore our industry-specific services to learn how we can help your business thrive in today's competitive landscape.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="section-padding bg-cream-dark">
        <div className="container-editorial px-6 md:px-12 lg:px-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            {industries.map((industry, index) => (
              <ScrollReveal key={industry.slug} delay={index * 100}>
                <Link 
                  to={`/industries/${industry.slug}`}
                  className="group block"
                >
                  <div className="aspect-[4/3] overflow-hidden mb-6 bg-cream">
                    <img
                      src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1000"
                      alt={`Placeholder — ${industry.name} industry image, to be replaced`}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <h3 className="font-serif text-2xl md:text-3xl text-ink group-hover:opacity-70 transition-opacity">
                    {industry.name}
                  </h3>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="section-padding">
        <div className="container-editorial px-6 md:px-12 lg:px-20 text-center">
          <ScrollReveal>
            <h2 className="font-serif text-3xl md:text-5xl text-ink mb-10">We would love to help you build your Brand!!</h2>
            <Link to="/contact" className="btn-primary inline-flex">
              Connect with Us
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </Layout>
  );
}
