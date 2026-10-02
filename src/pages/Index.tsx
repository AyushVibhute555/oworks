import { Link } from "react-router-dom";
import { ArrowRight, ArrowDown, CheckCircle2, Megaphone, PenTool, LayoutTemplate, BarChart3, Briefcase } from "lucide-react";
import { motion } from "framer-motion";
import { Layout } from "@/components/layout/Layout";
import { ScrollReveal } from "@/components/shared/ScrollReveal";
import LandingAccordionItem from "@/components/ui/interactive-image-accordion";
import StackSpread from "@/components/shared/StackSpread";
import { Button } from "@/components/ui/button";
import CreativeHero from "@/components/ui/creative-hero";
import { StaggerTestimonials } from "@/components/ui/stagger-testimonials";

const teaserServices = [
  {
    title: "Strategies & Planning",
    description: "Our team develops innovative plans backed by thorough research and competitor analysis. Our strategic approach ensures both short-term wins and long-term growth, empowering clients to stay ahead in the dynamic marketing landscape.",
    icon: <Briefcase className="w-8 h-8 mb-4 text-ink" strokeWidth={1} />,
  },
  {
    title: "Social Media Marketing",
    description: "From increasing brand awareness to driving conversions, we leverage the latest trends and analytics to deliver measurable results. Partner with us to amplify your online presence.",
    icon: <Megaphone className="w-8 h-8 mb-4 text-ink" strokeWidth={1} />,
  },
  {
    title: "Graphic Design & Animations",
    description: "Captivating graphic design and mesmerizing video production. Our team specializes in weaving magic into every pixel and frame, transforming ordinary concepts into extraordinary visual experiences.",
    icon: <PenTool className="w-8 h-8 mb-4 text-ink" strokeWidth={1} />,
  },
  {
    title: "Web Development",
    description: "We're experts in building websites that stand out — user-friendly and visually appealing, tailored to your brand. Whether a sleek portfolio site or a robust e-commerce platform, we've got you covered.",
    icon: <LayoutTemplate className="w-8 h-8 mb-4 text-ink" strokeWidth={1} />,
  },
  {
    title: "Ads & Analytics",
    description: "With in-depth analytics and a strategic approach, we craft targeted ad campaigns that deliver tangible outcomes and maximize your ROI.",
    icon: <BarChart3 className="w-8 h-8 mb-4 text-ink" strokeWidth={1} />,
  },
  {
    title: "B2B Marketing",
    description: "With a deep understanding of the B2B landscape, we craft tailored campaigns to connect you with decision-makers — from targeted email campaigns to thought leadership content.",
    icon: <CheckCircle2 className="w-8 h-8 mb-4 text-ink" strokeWidth={1} />,
  }
];

const testimonials = [
  {
    headline: "Exceeding Expectations",
    quote: "Working with Oworks Marketing Tech Pvt Ltd has been an absolute pleasure. Their team's expertise in digital marketing helped us boost our online presence significantly. From captivating graphic designs to effective SEO strategies, they've provided top-notch services that have exceeded our expectations. Highly recommended!",
  },
  {
    headline: "Supportive Team",
    quote: "Oworks Marketing Tech Pvt Ltd has been instrumental in helping us revamp our branding strategy. Their creative team's ability to translate our vision into stunning visuals for hoardings, flyers, and posters is truly commendable. Their dedication to delivering high-quality work with a quick turnaround time is impressive.",
  },
  {
    headline: "Great Work",
    quote: "We turned to Oworks Marketing Tech Pvt Ltd for our web development needs, and we couldn't be happier with the results. Their team's attention to detail and innovative approach resulted in a website that not only looks great but also performs exceptionally well.",
  },
  {
    headline: "Very Professional",
    quote: "I can't speak highly enough of Oworks Marketing Tech Pvt Ltd and their exceptional services. Their team's professionalism and commitment to understanding our unique business needs set them apart.",
  }
];

