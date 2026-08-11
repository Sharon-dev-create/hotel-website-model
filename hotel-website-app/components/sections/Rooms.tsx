"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Wifi, Coffee, Tv, Wind, Bath, Users } from "lucide-react";

const ROOMS = [
  {
    name: "Deluxe Room",
    slug: "deluxe",
    image: "/images/rooms/room1.webp",
    price: "₦35,000",
    per: "per night",
    tagline: "Comfort redefined",
    features: ["King bed", "City view", "Work desk", "En-suite bathroom"],
    icons: [Wifi, Coffee, Tv, Wind],
    capacity: "2 Guests",
    size: "28 m²",
    accent: "rgba(201,162,39,0.08)",
    featured: false,
  },
  {
    name: "Executive Room",
    slug: "executive",
    image: "/images/rooms/room2.webp",
    price: "₦55,000",
    per: "per night",
    tagline: "For the discerning traveler",
    features: ["King bed", "Lounge area", "Mini bar", "Premium toiletries"],
    icons: [Wifi, Coffee, Tv, Bath],
    capacity: "2 Guests",
    size: "38 m²",
    accent: "rgba(201,162,39,0.12)",
    featured: true,
  },
  {
    name: "Suite",
    price: "₦90,000",
    slug: "suite",
    image: "/images/rooms/room3.webp",
    per: "per night",
    tagline: "The pinnacle of luxury",
    features: [
      "Separate living room",
      "Jacuzzi",
      "Butler service",
      "Panoramic view",
    ],
    icons: [Wifi, Bath, Users, Wind],
    capacity: "4 Guests",
    size: "65 m²",
    accent: "rgba(201,162,39,0.08)",
    featured: false,
  },
];

export function Rooms() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="rooms"
      ref={ref}
      style={{ padding: "120px 40px", background: "#0d0d0d" }}
    >
      <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          style={{ textAlign: "center", marginBottom: "72px" }}
        >
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "12px",
              marginBottom: "20px",
            }}
          >
            <div
              style={{
                width: "32px",
                height: "1px",
                background: "var(--gold)",
              }}
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
              Accommodations
            </span>
            <div
              style={{
                width: "32px",
                height: "1px",
                background: "var(--gold)",
              }}
            />
          </div>
          <h2
            style={{
              fontFamily: "var(--font-playfair)",
              fontSize: "clamp(28px, 4vw, 48px)",
              fontWeight: 400,
              color: "#fff",
              marginBottom: "16px",
            }}
          >
            Our Rooms &amp; Suites
          </h2>
          <p
            style={{
              fontSize: "16px",
              color: "var(--grey)",
              maxWidth: "480px",
              margin: "0 auto",
              lineHeight: 1.7,
            }}
          >
            Each room is thoughtfully designed to offer comfort, elegance, and a
            sense of calm.
          </p>
        </motion.div>

        {/* Room cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "24px",
          }}
        >
          {ROOMS.map((room, i) => (
            <motion.div
              key={room.name}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: i * 0.15 }}
              style={{
                background: room.featured ? "rgba(201,162,39,0.06)" : "#111",
                border: room.featured
                  ? "1px solid rgba(201,162,39,0.35)"
                  : "1px solid rgba(255,255,255,0.06)",
                borderRadius: "4px",
                overflow: "hidden",
                position: "relative",
              }}
            >
              {/* Featured badge */}
              {room.featured && (
                <div
                  style={{
                    position: "absolute",
                    top: "16px",
                    right: "16px",
                    padding: "4px 12px",
                    background: "var(--gold)",
                    color: "#0B0B0B",
                    fontSize: "10px",
                    fontWeight: 700,
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    borderRadius: "2px",
                    zIndex: 1,
                  }}
                >
                  Most Popular
                </div>
              )}

              {/* Room image with hover zoom */}
              <div
                style={{
                  overflow: "hidden",
                  height: "240px",
                  borderBottom: "1px solid rgba(255,255,255,0.05)",
                }}
              >
                <div
                  style={{
                    width: "100%",
                    height: "100%",
                    backgroundImage: `url('${room.image}')`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    transition: "transform 0.6s ease",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLDivElement).style.transform =
                      "scale(1.06)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLDivElement).style.transform =
                      "scale(1)";
                  }}
                />
              </div>

              {/* Content */}
              <div style={{ padding: "28px" }}>
                <div
                  style={{
                    fontSize: "11px",
                    fontWeight: 600,
                    letterSpacing: "0.15em",
                    textTransform: "uppercase",
                    color: "var(--gold)",
                    marginBottom: "8px",
                  }}
                >
                  {room.tagline}
                </div>

                <h3
                  style={{
                    fontFamily: "var(--font-playfair)",
                    fontSize: "24px",
                    fontWeight: 500,
                    color: "#fff",
                    marginBottom: "20px",
                  }}
                >
                  {room.name}
                </h3>

                {/* Features */}
                <ul
                  style={{
                    listStyle: "none",
                    marginBottom: "24px",
                    display: "flex",
                    flexDirection: "column",
                    gap: "10px",
                  }}
                >
                  {room.features.map((f) => (
                    <li
                      key={f}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "10px",
                        fontSize: "14px",
                        color: "rgba(255,255,255,0.6)",
                      }}
                    >
                      <div
                        style={{
                          width: "4px",
                          height: "4px",
                          borderRadius: "50%",
                          background: "var(--gold)",
                          flexShrink: 0,
                        }}
                      />
                      {f}
                    </li>
                  ))}
                </ul>

                {/* Price + CTA */}
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    paddingTop: "20px",
                    borderTop: "1px solid rgba(255,255,255,0.06)",
                  }}
                >
                  <div>
                    <div
                      style={{
                        fontFamily: "var(--font-playfair)",
                        fontSize: "26px",
                        fontWeight: 400,
                        color: "var(--gold)",
                        lineHeight: 1,
                      }}
                    >
                      {room.price}
                    </div>
                    <div
                      style={{
                        fontSize: "11px",
                        color: "var(--grey)",
                        marginTop: "3px",
                      }}
                    >
                      {room.per}
                    </div>
                  </div>

                  <a
                    href="#booking"
                    style={{
                      padding: "10px 20px",
                      background: room.featured ? "var(--gold)" : "transparent",
                      color: room.featured ? "#0B0B0B" : "var(--gold)",
                      border: "1px solid var(--gold)",
                      fontSize: "12px",
                      fontWeight: 700,
                      letterSpacing: "0.08em",
                      textTransform: "uppercase",
                      textDecoration: "none",
                      borderRadius: "2px",
                      transition: "all 0.2s",
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLAnchorElement).style.background =
                        "var(--gold)";
                      (e.currentTarget as HTMLAnchorElement).style.color =
                        "#0B0B0B";
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLAnchorElement).style.background =
                        room.featured ? "var(--gold)" : "transparent";
                      (e.currentTarget as HTMLAnchorElement).style.color =
                        room.featured ? "#0B0B0B" : "var(--gold)";
                    }}
                  >
                    Book
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
