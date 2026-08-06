"use client";

import { motion }    from "framer-motion";
import { useInView } from "framer-motion";
import { useRef }    from "react";

const TESTIMONIALS = [
  {
    stars:  5,
    heading:"Comfortable stay with attentive service.",
    body:   "From the moment I arrived, the staff made me feel genuinely welcome. The room was spotless and the breakfast was excellent.",
    author: "A.M.",
    title:  "Business Traveler",
  },
  {
    stars:  5,
    heading:"The best hotel experience in Jos.",
    body:   "I have stayed in many hotels across Nigeria and Novel Suite stands out for its cleanliness, comfort, and the warmth of its team.",
    author: "C.O.",
    title:  "Leisure Guest",
  },
  {
    stars:  5,
    heading:"Perfect for corporate visits.",
    body:   "The meeting facilities are excellent and the rooms are conducive for rest after long business days. Will definitely return.",
    author: "E.B.",
    title:  "Corporate Client",
  },
];

export function Testimonials() {
  const ref    = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} style={{
      padding:    "120px 40px",
      background: "#0d0d0d",
    }}>
      <div style={{ maxWidth: "1280px", margin: "0 auto" }}>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          style={{ textAlign: "center", marginBottom: "72px" }}
        >
          <div style={{
            display:      "inline-flex",
            alignItems:   "center",
            gap:          "12px",
            marginBottom: "20px",
          }}>
            <div style={{ width: "32px", height: "1px", background: "var(--gold)" }} />
            <span style={{
              fontSize:      "11px",
              fontWeight:    600,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color:         "var(--gold)",
            }}>
              Guest Reviews
            </span>
            <div style={{ width: "32px", height: "1px", background: "var(--gold)" }} />
          </div>
          <h2 style={{
            fontFamily: "var(--font-playfair)",
            fontSize:   "clamp(28px, 4vw, 48px)",
            fontWeight: 400,
            color:      "#fff",
          }}>
            What Our Guests Say
          </h2>
        </motion.div>

        {/* Cards */}
        <div style={{
          display:             "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap:                 "24px",
        }}>
          {TESTIMONIALS.map(({ stars, heading, body, author, title }, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: i * 0.15 }}
              style={{
                padding:      "36px 32px",
                background:   "#111",
                border:       "1px solid rgba(255,255,255,0.06)",
                borderRadius: "4px",
              }}
            >
              {/* Stars */}
              <div style={{ display: "flex", gap: "4px", marginBottom: "20px" }}>
                {Array.from({ length: stars }).map((_, s) => (
                  <span key={s} style={{ color: "var(--gold)", fontSize: "14px" }}>★</span>
                ))}
              </div>

              <h3 style={{
                fontFamily:   "var(--font-playfair)",
                fontSize:     "18px",
                fontWeight:   500,
                color:        "#fff",
                marginBottom: "14px",
                lineHeight:   1.4,
              }}>
                {heading}
              </h3>

              <p style={{
                fontSize:     "14px",
                lineHeight:   1.7,
                color:        "var(--grey)",
                marginBottom: "28px",
              }}>
                &ldquo;{body}&rdquo;
              </p>

              <div style={{
                display:     "flex",
                alignItems:  "center",
                gap:         "12px",
                paddingTop:  "20px",
                borderTop:   "1px solid rgba(255,255,255,0.06)",
              }}>
                <div style={{
                  width:         "36px",
                  height:        "36px",
                  borderRadius:  "50%",
                  background:    "rgba(201,162,39,0.15)",
                  border:        "1px solid rgba(201,162,39,0.3)",
                  display:       "flex",
                  alignItems:    "center",
                  justifyContent:"center",
                  fontFamily:    "var(--font-playfair)",
                  fontSize:      "14px",
                  color:         "var(--gold)",
                }}>
                  {author[0]}
                </div>
                <div>
                  <div style={{ fontSize: "13px", fontWeight: 600, color: "#fff" }}>{author}</div>
                  <div style={{ fontSize: "11px", color: "var(--grey)", marginTop: "2px" }}>{title}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}