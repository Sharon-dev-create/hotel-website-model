"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { hotelConfig } from "../../lib/hotelConfig";

export function Hero() {
  return (
    <section
      id="home"
      style={{
        position: "relative",
        height: "100vh",
        minHeight: "600px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
      }}
    >
      {/* Real hotel photo */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: "url('/images/homepage-Image.webp')",
          backgroundSize: "cover",
          backgroundPosition: "center 40%",
          backgroundRepeat: "no-repeat",
        }}
      />

      {/* Dark overlay — makes text readable over the bright garden photo */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(to bottom, rgba(5,5,5,0.55) 0%, rgba(5,5,5,0.80) 100%)",
        }}
      />

      {/* Gold tint overlay — ties into brand color */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(ellipse at 30% 60%, rgba(201,162,39,0.08) 0%, transparent 60%)",
        }}
      />

      {/* Content */}
      <div
        style={{
          position: "relative",
          zIndex: 2,
          textAlign: "center",
          padding: "0 24px",
          maxWidth: "900px",
        }}
      >
        {/* Pre-heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "12px",
            marginBottom: "28px",
          }}
        >
          <div
            style={{ width: "40px", height: "1px", background: "var(--gold)" }}
          />
          <span
            style={{
              fontSize: "11px",
              fontWeight: 600,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "var(--gold)",
            }}
          >
            {hotelConfig.location}
          </span>
          <div
            style={{ width: "40px", height: "1px", background: "var(--gold)" }}
          />
        </motion.div>

        {/* Main heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.4 }}
          style={{
            fontFamily: "var(--font-playfair)",
            fontSize: "clamp(36px, 7vw, 72px)",
            fontWeight: 400,
            lineHeight: 1.1,
            letterSpacing: "-0.02em",
            color: "#fff",
            marginBottom: "24px",
          }}
        >
          Experience Exceptional Hospitality in Jos
          <br />
          <span style={{ color: "var(--gold)", fontStyle: "italic" }}>
            Your Exceptional Stay Begins Here
          </span>
        </motion.h1>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          style={{
            fontSize: "clamp(15px, 2vw, 18px)",
            lineHeight: 1.7,
            color: "rgba(255,255,255,0.65)",
            margin: "0 auto 44px",
            maxWidth: "600px",
          }}
        >
          Discover comfort, convenience, and exceptional hospitality at {hotelConfig.name}, Rayfield, Jos.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          style={{
            display: "flex",
            gap: "16px",
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          <a
            href={hotelConfig.whatsapp ? `https://wa.me/${hotelConfig.whatsapp}` : "#contact"}
            style={{
              padding: "16px 40px",
              background: "var(--gold)",
              color: "#0B0B0B",
              fontSize: "13px",
              fontWeight: 700,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              textDecoration: "none",
              borderRadius: "2px",
              transition: "all 0.25s",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.background =
                "#D4AF37";
              (e.currentTarget as HTMLAnchorElement).style.transform =
                "translateY(-2px)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.background =
                "var(--gold)";
              (e.currentTarget as HTMLAnchorElement).style.transform =
                "translateY(0)";
            }}
          >
            Book Your Stay
          </a>

          <a
            href="#rooms"
            style={{
              padding: "16px 40px",
              background: "transparent",
              color: "#fff",
              fontSize: "13px",
              fontWeight: 600,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              textDecoration: "none",
              borderRadius: "2px",
              border: "1px solid rgba(255,255,255,0.3)",
              transition: "all 0.25s",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.borderColor =
                "var(--gold)";
              (e.currentTarget as HTMLAnchorElement).style.color =
                "var(--gold)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.borderColor =
                "rgba(255,255,255,0.3)";
              (e.currentTarget as HTMLAnchorElement).style.color = "#fff";
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
          position: "absolute",
          bottom: "36px",
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "8px",
          cursor: "pointer",
        }}
        onClick={() =>
          document
            .getElementById("about")
            ?.scrollIntoView({ behavior: "smooth" })
        }
      >
        <span
          style={{
            fontSize: "10px",
            letterSpacing: "0.15em",
            textTransform: "uppercase",
            color: "var(--grey)",
          }}
        >
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
