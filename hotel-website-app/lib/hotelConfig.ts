export const hotelConfig = {
  name: "Xceptional Place Hotel",
  shortName: "Xceptional Place",
  location: "Atiku Junction, Rayfield, Jos, Plateau State, Nigeria",
  locationShort: "Atiku Junction, Rayfield, Jos, Plateau State",
  // Configure via environment variables (NEXT_PUBLIC_*) for client access
  phone: process.env.NEXT_PUBLIC_HOTEL_PHONE || "",
  email: process.env.NEXT_PUBLIC_HOTEL_EMAIL || "",
  whatsapp: process.env.NEXT_PUBLIC_HOTEL_WHATSAPP || "",
  pitchDisclaimer:
    "Website concept created for demonstration purposes. Final content, imagery, branding, contact information, and booking details are subject to hotel approval.",
};

export default hotelConfig;
