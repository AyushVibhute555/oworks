import React from "react";
import { Link } from "react-router-dom";

export interface ClientLogo {
  name: string;
  slug: string;
  src: string;
  sizeClass: string;
}

export const CLIENT_LOGOS: ClientLogo[] = [
  {
    name: "Adarsh Hospital",
    slug: "adarsh-hospital",
    src: "/logos/Adarsh Hospital.png",
    sizeClass: "max-h-[30px] sm:max-h-[32px] md:max-h-[36px] max-w-[160px] sm:max-w-[185px]",
  },
  {
    name: "Atharva Chest Hospital",
    slug: "atharva-chest-hospital",
    src: "/logos/Atharva Chest Hospital logo.webp",
    sizeClass: "max-h-[38px] sm:max-h-[42px] md:max-h-[46px] max-w-[145px] sm:max-w-[170px]",
  },
  {
    name: "Basaveshwar Hospital",
    slug: "basaveshwar-hospital",
    src: "/logos/Basaveshwar hospital logo.png",
    sizeClass: "max-h-[50px] sm:max-h-[56px] md:max-h-[62px] max-w-[95px] sm:max-w-[115px]",
  },
  {
    name: "Bilva Hospital",
    slug: "bilva-hospital",
    src: "/logos/bilva hospital logo.png",
    sizeClass: "max-h-[40px] sm:max-h-[44px] md:max-h-[48px] max-w-[145px] sm:max-w-[170px]",
  },
  {
    name: "Bilva Wellness",
    slug: "bilva-wellness",
    src: "/logos/bilva wellness logo.png",
    sizeClass: "max-h-[38px] sm:max-h-[42px] md:max-h-[46px] max-w-[140px] sm:max-w-[165px]",
  },
  {
    name: "Brain & Mind Hospital",
    slug: "brain-and-mind",
    src: "/logos/brain and mind logo.png",
    sizeClass: "max-h-[38px] sm:max-h-[42px] md:max-h-[46px] max-w-[140px] sm:max-w-[160px]",
  },
  {
    name: "Brainix",
    slug: "brainix",
    src: "/logos/brainix logo.png",
    sizeClass: "max-h-[38px] sm:max-h-[42px] md:max-h-[46px] max-w-[135px] sm:max-w-[160px]",
  },
  {
    name: "Janani Hospital",
    slug: "janani-hospital",
    src: "/logos/javani hospital logo.webp",
    sizeClass: "max-h-[28px] sm:max-h-[30px] md:max-h-[34px] max-w-[165px] sm:max-w-[190px]",
  },
  {
    name: "Kamareddy Hospital",
    slug: "kamareddy-hospital",
    src: "/logos/Kamareddy Hospital logo.png",
    sizeClass: "max-h-[38px] sm:max-h-[42px] md:max-h-[46px] max-w-[145px] sm:max-w-[170px]",
  },
  {
    name: "Sadbhava Hospital",
    slug: "sadbhava",
    src: "/logos/Sadbhava Hospital logo.png",
    sizeClass: "max-h-[34px] sm:max-h-[38px] md:max-h-[42px] max-w-[155px] sm:max-w-[180px]",
  },
  {
    name: "Shree Aaraike Hospital",
    slug: "shree-aaraike",
    src: "/logos/Shree Aaraike Hospital logo.png",
    sizeClass: "max-h-[42px] sm:max-h-[46px] md:max-h-[50px] max-w-[145px] sm:max-w-[170px]",
  },
];

interface ClientMarqueeProps {
  speed?: number; // duration in seconds
  className?: string;
  pauseOnHover?: boolean;
}

export const ClientMarquee: React.FC<ClientMarqueeProps> = ({
  speed = 36,
  className = "",
  pauseOnHover = true,
}) => {
  // Duplicate array 3 times for completely seamless looping without any gaps
  const items = [...CLIENT_LOGOS, ...CLIENT_LOGOS, ...CLIENT_LOGOS];

  return (
    <div className={`relative w-full overflow-hidden py-4 ${className}`}>
      {/* Editorial subtle fade masks on left and right */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 left-0 w-24 sm:w-40 md:w-56 bg-gradient-to-r from-white via-white/80 to-transparent dark:from-background dark:via-background/80 z-10"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 right-0 w-24 sm:w-40 md:w-56 bg-gradient-to-l from-white via-white/80 to-transparent dark:from-background dark:via-background/80 z-10"
      />

      {/* Marquee track */}
      <div
        className="flex w-max items-center animate-client-marquee"
        style={{
          animationDuration: `${speed}s`,
          animationPlayState: pauseOnHover ? undefined : "running",
        }}
      >
        {items.map((client, idx) => (
          <div
            key={`${client.name}-${idx}`}
            className="flex-shrink-0 px-6 sm:px-10 md:px-12 flex items-center justify-center group"
          >
            {/* Standardized visual bounding box with clickable link to case study */}
            <Link
              to={`/work/${client.slug}`}
              title={`View ${client.name} case study`}
              className="w-[150px] sm:w-[175px] md:w-[195px] h-[60px] sm:h-[68px] md:h-[74px] flex items-center justify-center transition-all duration-300 group-hover:scale-105"
            >
              <img
                src={encodeURI(client.src)}
                alt={`${client.name} logo`}
                loading="lazy"
                className={`w-auto object-contain opacity-90 transition-all duration-300 ease-editorial group-hover:opacity-100 ${client.sizeClass}`}
              />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};


