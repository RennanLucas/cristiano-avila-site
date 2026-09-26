import { SPECIALTIES_DATA } from "@/data/content";
import { SPECIALTY_COPY } from "@/data/specialty-copy";
import { isPublicSpecialty } from "@/lib/site-policy";
import SpecialtiesClient, { type SpecialtySummary } from "./SpecialtiesClient";

export default function Specialties() {
  const items: SpecialtySummary[] = SPECIALTIES_DATA
    .filter((item) => isPublicSpecialty(item.id))
    .map((item) => {
      const copy = SPECIALTY_COPY[item.id];
      return {
        id: item.id,
        slug: item.slug,
        title: item.title,
        shortDesc: copy?.shortDesc ?? item.shortDesc,
        badge: item.badge,
      };
    });

  return <SpecialtiesClient items={items} />;
}
