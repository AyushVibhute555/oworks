import { useParams, Link } from "react-router-dom";
import { ArrowLeft, PlayCircle } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { ScrollReveal } from "@/components/shared/ScrollReveal";

const mockFilms = {
  "hospital-process-story": {
    title: "Hospital Process Story",
    client: "Sadbhava",
    audience: "Patients & Partners",
    role: "Full Production",
    desc: "A clear, step-by-step look at how care is delivered from admission to discharge. Filmed with real staff to set accurate expectations for new patients.",
    duration: "02:15"
  },
  "doctor-education": {
    title: "Doctor Education",
    client: "Adarsh",
    audience: "Specialist Patients",
    role: "Editing & Motion",
    desc: "Transforming complex medical lectures into accessible, bite-sized social media content tailored for patient understanding.",
    duration: "01:30"
  },
  "launch-film": {
    title: "Launch Film",
    client: "Shree Aaraike",
    audience: "Community",
    role: "Full Production",
    desc: "An emotional, high-impact introductory film documenting the opening of a new specialty wing and its importance to the local community.",
    duration: "03:45"
  }
};

export default function FilmDetail() {
  const { slug } = useParams<{ slug: string }>();
  const film = mockFilms[slug as keyof typeof mockFilms] || mockFilms["hospital-process-story"];

  return (
    <Layout>
      {/* Video Player Header */}
      <section className="pt-24 bg-ink text-cream">
        <div className="container-editorial pb-16">
          <Link to="/films" className="inline-flex items-center gap-2 text-cream-dark hover:text-white mb-8 transition-colors text-sm uppercase tracking-widest font-medium">
            <ArrowLeft className="w-4 h-4" /> Back to all films
          </Link>
          
          <ScrollReveal>
            <div className="aspect-video bg-black relative w-full mb-12 group cursor-pointer border border-white/10">
              <img 
                src="https://images.unsplash.com/photo-1581594693702-fbdc51b2763b?auto=format&fit=crop&q=80&w=1600" 
                alt={film.title} 
                className="w-full h-full object-cover opacity-60 transition-opacity duration-500 group-hover:opacity-40" 
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <PlayCircle className="w-24 h-24 text-white opacity-80 group-hover:opacity-100 transition-all duration-300 group-hover:scale-110" strokeWidth={1} />
              </div>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="md:col-span-2">
              <ScrollReveal delay={100}>
                <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-white mb-6">
                  {film.title}
                </h1>
                <p className="text-xl text-cream-dark opacity-90 leading-relaxed max-w-3xl">
                  {film.desc}
                </p>
              </ScrollReveal>
            </div>
            
            <div>
              <ScrollReveal delay={200}>
                <div className="border-t border-white/20 pt-6 space-y-6">
                  <div>
                    <p className="text-sm text-cream-dark opacity-70 uppercase tracking-widest mb-1">Client</p>
                    <p className="text-lg text-white font-serif">{film.client}</p>
                  </div>
                  <div>
                    <p className="text-sm text-cream-dark opacity-70 uppercase tracking-widest mb-1">Target Audience</p>
                    <p className="text-lg text-white">{film.audience}</p>
                  </div>
                  <div>
                    <p className="text-sm text-cream-dark opacity-70 uppercase tracking-widest mb-1">Oworks Scope</p>
                    <p className="text-lg text-white">{film.role}</p>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-cream-dark">
        <div className="container-editorial text-center">
          <ScrollReveal>
            <h2 className="font-serif text-3xl md:text-4xl text-ink mb-6">Need a similar story told?</h2>
            <p className="text-lg text-ink-light mb-10 max-w-2xl mx-auto">
              We handle the clinical review, logistics, and production so you don't have to. Let's discuss your next film.
            </p>
            <Link to={`/contact?reason=Film: ${film.title}`} className="btn-primary inline-flex px-10 py-4">
              Discuss a film project
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </Layout>
  );
}
