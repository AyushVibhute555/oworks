import { useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, PlayCircle } from "lucide-react";
import { motion } from "framer-motion";
import { ReactLenis } from "lenis/react";
import ChatBot from "react-chatbotify";

import { Layout } from "@/components/layout/Layout";
import CreativeHero from "@/components/ui/creative-hero";
import { ClientMarquee } from "@/components/shared/ClientMarquee";
import StickyContentWrapper from "@/components/ui/sticky-content-wrapper";
import HorizontalFeatureReveal from "@/components/ui/horizontal-feature-reveal";

// ─── Animation Variants ──────────────────────────────────────────────
const staggerContainer = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.1 } },
};

const maskRevealVariant = {
  hidden: { y: "120%", opacity: 0, rotate: 2 },
  show: {
    y: "0%",
    opacity: 1,
    rotate: 0,
    transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] },
  },
};

const fadeUpVariant = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 1, ease: [0.16, 1, 0.3, 1] } },
};

// ─── Data: Section 3 (Horizontal Scroll) ─────────────────────────────
const ownerProblemItems = [
  {
    number: "01",
    no: "1",
    imgClass: "img-1",
    title: "A clear voice for your hospital.",
    image:
      "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=1200",
    paragraphs: [
      "Your hospital needs a clear voice, but you need fewer things to chase.",
      "We bring your core priorities into focus, creating a unified message that resonates with patients and staff.",
    ],
    triggers: {
      img: { start: "-10% top", end: "10% top" },
      no: { start: "-1% top", end: "5% top" },
      title: { start: "-1% top", end: "5% top" },
      content: { start: "-1% top", end: "5% top" },
    },
  },
  {
    number: "02",
    no: "2",
    imgClass: "img-2",
    title: "Production around your team.",
    image:
      "https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&q=80&w=1200",
    paragraphs: [
      "Different vendors. Last-minute content. Repeated corrections.",
      "We replace the chaos by bringing people and production into one plan, scheduling around your clinical team's availability.",
    ],
    triggers: {
      img: { start: "-5% top", end: "35% top" },
      no: { start: "18% top", end: "23% top" },
      title: { start: "18% top", end: "23% top" },
      content: { start: "18% top", end: "23% top" },
    },
  },
  {
    number: "03",
    no: "3",
    imgClass: "img-3",
    title: "Clear scope and approvals.",
    image:
      "https://images.unsplash.com/photo-1538108149393-fbbd81895907?auto=format&fit=crop&q=80&w=1200",
    paragraphs: [
      "We provide a dedicated coordinator who keeps the work moving.",
      "Every deliverable comes with a clear scope and a streamlined approval process, ensuring nothing gets lost in translation.",
    ],
    triggers: {
      img: { start: "25% top", end: "65% top" },
      no: { start: "45% top", end: "50% top" },
      title: { start: "45% top", end: "50% top" },
      content: { start: "45% top", end: "50% top" },
    },
  },
];

// ─── Data: Section 5 (Sticky Services) ───────────────────────────────
const serviceItems = [
  {
    heading: "Brand and marketing",
    paragraph:
      "Make your position clear. Bring your identity, campaigns and everyday communication into one direction.",
    image:
      "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=800",
  },
  {
    heading: "Films and video",
    paragraph:
      "Explain expertise through doctor education, hospital stories and carefully planned production.",
    image:
      "https://images.unsplash.com/photo-1601506521937-0121a7ef2ed7?auto=format&fit=crop&q=80&w=800",
  },
  {
    heading: "Websites and digital",
    paragraph:
      "Help people understand your services and take the next step through a clear website and coordinated digital presence.",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800",
  },
  {
    heading: "Spaces and essentials",
    paragraph:
      "Carry your brand into signage, print and staff essentials, with specialist partners for production and technical delivery.",
    image:
      "https://images.unsplash.com/photo-1587370560942-ad2a04eabb6d?auto=format&fit=crop&q=80&w=800",
  },
];

