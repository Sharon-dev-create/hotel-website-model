"use client";

import React from "react";
import { Phone, MapPin, Mail, Globe } from "lucide-react";
import { hotelConfig } from "../../lib/hotelConfig";
const Instagram = Mail;
const Twitter = Globe;

export function Footer() {
  return (
    <footer style={{
      background:  "#080808",
      borderTop:   "1px solid rgba(255,255,255,0.05)",
      padding:     "64px 40px 32px",
    }}>
      <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
        <div
          className="footer-grid"
          style={{
            display:             "grid",
            gridTemplateColumns: "2fr 1fr 1fr 1fr",
            gap:                 "48px",
            marginBottom:        "56px",
          }}
        >
          {/* Brand */}
          <div>
            <div style={{ marginBottom: "20px" }}>
              <span style={{ fontFamily: "var(--font-playfair)", fontSize: "20px", fontWeight: 600, color: "#fff" }}>
                {hotelConfig.name.split(" ")[0]}
              </span>
              <span style={{ fontFamily: "var(--font-playfair)", fontSize: "20px", fontWeight: 400, color: "var(--gold)", marginLeft: "6px" }}>
                {hotelConfig.name.replace(hotelConfig.name.split(" ")[0] + " ", "")}
              </span>
            </div>
            <p style={{ fontSize: "14px", lineHeight: 1.7, color: "var(--grey)", marginBottom: "24px", maxWidth: "320px" }}>
              A premium website concept showcasing how {hotelConfig.name} could present its hospitality and services online.
            </p>
            {/* Social links intentionally left as placeholders for configuration */}
            <div style={{ display: "flex", gap: "12px" }} />
          </div>

          {/* Quick links */}
          <div>
            <div style={{ fontSize: "10px", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--gold)", marginBottom: "20px" }}>
              Quick Links
            </div>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "12px" }}>
              {["Home", "Rooms", "Gallery", "Amenities", "About", "Contact"].map(link => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    style={{ fontSize: "14px", color: "var(--grey)", textDecoration: "none", transition: "color 0.2s" }}
                    onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.color = "var(--gold)"; }}
                    onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.color = "var(--grey)"; }}
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Rooms */}
          <div>
            <div style={{ fontSize: "10px", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--gold)", marginBottom: "20px" }}>
              Accommodations
            </div>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "12px" }}>
              {["Deluxe Room", "Executive Room", "Suite"].map(r => (
                <li key={r}>
                  <a
                    href="#rooms"
                    style={{ fontSize: "14px", color: "var(--grey)", textDecoration: "none", transition: "color 0.2s" }}
                    onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.color = "var(--gold)"; }}
                    onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.color = "var(--grey)"; }}
                  >
                    {r}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <div style={{ fontSize: "10px", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--gold)", marginBottom: "20px" }}>
              Contact
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <div style={{ display: "flex", gap: "10px", alignItems: "flex-start" }}>
                <MapPin size={14} color="var(--gold)" style={{ marginTop: "2px", flexShrink: 0 }} />
                <span style={{ fontSize: "13px", color: "var(--grey)", lineHeight: 1.6 }}>
                  {hotelConfig.location}
                </span>
              </div>
              <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
                <Phone size={14} color="var(--gold)" />
                <span style={{ fontSize: "13px", color: "var(--grey)" }}>
                  {hotelConfig.phone || hotelConfig.phoneDemo}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{
          paddingTop: "24px", borderTop: "1px solid rgba(255,255,255,0.05)",
          display: "flex", justifyContent: "space-between", alignItems: "center",
          flexWrap: "wrap", gap: "12px",
        }}>
          <span style={{ fontSize: "12px", color: "var(--grey)" }}>
            {new Date().getFullYear()} {hotelConfig.name}. All rights reserved.
          </span>
          <span style={{
        fontSize:      "11px",
        color:         "rgba(255,255,255,0.18)",
        fontStyle:     "italic",
        letterSpacing: "0.02em",
  }}>
    {hotelConfig.pitchDisclaimer}
  </span>
          <span style={{ fontSize: "12px", color: "rgba(255,255,255,0.2)" }}>
            {hotelConfig.locationShort}
          </span>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .footer-grid { grid-template-columns: 1fr 1fr !important; gap: 32px !important; }
        }
        @media (max-width: 480px) {
          .footer-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </footer>
  );
}