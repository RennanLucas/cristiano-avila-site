import { CLINIC_CONTACT, UNITS_DATA } from "@/data/content";
import { PROFESSIONAL_REGISTRATION, SITE_URL } from "@/lib/site-policy";

function openingHoursSpecification(hours: string) {
  const match = hours.match(/(\d{2})h\s?às\s?(\d{2})h/);
  if (!match) return undefined;

  return {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    opens: `${match[1]}:00`,
    closes: `${match[2]}:00`,
  };
}

export default function JsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": `${SITE_URL}/#professional`,
        name: CLINIC_CONTACT.fullName,
        jobTitle: `Psicólogo Clínico • ${PROFESSIONAL_REGISTRATION}`,
        description: "Psicólogo clínico com atendimento presencial e online.",
        url: SITE_URL,
        telephone: CLINIC_CONTACT.phone,
        email: CLINIC_CONTACT.email,
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
      },
      ...UNITS_DATA.map((unit) => ({
        "@type": "LocalBusiness",
        "@id": `${SITE_URL}/#unit-${unit.id}`,
        name: `Consultório Cristiano Ávila - ${unit.city}`,
        description: `Atendimento psicológico presencial em ${unit.city}, ${unit.state}.`,
        telephone: CLINIC_CONTACT.phone,
        url: `${SITE_URL}/unidades#${unit.id}`,
        image: `${SITE_URL}${unit.imageUrl}`,
        address: {
          "@type": "PostalAddress",
          streetAddress: unit.address,
          addressLocality: unit.city,
          addressRegion: unit.state,
          postalCode: unit.zip,
          addressCountry: "BR",
        },
        openingHoursSpecification: openingHoursSpecification(unit.hours),
      })),
    ],
  };

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />;
}
