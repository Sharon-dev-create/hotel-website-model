"use client";

import { useState }  from "react";
import { motion }    from "framer-motion";
import { useInView } from "framer-motion";
import { useRef }    from "react";
import { Send } from "lucide-react";
import { hotelConfig } from "../../lib/hotelConfig";

export function Booking() {
  const ref    = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const [form, setForm]       = useState({
    name:      "",
    email:     "",
    phone:     "",
    checkin:   "",
    checkout:  "",
    guests:    "1",
    roomType:  "Deluxe Room",
    requests:  "",
  });
  const [submitted, setSubmitted] = useState(false);

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) {
    setForm(f => ({ ...f, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    // Build message
    const msgLines = [
      `Booking enquiry for ${hotelConfig.name}`,
      ``,
      `Name: ${form.name}`,
      `Email: ${form.email}`,
      `Phone: ${form.phone}`,
      `Room Type: ${form.roomType}`,
      `Check-in: ${form.checkin}`,
      `Check-out: ${form.checkout}`,
      `Guests: ${form.guests}`,
      `Special requests: ${form.requests || "None"}`,
    ];
    const message = msgLines.join("\n");

    // If WhatsApp configured, open WhatsApp chat with prefilled message
    if (hotelConfig.whatsapp) {
      const waUrl = `https://wa.me/${hotelConfig.whatsapp}?text=${encodeURIComponent(message)}`;
      window.open(waUrl, "_blank");
    } else {
      // Fallback to email (use configured email or demo email)
      const to = hotelConfig.email || hotelConfig.emailDemo;
      const subject = `Booking enquiry from ${form.name || "Website"}`;
      const mailto = `mailto:${to}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(message)}`;
      window.location.href = mailto;
    }

    setSubmitted(true);
  }

  const inputStyle: React.CSSProperties = {
    width:        "100%",
    padding:      "14px 0",
    background:   "transparent",
    border:       "none",
    borderBottom: "1px solid rgba(255,255,255,0.15)",
    color:        "#fff",
    fontSize:     "14px",
    fontFamily:   "var(--font-inter)",
    outline:      "none",
    transition:   "border-color 0.2s",
  };

  const labelStyle: React.CSSProperties = {
    fontSize:      "10px",
    fontWeight:    600,
    letterSpacing: "0.15em",
    textTransform: "uppercase",
    color:         "var(--gold)",
    display:       "block",
    marginBottom:  "4px",
  };

  return (
    <section id="booking" ref={ref} style={{ padding: "120px 40px" }}>
      <div style={{ maxWidth: "800px", margin: "0 auto" }}>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          style={{ textAlign: "center", marginBottom: "64px" }}
        >
          <div style={{
            display:      "inline-flex",
            alignItems:   "center",
            gap:          "12px",
            marginBottom: "20px",
          }}>
            <div style={{ width: "32px", height: "1px", background: "var(--gold)" }} />
            <span style={{
              fontSize:      "11px",
              fontWeight:    600,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color:         "var(--gold)",
            }}>
              Reservations
            </span>
            <div style={{ width: "32px", height: "1px", background: "var(--gold)" }} />
          </div>
          <h2 style={{
            fontFamily:   "var(--font-playfair)",
            fontSize:     "clamp(28px, 4vw, 48px)",
            fontWeight:   400,
            color:        "#fff",
            marginBottom: "16px",
          }}>
            Book Your Stay
          </h2>
          <p style={{ fontSize: "15px", color: "var(--grey)", lineHeight: 1.7 }}>
            Reserve your room directly for the best rate. Our team will confirm
            your booking within 24 hours.
          </p>
        </motion.div>

        {submitted ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            style={{
              textAlign:    "center",
              padding:      "64px 40px",
              background:   "rgba(201,162,39,0.06)",
              border:       "1px solid rgba(201,162,39,0.2)",
              borderRadius: "4px",
            }}
          >
            <div style={{
              fontFamily:   "var(--font-playfair)",
              fontSize:     "48px",
              color:        "var(--gold)",
              marginBottom: "16px",
            }}>
              ✓
            </div>
            <h3 style={{
              fontFamily:   "var(--font-playfair)",
              fontSize:     "24px",
              color:        "#fff",
              marginBottom: "12px",
            }}>
              Booking Request Received
            </h3>
            <p style={{ fontSize: "15px", color: "var(--grey)", lineHeight: 1.7 }}>
              Thank you, {form.name}. We will confirm your reservation
              at {form.email} within 24 hours.
            </p>
          </motion.div>
        ) : (
          <motion.form
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            onSubmit={handleSubmit}
            style={{
              background:   "rgba(255,255,255,0.02)",
              border:       "1px solid rgba(255,255,255,0.07)",
              borderRadius: "4px",
              padding:      "48px",
            }}
          >
            {/* Row 1 */}
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "32px", marginBottom: "32px" }}
                 className="form-grid">
              <div>
                <label style={labelStyle}>Full Name</label>
                <input
                  name="name" required
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Your full name"
                  style={inputStyle}
                  onFocus={e => (e.target.style.borderBottomColor = "var(--gold)")}
                  onBlur={e  => (e.target.style.borderBottomColor = "rgba(255,255,255,0.15)")}
                />
              </div>
              <div>
                <label style={labelStyle}>Email Address</label>
                <input
                  name="email" type="email" required
                  value={form.email}
                  onChange={handleChange}
                  placeholder="your@email.com"
                  style={inputStyle}
                  onFocus={e => (e.target.style.borderBottomColor = "var(--gold)")}
                  onBlur={e  => (e.target.style.borderBottomColor = "rgba(255,255,255,0.15)")}
                />
              </div>
            </div>

            {/* Row 2 */}
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "32px", marginBottom: "32px" }}
                 className="form-grid">
              <div>
                <label style={labelStyle}>Phone Number</label>
                <input
                  name="phone" type="tel"
                  value={form.phone}
                  onChange={handleChange}
                  placeholder="+234..."
                  style={inputStyle}
                  onFocus={e => (e.target.style.borderBottomColor = "var(--gold)")}
                  onBlur={e  => (e.target.style.borderBottomColor = "rgba(255,255,255,0.15)")}
                />
              </div>
              <div>
                <label style={labelStyle}>Room Type</label>
                <select
                  name="roomType"
                  value={form.roomType}
                  onChange={handleChange}
                  style={{ ...inputStyle, cursor: "pointer" }}
                  onFocus={e => (e.target.style.borderBottomColor = "var(--gold)")}
                  onBlur={e  => (e.target.style.borderBottomColor = "rgba(255,255,255,0.15)")}
                >
                  <option value="Standard Room">Standard Room</option>
                  <option value="Deluxe Room">Deluxe Room</option>
                  <option value="Executive Room">Executive Room</option>
                  <option value="Premium Suite">Premium Suite</option>
                </select>
              </div>
            </div>

            {/* Row 3 */}
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "32px", marginBottom: "32px" }}
                 className="form-grid-3">
              <div>
                <label style={labelStyle}>Check-in</label>
                <input
                  name="checkin" type="date" required
                  value={form.checkin}
                  onChange={handleChange}
                  min={new Date().toISOString().split("T")[0]}
                  style={{ ...inputStyle, colorScheme: "dark" }}
                  onFocus={e => (e.target.style.borderBottomColor = "var(--gold)")}
                  onBlur={e  => (e.target.style.borderBottomColor = "rgba(255,255,255,0.15)")}
                />
              </div>
              <div>
                <label style={labelStyle}>Check-out</label>
                <input
                  name="checkout" type="date" required
                  value={form.checkout}
                  onChange={handleChange}
                  min={form.checkin || new Date().toISOString().split("T")[0]}
                  style={{ ...inputStyle, colorScheme: "dark" }}
                  onFocus={e => (e.target.style.borderBottomColor = "var(--gold)")}
                  onBlur={e  => (e.target.style.borderBottomColor = "rgba(255,255,255,0.15)")}
                />
              </div>
              <div>
                <label style={labelStyle}>Guests</label>
                <select
                  name="guests"
                  value={form.guests}
                  onChange={handleChange}
                  style={{ ...inputStyle, cursor: "pointer" }}
                  onFocus={e => (e.target.style.borderBottomColor = "var(--gold)")}
                  onBlur={e  => (e.target.style.borderBottomColor = "rgba(255,255,255,0.15)")}
                >
                  {[1,2,3,4].map(n => (
                    <option key={n} value={n}>{n} Guest{n > 1 ? "s" : ""}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* Row 4 */}
            <div style={{ marginBottom: "40px" }}>
              <label style={labelStyle}>Special Requests (optional)</label>
              <textarea
                name="requests"
                value={form.requests}
                onChange={handleChange}
                placeholder="Any special requirements or requests..."
                rows={3}
                style={{
                  ...inputStyle,
                  resize:     "none",
                  paddingTop: "12px",
                }}
                onFocus={e => (e.target.style.borderBottomColor = "var(--gold)")}
                onBlur={e  => (e.target.style.borderBottomColor = "rgba(255,255,255,0.15)")}
              />
            </div>

            <button
              type="submit"
              style={{
                width:         "100%",
                padding:       "18px",
                background:    "var(--gold)",
                color:         "#0B0B0B",
                fontSize:      "13px",
                fontWeight:    700,
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                border:        "none",
                borderRadius:  "2px",
                cursor:        "pointer",
                display:       "flex",
                alignItems:    "center",
                justifyContent:"center",
                gap:           "10px",
                transition:    "opacity 0.2s",
                fontFamily:    "var(--font-inter)",
              }}
              onMouseEnter={e => (e.currentTarget.style.opacity = "0.88")}
              onMouseLeave={e => (e.currentTarget.style.opacity = "1")}
            >
              <Send size={16} />
              Send Booking Request
            </button>
          </motion.form>
        )}
      </div>

      <style>{`
        @media (max-width: 600px) {
          .form-grid   { grid-template-columns: 1fr !important; }
          .form-grid-3 { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}