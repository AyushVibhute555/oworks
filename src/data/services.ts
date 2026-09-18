export interface Service {
  slug: string;
  category: string;
  name: string; // Used for links in Services Hub
  heading: string;
  intro: string;
  processHeading?: string;
  process?: string | string[] | { title: string; text: string }[];
  whyItMattersHeading?: string;
  whyItMatters?: string | { title: string; text: string }[];
  merchandiseOfferings?: string[]; // Specific to merchandise
  relatedLink?: { label: string; url: string };
}

export const services: Service[] = [
  {
    slug: "marketing-campaigns",
    category: "Creative and Content",
    name: "Marketing Campaigns",
    heading: "Creativity with Lasting Power",
    intro: "At Oworks, every marketing campaign is powered by Strategic Insight. We draw inspiration from a blend of data analysis, customer feedback, market trends, and innovative technologies, including AI and future projections. Our comprehensive approach combines these elements with creative expertise to help you explore new markets, seize opportunities, and achieve your goals.",
    processHeading: "This is what we do",
    process: "Our process blends strategic analysis with creative flair. We start with thorough research and data evaluation of the market, competitors, and target audience. Consistency in messaging is key to building trust and effectively communicating your value. We recommend a comprehensive workshop to address the right challenges and develop a clear creative strategy. Once we've aligned on the approach, our talented team of designers and copywriters brings the campaign to life across selected media channels, continuously testing and refining for maximum impact.",
    whyItMatters: "Creative marketing sets you apart from competitors and gives you a unique advantage, even in crowded markets. It accelerates growth, enhances brand value, and forges strong connections with your audience. A Creative Marketing Campaign blends strategy with imagination — whether increasing sales, building brand awareness, or entering new markets — using tools like outdoor advertising, interactive experiences, viral content, social media, digital displays, TV, radio, and guerrilla marketing.",
  },
  {
    slug: "strategy-development",
    category: "Creative and Content",
    name: "Strategy Development",
    heading: "Shaping Tomorrow with Strategic Vision",
    intro: "At Oworks, every marketing campaign is powered by Strategic Insight. We draw inspiration from a blend of data analysis, customer feedback, market trends, and innovative technologies, including AI and future projections.",
    processHeading: "Process",
    process: [
      { title: "Laying the Foundation for Success", text: "Identify Core Business Needs: understanding your goals, whether increasing sales, enhancing brand awareness, or entering new markets, to define what success looks like." },
      { title: "Customized Solutions for Maximum Impact", text: "Provide Tailored Strategic Recommendations: customized to your specific goals and budget, evaluating the best channels, creative approaches, and tactics." },
      { title: "Adopt a Comprehensive Marketing Approach", text: "Integrating Past, Present, and Future Efforts: a holistic view of previous campaigns and current activities for consistency and effectiveness." }
    ],
    whyItMatters: "A marketing strategy outlines how to achieve success and reach your goals — defining the route and milestones. Our strategies are built on detailed research, data analysis, and competitor insights before any budget is allocated, ensuring your budget is used efficiently and preventing wasted expenditure.",
  },
  {
    slug: "brand-development",
    category: "Creative and Content",
    name: "Brand Development",
    heading: "Brand Identity that Inspires",
    intro: "Consumers gravitate towards brands that share their values. A unique and consistent brand personality not only attracts customers but also keeps them loyal. A clear and strong brand message aligns all brand activities and ensures your voice stands out, even in a noisy marketplace.",
    processHeading: "Our Approach",
    process: "We work with you to define your brand's identity, tone of voice, and core values, helping you build a strong connection with your audience across all channels. Our approach ensures your brand remains consistent, relevant, and engaging.",
    whyItMatters: "Brand development is the process of crafting a unique identity — from colors and logos to language and tone. We start by defining the purpose, values, and tone of your brand, which shape what your brand stands for. Your brand identity is a promise to your customers, and maintaining consistency across channels is key to building trust and recognition.",
  },
  {
    slug: "content-creation-writing",
    category: "Creative and Content",
    name: "Content Writing and Creation",
    heading: "Inspire Stories Through Content",
    intro: "In today's digital landscape, content is king. Effective content creation and writing are essential to building a strong connection with your audience and driving engagement. At Oworks, we specialize in creating content that not only captures attention but also conveys your brand's message in a powerful and meaningful way.",
    processHeading: "Our Approach",
    process: "We start by understanding your brand's goals and audience, then develop a content strategy that aligns with these goals. Our team of writers, designers, and strategists work together to produce content that's engaging and optimized for search engines and social media. Great content should tell a story, inspire action, and create a connection — from blog posts and articles to videos and social campaigns.",
    whyItMatters: "High-quality content is the backbone of any successful marketing strategy — it drives traffic, improves SEO, and builds trust with your audience, turning casual visitors into loyal customers.",
  },
  {
    slug: "market-research-discovery",
    category: "Research and Analysis",
    name: "Market Research and Discovery",
    heading: "Uncover Insights, Drive Success",
    intro: "With Oworks, you get a dedicated team of experts committed to delivering actionable insights and strategic recommendations, combining data-driven analysis with a deep understanding of market dynamics.",
    processHeading: "Our Approach",
    process: "We collaborate with you to define business goals and research needs — new market opportunities, consumer behavior, or competitive landscape. We gather data through surveys, interviews, and industry reports, then analyze it to uncover key trends and develop tailored strategies, continuously testing and refining.",
    whyItMatters: "Effective market research is the foundation for successful business strategies. It helps identify market opportunities, understand consumer needs, and evaluate competitive positioning — reducing risk and enhancing your market presence.",
  },
  {
    slug: "lead-generation",
    category: "Research and Analysis",
    name: "Lead Generation",
    heading: "Ignite Interest and Secure Sales",
    intro: "Lead generation captures the interest of potential customers in your brand's product or service, while lead nurturing guides them through the decision-making process, turning interest into action.",
    processHeading: "Our Approach",
    process: "We define your target audience and build a multi-channel lead generation strategy — combining content, targeted outreach, and nurturing sequences to keep prospects engaged. The foundation of any successful business lies in attracting and retaining customers; effective lead generation and nurturing ensures a steady flow of potential customers that develop into a loyal base over time.",
    whyItMatters: "Lead generation is the process of identifying and engaging potential customers. If lead generation is the first introduction, lead nurturing is the continuous engagement that keeps your brand top of mind, guiding prospects toward a purchase decision.",
  },
  {
    slug: "new-market-penetration",
    category: "Research and Analysis",
    name: "New Market Penetration",
    heading: "Unlock New Opportunities",
    intro: "Expanding into new markets is essential for growth and long-term success. Our expertise in market research, strategic planning, and innovative marketing solutions ensures your brand makes a strong and successful entry into new territories.",
    processHeading: "Our Market Entry Process",
    process: "New market penetration is the process of entering new geographical regions, demographics, or sectors with your products or services. We begin with a thorough analysis of the target market — trends, consumer behavior, and the competitive environment — then develop a customized entry strategy including tailored marketing campaigns, brand positioning, and go-to-market plans, continually monitoring and adapting as your brand establishes its presence.",
    whyItMatters: "Entering new markets allows businesses to tap into fresh revenue streams and reduce dependency on existing markets. Successful market penetration requires a deep understanding of the new market's nuances — customer preferences, cultural differences, and competitive landscape.",
  },
  {
    slug: "data-analysis-reporting",
    category: "Research and Analysis",
    name: "Data Analysis and Reporting",
    heading: "Transform Data into Actionable Insights",
    intro: "Harness the power of data to drive your business forward. Our data analysis and reporting services turn raw data into clear, actionable insights that guide strategic decision-making and fuel growth.",
    processHeading: "Our Approach",
    process: "Data analysis is examining, cleaning, and modeling data to extract useful information and identify patterns. We collect and organize data from various sources, dive deep using advanced techniques to uncover trends and correlations, then present findings in clear, visually engaging reports that are easy to interpret and act upon.",
    whyItMatters: "In today's data-driven world, making informed decisions is crucial for staying competitive. Effective data analysis helps identify trends, understand customer behavior, optimize operations, and uncover new opportunities.",
  },
  {
    slug: "web-design-build",
    category: "Web Development",
    name: "Web Design and Build",
    heading: "Crafting Exceptional Digital Experiences",
    intro: "Your website serves as the digital face of your brand, making a lasting impression on visitors. Our web design and build services go beyond aesthetics, creating visually stunning, user-friendly websites strategically built to drive engagement, enhance user experience, and boost conversions.",
    processHeading: "Our Approach",
    process: "We start by understanding your brand, goals, and target audience, then create a custom website reflecting your identity with an intuitive user experience. During the build phase, our developers bring the design to life, ensuring the site is responsive, fast, and optimized for search engines — rigorously tested across devices and browsers.",
    whyItMatters: "Web design is the visual layout, UI, and overall aesthetic; the build phase turns these designs into a fully functional, responsive website. A well-designed website is essential for making a strong first impression and building credibility — a poorly designed site can drive visitors away, while a well-crafted one attracts and retains customers.",
  },
  {
    slug: "ui-ux-design",
    category: "Web Development",
    name: "UI/UX Design",
    heading: "Designing Engaging User Experiences",
    intro: "In the digital world, user experience (UX) and user interface (UI) design are crucial in shaping how your audience interacts with your brand. Our UI/UX design services focus on creating intuitive, engaging, and seamless experiences that keep users coming back.",
    processHeading: "Our Approach",
    process: "We start by understanding your users, their needs, and pain points, then create wireframes and prototypes to map out the user journey. We focus on accessibility, then bring the experience to life with visually compelling UI designs aligned to your brand identity, rigorously tested to ensure they perform well in real-world scenarios.",
    whyItMatters: "UI design focuses on look and feel; UX design ensures every interaction is intuitive and enjoyable — together they form the foundation of a successful digital product. A positive experience leads to higher engagement and more conversions; poor design frustrates users and drives them away.",
    relatedLink: { label: "Explore Our Web Design and Build Services", url: "/services/web-design-build" }
  },
  {
    slug: "search-engine-optimization",
    category: "Web Development",
    name: "Search Engine Optimization",
    heading: "Boost Your Visibility",
    intro: "Unlock the full potential of your online presence with our comprehensive SEO services. We focus on enhancing your website's visibility on search engines, driving organic traffic, and improving your search rankings.",
    processHeading: "How We Improve SEO",
    process: "We begin with a thorough SEO audit, conduct in-depth keyword research, optimize your website's on-page elements, enhance technical aspects, and develop a strategic link-building plan. Regular reporting and analysis help track progress and make data-driven adjustments.",
    whyItMatters: "SEO involves optimizing your website and content to rank higher in search results — improving on-page elements, technical performance, and backlinks. Higher rankings mean greater exposure, more clicks, and more conversions.",
    relatedLink: { label: "Explore Our Web Design and Build Services", url: "/services/web-design-build" }
  },
  {
    slug: "inbound-outbound-marketing",
    category: "Distribution",
    name: "Inbound and Outbound Marketing",
    heading: "Growth with Smart Marketing",
    intro: "Achieve your marketing goals with our tailored inbound and outbound marketing strategies — a balanced approach combining modern digital tactics with traditional methods.",
    processHeading: "How We Work",
    process: "We start by defining your marketing goals and target audience. For inbound, we develop compelling content and optimize your online presence to attract and engage customers. For outbound, we craft targeted campaigns to reach new leads and re-engage existing ones, continuously optimized based on performance metrics.",
    whyItMatters: "Inbound marketing builds trust and nurtures relationships, while outbound can quickly reach a broader audience. Combining both captures leads from all sources and prevents missed opportunities.",
    relatedLink: { label: "Explore Our Strategy Development Services", url: "/services/strategy-development" }
  },
  {
    slug: "social-media-management",
    category: "Distribution",
    name: "Social Media Management",
    heading: "Boost Your Brand Online",
    intro: "Transform your online presence with our tailored social media management services — engaging your audience, building brand loyalty, and driving meaningful interactions across all major platforms.",
    processHeading: "Our Approach",
    process: "We start by understanding your brand's goals and target audience, craft a customized social media strategy covering content creation, scheduling, and community management, then monitor channels and analyze performance to continually optimize.",
    whyItMatters: "Effective social media management is key to connecting with your audience and building a strong brand presence — reaching a larger audience, fostering relationships, and driving engagement.",
    relatedLink: { label: "Explore Our Brand Development Services", url: "/services/brand-development" }
  },
  {
    slug: "community-management",
    category: "Distribution",
    name: "Community Management",
    heading: "Build Strong Connections",
    intro: "Enhance your brand's presence and loyalty with our comprehensive community management services — creating meaningful interactions, resolving issues, and building a supportive online community.",
    processHeading: "Our Approach",
    process: "We start by understanding your brand's values and community goals, develop a tailored strategy for engaging with your audience and moderating conversations, then monitor interactions and respond to feedback to foster a positive atmosphere.",
    whyItMatters: "Effective community management is essential for maintaining a positive brand image and building lasting customer relationships.",
    relatedLink: { label: "Explore Our Marketing Campaigns Services", url: "/services/marketing-campaigns" }
  },
  {
    slug: "virtual-events-webinars",
    category: "Distribution",
    name: "Virtual Events and Webinars",
    heading: "Engage with Seamless Virtual Events",
    intro: "Expand your reach and drive engagement with our expert virtual event and webinar services — creating impactful online events that captivate your audience and deliver your message effectively.",
    processHeading: "How We Host Online",
    process: "We start by understanding your event goals and audience, handle everything from planning and design to execution and follow-up, ensuring a smooth experience with engaging content, interactive features, and technical support, then provide post-event reports and insights.",
    whyItMatters: "Virtual events and webinars let you connect with your audience from anywhere — reaching a global audience, reducing costs, and increasing flexibility while sharing expertise and building your brand's reputation.",
    relatedLink: { label: "Explore Our Community Management Services", url: "/services/community-management" }
  },
  {
    slug: "merchandise",
    category: "Distribution",
    name: "Custom Corporate Merchandise",
    heading: "Custom Corporate Merchandise Solutions",
    intro: "At Oworks, we understand the power of branded merchandise. From personalized T-shirts to branded mugs and other corporate gifts, we offer a wide range of merchandise solutions tailored to your company's needs — for team events, employee engagement, or corporate gifting.",
    whyItMattersHeading: "Why Corporate Merchandise?",
    whyItMatters: [
      { title: "Brand Recognition", text: "strengthen your presence through high-quality custom merchandise." },
      { title: "Employee Engagement", text: "boost morale and a sense of belonging with personalized items." },
      { title: "Event Giveaways", text: "make corporate events memorable with branded takeaways." },
      { title: "Client Gifting", text: "show appreciation with thoughtful, useful merchandise." }
    ],
    merchandiseOfferings: [
      "Apparel (custom T-shirts, polos, jackets, caps)",
      "Drinkware (branded mugs, water bottles, travel cups)",
      "Office Supplies (custom pens, notebooks, tech accessories)",
      "Gift Sets (personalized gift boxes)",
      "Specialty Items (custom options for unique requirements)"
    ],
    processHeading: "How it Works",
    process: [
      { title: "1. Consultation", text: "a discovery call to understand your needs and goals." },
      { title: "2. Design & Review", text: "creative concepts based on your brand identity." },
      { title: "3. Production", text: "precision crafting once approved." },
      { title: "4. Delivery", text: "on-time delivery, ready to impress." }
    ]
  }
];
