import { SPECIALTIES_DATA } from "@/data/content";
import { isPublicSpecialty } from "@/lib/site-policy";
import SpecialtiesClient, { type SpecialtySummary } from "./SpecialtiesClient";

export default function Specialties() {
  const items: SpecialtySummary[] = SPECIALTIES_DATA
    .filter((item) => isPublicSpecialty(item.id))
    .map((item) => ({
      id: item.id,
      slug: item.slug,
      title: item.title,
      shortDesc: item.shortDesc,
      badge: item.badge,
    }));

  return <SpecialtiesClient items={items} />;
}