export default function Index() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
  };

  return (
    <Layout>
      {/* Creative Premium Hero Section */}
      <CreativeHero />

      {/* Featured Work Image Accordion */}
      <ScrollReveal animationType="zoom-in" duration={1}>
        <LandingAccordionItem />
      </ScrollReveal>

      {/* Positioning Statement */}
      <section className="py-24 md:py-32 bg-cream-dark">
        <div className="container-editorial px-6 md:px-12 lg:px-20 text-center max-w-5xl mx-auto">
          <ScrollReveal animationType="fade-in" duration={1.2}>
            <p className="font-serif text-3xl md:text-5xl text-ink leading-tight">
              "oworks is an independent marketing powerhouse, blending consultancy, research, and creative prowess to craft compelling brand identities and facilitate meaningful communication between brands and their audiences."
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Services Teaser Stack Spread */}
      <ScrollReveal animationType="slide-right" delay={100}>
        <StackSpread />
      </ScrollReveal>

      {/* From Pixels to Perfection */}
      <section className="section-padding bg-cream-dark">
        <div className="container-editorial px-6 md:px-12 lg:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <ScrollReveal animationType="slide-right">
                <h2 className="font-serif text-4xl md:text-5xl text-ink mb-6">From Pixels to Perfection</h2>
              </ScrollReveal>
              <ScrollReveal delay={100} animationType="slide-right">
                <p className="text-xl text-ink-light leading-relaxed mb-8">
                  At the center of every great campaign is a special meeting point – where real value mixes with genuine authenticity and the lively spirit of culture. Here at Oworks, this is where we begin our journey with your brand.
                </p>
              </ScrollReveal>
            </div>
            <div>
              <ScrollReveal delay={200} animationType="slide-left">
                <div className="aspect-square bg-cream rounded-full flex items-center justify-center p-12 overflow-hidden relative">
                  <img 
                    src="https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80&w=800" 
                    alt="Placeholder — Venn-diagram-style visual to be replaced" 
                    className="absolute inset-0 w-full h-full object-cover opacity-80 mix-blend-multiply"
                  />
                  <div className="relative z-10 text-center bg-white/90 backdrop-blur-sm p-6 rounded-lg">
                    <p className="font-serif text-lg text-ink font-bold">Image placeholder — replace</p>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding bg-cream-dark overflow-hidden">
        <div className="container-editorial px-6 md:px-12 lg:px-20">
          <ScrollReveal animationType="zoom-in">
            <h2 className="font-serif text-4xl md:text-5xl text-ink mb-8 text-center">What Our Clients Say</h2>
          </ScrollReveal>
          <ScrollReveal animationType="fade-in" delay={100}>
            <StaggerTestimonials />
          </ScrollReveal>
        </div>
      </section>

      {/* Dual CTA Section */}
      <section className="bg-cream-dark border-t border-divider py-24 md:py-32">
        <div className="container-editorial px-6 md:px-12 lg:px-20 text-center max-w-4xl mx-auto">
          <ScrollReveal animationType="fade-in">
            <h2 className="font-serif text-4xl md:text-5xl text-ink mb-6">We would love to hear your Ideas!!</h2>
            <p className="text-lg text-ink-light mb-16">
              Elevate your competitive edge with our SEO-optimized branding and marketing services, incorporating global perspectives, local insights, diasporic experience, and cultural intelligence.
            </p>
          </ScrollReveal>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            <ScrollReveal delay={100} animationType="slide-right">
              <div className="p-8 bg-white border border-divider h-full flex flex-col justify-center items-center rounded-sm">
                <p className="text-xl text-ink font-medium mb-6">Do you have a business/brand requiring marketing assistance?</p>
                <Link to="/contact" className="btn-primary">
                  Connect with Us
                </Link>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={200} animationType="slide-left">
              <div className="p-8 bg-white border border-divider h-full flex flex-col justify-center items-center rounded-sm">
                <p className="text-xl text-ink font-medium mb-6">Are you a freelancer, student or a service provider interested to work with us?</p>
                <Link to="/contact?reason=work" className="btn-outline">
                  Work with Us
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </Layout>
  );
}