// ─── Chatbot Settings ────────────────────────────────────────────────
const chatbotSettings = {
  general: {
    primaryColor: "#1A1A1A",
    secondaryColor: "#FFFFFF",
    fontFamily: "inherit",
    showFooter: false,
  },
  header: {
    title: "Agency Concierge",
    showAvatar: false,
  },
  tooltip: {
    mode: "START" as const,
    text: "How can we help?",
  },
  chatButton: {
    icon: "✦",
  },
};

const chatbotFlow = {
  start: {
    message:
      "Hello! Welcome to our healthcare branding agency. How can we help your hospital or practice today?",
    options: ["Explore Services", "Pricing & Plans", "Contact Us"],
    path: "process_options",
  },
  process_options: {
    transition: { duration: 0 },
    path: (params: any) => {
      if (params.userInput === "Explore Services") return "services";
      if (params.userInput === "Pricing & Plans") return "pricing";
      if (params.userInput === "Contact Us") return "contact";
      return "unknown";
    },
  },
  services: {
    message:
      "We specialize in Brand & Marketing, Films & Video, and Websites & Digital presence tailored entirely for healthcare. What is your current priority?",
    path: "contact",
  },
  pricing: {
    message:
      "Our dedicated partnerships start at ₹60,000/month for focused support, up to ₹1,20,000/month for full campaigns. Would you like to schedule a discovery call to compare scopes?",
    options: ["Yes, Contact Us", "Back to Start"],
    path: (params: any) =>
      params.userInput === "Back to Start" ? "start" : "contact",
  },
  contact: {
    message:
      "Great! You can reach our team directly at hello@agency.com or visit our Contact page to set up a quick meeting. We look forward to hearing from you!",
    options: ["Back to Start"],
    path: "start",
  },
  unknown: {
    message:
      "Sorry, I didn't quite catch that. Could you please select one of the options below?",
    options: ["Explore Services", "Pricing & Plans", "Contact Us"],
    path: "process_options",
  },
};

// ─── Chatbot Styles (brand palette) ──────────────────────────────────
const chatbotStyles = {
  chatButtonStyle: {
    background: "#1A1A1A",
    backgroundColor: "#1A1A1A",
    color: "#F5F2EB",
    fill: "#F5F2EB",
    fontSize: "1.5rem",
    boxShadow:
      "0 10px 30px -5px rgba(26, 26, 26, 0.5), 0 4px 10px -2px rgba(26, 26, 26, 0.25)",
    transition:
      "transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
  },
  chatWindowStyle: {
    backgroundColor: "#F5F2EB",
    borderRadius: "16px",
    border: "1px solid rgba(26, 26, 26, 0.08)",
    boxShadow:
      "0 25px 60px -12px rgba(0, 0, 0, 0.3), 0 10px 25px -5px rgba(0, 0, 0, 0.1)",
    overflow: "hidden",
  },
  headerStyle: {
    backgroundColor: "#1A1A1A",
    color: "#F5F2EB",
    borderRadius: "16px 16px 0 0",
  },
  botBubbleStyle: {
    backgroundColor: "#FFFFFF",
    color: "#1A1A1A",
    border: "1px solid rgba(26, 26, 26, 0.06)",
    borderRadius: "12px",
  },
  userBubbleStyle: {
    backgroundColor: "#1A1A1A",
    color: "#FFFFFF",
    borderRadius: "12px",
  },
  optionStyle: {
    border: "1px solid #1A1A1A",
    color: "#1A1A1A",
    backgroundColor: "#FFFFFF",
    borderRadius: "8px",
    fontWeight: "500",
  },
  optionHoveredStyle: {
    backgroundColor: "#1A1A1A",
    color: "#F5F2EB",
  },
  chatInputAreaStyle: {
    backgroundColor: "#FFFFFF",
    color: "#1A1A1A",
    borderColor: "rgba(26, 26, 26, 0.15)",
  },
  sendButtonStyle: {
    backgroundColor: "#1A1A1A",
    color: "#F5F2EB",
  },
};

