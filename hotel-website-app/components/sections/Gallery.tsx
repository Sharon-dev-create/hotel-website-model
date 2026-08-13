"use client";

import { useState }  from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef }    from "react";
import { X, ZoomIn } from "lucide-react";

const IMAGES = [
  {
    src:     "/images/homepage-Image.webp",
    alt:     "Hotel grounds and entrance",
    caption: "Hotel Grounds",
    span:    "wide",
  },
  {
    src:     "/images/room1.webp",
    alt:     "Deluxe Room",
    caption: "Deluxe Room",
    span:    "normal",
  },
  {
    src:     "/images/room2.webp",
    alt:     "Executive Room",
    caption: "Executive Room",
    span:    "normal",
  },
  {
    src:     "/images/room3.jpg",
    alt:     "Suite",
    caption: "Suite",
    span:    "wide",
  },
];

export function Gallery() {
  const ref          = useRef(null);
  const inView       = useInView(ref, { once: true, margin: "-80px" });
  const [lightbox, setLightbox] = useState<number | null>(null);

  function openLightbox(i: number) { setLightbox(i); }
  function closeLightbox()          { setLightbox(null); }
  function prev() { setLightbox(i => i !== null ? (i - 1 + IMAGES.length) % IMAGES.length : null); }
  function next() { setLightbox(i => i !== null ? (i + 1) % IMAGES.length : null); }

  return (
    <>
      <section id="gallery" ref={ref} style={{ padding: "120px 40px", background: "#0B0B0B" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto" }}>

          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
            style={{ textAlign: "center", marginBottom: "64px" }}
          >
            <div style={{ display: "inline-flex", alignItems: "center", gap: "12px", marginBottom: "20px" }}>
              <div style={{ width: "32px", height: "1px", background: "var(--gold)" }} />
              <span style={{ fontSize: "11px", fontWeight: 600, letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--gold)" }}>
                Photo Gallery
              </span>
              <div style={{ width: "32px", height: "1px", background: "var(--gold)" }} />
            </div>
            <h2 style={{ fontFamily: "var(--font-playfair)", fontSize: "clamp(28px, 4vw, 48px)", fontWeight: 400, color: "#fff", marginBottom: "16px" }}>
              Experience {"Xceptional Place Hotel"}
            </h2>
            <p style={{ fontSize: "15px", color: "var(--grey)", lineHeight: 1.7, maxWidth: "440px", margin: "0 auto" }}>
              A curated gallery to showcase the hotel&apos;s spaces. Replace these images with official photography when available.
            </p>
          </motion.div>

          {/* Masonry grid */}
          <div style={{
            display:             "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gridAutoRows:        "260px",
            gap:                 "12px",
          }}
          className="gallery-grid">
            {IMAGES.map((img, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                onClick={() => openLightbox(i)}
                style={{
                  position:    "relative",
                  overflow:    "hidden",
                  borderRadius:"4px",
                  cursor:      "pointer",
                  gridColumn:  img.span === "wide" ? "span 2" : "span 1",
                  border:      "1px solid rgba(255,255,255,0.05)",
                }}
              >
                {/* Image */}
                <div
                  style={{
                    width:              "100%",
                    height:             "100%",
                    backgroundImage:    `url('${img.src}')`,
                    backgroundSize:     "cover",
                    backgroundPosition: "center",
                    transition:         "transform 0.6s ease",
                  }}
                  onMouseEnter={e => {
                    (e.currentTarget as HTMLDivElement).style.transform = "scale(1.06)";
                    const overlay = e.currentTarget.nextElementSibling as HTMLDivElement;
                    if (overlay) overlay.style.opacity = "1";
                  }}
                  onMouseLeave={e => {
                    (e.currentTarget as HTMLDivElement).style.transform = "scale(1)";
                    const overlay = e.currentTarget.nextElementSibling as HTMLDivElement;
                    if (overlay) overlay.style.opacity = "0";
                  }}
                />

                {/* Hover overlay */}
                <div style={{
                  position:       "absolute",
                  inset:          0,
                  background:     "linear-gradient(to top, rgba(11,11,11,0.85) 0%, rgba(11,11,11,0.2) 60%, transparent 100%)",
                  opacity:        0,
                  transition:     "opacity 0.3s ease",
                  display:        "flex",
                  flexDirection:  "column",
                  justifyContent: "flex-end",
                  alignItems:     "flex-start",
                  padding:        "20px",
                  pointerEvents:  "none",
                }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "6px" }}>
                    <ZoomIn size={14} color="var(--gold)" />
                    <span style={{ fontSize: "10px", fontWeight: 600, letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--gold)" }}>
                      View
                    </span>
                  </div>
                  <span style={{ fontFamily: "var(--font-playfair)", fontSize: "16px", color: "#fff" }}>
                    {img.caption}
                  </span>
                </div>

                {/* Gold corner accent */}
                <div style={{
                  position:   "absolute",
                  top:        "12px",
                  right:      "12px",
                  width:      "20px",
                  height:     "20px",
                  borderTop:  "1.5px solid rgba(201,162,39,0.5)",
                  borderRight:"1.5px solid rgba(201,162,39,0.5)",
                  opacity:    0.6,
                }} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={closeLightbox}
            style={{
              position:       "fixed",
              inset:          0,
              zIndex:         200,
              background:     "rgba(0,0,0,0.95)",
              display:        "flex",
              alignItems:     "center",
              justifyContent: "center",
              padding:        "24px",
            }}
          >
            {/* Image */}
            <motion.div
              key={lightbox}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.25 }}
              onClick={e => e.stopPropagation()}
              style={{
                position:  "relative",
                maxWidth:  "1000px",
                maxHeight: "80vh",
                width:     "100%",
              }}
            >
              <img
                src={IMAGES[lightbox].src}
                alt={IMAGES[lightbox].alt}
                style={{
                  width:        "100%",
                  maxHeight:    "80vh",
                  objectFit:    "contain",
                  borderRadius: "4px",
                  display:      "block",
                }}
              />

              {/* Caption */}
              <div style={{
                position:   "absolute",
                bottom:     "-40px",
                left:       0,
                right:      0,
                textAlign:  "center",
              }}>
                <span style={{
                  fontFamily:    "var(--font-playfair)",
                  fontSize:      "15px",
                  color:         "rgba(255,255,255,0.6)",
                  fontStyle:     "italic",
                }}>
                  {IMAGES[lightbox].caption}
                </span>
              </div>

              {/* Prev button */}
              <button
                onClick={e => { e.stopPropagation(); prev(); }}
                style={{
                  position:       "absolute",
                  left:           "-60px",
                  top:            "50%",
                  transform:      "translateY(-50%)",
                  width:          "44px",
                  height:         "44px",
                  borderRadius:   "2px",
                  background:     "rgba(201,162,39,0.15)",
                  border:         "1px solid rgba(201,162,39,0.3)",
                  color:          "var(--gold)",
                  fontSize:       "18px",
                  cursor:         "pointer",
                  display:        "flex",
                  alignItems:     "center",
                  justifyContent: "center",
                  transition:     "background 0.2s",
                }}
                onMouseEnter={e => { (e.currentTarget as HTMLButtonElement).style.background = "rgba(201,162,39,0.3)"; }}
                onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.background = "rgba(201,162,39,0.15)"; }}
              >
                ‹
              </button>

              {/* Next button */}
              <button
                onClick={e => { e.stopPropagation(); next(); }}
                style={{
                  position:       "absolute",
                  right:          "-60px",
                  top:            "50%",
                  transform:      "translateY(-50%)",
                  width:          "44px",
                  height:         "44px",
                  borderRadius:   "2px",
                  background:     "rgba(201,162,39,0.15)",
                  border:         "1px solid rgba(201,162,39,0.3)",
                  color:          "var(--gold)",
                  fontSize:       "18px",
                  cursor:         "pointer",
                  display:        "flex",
                  alignItems:     "center",
                  justifyContent: "center",
                  transition:     "background 0.2s",
                }}
                onMouseEnter={e => { (e.currentTarget as HTMLButtonElement).style.background = "rgba(201,162,39,0.3)"; }}
                onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.background = "rgba(201,162,39,0.15)"; }}
              >
                ›
              </button>
            </motion.div>

            {/* Close button */}
            <button
              onClick={closeLightbox}
              style={{
                position:       "fixed",
                top:            "24px",
                right:          "24px",
                width:          "44px",
                height:         "44px",
                borderRadius:   "2px",
                background:     "rgba(255,255,255,0.06)",
                border:         "1px solid rgba(255,255,255,0.12)",
                color:          "#fff",
                cursor:         "pointer",
                display:        "flex",
                alignItems:     "center",
                justifyContent: "center",
                transition:     "all 0.2s",
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLButtonElement).style.background     = "rgba(201,162,39,0.15)";
                (e.currentTarget as HTMLButtonElement).style.borderColor    = "rgba(201,162,39,0.4)";
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLButtonElement).style.background     = "rgba(255,255,255,0.06)";
                (e.currentTarget as HTMLButtonElement).style.borderColor    = "rgba(255,255,255,0.12)";
              }}
            >
              <X size={18} />
            </button>

            {/* Image counter */}
            <div style={{
              position:      "fixed",
              bottom:        "24px",
              left:          "50%",
              transform:     "translateX(-50%)",
              display:       "flex",
              gap:           "8px",
              alignItems:    "center",
            }}>
              {IMAGES.map((_, i) => (
                <div
                  key={i}
                  onClick={e => { e.stopPropagation(); setLightbox(i); }}
                  style={{
                    width:        i === lightbox ? "24px" : "6px",
                    height:       "6px",
                    borderRadius: "3px",
                    background:   i === lightbox ? "var(--gold)" : "rgba(255,255,255,0.3)",
                    cursor:       "pointer",
                    transition:   "all 0.3s ease",
                  }}
                />
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @media (max-width: 768px) {
          .gallery-grid {
            grid-template-columns: 1fr 1fr !important;
            grid-auto-rows:        200px !important;
          }
          .gallery-grid > div {
            grid-column: span 1 !important;
          }
        }
        @media (max-width: 480px) {
          .gallery-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </>
  );
}