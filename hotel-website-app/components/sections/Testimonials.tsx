"use client";

import { motion }    from "framer-motion";
import { useInView } from "framer-motion";
import { useRef }    from "react";
import { Star, ExternalLink } from "lucide-react";

export function Testimonials() {
  const ref    = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} style={{ padding: "120px 40px", background: "#0d0d0d" }}>
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
              Guest Reviews
            </span>
            <div style={{ width: "32px", height: "1px", background: "var(--gold)" }} />
          </div>
          <h2 style={{ fontFamily: "var(--font-playfair)", fontSize: "clamp(28px, 4vw, 48px)", fontWeight: 400, color: "#fff", marginBottom: "16px" }}>
            What Our Guests Say
          </h2>
          <p style={{ fontSize: "15px", color: "var(--grey)", lineHeight: 1.7, maxWidth: "480px", margin: "0 auto" }}>
            Read verified guest reviews on Google to hear directly from people who have stayed with us.
          </p>
        </motion.div>

        {/* Review prompt card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
          style={{
            maxWidth:     "640px",
            margin:       "0 auto",
            padding:      "48px 40px",
            background:   "rgba(201,162,39,0.04)",
            border:       "1px solid rgba(201,162,39,0.2)",
            borderRadius: "4px",
            textAlign:    "center",
          }}
        >
          {/* Stars */}
          <div style={{ display: "flex", justifyContent: "center", gap: "6px", marginBottom: "24px" }}>
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} size={20} fill="var(--gold)" color="var(--gold)" />
            ))}
          </div>

          <p style={{
            fontFamily:   "var(--font-playfair)",
            fontSize:     "20px",
            fontStyle:    "italic",
            color:        "#fff",
            lineHeight:   1.6,
            marginBottom: "32px",
          }}>
            Reviews and testimonials can be integrated here. Use verified sources (Google, TripAdvisor, etc.) when available.
          </p>
        </motion.div>
      </div>
    </section>
  );
}