// ─── Page ────────────────────────────────────────────────────────────
export default function Index() {
  const containerRef = useRef(null);

  return (
    <>
      <style>{`
        html, body {
          overflow-x: clip;
          max-width: 100%;
        }
        * {
          scrollbar-width: thin;
        }

        /* Force the chatbot button to be solid ink */
        .rcb-chat-toggle,
        .rcb-chat-button,
        #chatbot-toggle-btn {
          background: #1A1A1A !important;
          background-image: none !important;
          background-color: #1A1A1A !important;
          color: #F5F2EB !important;
          border: none !important;
          box-shadow: 0 10px 30px -5px rgba(26,26,26,0.5) !important;
        }
        .rcb-chat-toggle:hover,
        .rcb-chat-button:hover,
        #chatbot-toggle-btn:hover {
          background: #000000 !important;
          background-image: none !important;
          transform: scale(1.06) translateY(-3px) !important;
        }
        .rcb-chat-toggle svg,
        .rcb-chat-button svg,
        .rcb-chat-toggle span,
        .rcb-chat-button span {
          color: #F5F2EB !important;
          fill: #F5F2EB !important;
        }

        /* Fix the tooltip */
        .rcb-tooltip {
          background-color: #FFFFFF !important;
          color: #1A1A1A !important;
          border: 1px solid rgba(26, 26, 26, 0.1) !important;
          box-shadow: 0 4px 12px rgba(0,0,0,0.1) !important;
          font-weight: 500 !important;
        }
      `}</style>

      <div className="w-full overflow-x-clip">
        <ReactLenis
          root
          options={{
            lerp: 0.05,
            wheelMultiplier: 0.8,
            smoothWheel: true,
            prevent: (node) => !!node.closest(".rcb-chat-window"),
          }}
        >
          <Layout>
            <div ref={containerRef} className="w-full overflow-x-clip">
              <CreativeHero />

              {/* ─── Section 1: Hero Copy ─────────────────────────────── */}
              <section className="w-full py-24 md:py-40 bg-cream border-b border-divider relative overflow-hidden">
                <div className="container-editorial mx-auto">
                  <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, margin: "-100px" }}
                    className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-end relative z-10"
                  >
                    <div className="lg:col-span-8">
                      <div className="overflow-hidden mb-10">
                        <motion.span
                          variants={maskRevealVariant}
                          className="eyebrow block text-ink-light/80 tracking-widest uppercase origin-left"
                        >
                          Healthcare branding, marketing and experience
                        </motion.span>
                      </div>

                      <h1 className="font-serif text-5xl md:text-7xl lg:text-[6.5rem] text-ink leading-[1] tracking-tight">
                        <div className="overflow-hidden pb-2">
                          <motion.div variants={maskRevealVariant} className="origin-left">
                            Your healthcare
                          </motion.div>
                        </div>
                        <div className="overflow-hidden pb-2">
                          <motion.div variants={maskRevealVariant} className="origin-left">
                            brand, in{" "}
                            <span className="italic text-ink-light/70 font-light">
                              capable
                            </span>
                          </motion.div>
                        </div>
                        <div className="overflow-hidden pb-2">
                          <motion.div variants={maskRevealVariant} className="origin-left">
                            hands.
                          </motion.div>
                        </div>
                      </h1>
                    </div>

                    <div className="lg:col-span-4 flex flex-col justify-end lg:pb-4">
                      <motion.p
                        variants={fadeUpVariant}
                        className="text-xl md:text-2xl text-ink-light leading-relaxed mb-10"
                      >
                        We bring brand strategy, video storytelling and marketing
                        into one accountable partnership—so you can focus on
                        patients, staff and your hospital.
                      </motion.p>

                      <motion.div
                        variants={fadeUpVariant}
                        className="w-full h-[1px] bg-divider mb-8"
                      />

                      <motion.div
                        variants={fadeUpVariant}
                        className="flex flex-col sm:flex-row lg:flex-col xl:flex-row gap-6 items-start xl:items-center"
                      >
                        <Link
                          to="/contact"
                          className="btn-primary group relative overflow-hidden shrink-0"
                        >
                          <span className="relative z-10">Discuss priorities</span>
                        </Link>
                        <Link
                          to="/work"
                          className="text-ink hover:text-ink-light transition-all duration-300 font-medium flex items-center gap-2 group"
                        >
                          See our work
                          <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                        </Link>
                      </motion.div>

                      <motion.p
                        variants={fadeUpVariant}
                        className="text-xs text-ink-muted mt-12 uppercase tracking-widest font-medium"
                      >
                        Based in Bengaluru. <br />
                        Working across Kalyan Karnataka.
                      </motion.p>
                    </div>
                  </motion.div>
                </div>
              </section>

              {/* ─── Section 2: Confidence & Client Logos ─────────────── */}
              <section className="w-full py-24 md:py-32 bg-white border-b border-divider overflow-hidden">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                  className="container-editorial mx-auto text-center max-w-4xl"
                >
                  <h2 className="text-3xl md:text-4xl font-serif text-ink mb-6">
                    Over five years of focused healthcare work.
                  </h2>
                  <p className="text-xl text-ink-light mb-4">
                    Brand identities, hospital launches, doctor education and
                    everyday communication.
                  </p>
                  <p className="text-ink-muted font-medium tracking-wide text-sm uppercase">
                    For hospitals, specialist practices and healthcare businesses.
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3, duration: 1 }}
                  className="mt-16 w-full overflow-hidden"
                >
                  <ClientMarquee speed={32} />
                </motion.div>
              </section>

              {/* ─── Section 3: The Owner Problem (Horizontal Scroll) ─── */}
              <section className="w-full bg-cream-dark border-b border-divider relative overflow-x-clip">
                <div className="container-editorial mx-auto pt-24 md:pt-32 relative z-20 pb-12">
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="max-w-4xl"
                  >
                    <h2 className="text-4xl md:text-5xl lg:text-7xl font-serif text-ink mb-6 leading-[1.1]">
                      Your hospital needs a clear voice. You need fewer things to
                      chase.
                    </h2>
                  </motion.div>
                </div>

                <HorizontalFeatureReveal
                  properties={ownerProblemItems}
                  bgColor="transparent"
                  cardGap={10}
                />
              </section>

              {/* ─── Section 4: Selected Work ─────────────────────────── */}
              <section className="w-full py-24 md:py-32 bg-white overflow-hidden">
                <div className="container-editorial mx-auto">
                  <motion.div
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    variants={staggerContainer}
                    className="flex flex-col md:flex-row justify-between items-start md:items-end mb-20 gap-8"
                  >
                    <div className="max-w-2xl">
                      <div className="overflow-hidden mb-6">
                        <motion.h2
                          variants={maskRevealVariant}
                          className="text-4xl md:text-5xl lg:text-7xl font-serif text-ink origin-left"
                        >
                          Healthcare work with a purpose.
                        </motion.h2>
                      </div>
                      <motion.p
                        variants={fadeUpVariant}
                        className="text-xl md:text-2xl text-ink-light leading-relaxed"
                      >
                        See how we turn a hospital's priorities into identities,
                        films and communication people can understand.
                      </motion.p>
                    </div>
                    <motion.div variants={fadeUpVariant}>
                      <Link
                        to="/work"
                        className="btn-outline shrink-0 hover:bg-ink hover:text-white transition-colors duration-300"
                      >
                        Explore our work
                      </Link>
                    </motion.div>
                  </motion.div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
                    {[
                      {
                        client: "Shree Aaraike",
                        title: "Building a consistent launch identity.",
                        img: "1551076805-e1869033e561",
                      },
                      {
                        client: "Sadbhava",
                        title: "Connecting the brand across hospital touchpoints.",
                        img: "1516549655169-df83a0774514",
                      },
                      {
                        client: "Adarsh",
                        title: "Making specialty communication clear.",
                        img: "1576091160550-2173ff3a5237",
                      },
                    ].map((work, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.8, delay: i * 0.2 }}
                        className={i === 1 ? "md:mt-24" : ""}
                      >
                        <Link
                          to={`/work/${work.client.toLowerCase().replace(" ", "-")}`}
                          className="group block"
                        >
                          <div className="aspect-[4/5] bg-cream mb-6 overflow-hidden relative border border-divider">
                            <motion.img
                              whileHover={{ scale: 1.05 }}
                              transition={{ duration: 0.6, ease: "easeOut" }}
                              src={`https://images.unsplash.com/photo-${work.img}?auto=format&fit=crop&q=80&w=800`}
                              alt={work.client}
                              className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-ink/0 group-hover:bg-ink/10 transition-colors duration-500" />
                          </div>
                          <div className="overflow-hidden">
                            <h3 className="font-serif text-3xl text-ink mb-3 group-hover:text-ink-light transition-colors">
                              {work.client}
                            </h3>
                          </div>
                          <p className="text-ink-light text-lg">{work.title}</p>
                        </Link>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </section>

              {/* ─── Section 5: Services (Sticky Scroll) ──────────────── */}
              <section className="w-full bg-cream-dark border-t border-divider relative overflow-x-clip">
                <div className="container-editorial mx-auto pt-24 md:pt-32 relative z-10">
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="max-w-3xl"
                  >
                    <h2 className="text-4xl md:text-5xl lg:text-7xl font-serif text-ink mb-6">
                      The right support, around one clear strategy.
                    </h2>
                  </motion.div>
                </div>

                <StickyContentWrapper
                  items={serviceItems}
                  bgColor="transparent"
                  className="container-editorial mx-auto"
                  contentEnterYPercent={8}
                  contentExitYPercent={-8}
                  contentClassName="[&_h3]:text-3xl [&_h3]:md:text-5xl [&_h3]:mb-6 [&_p]:text-xl [&_p]:text-ink-light [&_p]:leading-relaxed [&_p]:max-w-md"
                />

                <div className="container-editorial mx-auto pb-24 md:pb-32 pt-16 relative z-10">
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="text-center md:text-left"
                  >
                    <Link
                      to="/services"
                      className="btn-outline px-10 py-4 text-lg"
                    >
                      Explore all services
                    </Link>
                  </motion.div>
                </div>
              </section>

              {/* ─── Section 6: Video Strength ────────────────────────── */}
              <section className="w-full py-24 md:py-32 bg-ink text-cream relative overflow-hidden">
                <div className="container-editorial mx-auto relative z-10">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <motion.div
                      variants={staggerContainer}
                      initial="hidden"
                      whileInView="show"
                      viewport={{ once: true }}
                    >
                      <motion.h2
                        variants={fadeUpVariant}
                        className="text-4xl md:text-5xl lg:text-7xl font-serif mb-8 leading-tight"
                      >
                        Real expertise deserves a well-told story.
                      </motion.h2>
                      <motion.p
                        variants={fadeUpVariant}
                        className="text-xl md:text-2xl text-cream-dark opacity-80 leading-relaxed mb-12"
                      >
                        We plan the questions, prepare the shoot and shape the
                        edit. Your authorised clinical team reviews the facts. The
                        result is clear, thoughtful video made for the audience you
                        need to reach.
                      </motion.p>
                      <motion.div
                        variants={fadeUpVariant}
                        className="flex flex-wrap gap-6"
                      >
                        <Link
                          to="/films"
                          className="btn-primary bg-white text-ink hover:bg-cream"
                        >
                          Watch selected films
                        </Link>
                        <Link
                          to="/contact"
                          className="btn-outline border-cream text-cream hover:bg-cream/10"
                        >
                          Discuss a film
                        </Link>
                      </motion.div>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, scale: 0.95 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 1 }}
                    >
                      <div className="aspect-[4/5] md:aspect-video bg-neutral-900 relative group cursor-pointer overflow-hidden border border-white/10 shadow-2xl">
                        <motion.img
                          whileHover={{ scale: 1.05 }}
                          transition={{ duration: 0.8 }}
                          src="https://images.unsplash.com/photo-1581594693702-fbdc51b2763b?auto=format&fit=crop&q=80&w=1200"
                          alt="Hospital process film poster"
                          className="w-full h-full object-cover opacity-80"
                        />
                        <div className="absolute inset-0 flex items-center justify-center bg-ink/20 group-hover:bg-ink/40 transition-colors duration-500">
                          <PlayCircle
                            className="w-24 h-24 text-white opacity-90 group-hover:opacity-100 transition-all group-hover:scale-110 duration-500"
                            strokeWidth={1}
                          />
                        </div>
                        <div className="absolute bottom-6 left-6 right-6 flex justify-between text-sm uppercase tracking-widest text-white/90">
                          <span>Hospital Process</span>
                          <span>02:15</span>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </div>
              </section>

              {/* ─── Section 7: Partnerships ──────────────────────────── */}
              <section className="w-full py-24 md:py-32 bg-cream overflow-hidden">
                <div className="container-editorial mx-auto">
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center max-w-3xl mx-auto mb-20"
                  >
                    <div className="overflow-hidden mb-8">
                      <motion.h2
                        variants={maskRevealVariant}
                        className="text-4xl md:text-5xl lg:text-6xl font-serif text-ink origin-left"
                      >
                        Know how the partnership starts.
                      </motion.h2>
                    </div>
                    <p className="text-xl md:text-2xl text-ink-light leading-relaxed">
                      Choose a focused monthly plan or a defined project. We agree
                      the priorities, production allowance and review process
                      before work begins.
                    </p>
                  </motion.div>

                  <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
                  >
                    {[
                      { name: "Focus", price: "₹60,000", period: "/month" },
                      {
                        name: "Healthcare Partner",
                        price: "₹85,000",
                        period: "/month",
                        recommended: true,
                      },
                      {
                        name: "Campaign Partner",
                        price: "₹1,20,000",
                        period: "/month",
                      },
                    ].map((plan, i) => (
                      <motion.div variants={fadeUpVariant} key={i}>
                        <div
                          className={`h-full flex flex-col p-10 border transition-all duration-500 ${plan.recommended
                            ? "border-ink bg-white shadow-2xl relative scale-100 lg:scale-105 z-10"
                            : "border-divider bg-transparent hover:bg-white/50"
                            }`}
                        >
                          {plan.recommended && (
                            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-ink text-white text-xs px-4 py-1.5 uppercase tracking-widest font-bold">
                              Recommended
                            </div>
                          )}
                          <h3 className="font-serif text-2xl md:text-3xl text-ink mb-4">
                            {plan.name}
                          </h3>
                          <div className="mb-10 flex-grow">
                            <span className="text-4xl font-serif text-ink">
                              {plan.price}
                            </span>
                            <span className="text-ink-light">{plan.period}</span>
                          </div>
                          <Link
                            to="/partnerships"
                            className={
                              plan.recommended
                                ? "btn-primary w-full text-center block py-4 mt-auto"
                                : "btn-outline w-full text-center block py-4 mt-auto"
                            }
                          >
                            Compare scope
                          </Link>
                        </div>
                      </motion.div>
                    ))}
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="text-center max-w-4xl mx-auto"
                  >
                    <p className="text-sm text-ink-muted leading-relaxed mb-8">
                      Prices exclude applicable taxes. The listed filming
                      allowance applies to Bengaluru or a scheduled Kalaburagi
                      production circuit, at one location. Other travel is quoted
                      before booking. Advertising spend, website builds, printing,
                      interiors, events, PR, long-form films and extra versions
                      are quoted separately.
                    </p>
                    <Link
                      to="/partnerships"
                      className="text-ink font-medium hover:text-ink-light transition-colors inline-flex items-center gap-2 text-lg group"
                    >
                      Compare partnerships{" "}
                      <ArrowRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </motion.div>
                </div>
              </section>

              {/* ─── Section 8: Process and Closing ───────────────────── */}
              <section className="w-full py-24 md:py-32 bg-white border-t border-divider overflow-hidden">
                <div className="container-editorial mx-auto">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
                    <motion.div
                      variants={staggerContainer}
                      initial="hidden"
                      whileInView="show"
                      viewport={{ once: true }}
                    >
                      <motion.h2
                        variants={fadeUpVariant}
                        className="text-4xl md:text-5xl lg:text-7xl font-serif text-ink mb-16 leading-tight"
                      >
                        A plan you can follow.
                        <br />
                        A team you can reach.
                      </motion.h2>
                      <div className="space-y-12">
                        {[
                          {
                            step: "Understand",
                            desc: "We begin with your hospital, audience and most important priority.",
                          },
                          {
                            step: "Plan",
                            desc: "We agree the scope, calendar and people responsible for approvals.",
                          },
                          {
                            step: "Produce",
                            desc: "We create the work and coordinate the approved rollout.",
                          },
                          {
                            step: "Review",
                            desc: "We report what was delivered, what the available data shows and what to do next.",
                          },
                        ].map((item, i) => (
                          <motion.div
                            variants={fadeUpVariant}
                            key={i}
                            className="flex gap-8 group"
                          >
                            <div className="text-ink/20 font-serif text-4xl md:text-5xl italic transition-colors duration-500 group-hover:text-ink">
                              0{i + 1}
                            </div>
                            <div>
                              <h4 className="font-serif text-2xl md:text-3xl text-ink mb-3">
                                {item.step}
                              </h4>
                              <p className="text-lg md:text-xl text-ink-light leading-relaxed">
                                {item.desc}
                              </p>
                            </div>
                          </motion.div>
                        ))}
                      </div>
                      <motion.p
                        variants={fadeUpVariant}
                        className="text-sm text-ink-muted mt-16 pt-8 border-t border-divider leading-relaxed"
                      >
                        AI supports research, transcription and production
                        workflows. Our team checks the work, and your authorised
                        reviewers approve clinical content.
                      </motion.p>
                    </motion.div>

                    <div className="flex items-center justify-center lg:justify-end relative h-full">
                      <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.2 }}
                        className="absolute inset-0 w-full h-[120%] -z-10 hidden lg:block"
                      >
                        <img
                          src="https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&q=80&w=800"
                          alt="Process abstract"
                          className="w-full h-full object-cover opacity-[0.03] grayscale"
                        />
                      </motion.div>

                      <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="w-full max-w-lg sticky top-24"
                      >
                        <div className="bg-cream-dark p-12 md:p-16 border border-divider shadow-2xl relative overflow-hidden group">
                          <div className="absolute inset-0 bg-ink w-0 group-hover:w-full transition-all duration-700 ease-out z-0" />
                          <div className="relative z-10">
                            <h3 className="text-3xl md:text-4xl font-serif text-ink group-hover:text-cream transition-colors duration-500 mb-6 leading-tight">
                              What does your healthcare brand need next?
                            </h3>
                            <p className="text-lg md:text-xl text-ink-light group-hover:text-cream/80 transition-colors duration-500 leading-relaxed mb-10">
                              Tell us the priority. We will help you define a
                              clear next step.
                            </p>
                            <Link
                              to="/contact"
                              className="btn-primary w-full py-5 text-center text-lg shadow-xl hover:shadow-2xl hover:-translate-y-1 bg-ink text-white group-hover:bg-white group-hover:text-ink transition-all duration-300 block border border-transparent"
                            >
                              Discuss your priorities
                            </Link>
                          </div>
                        </div>
                      </motion.div>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </Layout>
        </ReactLenis>

        {/* ─── Chatbot (outside Lenis to avoid scroll-hijack) ──────── */}
        <ChatBot
          settings={chatbotSettings}
          flow={chatbotFlow}
          styles={chatbotStyles}
        />
      </div>
    </>
  );
}