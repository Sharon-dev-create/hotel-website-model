"use client";

import { motion }    from "framer-motion";
import { useInView } from "framer-motion";
import { useRef }    from "react";
import { Phone, Mail, MapPin, MessageCircle, Clock } from "lucide-react";
import { hotelConfig } from "../../lib/hotelConfig";

export function Contact() {
  const ref    = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="contact" ref={ref} style={{
      padding:    "120px 40px",
      background: "#0d0d0d",
    }}>
      <div style={{ maxWidth: "1280px", margin: "0 auto" }}>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          style={{ marginBottom: "64px" }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "20px" }}>
            <div style={{ width: "32px", height: "1px", background: "var(--gold)" }} />
            <span style={{
              fontSize: "11px", fontWeight: 600,
              letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--gold)",
            }}>
              Get in Touch
            </span>
          </div>
          <h2 style={{
            fontFamily: "var(--font-playfair)",
            fontSize:   "clamp(28px, 4vw, 48px)",
            fontWeight: 400, color: "#fff",
          }}>
            We&apos;re Here for You
          </h2>
        </motion.div>

        <div style={{
          display:             "grid",
          gridTemplateColumns: "1fr 1fr",
          gap:                 "64px",
          alignItems:          "start",
        }}
        className="contact-grid">

          {/* Left — contact info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
            style={{ display: "flex", flexDirection: "column", gap: "32px" }}
          >
            {[
              {
                icon:  MapPin,
                label: "Location",
                value: hotelConfig.location,
                sub:   "Atiku Junction, Rayfield — replace with exact details",
              },
              {
                icon:  Phone,
                label: "Phone",
                value: hotelConfig.phone || "Not configured",
                sub:   "Configure via environment variable",
                href:  hotelConfig.phone ? `tel:${hotelConfig.phone}` : undefined,
              },
              {
                icon:  MessageCircle,
                label: "WhatsApp",
                value: hotelConfig.whatsapp ? hotelConfig.whatsapp : "Not configured",
                sub:   "Configure via NEXT_PUBLIC_HOTEL_WHATSAPP",
                href:  hotelConfig.whatsapp ? `https://wa.me/${hotelConfig.whatsapp}` : undefined,
              },
              {
                icon:  Mail,
                label: "Email",
                value: hotelConfig.email || "Not configured",
                sub:   "Configure via NEXT_PUBLIC_HOTEL_EMAIL",
                href:  hotelConfig.email ? `mailto:${hotelConfig.email}` : undefined,
              },
              {
                icon:  Clock,
                label: "Front Desk Hours",
                value: "Business hours configurable",
                sub:   "Replace with verified opening hours",
              },
            ].map(({ icon: Icon, label, value, sub, href }) => (
              <div key={label} style={{ display: "flex", gap: "16px" }}>
                <div style={{
                  width:         "44px",
                  height:        "44px",
                  borderRadius:  "4px",
                  background:    "rgba(201,162,39,0.08)",
                  border:        "1px solid rgba(201,162,39,0.15)",
                  display:       "flex",
                  alignItems:    "center",
                  justifyContent:"center",
                  flexShrink:    0,
                }}>
                  <Icon size={18} color="var(--gold)" strokeWidth={1.5} />
                </div>
                <div>
                  <div style={{
                    fontSize:      "10px",
                    fontWeight:    600,
                    letterSpacing: "0.15em",
                    textTransform: "uppercase",
                    color:         "var(--grey)",
                    marginBottom:  "4px",
                  }}>
                    {label}
                  </div>
                  {href ? (
                    <a href={href} style={{
                      fontSize:      "16px",
                      fontWeight:    500,
                      color:         "#fff",
                      textDecoration:"none",
                      display:       "block",
                      marginBottom:  "2px",
                      transition:    "color 0.2s",
                    }}
                    onMouseEnter={e => (e.currentTarget.style.color = "var(--gold)")}
                    onMouseLeave={e => (e.currentTarget.style.color = "#fff")}
                    >
                      {value}
                    </a>
                  ) : (
                    <div style={{ fontSize: "16px", fontWeight: 500, color: "#fff", marginBottom: "2px" }}>
                      {value}
                    </div>
                  )}
                  <div style={{ fontSize: "13px", color: "var(--grey)" }}>{sub}</div>
                </div>
              </div>
            ))}
          </motion.div>

          {/* Right — map placeholder */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div style={{
              width:        "100%",
              aspectRatio:  "4/3",
              borderRadius: "4px",
              overflow:     "hidden",
              position:     "relative",
            }}>
              <iframe
                src="https://www.google.com/maps?q=Atiku+Junction,+Rayfield,+Jos,+Plateau+State,+Nigeria&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: "260px", filter: "grayscale(100%) invert(90%) contrast(90%)" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Xceptional Place Hotel location (demo)"
              />

              <div style={{ padding: "12px 14px", textAlign: "center", color: "var(--grey)", fontSize: "13px" }}>
                Demo map centered on Atiku Junction, Rayfield, Jos. Replace with exact coordinates or your preferred map provider.
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .contact-grid { grid-template-columns: 1fr !important; gap: 48px !important; }
        }
      `}</style>
    </section>
  );
}