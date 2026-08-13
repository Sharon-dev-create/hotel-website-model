"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export function About() {
  const ref     = useRef(null);
  const inView  = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" ref={ref} style={{ padding: "120px 40px", maxWidth: "1280px", margin: "0 auto" }}>
      <div style={{
        display:             "grid",
        gridTemplateColumns: "1fr 1fr",
        gap:                 "80px",
        alignItems:          "center",
      }}
      className="about-grid">

        {/* Left */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <div style={{
            display:     "flex",
            alignItems:  "center",
            gap:         "12px",
            marginBottom:"20px",
          }}>
            <div style={{ width: "32px", height: "1px", background: "var(--gold)" }} />
            <span style={{
              fontSize:      "11px",
              fontWeight:    600,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color:         "var(--gold)",
            }}>
              Our Story
            </span>
          </div>

          <h2 style={{
            fontFamily:    "var(--font-playfair)",
            fontSize:      "clamp(32px, 4vw, 48px)",
            fontWeight:    400,
            lineHeight:    1.2,
            color:         "#fff",
            marginBottom:  "24px",
          }}>
            A Sanctuary in the<br />
            <span style={{ fontStyle: "italic", color: "var(--gold)" }}>City of Peace</span>
          </h2>

          <p style={{
            fontSize:     "16px",
            lineHeight:   1.8,
            color:        "rgba(255,255,255,0.6)",
            marginBottom: "20px",
          }}>
           Xceptional Place Hotel is a new hospitality destination in Rayfield, Jos, created to provide guests with a comfortable and welcoming place to stay.
          </p>

          <p style={{
            fontSize:  "16px",
            lineHeight: 1.8,
            color:     "rgba(255,255,255,0.6)",
          }}>
            Whether visiting Plateau State for work or leisure, the hotel concept focuses on comfort, convenience, and a welcoming atmosphere. Replace with verified hotel details when available.
          </p>

          {/* Stats */}
          <div style={{
            marginTop:     "48px",
            paddingTop:    "40px",
            borderTop:     "1px solid rgba(255,255,255,0.08)",
          }}>
            <div style={{ fontSize: "14px", color: "var(--grey)" }}>
              Value propositions: Comfort · Convenience · Exceptional Hospitality · Easy Booking
            </div>
          </div>
        </motion.div>

        {/* Right — decorative visual */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          style={{ position: "relative" }}
        >
          {/* Main box */}
          <div style={{
            width:        "100%",
            aspectRatio:  "4/5",
            background:   "linear-gradient(135deg, #1a1208 0%, #111 100%)",
            borderRadius: "4px",
            border:       "1px solid rgba(201,162,39,0.15)",
            display:      "flex",
            alignItems:   "center",
            justifyContent:"center",
            position:     "relative",
            overflow:     "hidden",
          }}>
            {/* Pattern */}
            <div style={{
              position:   "absolute",
              inset:      0,
              backgroundImage: `repeating-linear-gradient(
                45deg,
                transparent,
                transparent 40px,
                rgba(201,162,39,0.02) 40px,
                rgba(201,162,39,0.02) 41px
              )`,
            }} />

            <div style={{ textAlign: "center", position: "relative", zIndex: 1 }}>
              <div style={{
                fontFamily:    "var(--font-playfair)",
                fontSize:      "64px",
                color:         "rgba(201,162,39,0.15)",
                lineHeight:    1,
                marginBottom:  "16px",
              }}>
                NS
              </div>
              <div style={{
                width:        "40px",
                height:       "1px",
                background:   "var(--gold)",
                margin:       "0 auto 16px",
                opacity:      0.4,
              }} />
              <div style={{
                fontSize:      "10px",
                letterSpacing: "0.3em",
                textTransform: "uppercase",
                color:         "rgba(201,162,39,0.4)",
              }}>
                Est. Jos · Nigeria
              </div>
            </div>
          </div>

          {/* Floating accent card */}
          <div style={{
            position:   "absolute",
            bottom:     "-24px",
            left:       "-24px",
            padding:    "20px 24px",
            background: "var(--gold)",
            borderRadius:"2px",
          }}>
            <div style={{
              fontFamily:    "var(--font-playfair)",
              fontSize:      "24px",
              fontWeight:    400,
              color:         "#0B0B0B",
              lineHeight:    1,
              marginBottom:  "4px",
            }}>
              5★
            </div>
            <div style={{
              fontSize:      "10px",
              fontWeight:    700,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              color:         "rgba(11,11,11,0.7)",
            }}>
              Guest Rated
            </div>
          </div>
        </motion.div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .about-grid {
            grid-template-columns: 1fr !important;
            gap: 48px !important;
          }
        }
      `}</style>
    </section>
  );
}