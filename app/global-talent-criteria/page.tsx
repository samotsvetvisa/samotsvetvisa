import type { Metadata } from "next";
import { GlobalTalentCriteriaPage } from "../components/GlobalTalentCriteriaPage";
import { pageMetadata } from "../site";

export const metadata: Metadata = pageMetadata({ title: "Карта критериев UK Global Talent", description: "Открытая карта критериев Global Talent для digital technology: основания, доказательства, структура комплекта и типичные слабые места.", path: "/global-talent-criteria" });

export default function Page() { return <GlobalTalentCriteriaPage />; }
