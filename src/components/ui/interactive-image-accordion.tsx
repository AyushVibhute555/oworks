import React, { useState } from "react";
import { Link } from "react-router-dom";

// --- Data for the image accordion ---
const accordionItems = [
  {
    id: 1,
    title: "Brand Strategy",
    imageUrl:
      "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 2,
    title: "Creative Design",
    imageUrl:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 3,
    title: "Digital Marketing",
    imageUrl:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 4,
    title: "Content Production",
    imageUrl:
      "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 5,
    title: "Performance Ads",
    imageUrl:
      "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80&w=800",
  },
];

// --- Accordion Item Component ---
const AccordionItem = ({ item, isActive, onMouseEnter }: { item: any, isActive: boolean, onMouseEnter: () => void }) => {
  return (
    <div
      className={`
        relative h-[450px] rounded-2xl overflow-hidden cursor-pointer
        transition-all duration-700 ease-in-out
        ${isActive ? "w-[400px]" : "w-[60px]"}
      `}
      onMouseEnter={onMouseEnter}
    >
      {/* Background Image */}
      <img
        src={item.imageUrl}
        alt={item.title}
        className="absolute inset-0 w-full h-full object-cover"
        onError={(e: any) => {
          e.target.onerror = null;
          e.target.src =
            "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80&w=800";
        }}
      />
      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-ink/40"></div>

      {/* Caption Text */}
      <span
        className={`
          absolute text-white text-lg font-semibold whitespace-nowrap
          transition-all duration-300 ease-in-out font-serif
          ${
            isActive
              ? "bottom-6 left-1/2 -translate-x-1/2 rotate-0" // Active state: horizontal, bottom-center
              : // Inactive state: vertical, positioned at the bottom, for all screen sizes
                "w-auto text-left bottom-24 left-1/2 -translate-x-1/2 rotate-90"
          }
        `}
      >
        {item.title}
      </span>
    </div>
  );
};

// --- Main App Component ---
export function LandingAccordionItem() {
  const [activeIndex, setActiveIndex] = useState(4);

  const handleItemHover = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <div className="bg-cream-dark font-sans py-24 md:py-32">
      <section className="container-editorial px-6 md:px-16 lg:px-24">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          {/* Left Side: Text Content */}
          <div className="w-full md:w-1/2 text-center md:text-left">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-ink mb-6">
              Featured Work & Services
            </h2>
            <p className="text-lg md:text-xl text-ink-light max-w-xl mx-auto md:mx-0 leading-relaxed">
              From visionary strategy to seamless execution, we craft campaigns that leave a lasting impact and elevate your brand to new heights.
            </p>
            <div className="mt-10">
              <Link
                to="/work"
                className="btn-primary inline-flex"
              >
                Explore Projects
              </Link>
            </div>
          </div>

          {/* Right Side: Image Accordion */}
          <div className="w-full md:w-1/2">
            {/* Changed flex-col to flex-row to keep the layout consistent */}
            <div className="flex flex-row items-center justify-center md:justify-end gap-3 md:gap-4 overflow-x-auto p-4 scrollbar-hide">
              {accordionItems.map((item, index) => (
                <AccordionItem
                  key={item.id}
                  item={item}
                  isActive={index === activeIndex}
                  onMouseEnter={() => handleItemHover(index)}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default LandingAccordionItem;
