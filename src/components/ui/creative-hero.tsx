"use client";

import { useEffect, useRef, useState } from "react";
import GlyphPortal from "@/components/ui/glyph-portal";
import { Link, useNavigate } from "react-router-dom";
import { ArrowDown } from "lucide-react";
import { motion } from "framer-motion";

const BRAND_FACE = '"Bona Nova", "Trykker", serif';

export default function CreativeHero() {
  const [face, setFace] = useState<string | null>(null);
  const rootRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  // Wait for the webfont before mounting GlyphPortal.
  // Its readInk() samples the font on a <canvas> at mount — if the font
  // hasn't loaded yet, it locks in the wrong glyph shape for the whole session.
  useEffect(() => {
    let cancelled = false;

    (async () => {
      try {
        await Promise.all([
          document.fonts.load('400 100px "Bona Nova"'),
          document.fonts.load('700 100px "Bona Nova"'),
        ]);
        await document.fonts.ready;
      } catch (err) {
        console.warn(
          "[CreativeHero] Bona Nova failed to load, using fallback.",
          err
        );
      }
      if (!cancelled) setFace(BRAND_FACE);
    })();

    return () => {
      cancelled = true;
    };
  }, []);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const bind = () => {
      const btn = root.querySelector<HTMLElement>("[data-gp-enter]");
      if (!btn || btn.dataset.navBound === "1") return;
      btn.dataset.navBound = "1";

      btn.addEventListener("click", (event) => {
        event.preventDefault();
        window.setTimeout(() => {
          navigate("/services");
        }, 600);
      });
    };

    bind();
    const observer = new MutationObserver(bind);
    observer.observe(root, { childList: true, subtree: true });

    return () => observer.disconnect();
  }, [navigate]);

  return (
    <div
      ref={rootRef}
      data-slipstream-demo
      role="region"
      aria-label="Oworks. Scroll to step inside."
      style={{
        width: "100%",
        background: "black",
        containerType: "inline-size",
        fontFamily: face ?? BRAND_FACE,
      }}
    >
      <style>{`
        [data-slipstream-demo] [data-gp-caption]{inset:calc(var(--gp-word-bottom,50%) + 82px) 24px auto;justify-content:center;}
        [data-slipstream-demo] [data-gp-hint]{display:none;}
        [data-slipstream-demo] [data-gp-enter]{min-height:46px;padding:0 20px;gap:28px;background:white;border:1px solid white;border-radius:9999px;color:black;font-size:13px;font-weight:500;box-shadow:0 1px 2px rgba(255,255,255,0.1);transition:all .3s ease;cursor:pointer;}
        [data-slipstream-demo] [data-gp-enter]:hover{background:rgba(255,255,255,0.9);box-shadow:0 4px 12px rgba(255,255,255,0.15); transform: translateY(-2px);}
        [data-slipstream-demo] [data-gp-enter]:focus-visible{outline:2px solid white;outline-offset:4px;}
        [data-slipstream-demo] [data-gp-touch-picker]{top:auto;bottom:18px;left:50%;}
        [data-slipstream-demo] [data-gp-select]{border-color:transparent;border-radius:8px;font-size:12px;color:rgba(255,255,255,0.6);}
        [data-sublime-header]{position:absolute;inset:clamp(24px,4.5cqw,48px) clamp(24px,5cqw,64px) auto;display:flex;align-items:center;justify-content:space-between;gap:20px;}
        [data-sublime-logo]{font-size:22px;font-weight:700;letter-spacing:-.04em;color:white; font-family:${BRAND_FACE};}
        [data-sublime-category]{font-size:13px;line-height:1.5;color:rgba(255,255,255,0.6); font-family:${BRAND_FACE}; font-weight: 500;}
        [data-sublime-eyebrow]{position:absolute;inset:auto 24px calc(100% - var(--gp-word-top,35%) + 32px);margin:0;text-align:center;font-size:14px;font-weight:500;line-height:1.5;letter-spacing:.02em;color:rgba(255,255,255,0.6); font-family:${BRAND_FACE}; text-transform: uppercase;}
        [data-sublime-support]{position:absolute;inset:calc(var(--gp-word-bottom,50%) + 32px) 24px auto;margin:0;text-align:center;font-size:18px;font-weight:400;line-height:1.5;color:rgba(255,255,255,0.9); font-family:${BRAND_FACE}; font-style: italic;}
        [data-sublime-scroll]{position:absolute;inset:auto 24px 7%;text-align:center;color:rgba(255,255,255,0.6);font-size:12px;letter-spacing:.05em; font-family:${BRAND_FACE}; text-transform: uppercase; font-weight: 600;}
        @media(any-pointer:coarse){[data-sublime-scroll]{bottom:13%;}}
        @container(max-width:450px){[data-sublime-category]{max-width:12ch;text-align:right;}[data-sublime-eyebrow]{font-size:12px;}[data-sublime-support]{font-size:14px;}[data-slipstream-demo] [data-gp-caption]{top:calc(var(--gp-word-bottom,50%) + 76px);}}
        @container(max-height:479px){[data-sublime-header]{top:18px;}[data-sublime-support]{top:calc(var(--gp-word-bottom,50%) + 16px);}[data-slipstream-demo] [data-gp-caption]{top:calc(var(--gp-word-bottom,50%) + 60px);}[data-sublime-scroll]{display:none;}}
        [data-slipstream-demo] [data-gp-content]{padding:0; font-family:${BRAND_FACE}; background: transparent; display: flex; align-items: center; justify-content: center;}
        [data-slipstream-demo] section,[data-slipstream-demo] [data-gp-caption]{font-family:${BRAND_FACE};}
        [data-slipstream-copy]{display:flex;width:100%; height: 100%; flex-direction:column;align-items:center; justify-content: center; gap: clamp(2rem,5svh,3.5rem); text-align: center; position: relative; z-index: 10;}
        [data-slipstream-copy] h1{max-width:48rem;margin:0;color:hsl(var(--ink));font-size:clamp(3rem,1.5rem + 5cqw,6rem);font-weight:400;line-height:1.05;letter-spacing:-0.02em;text-wrap:balance; font-family:${BRAND_FACE};}
        [data-slipstream-features]{display:flex; justify-content: center; gap: 1.5rem; margin-top: 1rem; flex-wrap: wrap;}

        .portal-inner-content {
           background: transparent;
           position: absolute;
           inset: 0;
           display: flex;
           flex-direction: column;
           align-items: center;
           justify-content: center;
           padding: 2rem;
        }

        .btn-portal-primary {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 0.75rem 2rem;
          background-color: hsl(var(--ink));
          color: hsl(var(--cream));
          font-weight: 600;
          border-radius: 9999px;
          transition: all 0.3s ease;
          text-decoration: none;
        }
        .btn-portal-primary:hover {
          background-color: hsl(var(--ink-light));
          transform: translateY(-2px);
        }

        .btn-portal-outline {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 0.75rem 2rem;
          background-color: transparent;
          color: hsl(var(--ink));
          border: 1px solid hsl(var(--ink));
          font-weight: 600;
          border-radius: 9999px;
          transition: all 0.3s ease;
          text-decoration: none;
        }
        .btn-portal-outline:hover {
          background-color: rgba(0, 0, 0, 0.05);
          transform: translateY(-2px);
        }
      `}</style>

      {face ? (
        <GlyphPortal
          word="oworks"
          fontFamily={face}
          fontWeight={400}
          style={{
            fontFamily: face,
            fontStyle: "normal",
            "--gp-paper": "black",
            "--gp-ink": "white",
            "--gp-field": "transparent",
            "--gp-foreground": "hsl(var(--ink))",
          }}
          scrollLength={1.2}
          interactive={true}
          annotations={false}
          enterLabel="Explore Services"
          background={
            <div
              className="absolute inset-0 z-0 bg-cream"
              style={{ backgroundColor: "hsl(var(--cream))" }}
            />
          }
          front={
            <>
              <p data-sublime-eyebrow>Creative Excellence</p>
              <p data-sublime-support>
                Step into a new dimension of digital experiences.
              </p>
            </>
          }
        >
          <div className="portal-inner-content">
            <div data-slipstream-copy>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="uppercase tracking-[0.2em] text-sm font-semibold mb-[-2rem]"
                style={{ color: "hsl(var(--ink-muted))" }}
              >
                Welcome to the Future
              </motion.p>
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.8,
                  delay: 0.1,
                  ease: [0.16, 1, 0.3, 1],
                }}
              >
                Do it Right, with oworks!
              </motion.h1>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.8,
                  delay: 0.2,
                  ease: [0.16, 1, 0.3, 1],
                }}
                data-slipstream-features
              >
                <Link to="/services" className="btn-portal-primary">
                  What we do
                </Link>
                <Link to="/about" className="btn-portal-outline">
                  About Us
                </Link>
              </motion.div>
            </div>
          </div>
        </GlyphPortal>
      ) : (
        <div
          role="status"
          style={{
            height: "100svh",
            display: "grid",
            placeItems: "center",
            color: "white",
            fontSize: 14,
            fontFamily: BRAND_FACE,
            background: "black",
          }}
        >
          Initializing experience...
        </div>
      )}
    </div>
  );
}