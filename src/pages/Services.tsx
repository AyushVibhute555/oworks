import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { ScrollReveal } from "@/components/shared/ScrollReveal";
import { services } from "@/data/services";

export default function Services() {
  // Group services by category
  const groupedServices = services.reduce((acc, service) => {
    if (!acc[service.category]) {
      acc[service.category] = [];
    }
    acc[service.category].push(service);
    return acc;
  }, {} as Record<string, typeof services>);

  // Maintain order of categories as requested
  const categories = [
    "Creative and Content",
    "Research and Analysis",
    "Web Development",
    "Distribution"
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-24">
        <div className="container-editorial px-6 md:px-12 lg:px-20 text-center">
          <div className="max-w-4xl mx-auto">
            <ScrollReveal>
              <h1 className="font-serif text-5xl md:text-7xl text-ink mb-8">
                Our Services
              </h1>
            </ScrollReveal>
            <ScrollReveal delay={100}>
              <p className="text-xl md:text-2xl text-ink-light leading-relaxed">
                We offer marketing services that help brands and businesses expand into new markets. Our strategies are built on proven insights, delivering success every time. With a mix of creativity and the latest technology, we're here to help you achieve your goals, whether they're local or global.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Services Categories */}
      <section className="section-padding bg-cream-dark border-t border-divider">
        <div className="container-editorial px-6 md:px-12 lg:px-20">
          <div className="space-y-24 md:space-y-32">
            {categories.map((category, index) => {
              const categoryServices = groupedServices[category] || [];
              if (categoryServices.length === 0) return null;

              const isEven = index % 2 === 0;

              return (
                <div key={category} className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
                  
                  {/* Image Column */}
                  <div className={`lg:col-span-5 ${isEven ? 'order-1' : 'order-1 lg:order-2'}`}>
                    <ScrollReveal>
                      <div className="aspect-[4/5] bg-cream overflow-hidden">
                        <img
                          src={`https://images.unsplash.com/photo-1542744094-24638ea0b56c?auto=format&fit=crop&q=80&w=800&sig=${index}`}
                          alt={`Placeholder — ${category} category image, to be replaced`}
                          className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                        />
                      </div>
                    </ScrollReveal>
                  </div>

                  {/* Content Column */}
                  <div className={`lg:col-span-7 ${isEven ? 'order-2' : 'order-2 lg:order-1'}`}>
                    <ScrollReveal>
                      <h2 className="font-serif text-4xl md:text-5xl text-ink mb-10 pb-6 border-b border-divider">
                        {category}
                      </h2>
                    </ScrollReveal>
                    <div className="space-y-6">
                      {categoryServices.map((service, sIndex) => (
                        <ScrollReveal key={service.slug} delay={sIndex * 100}>
                          <Link 
                            to={`/services/${service.slug}`}
                            className="group block p-6 border border-divider hover:bg-white transition-colors duration-300"
                          >
                            <div className="flex items-center justify-between">
                              <h3 className="font-serif text-2xl text-ink group-hover:text-ink-light transition-colors">
                                {service.name}
                              </h3>
                              <svg 
                                className="w-6 h-6 text-ink transform transition-transform duration-300 group-hover:translate-x-2" 
                                fill="none" 
                                viewBox="0 0 24 24" 
                                stroke="currentColor"
                              >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                              </svg>
                            </div>
                          </Link>
                        </ScrollReveal>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="bg-cream py-24 border-t border-divider">
        <div className="container-editorial px-6 md:px-12 lg:px-20 text-center">
          <ScrollReveal>
            <h2 className="font-serif text-3xl md:text-5xl text-ink mb-10">Ready to expand your reach?</h2>
            <Link to="/contact" className="btn-primary inline-flex">
              Connect with Us
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </Layout>
  );
}
