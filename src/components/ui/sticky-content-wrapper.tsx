"use client";

import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function prefersReducedMotion() {
    if (typeof window === "undefined") return false;
    return window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches ?? false;
}

interface StickyContentLink {
    href?: string;
    text?: string;
    label?: string;
    className?: string;
    target?: string;
    rel?: string;
}

export interface StickyContentItem {
    heading?: string;
    paragraphs?: string[];
    paragraph?: string | string[];
    list?: string[];
    listItems?: string[];
    link?: StickyContentLink;
    href?: string;
    linkText?: string;
    cta?: string;
    image?: string;
    alt?: string;
    imageAlt?: string;
    width?: number;
    height?: number;
}

const getParagraphs = (item: StickyContentItem) => {
    if (Array.isArray(item.paragraphs)) return item.paragraphs;
    if (Array.isArray(item.paragraph)) return item.paragraph;
    return item.paragraph ? [item.paragraph] : [];
};

const getListItems = (item: StickyContentItem) => {
    if (Array.isArray(item.list)) return item.list;
    if (Array.isArray(item.listItems)) return item.listItems;
    return [];
};

const getLink = (item: StickyContentItem): StickyContentLink | null => {
    if (item.link) return item.link;
    if (item.href) {
        return {
            href: item.href,
            text: item.linkText || item.cta || "Learn more",
        };
    }
    return null;
};

const renderStickyContent = (item: StickyContentItem) => {
    const paragraphs = getParagraphs(item);
    const listItems = getListItems(item);
    const link = getLink(item);

    return (
        <div className="flex w-full flex-col justify-center text-ink">
            {item.heading && <h3 className="font-serif text-ink">{item.heading}</h3>}

            {paragraphs.map((paragraph, paragraphIndex) => (
                <p key={`paragraph-${paragraphIndex}`} className="text-ink-light leading-relaxed">{paragraph}</p>
            ))}

            {listItems.length > 0 && (
                <ul className="flex flex-col ">
                    {listItems.map((listItem, listIndex) => (
                        <li key={`list-${listIndex}`} className="text-ink-light">{listItem}</li>
                    ))}
                </ul>
            )}

            {link?.href && (
                <a
                    href={link.href}
                    onClick={(e: React.MouseEvent<HTMLAnchorElement>) => {
                        if (link.href === "#") e.preventDefault();
                    }}
                    className={`group mt-6 inline-flex w-fit items-center gap-2 text-lg font-medium leading-tight no-underline hover:text-ink-light transition-colors ${link.className || ""}`}
                    target={link.target}
                    rel={link.rel || (link.target === "_blank" ? "noreferrer" : undefined)}
                >
                    <span>{link.text || link.label || "Learn more"}</span>
                    <svg
                        className="h-5 w-5 flex-none transition-transform duration-300 group-hover:translate-x-1"
                        viewBox="0 0 24 24"
                        fill="none"
                        aria-hidden="true"
                    >
                        <path d="M5 12h14M13 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </a>
            )}
        </div>
    );
};

interface StickyContentCompProps {
    items?: StickyContentItem[];
    className?: string;
    leftClassName?: string;
    rightClassName?: string;
    contentClassName?: string;
    imageClassName?: string;
    containerHeight?: string;
    bgColor?: string;
    contentEnterYPercent?: number;
    contentExitYPercent?: number;
    contentTransitionDuration?: number;
    contentDelay?: number;
    stepGap?: number;
    enableImageScaleFlow?: boolean;
    initialImageScale?: number;
    activeImageScale?: number;
    exitImageScale?: number;
}

