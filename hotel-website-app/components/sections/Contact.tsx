"use client";

import { motion }    from "framer-motion";
import { useInView } from "framer-motion";
import { useRef }    from "react";
import { Phone, Mail, MapPin, MessageCircle, Clock } from "lucide-react";

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
                value: "Jos, Plateau State, Nigeria",
                sub:   "City center — easily accessible",
              },
              {
                icon:  Phone,
                label: "Phone",
                value: "+234 800 000 0000",
                sub:   "Available 24 hours a day",
                href:  "tel:+2348000000000",
              },
              {
                icon:  MessageCircle,
                label: "WhatsApp",
                value: "+234 800 000 0000",
                sub:   "Quick responses via WhatsApp",
                href:  "https://wa.me/2348000000000",
              },
              {
                icon:  Mail,
                label: "Email",
                value: "info@novelsuite.com",
                sub:   "We reply within a few hours",
                href:  "mailto:info@novelsuite.com",
              },
              {
                icon:  Clock,
                label: "Front Desk Hours",
                value: "Open 24 / 7",
                sub:   "Always here when you need us",
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
              background:   "#111",
              border:       "1px solid rgba(255,255,255,0.06)",
              borderRadius: "4px",
              overflow:     "hidden",
              position:     "relative",
            }}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126021.24488571878!2d8.822000!3d9.908769!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x10535400000000001%3A0x0!2sJos%2C%20Plateau%20State%2C%20Nigeria!5e0!3m2!1sen!2s!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0, filter: "grayscale(100%) invert(90%) contrast(90%)" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
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