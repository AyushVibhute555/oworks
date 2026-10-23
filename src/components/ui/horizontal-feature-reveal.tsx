"use client";

import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import { useEffect, useId, type CSSProperties } from "react";

gsap.registerPlugin(ScrollTrigger, SplitText);

interface FeatureRevealTriggerRange {
    start?: string;
    end?: string;
}

interface FeatureRevealTriggers {
    no?: FeatureRevealTriggerRange;
    title?: FeatureRevealTriggerRange;
    content?: FeatureRevealTriggerRange;
    img?: FeatureRevealTriggerRange;
}

export interface FeatureRevealProperty {
    image?: string;
    imgClass?: string;
    no?: string | number;
    number?: string | number;
    titleClass?: string;
    title?: string;
    contentClass?: string;
    paragraphs?: string[];
    triggers?: FeatureRevealTriggers;
}

function prefersReducedMotion() {
    if (typeof window === "undefined") return false;
    return window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches ?? false;
}

interface HorizontalScrollCompProps {
    propertiesData?: FeatureRevealProperty[];
    bgColor?: string;
    imageParallaxRange?: number;
    cardGap?: number;
}

function HorizontalScrollComp({
    propertiesData = [],
    bgColor,
    imageParallaxRange = 30,
    cardGap = 15,
}: HorizontalScrollCompProps) {
    const uid = useId().replace(/:/g, "");
    const sectionId = `feature-reveal-${uid}`;

    useEffect(() => {
        const ctx = gsap.context(() => {
            if (window.innerWidth <= 1025) return;
            const reducedMotion = prefersReducedMotion();

            gsap.set(
                ".industry-img, .industry-no, .industry-title, .industry-content",
                { opacity: 1 },
            );

            gsap.to(".industry-container", {
                // Adjust the horizontal scroll distance based on the number of items
                xPercent: -(100 - (100 / propertiesData.length)) - 5,
                ease: "none",
                scrollTrigger: {
                    trigger: `#${sectionId}`,
                    start: "top top",
                    end: "bottom bottom",
                    scrub: true,
                },
            });

            if (reducedMotion) {
                ScrollTrigger.refresh();
                return;
            }

            const cards = document.querySelectorAll(".industry-card");

            cards.forEach((card, i) => {
                const cfg = propertiesData[i]?.triggers || ({} as FeatureRevealTriggers);
                const startNo = cfg.no?.start || "top 70%";
                const endNo = cfg.no?.end || "top 40%";
                const startTitle = cfg.title?.start || "top 70%";
                const endTitle = cfg.title?.end || "top 40%";
                const startContent = cfg.content?.start || "top 70%";
                const endContent = cfg.content?.end || "top 40%";
                const startImg = cfg.img?.start || "top 70%";
                const endImg = cfg.img?.end || "top 40%";

                const noEl = card.querySelector(`[class*="industry-no-"]`);
                if (noEl) {
                    const splitNo = new SplitText(noEl, {
                        type: "chars,lines",
                        mask: "lines",
                    });

                    gsap.from(splitNo.chars, {
                        y: 150,
                        rotate: 10,
                        stagger: 0.1,
                        duration: 0.7,
                        ease: "power2.out",
                        scrollTrigger: {
                            trigger: `#${sectionId}`,
                            start: startNo,
                            end: endNo,
                            toggleActions: "play none none reverse",
                        },
                    });
                }

                const titleEl = card.querySelector(`[class*="property-title-"]`);
                if (titleEl) {
                    const titleLines = new SplitText(titleEl, {
                        type: "lines",
                        mask: "lines",
                    });

                    gsap.set(titleEl, { lineHeight: 1.1 });
                    gsap.set(titleLines.lines, { lineHeight: 1.1 });

                    gsap.from(titleLines.lines, {
                        yPercent: 100,
                        stagger: 0.08,
                        duration: 0.7,
                        ease: "power2.out",
                        scrollTrigger: {
                            trigger: `#${sectionId}`,
                            start: startTitle,
                            end: endTitle,
                            toggleActions: "play none none reverse",
                        },
                    });
                }

                const contentEls = card.querySelectorAll(`[class*="property-content-"]`);
                contentEls.forEach((contentEl) => {
                    const contentLines = new SplitText(contentEl, {
                        type: "lines",
                        mask: "lines",
                    });

                    gsap.from(contentLines.lines, {
                        yPercent: 100,
                        stagger: 0.08,
                        delay: 0.3,
                        duration: 0.7,
                        ease: "power2.out",
                        scrollTrigger: {
                            trigger: `#${sectionId}`,
                            start: startContent,
                            end: endContent,
                            toggleActions: "play none none reverse",
                        },
                    });
                });

                const propertyImgs = card.querySelectorAll(`[class*="industry-img-"]`);
                propertyImgs.forEach((propertyImg) => {
                    gsap.to(propertyImg, {
                        translateX: `${imageParallaxRange}%`,
                        ease: "none",
                        scrollTrigger: {
                            trigger: `#${sectionId}`,
                            start: startImg,
                            end: endImg,
                            scrub: true,
                        },
                    });
                });
            });

            ScrollTrigger.refresh();
        });

        return () => ctx.revert();
    }, [propertiesData, sectionId, imageParallaxRange]);

    return (
        <section
            className={`w-screen relative z-10 max-[1025px]:mt-0 max-[1025px]:h-fit max-[1025px]:py-[15%] max-[1025px]:px-[7vw] text-ink ${bgColor ? "" : "bg-cream-dark"}`}
            style={{
                height: `${propertiesData.length * 120}vh`, // Dynamic height based on card count
                ...(bgColor ? { backgroundColor: bgColor } : undefined)
            }}
            id={sectionId}
        >
            <div className="w-screen overflow-hidden h-screen justify-center items-center sticky top-0 max-[1025px]:static max-[1025px]:w-full max-[1025px]:h-fit max-[1025px]:flex max-[1025px]:flex-col max-[1025px]:items-start">
                <div
                    className="flex flex-nowrap w-fit industry-container gap-(--card-gap) max-[1025px]:flex-col max-[1025px]:gap-[10vw] max-md:gap-[15vw] items-center h-full pl-[5vw]"
                    style={{ "--card-gap": `${cardGap}vw` } as CSSProperties & Record<`--${string}`, string>}
                >
                    {propertiesData.map((property, index) => (
                        <div
                            key={index}
                            className="w-[85vw] h-[75vh] flex items-center gap-[6vw] industry-card max-[1025px]:h-fit max-[1025px]:flex-col-reverse max-[1025px]:w-full"
                        >
                            {/* Image Block */}
                            <div className="w-[45%] h-full overflow-hidden rounded-2xl shadow-xl max-md:h-[110vw] max-[1025px]:w-full max-md:rounded-[4vw] max-[1025px]:h-[80vw] max-[1025px]:rounded-[2vw]">
                                <img
                                    src={property.image}
                                    alt={`property-img-${index + 1}`}
                                    className={`w-full h-full object-cover translate-x-(--image-shift-start) opacity-0 industry-img industry-${property.imgClass} max-[1025px]:translate-x-0 max-[1025px]:opacity-100 grayscale hover:grayscale-0 transition-all duration-700`}
                                    style={{ "--image-shift-start": `-${imageParallaxRange}%` } as CSSProperties & Record<`--${string}`, string | number>}
                                    width={800}
                                    height={1080}
                                />
                            </div>

                            {/* Text Block */}
                            <div className="flex flex-col gap-[3vh] w-[50%] max-[1025px]:w-full max-[1025px]:gap-[4vw] max-md:gap-[7vw]">
                                <p
                                    className={`text-[8rem] font-serif italic text-ink/10 leading-none opacity-0 industry-no industry-no-${property.no} max-[1025px]:text-[15vw] max-[1025px]:opacity-100`}
                                >
                                    {property.number}
                                </p>

                                <div className="w-full h-fit flex flex-col gap-[3vh] max-md:gap-[7vw]">
                                    <h3
                                        className={`text-5xl lg:text-6xl xl:text-7xl font-serif text-ink opacity-0 industry-title max-md:text-[9vw] max-[1025px]:text-[7.5vw] max-[1025px]:opacity-100 leading-[1.1] tracking-tight ${property.titleClass}`}
                                    >
                                        {property.title}
                                    </h3>

                                    <div className="space-y-6 max-[1025px]:text-[2.5vw] max-md:text-[4.2vw] mt-4">
                                        {(property.paragraphs as string[]).map((para, pIndex) => (
                                            <p
                                                key={pIndex}
                                                className={`opacity-0 industry-content text-xl lg:text-2xl text-ink-light leading-relaxed max-[1025px]:opacity-100 ${property.contentClass}`}
                                            >
                                                {para}
                                            </p>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export interface HorizontalFeatureRevealProps {
    properties?: FeatureRevealProperty[];
    bgColor?: string;
    imageParallaxRange?: number;
    cardGap?: number;
}

export default function HorizontalFeatureReveal({
    properties = [],
    bgColor,
    imageParallaxRange = 30,
    cardGap = 10,
}: HorizontalFeatureRevealProps) {
    return (
        <HorizontalScrollComp
            propertiesData={properties}
            bgColor={bgColor}
            imageParallaxRange={imageParallaxRange}
            cardGap={cardGap}
        />
    );
}