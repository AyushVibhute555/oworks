import { useRef, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import { services } from '@/data/services';

export const HorizontalScrollGallery = () => {
  const targetRef = useRef<HTMLDivElement>(null);
  
  // Use framer-motion's useScroll to track scroll progress over the targetRef container
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  // Transform scroll progress (0 to 1) into a horizontal translation.
  // We move from 0% to a negative percentage.
  // E.g., if there are 6 cards, they might overflow the screen by ~200%.
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-65%"]);

  return (
    <section ref={targetRef} className="relative h-[300vh] bg-cream-dark">
      <div className="sticky top-0 h-screen flex items-center overflow-hidden">
        
        {/* Section Heading - Fixed to left */}
        <div className="absolute left-8 md:left-12 top-1/2 -translate-y-1/2 z-10 hidden lg:block">
          <div className="-rotate-90 origin-center whitespace-nowrap">
            <span className="text-xs tracking-[0.2em] uppercase text-ink-muted font-medium">
              Featured Services
            </span>
          </div>
        </div>

        <motion.div style={{ x }} className="flex gap-8 px-12 md:px-24 lg:px-36">
          {services.slice(0, 6).map((service, index) => {
            // Give different cards different aspect ratios and alignments for that "premium editorial" feel
            const isPortrait = index % 2 === 0;
            const alignSelf = index % 3 === 0 ? 'flex-start' : (index % 3 === 1 ? 'center' : 'flex-end');
            
            return (
              <div 
                key={service.slug}
                className="group relative flex-shrink-0"
                style={{
                  width: isPortrait ? '300px' : '450px',
                  alignSelf: alignSelf,
                  marginTop: index % 3 === 0 ? '0' : (index % 3 === 1 ? '10vh' : '20vh')
                }}
              >
                <Link to={`/services/${service.slug}`} className="block">
                  <div className={`relative overflow-hidden bg-cream ${isPortrait ? 'aspect-[3/4]' : 'aspect-[4/3]'} shadow-sm transition-transform duration-700 ease-editorial group-hover:scale-[1.02] group-hover:shadow-xl`}>
                    <img 
                      src={`https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800&sig=${index}`}
                      alt={`Placeholder for ${service.name}`}
                      className="w-full h-full object-cover transition-transform duration-1000 ease-editorial group-hover:scale-110"
                    />
                    
                    {/* Dark overlay on hover */}
                    <div className="absolute inset-0 bg-ink/0 group-hover:bg-ink/20 transition-colors duration-500" />
                  </div>
                  
                  <div className="mt-6 flex flex-col items-start">
                    <span className="eyebrow mb-2">{service.category}</span>
                    <h3 className="font-serif text-2xl text-ink group-hover:text-ink-light transition-colors">
                      {service.name}
                    </h3>
                  </div>
                </Link>
              </div>
            )
          })}
        </motion.div>
        
        {/* Progress indicator */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-divider">
          <motion.div
            className="h-full bg-ink"
            style={{ scaleX: scrollYProgress, transformOrigin: "0% 50%" }}
          />
        </div>
      </div>
    </section>
  );
};
