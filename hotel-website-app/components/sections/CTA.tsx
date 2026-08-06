"use client";

import { motion }    from "framer-motion";
import { useInView } from "framer-motion";
import { useRef }    from "react";

export function CTA() {
  const ref    = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} style={{ padding: "80px 40px" }}>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        style={{
          maxWidth:      "1280px",
          margin:        "0 auto",
          padding:       "80px 64px",
          background:    "linear-gradient(135deg, rgba(201,162,39,0.12) 0%, rgba(201,162,39,0.04) 100%)",
          border:        "1px solid rgba(201,162,39,0.25)",
          borderRadius:  "4px",
          textAlign:     "center",
          position:      "relative",
          overflow:      "hidden",
        }}
      >
        {/* Decorative lines */}
        <div style={{
          position:   "absolute",
          top:        0,
          left:       "50%",
          transform:  "translateX(-50%)",
          width:      "1px",
          height:     "40px",
          background: "var(--gold)",
          opacity:    0.4,
        }} />

        <div style={{
          fontFamily:    "var(--font-playfair)",
          fontSize:      "clamp(28px, 4vw, 52px)",
          fontWeight:    400,
          color:         "#fff",
          marginBottom:  "16px",
          marginTop:     "16px",
        }}>
          Ready to Stay With Us?
        </div>

        <p style={{
          fontSize:     "16px",
          color:        "var(--grey)",
          marginBottom: "40px",
          lineHeight:   1.7,
        }}>
          Book your room today and experience the Novel Suite difference.
        </p>

        
          href="#booking"
          style={{
            display:       "inline-flex",
            alignItems:    "center",
            gap:           "10px",
            padding:       "18px 48px",
            background:    "var(--gold)",
            color:         "#0B0B0B",
            fontSize:      "13px",
            fontWeight:    700,
            letterSpacing: "0.15em",
            textTransform: "uppercase",
            textDecoration:"none",
            borderRadius:  "2px",
            transition:    "all 0.25s",
          }}
          onMouseEnter={e => {
            e.currentTarget.style.background = "#D4AF37";
            e.currentTarget.style.transform  = "translateY(-2px)";
          }}
          onMouseLeave={e => {
            e.currentTarget.style.background = "var(--gold)";
            e.currentTarget.style.transform  = "translateY(0)";
          }}
        >
          Book Now
        </a>
      </motion.div>
    </section>
  );
}