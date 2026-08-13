export const hotelConfig = {
  name: "Xceptional Place Hotel",
  shortName: "Xceptional Place",
  location: "Atiku Junction, Rayfield, Jos, Plateau State, Nigeria",
  locationShort: "Atiku Junction, Rayfield, Jos, Plateau State",
  // Configure via environment variables (NEXT_PUBLIC_*) for client access
  phone: process.env.NEXT_PUBLIC_HOTEL_PHONE || "",
  email: process.env.NEXT_PUBLIC_HOTEL_EMAIL || "",
  whatsapp: process.env.NEXT_PUBLIC_HOTEL_WHATSAPP || "",
  // Demo display values (used when real values are not configured)
  phoneDemo: "+234 000 000 0000",
  emailDemo: "contact@example.com",
  whatsappDemo: "0000000000",
  frontDeskHoursDemo: "Mon–Sun: 07:00 – 23:00 (Demo)",
  pitchDisclaimer:
    "Website concept created for demonstration purposes. Final content, imagery, branding, contact information, and booking details are subject to hotel approval.",
};

export default hotelConfig;