export default function StickyContentWrapper({
    items = [],
    className = "",
    leftClassName = "",
    rightClassName = "",
    contentClassName = "",
    imageClassName = "",
    containerHeight,
    bgColor,
    contentEnterYPercent = 10,
    contentExitYPercent = -10,
    contentTransitionDuration = 0.8,
    contentDelay = 0.28,
    stepGap = 2,
    enableImageScaleFlow = true,
    initialImageScale = 1.3,
    activeImageScale = 1.1,
    exitImageScale = 1,
}: StickyContentCompProps) {
    const containerRef = useRef<HTMLDivElement | null>(null);
    const stickyRef = useRef<HTMLDivElement | null>(null);
    const contentRefsRef = useRef<(HTMLDivElement | null)[]>([]);
    const imageRefsRef = useRef<(HTMLDivElement | null)[]>([]);

    useLayoutEffect(() => {
        if (!containerRef.current || !stickyRef.current || !items.length) return;

        const reducedMotion = prefersReducedMotion();
        const contents = contentRefsRef.current;
        const images = imageRefsRef.current;

        contents.forEach((content, index) => {
            gsap.set(content, {
                autoAlpha: index === 0 ? 1 : 0,
                yPercent: index === 0 ? 0 : contentEnterYPercent,
                zIndex: items.length - index,
            });
        });

        images.forEach((image, index) => {
            gsap.set(image, {
                autoAlpha: reducedMotion ? (index === 0 ? 1 : 0) : 1,
                zIndex: items.length - index,
                clipPath: "inset(0% 0% 0% 0%)",
                scale: reducedMotion ? 1 : enableImageScaleFlow ? (index === 0 ? activeImageScale : initialImageScale) : 1,
                transformOrigin: "center center",
            });
        });

        const totalTimelineDuration = items.length > 1
            ? ((items.length - 2) * stepGap) + contentTransitionDuration + contentDelay
            : 1;

        const snapValues = items.length > 1 ? Array.from({ length: items.length }, (_, index) => index / (items.length - 1)) : [0];

        const timeline = gsap.timeline({
            scrollTrigger: {
                trigger: containerRef.current,
                start: "top top",
                end: "bottom bottom",
                scrub: 1,
                snap: (items.length > 1 ? {
                    snapTo: snapValues,
                    duration: { min: 0.2, max: 0.5 },
                    ease: "power2.inOut",
                    delay: 0,
                    inertia: false,
                } : false) as any,
            },
        });

        items.forEach((_, index) => {
            if (index === items.length - 1) return;

            const currentContent = contents[index];
            const nextContent = contents[index + 1];
            const currentImage = images[index];
            const nextImage = images[index + 1];
            const stepStart = index * stepGap;
            const nextContentStart = stepStart + contentTransitionDuration + contentDelay;

            timeline
                .to(currentContent, { autoAlpha: 0, yPercent: contentExitYPercent, duration: contentTransitionDuration, ease: "power2.inOut" }, stepStart)
                .fromTo(nextContent, { autoAlpha: 0, yPercent: contentEnterYPercent }, { autoAlpha: 1, yPercent: 0, duration: contentTransitionDuration, ease: "power2.inOut" }, nextContentStart)
                .to(currentImage, reducedMotion ? { autoAlpha: 0, duration: stepGap, ease: "none" } : { clipPath: "inset(0% 0% 100% 0%)", scale: enableImageScaleFlow ? exitImageScale : 1, duration: stepGap, ease: "none" }, stepStart);

            if (reducedMotion) {
                timeline.to(nextImage, { autoAlpha: 1, duration: stepGap, ease: "none" }, stepStart);
            } else if (enableImageScaleFlow) {
                timeline.to(nextImage, { scale: activeImageScale, duration: stepGap, ease: "none" }, stepStart);
            }
        });

        timeline.duration(totalTimelineDuration);
        ScrollTrigger.refresh();

        return () => {
            timeline.kill();
            ScrollTrigger.getAll().forEach(t => t.kill());
        };
    }, [items, contentEnterYPercent, contentExitYPercent, contentTransitionDuration, contentDelay, stepGap, enableImageScaleFlow, initialImageScale, activeImageScale, exitImageScale]);

    if (!items.length) return null;

    return (
        <section className={`relative w-full ${className}`} style={bgColor ? { backgroundColor: bgColor } : undefined}>
            <div
                ref={containerRef}
                className="w-full relative"
                style={{ height: containerHeight || `${items.length * 100}vh` }}
            >
                {/* Sticky wrapper */}
                <div
                    ref={stickyRef}
                    className="sticky top-0 flex h-screen w-full flex-col lg:flex-row items-center justify-center lg:justify-between px-6 lg:px-0 pt-20 lg:pt-0 pb-10 lg:pb-0 gap-8 lg:gap-0 overflow-hidden"
                >

                    {/* Image Side */}
                    <div className={`relative order-1 h-[35vh] lg:h-[65vh] w-full lg:w-[50%] overflow-hidden rounded-2xl shadow-xl shrink-0 ${rightClassName}`}>
                        {items.map((item, index) => (
                            <div
                                key={`image-${index}`}
                                ref={(element) => { imageRefsRef.current[index] = element; }}
                                className={`absolute inset-0 h-full w-full opacity-0 ${imageClassName}`}
                            >
                                <img
                                    src={item.image}
                                    alt={item.alt || item.imageAlt || `sticky-image-${index + 1}`}
                                    className="h-full w-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                                    width={item.width || 1080}
                                    height={item.height || 1080}
                                />
                            </div>
                        ))}
                    </div>

                    {/* Content Side */}
                    <div className={`relative order-2 flex-1 min-h-0 w-full lg:h-full lg:w-[45%] lg:flex-none flex flex-col justify-start lg:justify-center ${leftClassName}`}>
                        {items.map((item, index) => (
                            <div
                                key={`content-${index}`}
                                ref={(element) => { contentRefsRef.current[index] = element; }}
                                className={`absolute inset-0 flex flex-col justify-start lg:justify-center h-full w-full opacity-0 ${contentClassName}`}
                            >
                                {renderStickyContent(item)}
                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </section>
    );
}