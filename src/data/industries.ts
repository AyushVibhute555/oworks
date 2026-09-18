export interface Industry {
  slug: string;
  name: string;
  heading: string;
  intro: string;
  servicesIncluded: string[];
  whyChooseUs: string;
}

export const industries: Industry[] = [
  {
    slug: "health-care-marketing",
    name: "Health Care Marketing",
    heading: "Comprehensive Healthcare Marketing Solutions",
    intro: "In the healthcare industry, trust and credibility are paramount. At Oworks, we specialize in building strong, trustworthy brands that connect with patients, healthcare professionals, and other stakeholders. Our healthcare marketing solutions are designed to enhance your brand's visibility, improve patient engagement, and drive growth in an increasingly competitive market.",
    servicesIncluded: [
      "Patient Engagement Campaigns (personalized campaigns to educate and engage patients)",
      "Healthcare SEO (ensuring your services are found by patients searching for specific treatments)",
      "Content Marketing (informative content establishing your authority)",
      "Social Media Management (community-trust-building content)"
    ],
    whyChooseUs: "With extensive experience in healthcare marketing, we understand the nuances of this industry. Our team stays updated with the latest regulations and trends to ensure your marketing strategies are compliant and effective."
  },
  {
    slug: "real-estate-marketing",
    name: "Real Estate",
    heading: "Maximize Your Property's Potential",
    intro: "In the dynamic world of real estate, visibility is key. Oworks provides comprehensive real estate marketing solutions that enhance your property's visibility, attract serious buyers, and drive sales — whether you're a developer, realtor, or property manager.",
    servicesIncluded: [
      "Property Listings Optimization",
      "Virtual Tours and Photography",
      "Real Estate SEO",
      "Lead Generation",
      "Social Media Advertising"
    ],
    whyChooseUs: "Our deep understanding of the real estate market allows us to create marketing strategies that resonate with buyers and sellers alike. We focus on delivering measurable results that contribute to your bottom line."
  },
  {
    slug: "education-marketing",
    name: "Education",
    heading: "Empowering Educational Institutions",
    intro: "In today's digital world, educational institutions need to maintain a strong online presence to attract students, faculty, and partnerships. At Oworks, we specialize in creating impactful education marketing strategies that enhance your institution's reputation and drive enrollment.",
    servicesIncluded: [
      "Student Recruitment Campaigns",
      "Educational Content Marketing",
      "SEO for Education",
      "Social Media Strategy",
      "Alumni Engagement"
    ],
    whyChooseUs: "Our deep understanding of the education sector allows us to create marketing strategies that resonate with students, parents, and educators alike. We focus on delivering measurable results that boost enrollment and institutional reputation."
  },
  {
    slug: "technology-marketing",
    name: "Technology",
    heading: "Innovative Solutions for Technology Companies",
    intro: "In the fast-paced world of technology, staying ahead of the curve is crucial. Oworks provides cutting-edge marketing solutions tailored to tech companies — from startups to established enterprises — helping you build brand awareness, generate leads, and drive growth in a competitive landscape.",
    servicesIncluded: [
      "Tech Product Marketing",
      "Content Marketing for Tech",
      "SEO for Tech Companies",
      "Lead Generation",
      "Social Media Marketing"
    ],
    whyChooseUs: "We have a strong background in technology marketing and understand the challenges tech companies face. Our strategies are designed to help you overcome these challenges and achieve sustainable growth."
  }
];
