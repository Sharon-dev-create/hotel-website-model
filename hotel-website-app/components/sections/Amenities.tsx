"use client";

import { motion }   from "framer-motion";
import { useInView } from "framer-motion";
import { useRef }    from "react";
import {
  Wifi, UtensilsCrossed, Coffee, Car,
  ConciergeBell, Shirt, Clock, Presentation,
} from "lucide-react";

const AMENITIES = [
  { icon: Wifi,             label: "High-Speed Wi-Fi",        desc: "Complimentary in all rooms and public areas"    },
  { icon: UtensilsCrossed,  label: "Restaurant",              desc: "Serving Nigerian and continental cuisine daily" },
  { icon: Coffee,           label: "Free Breakfast",          desc: "Full breakfast included with every booking"     },
  { icon: Car,              label: "Free Parking",            desc: "Secure on-site parking for all guests"          },
  { icon: ConciergeBell,    label: "Room Service",            desc: "In-room dining available around the clock"      },
  { icon: Shirt,            label: "Laundry Service",         desc: "Same-day laundry and dry cleaning"              },
  { icon: Clock,            label: "24-hr Front Desk",        desc: "Our team is always available to assist you"     },
  { icon: Presentation,     label: "Meeting Space",           desc: "Fully equipped rooms for conferences and events" },
];

export function Amenities() {
  const ref    = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="amenities" ref={ref} style={{ padding: "120px 40px" }}>
      <div style={{ maxWidth: "1280px", margin: "0 auto" }}>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          style={{ marginBottom: "72px" }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "20px" }}>
            <div style={{ width: "32px", height: "1px", background: "var(--gold)" }} />
            <span style={{
              fontSize:      "11px",
              fontWeight:    600,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color:         "var(--gold)",
            }}>
              Hotel Facilities
            </span>
          </div>
          <h2 style={{
            fontFamily:   "var(--font-playfair)",
            fontSize:     "clamp(28px, 4vw, 48px)",
            fontWeight:   400,
            color:        "#fff",
            maxWidth:     "480px",
          }}>
            Everything You Need,<br />
            <span style={{ fontStyle: "italic", color: "var(--gold)" }}>All in One Place</span>
          </h2>
        </motion.div>

        {/* Grid */}
        <div style={{
          display:             "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
          gap:                 "1px",
          background:          "rgba(255,255,255,0.05)",
          border:              "1px solid rgba(255,255,255,0.05)",
          borderRadius:        "4px",
          overflow:            "hidden",
        }}>
          {AMENITIES.map(({ icon: Icon, label, desc }, i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              style={{
                padding:    "32px 28px",
                background: "#0d0d0d",
                transition: "background 0.25s",
                cursor:     "default",
              }}
              onMouseEnter={e => (e.currentTarget.style.background = "rgba(201,162,39,0.04)")}
              onMouseLeave={e => (e.currentTarget.style.background = "#0d0d0d")}
            >
              <div style={{
                width:         "44px",
                height:        "44px",
                borderRadius:  "4px",
                background:    "rgba(201,162,39,0.08)",
                border:        "1px solid rgba(201,162,39,0.15)",
                display:       "flex",
                alignItems:    "center",
                justifyContent:"center",
                marginBottom:  "16px",
              }}>
                <Icon size={18} color="var(--gold)" strokeWidth={1.5} />
              </div>
              <div style={{
                fontSize:     "15px",
                fontWeight:   600,
                color:        "#fff",
                marginBottom: "8px",
              }}>
                {label}
              </div>
              <div style={{
                fontSize:  "13px",
                lineHeight: 1.6,
                color:     "var(--grey)",
              }}>
                {desc}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}