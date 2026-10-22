export interface CaseStudy {
  slug: string;
  client: string;
  title: string;
  category: string;
  specialty: string;
  location: string;
  year: string;
  logo: string;
  cardImage: string;
  heroImage: string;
  galleryImages: {
    url: string;
    caption: string;
    type: "installed" | "published" | "identity" | "film";
  }[];
  summary: string;
  challenge: string;
  audience: string;
  approach: string;
  scope: string[];
  deliverables: string[];
  impact: string;
  quote?: {
    text: string;
    author: string;
    role: string;
  };
}

export const CASE_STUDIES: CaseStudy[] = [
  {
    slug: "shree-aaraike",
    client: "Shree Aaraike Hospital",
    title: "Building a coherent launch identity for a specialty gastro centre.",
    category: "Brand Launch & Film",
    specialty: "Gastroenterology, Hepatology & Advanced Endoscopy",
    location: "Kalaburagi, Karnataka",
    year: "2024",
    logo: "/logos/Shree Aaraike Hospital logo.png",
    cardImage: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=1200",
    heroImage: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=2000",
    galleryImages: [
      {
        url: "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?auto=format&fit=crop&q=80&w=1000",
        caption: "Zonal department signage and endoscopy suite wayfinding",
        type: "installed",
      },
      {
        url: "https://images.unsplash.com/photo-1581594693702-fbdc51b2763b?auto=format&fit=crop&q=80&w=1000",
        caption: "Launch film production documenting clinical equipment and facilities",
        type: "film",
      },
      {
        url: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=1000",
        caption: "Bilingual physician referral guides and patient preparation brochures",
        type: "published",
      },
    ],
    summary: "A complete launch communication system for a premier gastro and liver centre, unifying brand identity, environmental signage, and an emotional launch film.",
    challenge: "The hospital was opening an advanced gastroenterology and endoscopy centre in Kalyan Karnataka. Referring clinicians and patients needed clarity on what subspecialties were available locally, overcoming the reflex to travel to metropolitan centres for complex procedures.",
    audience: "Local patients seeking digestive care, families managing chronic liver conditions, and referring physicians across the surrounding district.",
    approach: "We developed a warm, authoritative bilingual identity grounded in healing earth tones. The launch campaign coupled a documentary-style facility film with tactile clinical referral folders, ensuring doctors understood the technical endoscopy specs while patients felt reassured by the compassionate environment.",
    scope: [
      "Brand identity & bilingual typography guidelines",
      "Interior wayfinding & room numbering across 3 floors",
      "Launch documentary film (03:45) and short clinician teasers",
      "Physician referral handbook & clinical protocol folders",
      "Bilingual patient dietary guides and endoscopy preparation leaflets",
    ],
    deliverables: [
      "Full brand identity manual & logo masters",
      "4K launch documentary film & social edits",
      "Installed exterior signage & 3-floor interior wayfinding",
      "12 patient education and preparation assets",
    ],
    impact: "Established the hospital as the primary referral destination for gastrointestinal care in the region within six months of launch.",
    quote: {
      text: "Oworks helped us translate our medical standards into language and signage that our patients understood from day one.",
      author: "Clinical Director",
      role: "Shree Aaraike Hospital",
    },
  },
  {
    slug: "sadbhava",
    client: "Sadbhava Hospital",
    title: "Connecting the brand across multi-specialty patient touchpoints.",
    category: "Communication Strategy & Wayfinding",
    specialty: "Multi-Specialty Care & Emergency Medicine",
    location: "Kalaburagi, Karnataka",
    year: "2023",
    logo: "/logos/Sadbhava Hospital logo.png",
    cardImage: "https://images.unsplash.com/photo-1581594693702-fbdc51b2763b?auto=format&fit=crop&q=80&w=1200",
    heroImage: "https://images.unsplash.com/photo-1581594693702-fbdc51b2763b?auto=format&fit=crop&q=80&w=2000",
    galleryImages: [
      {
        url: "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=1000",
        caption: "Bilingual triage navigation and outpatient registration signage",
        type: "installed",
      },
      {
        url: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=1000",
        caption: "Hospital process documentary still illustrating patient admission flow",
        type: "film",
      },
      {
        url: "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&q=80&w=1000",
        caption: "Standardized discharge summaries and consultation stationery kit",
        type: "published",
      },
    ],
    summary: "Re-architecting patient communication, OPD signage, and clinical documentation to reduce anxiety and create seamless navigation across hospital floors.",
    challenge: "As patient footfall expanded rapidly, patients and accompanying family members experienced confusion between registration, diagnostics, pharmacy, and inpatient admissions, resulting in frequent bottlenecking at nursing stations.",
    audience: "Daily outpatients, emergency trauma admissions, and families navigating stressful hospital processes.",
    approach: "We conducted an end-to-end audit of the patient journey from the hospital gate to discharge. We established a unified tone of voice, clear color-coded zonal wayfinding, and created a 2-minute hospital process story that explains admission steps in simple terms.",
    scope: [
      "Patient journey & communication audit",
      "Tone of voice guidelines for administrative and nursing staff",
      "Color-coded campus wayfinding and emergency pathway signage",
      "02:15 Hospital process film for waiting lounges and digital screens",
      "Patient admission kits, discharge folders, and prescription layouts",
    ],
    deliverables: [
      "Comprehensive patient journey guideline",
      "Installed campus signage across 4 wings",
      "02:15 Hospital Process film",
      "Standardized clinical forms and printed patient touchpoints",
    ],
    impact: "Significantly decreased navigation queries at central nursing stations and improved patient satisfaction during admission and discharge.",
  },
  {
    slug: "adarsh-hospital",
    client: "Adarsh Hospital",
    title: "Making advanced robotic surgery and specialty care understandable.",
    category: "Specialty Communication & Doctor Education",
    specialty: "Institute for Robotic Surgery — Orthopaedics & Neurology",
    location: "Karnataka",
    year: "2024",
    logo: "/logos/Adarsh Hospital.png",
    cardImage: "https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&q=80&w=1200",
    heroImage: "https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&q=80&w=2000",
    galleryImages: [
      {
        url: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=1000",
        caption: "Robotic joint replacement explainer diagrams and patient booklets",
        type: "published",
      },
      {
        url: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&q=80&w=1000",
        caption: "Doctor education film setup focusing on robotic precision benefits",
        type: "film",
      },
      {
        url: "https://images.unsplash.com/photo-1538108149393-fbbd81895907?auto=format&fit=crop&q=80&w=1000",
        caption: "Specialty consultation suite graphics and post-operative recovery timelines",
        type: "installed",
      },
    ],
    summary: "Transforming complex robotic surgical science into transparent, reassuring doctor education films and clear patient decision guides.",
    challenge: "Adarsh Hospital invested in cutting-edge robotic joint replacement and neurosurgery technologies. However, prospective patients harboured fear of 'robots operating on them' and struggled to understand the genuine clinical benefits of sub-millimeter precision and faster recovery.",
    audience: "Patients suffering from advanced osteoarthritis, spinal disorders, and their adult children who assist in healthcare decision-making.",
    approach: "We created a series of physician-guided educational videos demonstrating that the surgeon remains in complete control, with robotic arms functioning as precision instruments. We mirrored this clarity in printed patient guides detailing recovery milestones from Day 1 to Week 6.",
    scope: [
      "Specialty positioning for the Robotic Surgery Institute",
      "Doctor education film series (4 videos) addressing common patient anxieties",
      "Visual surgical workflow diagrams and patient FAQ booklets",
      "Digital specialty landing experience with direct consultation booking",
      "OPD educational displays for waiting lounges",
    ],
    deliverables: [
      "4 doctor education films with motion graphics",
      "Specialty communication toolkit for orthopaedic OPD",
      "Bilingual patient recovery timeline booklets",
      "Digital campaign assets for joint replacement clinics",
    ],
    impact: "Demystified robotic surgery for hundreds of families, resulting in higher consultation preparedness and shorter pre-operative counselling sessions.",
  },
  {
    slug: "atharva-chest-hospital",
    client: "Atharva Chest Hospital",
    title: "Articulating pulmonary expertise with clarity and compassion.",
    category: "Brand Identity & Patient Education",
    specialty: "Pulmonology, Allergy & Advanced Respiratory Medicine",
    location: "Karnataka",
    year: "2023",
    logo: "/logos/Atharva Chest Hospital logo.webp",
    cardImage: "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&q=80&w=1200",
    heroImage: "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&q=80&w=2000",
    galleryImages: [
      {
        url: "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=1000",
        caption: "Pulmonary function testing suite signage and breath-navigation graphics",
        type: "installed",
      },
      {
        url: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=1000",
        caption: "Inhaler technique and asthma management illustrated patient pamphlets",
        type: "published",
      },
      {
        url: "https://images.unsplash.com/photo-1581594693702-fbdc51b2763b?auto=format&fit=crop&q=80&w=1000",
        caption: "Clinical documentary on respiratory health and sleep study monitoring",
        type: "film",
      },
    ],
    summary: "A focused identity and educational framework for an advanced chest hospital, turning chronic respiratory management into clear, empowering guidance.",
    challenge: "Chronic respiratory conditions such as asthma, COPD, and sleep apnea require continuous home compliance. Patients frequently stopped medications due to confusion about inhaler usage and fear of steroid dependency.",
    audience: "Adults with chronic pulmonary ailments, pediatric asthma patients and their parents, and smoking-cessation candidates.",
    approach: "We developed a calm, breathing-inspired brand identity with organic teal and slate hues. We engineered an illustrated inhaler technique guide and video series that demystified preventive respiratory care and sleep studies.",
    scope: [
      "Brand identity & clinical design system",
      "Illustrated inhaler and spirometry education collateral",
      "Environmental wayfinding for Pulmonary Function Labs & Sleep Study suites",
      "Doctor-led respiratory wellness video series",
      "Patient compliance diary and follow-up communication system",
    ],
    deliverables: [
      "Visual identity guidelines & stationery",
      "6 illustrated patient education brochures",
      "Sleep lab patient orientation guide",
      "Video shorts for clinical waiting screens",
    ],
    impact: "Improved long-term medication adherence among respiratory patients and solidified Atharva as a dedicated pulmonology destination.",
  },
  {
    slug: "basaveshwar-hospital",
    client: "Basaveshwar Hospital",
    title: "Modernising communication for a landmark healthcare institution.",
    category: "Institutional Identity & Campus Wayfinding",
    specialty: "Tertiary Multi-Specialty & Academic Medical Center",
    location: "Kalaburagi, Karnataka",
    year: "2023",
    logo: "/logos/Basaveshwar hospital logo.png",
    cardImage: "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?auto=format&fit=crop&q=80&w=1200",
    heroImage: "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?auto=format&fit=crop&q=80&w=2000",
    galleryImages: [
      {
        url: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=1000",
        caption: "Campus-wide multi-block directory and bilingual departmental pylons",
        type: "installed",
      },
      {
        url: "https://images.unsplash.com/photo-1538108149393-fbbd81895907?auto=format&fit=crop&q=80&w=1000",
        caption: "Institutional visual identity manual and department stationery standards",
        type: "identity",
      },
      {
        url: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&q=80&w=1000",
        caption: "Institutional legacy film documenting clinical milestones and community service",
        type: "film",
      },
    ],
    summary: "Systematising identity, campus wayfinding, and clinical publications across a massive regional teaching and multi-specialty hospital.",
    challenge: "With hundreds of daily admissions, multiple clinical blocks, and a storied regional legacy, Basaveshwar Hospital faced visual fragmentation and navigational fatigue across its sprawling campus.",
    audience: "Patients and rural families from across Kalyana Karnataka, medical students, clinical staff, and visiting consultants.",
    approach: "We honoured the institution's heritage while establishing rigorous typography and color-coded zoning (Emergency, Outpatient, Critical Care, Diagnostic Wings). The outcome was an easy-to-read, bilingual physical and digital ecosystem.",
    scope: [
      "Heritage brand refresh and comprehensive logo suite",
      "Campus-wide wayfinding blueprint for 5 interconnected buildings",
      "Emergency triage priority signage and rapid-response route markers",
      "Standardised medical report sheets, discharge forms, and prescriptions",
      "Institutional capability profile for regional healthcare partners",
    ],
    deliverables: [
      "Master institutional brand book",
      "Signage architectural specifications for 120+ touchpoints",
      "Standardised administrative & clinical stationery templates",
      "Institutional capability documentation",
    ],
    impact: "Streamlined patient transit times between emergency, OPD, and diagnostics across the multi-block medical complex.",
  },
  {
    slug: "bilva-hospital",
    client: "Bilva Hospital",
    title: "A cohesive brand launch for a community-centric healthcare provider.",
    category: "Brand Launch & Digital Presence",
    specialty: "Integrated Multi-Specialty, Women & Child Care",
    location: "Bengaluru, Karnataka",
    year: "2024",
    logo: "/logos/bilva hospital logo.png",
    cardImage: "https://images.unsplash.com/photo-1530497610245-94d3c16cda28?auto=format&fit=crop&q=80&w=1200",
    heroImage: "https://images.unsplash.com/photo-1530497610245-94d3c16cda28?auto=format&fit=crop&q=80&w=2000",
    galleryImages: [
      {
        url: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=1000",
        caption: "Physician introduction cards and outpatient clinic scheduling booklets",
        type: "published",
      },
      {
        url: "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=1000",
        caption: "Lobby welcome identity application and consultation chamber signs",
        type: "installed",
      },
      {
        url: "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&q=80&w=1000",
        caption: "Digital portal interface organizing services and online appointments",
        type: "published",
      },
    ],
    summary: "Creating a warm, approachable brand presence and streamlined digital touchpoints for an integrated community hospital in urban Bengaluru.",
    challenge: "Entering a competitive urban healthcare landscape required establishing instant credibility, warmth, and approachable transparency without resembling sterile corporate chains.",
    audience: "Local neighborhood families, young parents, and working professionals seeking reliable primary and specialty care.",
    approach: "We crafted an identity inspired by natural healing, backed by a human-centered digital platform that made finding doctors and booking appointments transparent and stress-free.",
    scope: [
      "Brand identity system, color palette & typography",
      "Environmental branding for outpatient lounges and reception",
      "Responsive digital website with doctor directory and direct booking",
      "Patient onboarding collateral and preventive health packages",
      "Monthly social communication templates and community health advisories",
    ],
    deliverables: [
      "Complete brand identity guidelines",
      "Fully responsive clinic website",
      "Reception and consultation environmental graphics",
      "10 core patient communication templates",
    ],
    impact: "Achieved immediate neighborhood recognition and rapid appointment adoption through clear digital booking routes.",
  },
  {
    slug: "bilva-wellness",
    client: "Bilva Wellness",
    title: "Positioning proactive lifestyle medicine and rehabilitation.",
    category: "Brand Strategy & Packaging",
    specialty: "Preventive Health, Lifestyle Medicine & Rehabilitation",
    location: "Bengaluru, Karnataka",
    year: "2024",
    logo: "/logos/bilva wellness logo.png",
    cardImage: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&q=80&w=1200",
    heroImage: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&q=80&w=2000",
    galleryImages: [
      {
        url: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&q=80&w=1000",
        caption: "Wellness checkup package brochures and lifestyle evaluation folders",
        type: "published",
      },
      {
        url: "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&q=80&w=1000",
        caption: "Rehabilitation suite environmental graphics and mindful interior art",
        type: "installed",
      },
      {
        url: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&q=80&w=1000",
        caption: "Corporate wellness presentation deck and preventive health portfolios",
        type: "published",
      },
    ],
    summary: "Differentiating proactive wellness and post-surgical rehabilitation from acute clinical treatments while maintaining medical authority.",
    challenge: "Wellness is often mistaken for non-medical spa retreats. Bilva Wellness needed to communicate evidence-based preventive health, clinical nutrition, and post-rehab therapy with medical credibility.",
    audience: "Corporate executives, individuals managing metabolic risks (diabetes, hypertension), and patients recovering from orthopaedic surgery.",
    approach: "Designed a serene, premium aesthetic combining clinical credibility with lifestyle warmth. Built modular wellness checkup folders and corporate partnership portfolios.",
    scope: [
      "Wellness sub-brand architecture and logo system",
      "Curated preventive health check package collateral",
      "Corporate wellness proposal and partnership presentations",
      "Environmental graphics for therapy and recovery studios",
      "Digital wellness content strategy and health calculator tools",
    ],
    deliverables: [
      "Sub-brand visual system and asset repository",
      "Corporate wellness presentation deck and brochures",
      "Therapy suite wall graphics and motivational signage",
      "Modular health checkup print packages",
    ],
    impact: "Established high-trust corporate wellness partnerships and expanded preventive health check enrollments.",
  },
  {
    slug: "brain-and-mind",
    client: "Brain & Mind Hospital",
    title: "Compassionate, destigmatising communication for neuropsychiatry.",
    category: "Sensitive Care Branding & Patient Guides",
    specialty: "Neuropsychiatry, Behavioural Health & Neuro-Rehabilitation",
    location: "Karnataka",
    year: "2023",
    logo: "/logos/brain and mind logo.png",
    cardImage: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&q=80&w=1200",
    heroImage: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&q=80&w=2000",
    galleryImages: [
      {
        url: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=1000",
        caption: "Discreet consultation intake folders and family counselling guides",
        type: "published",
      },
      {
        url: "https://images.unsplash.com/photo-1527689368864-3a821dbccc34?auto=format&fit=crop&q=80&w=1000",
        caption: "Calming environmental interior graphics designed to reduce anxiety",
        type: "installed",
      },
      {
        url: "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=1000",
        caption: "Short physician videos addressing mental wellness and memory disorders",
        type: "film",
      },
    ],
    summary: "Creating a deeply respectful, reassuring visual language and private consultation touchpoints for behavioral and neurological health.",
    challenge: "Seeking psychiatric and neurological care is still heavily stigmatised. Patients and families felt self-conscious, requiring supreme privacy, warmth, and judgment-free clinical communication.",
    audience: "Adults dealing with clinical anxiety and depression, elderly patients with dementia, and families seeking neurodevelopmental support.",
    approach: "We used soft, restorative colors and non-confrontational typography. Designed confidential intake documentation and supportive family guides that frame neuropsychiatry as an essential organ health discipline.",
    scope: [
      "Destigmatising brand identity and soothing color system",
      "Private intake forms and confidential medical folder design",
      "Family guidance booklets on neuro-rehabilitation and memory care",
      "Privacy-respecting interior environment recommendations",
      "Physician video series addressing clinical mental health facts",
    ],
    deliverables: [
      "Brand identity guidelines & sensitive iconography",
      "Family education handbook on neurological recovery",
      "Confidential patient file folders and stationery",
      "Consulting room environmental standards",
    ],
    impact: "Created a welcoming, safe sanctuary for patients, noticeably decreasing first-visit hesitancy and increasing family engagement.",
  },
  {
    slug: "brainix",
    client: "Brainix",
    title: "Clarifying cognitive and developmental diagnostics for families.",
    category: "Digital Diagnostics & Parent Experience",
    specialty: "Cognitive Assessment & Pediatric Neurodevelopment",
    location: "Bengaluru, Karnataka",
    year: "2024",
    logo: "/logos/brainix logo.png",
    cardImage: "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&q=80&w=1200",
    heroImage: "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&q=80&w=2000",
    galleryImages: [
      {
        url: "https://images.unsplash.com/photo-1587654780291-39c9404d746b?auto=format&fit=crop&q=80&w=1000",
        caption: "Standardized visual cognitive assessment summary report cards",
        type: "published",
      },
      {
        url: "https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&q=80&w=1000",
        caption: "Child-friendly clinic orientation graphics and milestone markers",
        type: "installed",
      },
      {
        url: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1000",
        caption: "Parent dashboard interface visualizing cognitive milestones",
        type: "published",
      },
    ],
    summary: "Transforming complex neuropsychological evaluations into visual, empowering developmental scorecards for parents and therapists.",
    challenge: "Neurodevelopmental and cognitive test reports are notoriously dense, leaving parents feeling overwhelmed and unsure how to help their children with ADHD, dyslexia, or learning differences.",
    audience: "Parents of school-age children, pediatricians, special educators, and speech/occupational therapists.",
    approach: "Designed a clean, engaging diagnostic report format with intuitive milestone graphs, clear action steps, and child-friendly clinic environmental touches that replace cold clinical testing with engaging exploration.",
    scope: [
      "Digital brand identity & approachable visual system",
      "Diagnostic report redesign with visual scoring charts",
      "Parent guidebooks on developmental milestones and intervention plans",
      "Interactive digital portal templates for assessment scheduling",
      "Child-friendly sensory environmental graphics",
    ],
    deliverables: [
      "Diagnostic report visual design system",
      "Brand style guide and illustration library",
      "Parent roadmap booklets for speech & cognitive therapy",
      "Clinic sensory room visual applications",
    ],
    impact: "Empowered parents with understandable developmental roadmaps and enabled seamless collaboration between doctors and schools.",
  },
  {
    slug: "janani-hospital",
    client: "Janani Hospital",
    title: "A celebratory, reassuring maternity and neonatal experience.",
    category: "Maternity Experience & Environmental Design",
    specialty: "Maternity, Birthing Care, Gynaecology & Neonatology",
    location: "Karnataka",
    year: "2023",
    logo: "/logos/javani hospital logo.webp",
    cardImage: "https://images.unsplash.com/photo-1555252333-9f8e92e65df9?auto=format&fit=crop&q=80&w=1200",
    heroImage: "https://images.unsplash.com/photo-1555252333-9f8e92e65df9?auto=format&fit=crop&q=80&w=2000",
    galleryImages: [
      {
        url: "https://images.unsplash.com/photo-1519689680058-324335c77eba?auto=format&fit=crop&q=80&w=1000",
        caption: "Maternity suite door plaques and soothing birthing room graphics",
        type: "installed",
      },
      {
        url: "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&q=80&w=1000",
        caption: "Pregnancy milestone guides and newborn immunization trackers",
        type: "published",
      },
      {
        url: "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=1000",
        caption: "Custom celebratory birth certificate package and keepsake boxes",
        type: "identity",
      },
    ],
    summary: "Crafting a joyful, family-centered birthing experience that replaces clinical anxiety with supportive maternity and newborn guidance.",
    challenge: "Expectant mothers sought a birthing center that felt warm, celebrated their pregnancy journey, and offered prompt neonatal reassurance without feeling like an emergency surgery ward.",
    audience: "Expectant mothers, young couples preparing for childbirth, and multi-generational families welcoming newborns.",
    approach: "Infused the identity with cheerful, nurturing tones. Developed a trimester-by-trimester care guide, celebratory birth certificates, and gentle hospital signage that honors new mothers and babies.",
    scope: [
      "Mother & child brand identity refresh",
      "Trimester maternity journey guides and birth-plan checklists",
      "NICU and labor suite environmental privacy graphics",
      "Welcome baby keepsake stationery and commemorative birth certificates",
      "Postpartum lactation and newborn care counseling booklets",
    ],
    deliverables: [
      "Brand identity manual & maternal graphics suite",
      "Installed maternity ward wayfinding & suite names",
      "Keepsake birth box and documentation design",
      "5 comprehensive mother and baby health guides",
    ],
    impact: "Established Janani as the preferred, beloved birthing hospital in its region, boosting maternity package bookings by over 40%.",
  },
  {
    slug: "kamareddy-hospital",
    client: "Kamareddy Hospital",
    title: "Restoring mobility and establishing super-specialty trauma leadership.",
    category: "Specialty Branding & Emergency Campaigns",
    specialty: "Orthopaedics, Trauma Surgery & Joint Replacement Centre",
    location: "Telangana / Karnataka",
    year: "2023",
    logo: "/logos/Kamareddy Hospital logo.png",
    cardImage: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=1200",
    heroImage: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=2000",
    galleryImages: [
      {
        url: "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=1000",
        caption: "Emergency trauma 24/7 highway hoardings and ambulance branding",
        type: "published",
      },
      {
        url: "https://images.unsplash.com/photo-1538108149393-fbbd81895907?auto=format&fit=crop&q=80&w=1000",
        caption: "Orthopaedic rehabilitation wing signage and mobility milestones",
        type: "installed",
      },
      {
        url: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&q=80&w=1000",
        caption: "Surgeon-led documentary on joint reconstruction and rapid rehabilitation",
        type: "film",
      },
    ],
    summary: "Elevating a trusted regional hospital into an authoritative center of excellence for trauma surgery, spine care, and joint reconstruction.",
    challenge: "Kamareddy Hospital possessed exceptional surgical expertise in acute trauma and joint reconstruction, but rural and highway accidents often bypassed them due to lack of visibility for their 24/7 trauma emergency capabilities.",
    audience: "Highway emergency cases, agricultural and industrial workers with fracture injuries, and elderly individuals seeking pain-free mobility.",
    approach: "Built a powerful 'Restoring Mobility, Rebuilding Lives' campaign. Unveiled 24/7 emergency trauma markers across transit arteries and created simple, visual rehabilitation steps for joint replacement patients.",
    scope: [
      "Brand identity refinement and trauma emergency badge",
      "Highway trauma awareness and emergency route signage",
      "Orthopaedic surgical outcome brochures and patient exercise diaries",
      "Surgeon introduction films highlighting emergency trauma protocols",
      "Rehabilitation center environmental graphics and floor mobility markers",
    ],
    deliverables: [
      "Trauma and orthopaedic brand assets",
      "Regional emergency campaign collateral and hoardings",
      "Patient joint rehabilitation guides",
      "Surgeon profile and trauma protocol films",
    ],
    impact: "Positioned the hospital as the definitive first-response trauma destination, drastically reducing golden-hour delays for critical injury cases.",
  },
];

export function getCaseStudy(slug?: string): CaseStudy | undefined {
  if (!slug) return undefined;
  const clean = slug.toLowerCase().trim();
  
  // Exact match or fallback mapping for variations (e.g. adarsh vs adarsh-hospital)
  return CASE_STUDIES.find(
    (c) =>
      c.slug === clean ||
      c.slug.replace("-hospital", "") === clean.replace("-hospital", "") ||
      clean.includes(c.slug.replace("-hospital", ""))
  );
}
