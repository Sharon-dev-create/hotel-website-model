"use client";

import { useState, useEffect } from "react";
import Link                    from "next/link";
import { Menu, X }             from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const LINKS = [
  { label: "Home",      href: "#home"      },
  { label: "Rooms",     href: "#rooms"     },
  { label: "Gallery",   href: "#gallery"   },
  { label: "Amenities", href: "#amenities" },
  { label: "About",     href: "#about"     },
  { label: "Contact",   href: "#contact"   },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        style={{
          position:       "fixed",
          top:            0,
          left:           0,
          right:          0,
          zIndex:         100,
          transition:     "background 0.4s ease, border-color 0.4s ease",
          background:     scrolled ? "rgba(11,11,11,0.96)" : "transparent",
          borderBottom:   scrolled ? "1px solid rgba(201,162,39,0.2)" : "1px solid transparent",
          backdropFilter: scrolled ? "blur(12px)" : "none",
        }}
      >
        <div style={{
          maxWidth:       "1280px",
          margin:         "0 auto",
          padding:        "0 40px",
          height:         "72px",
          display:        "flex",
          alignItems:     "center",
          justifyContent: "space-between",
        }}>
          {/* Logo */}
          <Link href="#home" style={{ textDecoration: "none" }}>
            <div>
              <span style={{
                fontFamily:    "var(--font-playfair)",
                fontSize:      "22px",
                fontWeight:    600,
                color:         "#fff",
                letterSpacing: "-0.01em",
              }}>
                Novel
              </span>
              <span style={{
                fontFamily:  "var(--font-playfair)",
                fontSize:    "22px",
                fontWeight:  400,
                color:       "var(--gold)",
                marginLeft:  "5px",
              }}>
                Suite
              </span>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav
            className="hidden-mobile"
            style={{ display: "flex", alignItems: "center", gap: "36px" }}
          >
            {LINKS.map(({ label, href }) => (
              
                key={label}
                href={href}
                style={{
                  fontSize:       "12px",
                  fontWeight:     600,
                  letterSpacing:  "0.1em",
                  textTransform:  "uppercase",
                  color:          "#ccc",
                  textDecoration: "none",
                  transition:     "color 0.2s",
                }}
                onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.color = "var(--gold)"; }}
                onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.color = "#ccc"; }}
              >
                {label}
              </a>
            ))}

            
              href="#booking"
              style={{
                padding:        "10px 24px",
                background:     "var(--gold)",
                color:          "#0B0B0B",
                fontSize:       "12px",
                fontWeight:     700,
                letterSpacing:  "0.1em",
                textTransform:  "uppercase",
                textDecoration: "none",
                borderRadius:   "2px",
                transition:     "opacity 0.2s",
              }}
              onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.opacity = "0.85"; }}
              onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.opacity = "1"; }}
            >
              Book Now
            </a>
          </nav>

          {/* Mobile menu button */}
          <button
            className="show-mobile"
            onClick={() => setMenuOpen(o => !o)}
            style={{
              background: "none",
              border:     "none",
              color:      "#fff",
              cursor:     "pointer",
              display:    "none",
            }}
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            style={{
              position:       "fixed",
              top:            "72px",
              left:           0,
              right:          0,
              zIndex:         99,
              background:     "rgba(11,11,11,0.98)",
              borderBottom:   "1px solid rgba(201,162,39,0.2)",
              padding:        "24px 40px",
              display:        "flex",
              flexDirection:  "column",
              gap:            "20px",
            }}
          >
            {LINKS.map(({ label, href }) => (
              
                key={label}
                href={href}
                onClick={() => setMenuOpen(false)}
                style={{
                  fontSize:       "13px",
                  fontWeight:     600,
                  letterSpacing:  "0.1em",
                  textTransform:  "uppercase",
                  color:          "#ccc",
                  textDecoration: "none",
                }}
              >
                {label}
              </a>
            ))}

            
              href="#booking"
              onClick={() => setMenuOpen(false)}
              style={{
                padding:        "12px 24px",
                background:     "var(--gold)",
                color:          "#0B0B0B",
                fontSize:       "12px",
                fontWeight:     700,
                letterSpacing:  "0.1em",
                textTransform:  "uppercase",
                textDecoration: "none",
                borderRadius:   "2px",
                textAlign:      "center",
              }}
            >
              Book Now
            </a>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @media (max-width: 768px) {
          .hidden-mobile { display: none !important; }
          .show-mobile   { display: block !important; }
        }
        @media (min-width: 769px) {
          .show-mobile { display: none !important; }
        }
      `}</style>
    </>
  );
}