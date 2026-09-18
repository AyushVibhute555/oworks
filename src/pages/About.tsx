import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { ScrollReveal } from "@/components/shared/ScrollReveal";

const skills = [
  {
    category: "Strategy",
    items: ["Brand Identity", "Brand Strategy", "Inbound Marketing", "Creative Consulting", "Advertising", "Internal Branding"]
  },
  {
    category: "Execution",
    items: ["UX & UI Design", "Web Design", "Content Creation", "Copywriting", "External Branding", "Print works"]
  },
  {
    category: "Operations",
    items: ["Creative Consulting", "Marketing Operations", "Digital Infrastructure", "Campaign Management", "Content Production", "Interior Design Consulting"]
  },
  {
    category: "Growth",
    items: ["Performance Marketing", "User Acquisition", "Content Optimization", "Market Research", "User Research", "Competitor Research"]
  }
];

export default function About() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-24">
        <div className="container-editorial px-6 md:px-12 lg:px-20 text-center">
          <div className="max-w-4xl mx-auto">
            <ScrollReveal>
              <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-ink leading-tight mb-8">
                Original, Wise,<br />Reliable, Swift
              </h1>
            </ScrollReveal>
            <ScrollReveal delay={100}>
              <p className="text-xl md:text-2xl text-ink-light leading-relaxed">
                Discover who we are at Oworks. Learn about our mission, values, and the passionate team behind our innovative marketing solutions.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* The Story */}
      <section className="section-padding bg-cream-dark">
        <div className="container-editorial px-6 md:px-12 lg:px-20">
          <div className="max-w-3xl mx-auto text-center">
            <ScrollReveal>
              <h2 className="font-serif text-4xl md:text-5xl text-ink mb-10">The Story!!</h2>
            </ScrollReveal>
            <ScrollReveal delay={100}>
              <p className="text-xl text-ink-light leading-relaxed mb-16">
                oworks was founded in 2012. We operate with a core team of 15 people and work with a large pool of creative agencies across the globe. We compose a unique team for each project to provide flexible talent specializing in creative concepts, management, and technology anywhere in the world.
              </p>
            </ScrollReveal>
          </div>

          <ScrollReveal delay={200}>
            <div className="aspect-[21/9] md:aspect-[24/9] bg-cream overflow-hidden mt-8 relative rounded-sm">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=2000"
                alt="Placeholder — team photo / office image, to be replaced"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-ink/10"></div>
              <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm px-4 py-2 text-sm font-medium">
                Team photo placeholder — replace
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Our Skills */}
      <section className="section-padding">
        <div className="container-editorial px-6 md:px-12 lg:px-20">
          <ScrollReveal>
            <h2 className="font-serif text-4xl md:text-5xl text-ink mb-16 text-center">Our Skills</h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
            {skills.map((skillGroup, index) => (
              <ScrollReveal key={skillGroup.category} delay={index * 100}>
                <div className="p-8 border border-divider h-full">
                  <h3 className="font-serif text-2xl text-ink mb-6 pb-4 border-b border-divider">{skillGroup.category}</h3>
                  <ul className="space-y-4">
                    {skillGroup.items.map((item, idx) => (
                      <li key={idx} className="flex flex-wrap">
                        <span className="inline-block bg-cream-dark px-3 py-1 rounded-full text-sm text-ink-light whitespace-nowrap">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="bg-cream-dark py-24 border-t border-divider">
        <div className="container-editorial px-6 md:px-12 lg:px-20 text-center">
          <ScrollReveal>
            <h2 className="font-serif text-3xl md:text-5xl text-ink mb-10">Ready to start your journey?</h2>
            <Link to="/contact" className="btn-primary inline-flex">
              Connect with Us
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </Layout>
  );
}
