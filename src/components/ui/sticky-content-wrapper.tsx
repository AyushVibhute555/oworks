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
        // FIX: Removed h-full so the parent's justify-center perfectly aligns the text with the image
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
    const sectionRef = useRef<HTMLElement | null>(null);
    const stickyRef = useRef<HTMLDivElement | null>(null);
    const contentRefsRef = useRef<(HTMLDivElement | null)[]>([]);
    const imageRefsRef = useRef<(HTMLDivElement | null)[]>([]);

    useLayoutEffect(() => {
        if (!sectionRef.current || !stickyRef.current || !items.length) return;

        const reducedMotion = prefersReducedMotion();
        const context = gsap.context(() => {
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

            const totalTimelineDuration = Math.max(1, (items.length - 1) * stepGap);
            const snapValues = items.length > 1 ? Array.from({ length: items.length }, (_, index) => index / (items.length - 1)) : [0];

            const timeline = gsap.timeline({
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top top",
                    end: "bottom bottom",
                    scrub: 1,
                    snap: (items.length > 1 ? {
                        snapTo: snapValues,
                        duration: { min: 0.2, max: 0.5 },
                        ease: "power2.inOut",
                        delay: 0,
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
        }, sectionRef);

        return () => context.revert();
    }, [items, contentEnterYPercent, contentExitYPercent, contentTransitionDuration, contentDelay, stepGap, enableImageScaleFlow, initialImageScale, activeImageScale, exitImageScale]);

    if (!items.length) return null;

    return (
        <section ref={sectionRef} className={`relative flex w-full justify-between ${className}`} style={{ height: containerHeight || `${items.length * 100}vh`, ...(bgColor ? { backgroundColor: bgColor } : null) }}>
            <div ref={stickyRef} className="sticky top-0 flex h-screen w-full items-center justify-between max-lg:h-screen max-lg:flex-col-reverse max-lg:justify-end">

                {/* Left Side: Text Content */}
                <div className={`relative h-full w-[45%] max-lg:h-[50%] max-lg:w-full ${leftClassName}`} style={bgColor ? { backgroundColor: bgColor } : undefined}>
                    {items.map((item, index) => (
                        <div
                            key={`content-${index}`}
                            ref={(element) => { contentRefsRef.current[index] = element; }}
                            className={`absolute inset-0 flex flex-col justify-center h-full w-full opacity-0 max-lg:pt-8 ${contentClassName}`}
                        >
                            {renderStickyContent(item)}
                        </div>
                    ))}
                </div>

                {/* Right Side: Image */}
                <div className={`relative h-[65vh] w-[50%] overflow-hidden rounded-2xl shadow-xl max-lg:mt-[10vh] max-lg:h-[40%] max-lg:w-full max-lg:rounded-xl ${rightClassName}`}>
                    {items.map((item, index) => (
                        <div key={`image-${index}`} ref={(element) => { imageRefsRef.current[index] = element; }} className={`absolute inset-0 h-full w-full opacity-0 ${imageClassName}`}>
                            <img src={item.image} alt={item.alt || item.imageAlt || `sticky-image-${index + 1}`} className="h-full w-full object-cover grayscale hover:grayscale-0 transition-all duration-700" width={item.width || 1080} height={item.height || 1080} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}