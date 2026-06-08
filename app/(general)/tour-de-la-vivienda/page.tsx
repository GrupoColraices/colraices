import { redirect } from "next/navigation";
import { TOUR_VIVIENDA_URL } from "@/app/lib/officialUrls";

export default function TourViviendaPage() {
  redirect(TOUR_VIVIENDA_URL);
}
