import { CLINIC_CONTACT, UNITS_DATA } from "@/data/content";

export default function JsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Physician",
        "@id": "https://cristianoavilapsicologo.com.br/#physician",
        "name": CLINIC_CONTACT.fullName,
        "jobTitle": "Psicólogo Clínico e Hipnoterapeuta",
        "description": "Atendimento psicológico clínico presencial e online, especializado em TDAH, Ansiedade, Hipnoterapia e Neurociência.",
        "url": "https://cristianoavilapsicologo.com.br",
        "telephone": CLINIC_CONTACT.phone,
        "email": CLINIC_CONTACT.email,
        "image": CLINIC_CONTACT.avatarUrl,
        "sameAs": [
          CLINIC_CONTACT.instagram,
          CLINIC_CONTACT.doctoraliaUrl,
          CLINIC_CONTACT.zenklubUrl,
          CLINIC_CONTACT.youtube,
          CLINIC_CONTACT.facebook
        ],
        "knowsAbout": [
          "Psicologia Clínica",
          "Hipnoterapia Clínica OMNI",
          "Neurociência Comportamental",
          "Tratamento de Ansiedade",
          "TDAH em Adultos",
          "Regulação Emocional"
        ]
      },
      ...UNITS_DATA.map((unit) => ({
        "@type": "MedicalBusiness",
        "@id": `https://cristianoavilapsicologo.com.br/#unit-${unit.id}`,
        "name": `Consultório Cristiano Ávila - ${unit.city}`,
        "description": `Consultório presencial de psicologia clínica e hipnoterapia em ${unit.city} (${unit.state}).`,
        "telephone": CLINIC_CONTACT.phone,
        "url": `https://cristianoavilapsicologo.com.br/unidades#${unit.id}`,
        "address": {
          "@type": "PostalAddress",
          "streetAddress": unit.address,
          "addressLocality": unit.city,
          "addressRegion": unit.state,
          "postalCode": unit.zip || "01000-000",
          "addressCountry": "BR"
        },
        "priceRange": "$$",
        "openingHours": unit.hours || "Mo-Fr 08:00-20:00"
      }))
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
