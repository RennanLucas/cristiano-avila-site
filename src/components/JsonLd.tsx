import { CLINIC_CONTACT } from "@/data/content";
import { CURRENT_UNITS } from "@/data/units";
import { PROFESSIONAL_REGISTRATION, SITE_URL } from "@/lib/site-policy";

export default function JsonLd() {
  const professional = {
    "@type": "Person",
    "@id": `${SITE_URL}/#professional`,
    name: CLINIC_CONTACT.fullName,
    jobTitle: `Psicólogo Clínico • ${PROFESSIONAL_REGISTRATION}`,
    description: "Psicólogo clínico com atendimento presencial e online.",
    url: SITE_URL,
    telephone: CLINIC_CONTACT.phone,
    image: `${SITE_URL}${CLINIC_CONTACT.avatarUrl}`,
    hasOccupation: {
      "@type": "Occupation",
      name: "Psicólogo",
      occupationalCategory: "Psicologia Clínica",
    },
    sameAs: [
      CLINIC_CONTACT.instagram,
      CLINIC_CONTACT.doctoraliaUrl,
      CLINIC_CONTACT.zenklubUrl,
      CLINIC_CONTACT.youtube,
      CLINIC_CONTACT.facebook,
    ],
    knowsAbout: [
      "Psicologia Clínica",
      "Hipnoterapia Clínica",
      "Neurociência do Comportamento",
      "Ansiedade",
      "TDAH",
      "Regulação Emocional",
    ],
    ...(CLINIC_CONTACT.email ? { email: CLINIC_CONTACT.email } : {}),
  };

  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      professional,
      ...CURRENT_UNITS.map((unit) => {
        const usefulComplement = unit.complement && !unit.complement.toLowerCase().startsWith("atendimento")
          ? unit.complement
          : "";

        return {
          "@type": "LocalBusiness",
          "@id": `${SITE_URL}/#unit-${unit.id}`,
          name: `Consultório Cristiano Ávila - ${unit.city}`,
          description: `Atendimento psicológico presencial em ${unit.city}, ${unit.state}.`,
          telephone: CLINIC_CONTACT.phone,
          url: `${SITE_URL}/unidades#${unit.id}`,
          address: {
            "@type": "PostalAddress",
            streetAddress: usefulComplement ? `${unit.address}, ${usefulComplement}` : unit.address,
            addressLocality: unit.city,
            addressRegion: unit.state,
            postalCode: unit.zip,
            addressCountry: "BR",
          },
        };
      }),
    ],
  };

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />;
}
