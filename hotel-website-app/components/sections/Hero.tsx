"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

export function Hero() {
  return (
    <section
      id="home"
      style={{
        position:   "relative",
        height:     "100vh",
        minHeight:  "600px",
        display:    "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow:   "hidden",
      }}
    >
      {/* Background */}
      <div style={{
        position:   "absolute",
        inset:      0,
        background: "linear-gradient(135deg, #1a1208 0%, #0B0B0B 50%, #0d0d12 100%)",
      }} />

      {/* Gold geometric accent */}
      <div style={{
        position:   "absolute",
        top:        "20%",
        right:      "8%",
        width:      "1px",
        height:     "200px",
        background: "linear-gradient(to bottom, transparent, var(--gold), transparent)",
        opacity:    0.4,
      }} />
      <div style={{
        position:   "absolute",
        bottom:     "25%",
        left:       "8%",
        width:      "80px",
        height:     "1px",
        background: "linear-gradient(to right, transparent, var(--gold), transparent)",
        opacity:    0.4,
      }} />

      {/* Overlay pattern */}
      <div style={{
        position:   "absolute",
        inset:      0,
        backgroundImage: `radial-gradient(circle at 20% 50%, rgba(201,162,39,0.04) 0%, transparent 50%),
                          radial-gradient(circle at 80% 20%, rgba(201,162,39,0.03) 0%, transparent 40%)`,
      }} />

      {/* Content */}
      <div style={{
        position:   "relative",
        zIndex:     2,
        textAlign:  "center",
        padding:    "0 24px",
        maxWidth:   "900px",
      }}>
        {/* Pre-heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          style={{
            display:        "inline-flex",
            alignItems:     "center",
            gap:            "12px",
            marginBottom:   "28px",
          }}
        >
          <div style={{ width: "40px", height: "1px", background: "var(--gold)" }} />
          <span style={{
            fontSize:      "11px",
            fontWeight:    600,
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            color:         "var(--gold)",
          }}>
            Jos, Plateau State · Nigeria
          </span>
          <div style={{ width: "40px", height: "1px", background: "var(--gold)" }} />
        </motion.div>

        {/* Main heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.4 }}
          style={{
            fontFamily:    "var(--font-playfair)",
            fontSize:      "clamp(36px, 7vw, 72px)",
            fontWeight:    400,
            lineHeight:    1.1,
            letterSpacing: "-0.02em",
            color:         "#fff",
            marginBottom:  "24px",
          }}
        >
          Experience Comfort<br />
          <span style={{ color: "var(--gold)", fontStyle: "italic" }}>
            in the Heart of Jos
          </span>
        </motion.h1>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          style={{
            fontSize:     "clamp(15px, 2vw, 18px)",
            lineHeight:   1.7,
            color:        "rgba(255,255,255,0.65)",
            marginBottom: "44px",
            maxWidth:     "600px",
            margin:       "0 auto 44px",
          }}
        >
          Elegant rooms, exceptional service, and a peaceful atmosphere
          for business and leisure travelers.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          style={{
            display:        "flex",
            gap:            "16px",
            justifyContent: "center",
            flexWrap:       "wrap",
          }}
        >
          
            href="#booking"
            style={{
              padding:       "16px 40px",
              background:    "var(--gold)",
              color:         "#0B0B0B",
              fontSize:      "13px",
              fontWeight:    700,
              letterSpacing: "0.12em",
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
            Book Your Stay
          </a>
          
            href="#rooms"
            style={{
              padding:       "16px 40px",
              background:    "transparent",
              color:         "#fff",
              fontSize:      "13px",
              fontWeight:    600,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              textDecoration:"none",
              borderRadius:  "2px",
              border:        "1px solid rgba(255,255,255,0.3)",
              transition:    "all 0.25s",
            }}
            onMouseEnter={e => {
              e.currentTarget.style.borderColor = "var(--gold)";
              e.currentTarget.style.color       = "var(--gold)";
            }}
            onMouseLeave={e => {
              e.currentTarget.style.borderColor = "rgba(255,255,255,0.3)";
              e.currentTarget.style.color       = "#fff";
            }}
          >
            Explore Rooms
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        style={{
          position:   "absolute",
          bottom:     "36px",
          left:       "50%",
          transform:  "translateX(-50%)",
          display:    "flex",
          flexDirection: "column",
          alignItems: "center",
          gap:        "8px",
          cursor:     "pointer",
        }}
        onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
      >
        <span style={{ fontSize: "10px", letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--grey)" }}>
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <ChevronDown size={16} color="var(--gold)" />
        </motion.div>
      </motion.div>
    </section>
  );
}