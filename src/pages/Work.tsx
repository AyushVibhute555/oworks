import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Sparkles } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { ScrollReveal } from "@/components/shared/ScrollReveal";
import { CASE_STUDIES } from "@/data/work";

export default function Work() {
  const [selectedFilter, setSelectedFilter] = useState<string>("All");

  const categories = ["All", "Hospital Launches", "Specialty Communication", "Digital & Identity"];

  const filteredStudies = CASE_STUDIES.filter((study) => {
    if (selectedFilter === "All") return true;
    if (selectedFilter === "Hospital Launches") {
      return study.category.toLowerCase().includes("launch") || study.category.toLowerCase().includes("institutional");
    }
    if (selectedFilter === "Specialty Communication") {
      return study.category.toLowerCase().includes("specialty") || study.category.toLowerCase().includes("patient") || study.category.toLowerCase().includes("sensitive");
    }
    if (selectedFilter === "Digital & Identity") {
      return study.category.toLowerCase().includes("digital") || study.category.toLowerCase().includes("identity") || study.category.toLowerCase().includes("strategy");
    }
    return true;
  });

  return (
    <Layout>
      {/* Header */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-24 bg-cream-dark border-b border-divider">
        <div className="container-editorial">
          <div className="max-w-4xl">
            <ScrollReveal>
              <span className="eyebrow block mb-6">Our Healthcare Portfolio</span>
              <h1 className="font-serif text-5xl md:text-7xl text-ink leading-[1.1] mb-8">
                Selected work.
              </h1>
            </ScrollReveal>
            <ScrollReveal delay={100}>
              <p className="text-xl md:text-2xl text-ink-light leading-relaxed max-w-3xl mb-12">
                See how we build brands, films, wayfinding and communication systems for 11 premier hospitals and specialist practices.
              </p>

              {/* Category Filter Pills */}
              <div className="flex flex-wrap gap-3">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setSelectedFilter(cat)}
                    className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                      selectedFilter === cat
                        ? "bg-ink text-cream shadow-sm"
                        : "bg-white text-ink-light border border-divider hover:border-ink hover:text-ink"
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Grid */}
      <section className="py-20 md:py-32 bg-white">
        <div className="container-editorial">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
            {filteredStudies.map((study, index) => (
              <ScrollReveal key={study.slug} delay={(index % 3) * 100}>
                <Link to={`/work/${study.slug}`} className="group flex flex-col h-full block">
                  <div className="aspect-[16/11] bg-cream mb-6 overflow-hidden border border-divider relative">
                    <img 
                      src={study.cardImage} 
                      alt={study.client} 
                      className="w-full h-full object-cover transition-transform duration-700 ease-editorial group-hover:scale-105" 
                    />
                    <div className="absolute inset-0 bg-ink/0 group-hover:bg-ink/10 transition-colors duration-500" />
                    
                    {/* Client logo floating badge */}
                    <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm px-3.5 py-2 rounded shadow-sm border border-divider/60 flex items-center justify-center">
                      <img 
                        src={encodeURI(study.logo)} 
                        alt={`${study.client} logo`}
                        className="h-6 w-auto max-w-[90px] object-contain" 
                      />
                    </div>

                    <div className="absolute bottom-4 right-4 bg-ink/80 text-white text-xs px-2.5 py-1 rounded backdrop-blur-sm font-medium">
                      {study.year}
                    </div>
                  </div>

                  <div className="flex flex-col flex-grow">
                    <div className="flex items-center justify-between text-xs uppercase tracking-widest text-ink-muted mb-2.5">
                      <span>{study.category}</span>
                      <span>{study.location.split(',')[0]}</span>
                    </div>

                    <h3 className="font-serif text-2xl md:text-3xl text-ink mb-3 group-hover:text-ink-light transition-colors line-clamp-1">
                      {study.client}
                    </h3>

                    <p className="text-base text-ink-light leading-relaxed line-clamp-2 mb-6 flex-grow">
                      {study.title}
                    </p>

                    <div className="pt-4 border-t border-divider flex items-center justify-between text-sm font-medium text-ink group-hover:text-ink-light transition-colors mt-auto">
                      <span>View case study</span>
                      <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>

          {/* Bottom Callout */}
          <div className="mt-28 p-12 md:p-16 bg-cream border border-divider flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
            <div className="max-w-2xl">
              <span className="eyebrow block mb-3">Custom Hospital Partnerships</span>
              <h3 className="font-serif text-3xl md:text-4xl text-ink mb-4">
                Have a hospital project or launch in mind?
              </h3>
              <p className="text-lg text-ink-light leading-relaxed">
                We work closely with clinical owners and leadership teams across Karnataka and Telangana to plan, design, and produce accountable healthcare communication.
              </p>
            </div>
            <Link to="/contact" className="btn-primary shrink-0 whitespace-nowrap">
              Discuss your priorities
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}

