"use client";

import React from "react";
import { Phone, MapPin, Mail, Globe } from "lucide-react";
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
              <span style={{ fontFamily: "var(--font-playfair)", fontSize: "24px", fontWeight: 600, color: "#fff" }}>
                Novel
              </span>
              <span style={{ fontFamily: "var(--font-playfair)", fontSize: "24px", fontWeight: 400, color: "var(--gold)", marginLeft: "5px" }}>
                Suite
              </span>
            </div>
            <p style={{ fontSize: "14px", lineHeight: 1.7, color: "var(--grey)", marginBottom: "24px", maxWidth: "260px" }}>
              A sanctuary of comfort and elegance in the heart of Jos, Plateau State, Nigeria.
            </p>
            <div style={{ display: "flex", gap: "12px" }}>
              {([Instagram, Twitter] as React.ElementType[]).map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  style={{
                    width: "36px", height: "36px", borderRadius: "4px",
                    background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.08)",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    color: "var(--grey)", textDecoration: "none", transition: "all 0.2s",
                  }}
                  onMouseEnter={e => {
                    (e.currentTarget as HTMLAnchorElement).style.borderColor = "var(--gold)";
                    (e.currentTarget as HTMLAnchorElement).style.color = "var(--gold)";
                  }}
                  onMouseLeave={e => {
                    (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(255,255,255,0.08)";
                    (e.currentTarget as HTMLAnchorElement).style.color = "var(--grey)";
                  }}
                >
                  <Icon size={15} />
                </a>
              ))}
            </div>
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
                  Jos, Plateau State,<br />Nigeria
                </span>
              </div>
              <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
                <Phone size={14} color="var(--gold)" />
                <a href="tel:+2348000000000" style={{ fontSize: "13px", color: "var(--grey)", textDecoration: "none" }}>
                  +234 800 000 0000
                </a>
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
             {new Date().getFullYear()} Novel Suite. All rights reserved.
          </span>
          <span style={{
        fontSize:      "11px",
        color:         "rgba(255,255,255,0.18)",
        fontStyle:     "italic",
        letterSpacing: "0.02em",
  }}>
    Website concept &amp; demo created for Novel Suite
  </span>
          <span style={{ fontSize: "12px", color: "rgba(255,255,255,0.2)" }}>
            Jos · Plateau State · Nigeria
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