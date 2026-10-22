export interface Service {
  slug: string;
  category: string;
  name: string;
  heading: string;
  intro: string;
  sections?: { heading: string; body: string }[];
  scopeList?: string[];
  projectLine?: string;
  faq?: { question: string; answer: string }[];
  actionLabel?: string;
  relatedLink?: { label: string; url: string };
  // Keep process for backward compatibility if needed, but prefer sections
  processHeading?: string;
  process?: string | string[] | { title: string; text: string }[];
}

export const services: Service[] = [
  {
    slug: "healthcare-branding",
    category: "Core Capability",
    name: "Brand and marketing",
    heading: "A clear position for your healthcare brand.",
    intro: "Your hospital may offer excellent care and still be difficult to distinguish. We help you explain who you serve, what you stand for and why your expertise matters.",
    sections: [
      {
        heading: "Begin with the hospital, not the logo.",
        body: "We speak with leadership, understand your services and review how the brand appears today. That becomes a positioning and message brief for identity, launch communication and everyday content."
      },
      {
        heading: "A system your team can use.",
        body: "We create agreed application masters and a clear guide, so future materials can stay consistent. Production and rollout are scoped around your priorities."
      }
    ],
    scopeList: [
      "Positioning and messaging",
      "Visual identity",
      "Brand guidelines",
      "Launch communication",
      "Campaign creative",
      "Patient-information design"
    ],
    projectLine: "Brand Foundation starts at ₹1,00,000 plus applicable taxes. See the defined scope or discuss a larger programme.",
    faq: [
      {
        question: "Can you refresh an existing identity?",
        answer: "Yes. We first review what should be retained and what needs to change."
      },
      {
        question: "Can this include a launch?",
        answer: "Launch communication is available as a separate project."
      }
    ],
    actionLabel: "Discuss your brand",
    relatedLink: { label: "Explore our Video Production services", url: "/services/healthcare-video-production" }
  },
  {
    slug: "healthcare-video-production",
    category: "Core Capability",
    name: "Films and video",
    heading: "Healthcare stories, carefully made.",
    intro: "Patients, professionals and partners need to understand the people and practice behind a healthcare brand. We plan, shoot and edit films that make that expertise clear.",
    sections: [
      {
        heading: "Make filming easier for your team.",
        body: "We agree the purpose, prepare the questions and schedule the shoot around available clinicians. Our production team handles filming and editing; your authorised reviewers confirm the clinical facts."
      }
    ],
    processHeading: "Our production process",
    process: [
      { title: "Briefing", text: "Who should watch, and what should they understand?" },
      { title: "Prepare", text: "Research, outline, clinician review and a realistic shoot plan." },
      { title: "Produce", text: "Filming, edit, sound, captions and agreed versions." },
      { title: "Approve", text: "Clinical facts, permissions and final delivery checked before release." }
    ],
    scopeList: [
      "Doctor education films",
      "Hospital and process films",
      "Documentary projects",
      "Editing and motion graphics",
      "Podcast production"
    ],
    projectLine: "Hospital Story Film starts at ₹1,50,000 plus applicable taxes. Monthly video production is available within our partnership plans.",
    faq: [
      {
        question: "Can you work with our footage?",
        answer: "Yes. We review the material, rights, audio quality and delivery requirements before quoting."
      },
      {
        question: "Can we use one film on several channels?",
        answer: "Yes. We agree the formats and cutdowns in the scope."
      },
      {
        question: "Who checks medical information?",
        answer: "Your authorised clinical reviewer, with Oworks managing the editorial checks and approval record."
      }
    ],
    actionLabel: "Discuss your film",
    relatedLink: { label: "Watch our selected films", url: "/films" }
  },
  {
    slug: "healthcare-websites",
    category: "Core Capability",
    name: "Websites and digital",
    heading: "A healthcare website people can understand.",
    intro: "When services are hard to find and information is inconsistent, people lose confidence. We turn your hospital's priorities into clear content, simple navigation and a useful next step.",
    sections: [
      {
        heading: "Start with what people need to know.",
        body: "We organise services, clinician profiles, location information and contact routes before design begins. We build around mobile use and give your team a manageable content system."
      },
      {
        heading: "A clear build. A clear handover.",
        body: "Page count, integrations, approvals and support are agreed upfront. Your organisation retains ownership of its domain and accounts, with access documented for the right people."
      }
    ],
    scopeList: [
      "Website strategy and content",
      "Design and development",
      "Service-page structure",
      "Forms and contact routes",
      "Basic search setup",
      "Analytics setup and handover"
    ],
    projectLine: "Healthcare Website starts at ₹1,00,000 plus applicable taxes for the defined scope. Ongoing search, maintenance and campaign support are quoted separately.",
    actionLabel: "Plan your website",
    relatedLink: { label: "Explore our Brand Experience services", url: "/services/healthcare-brand-experience" }
  },
  {
    slug: "healthcare-brand-experience",
    category: "Core Capability",
    name: "Spaces and essentials",
    heading: "Let your healthcare brand work beyond the screen.",
    intro: "Confusing signs, mismatched materials and repeated vendor briefs create avoidable work. We help bring your physical brand touchpoints into a consistent plan.",
    sections: [
      {
        heading: "Clear information. Consistent materials.",
        body: "We review how people encounter your brand, then coordinate design, specifications and specialist production—from signage and stationery to approved staff essentials."
      },
      {
        heading: "The right specialists, under an agreed scope.",
        body: "Technical interiors, engineering and installation are delivered by appropriately qualified partners. Oworks coordinates the brand brief, agreed applications and project communication. Materials, samples, quantities, costs and responsibilities are confirmed before production."
      }
    ],
    scopeList: [
      "Wayfinding and signage",
      "Interior brand applications",
      "Patient-information and printed materials",
      "Staff uniforms, badges and merchandise",
      "Production coordination"
    ],
    projectLine: "Experience and Wayfinding Review starts at ₹50,000 plus applicable taxes. Production and technical design are quoted separately.",
    actionLabel: "Discuss your touchpoints",
    relatedLink: { label: "Discuss your priorities", url: "/contact" }
  }
];
