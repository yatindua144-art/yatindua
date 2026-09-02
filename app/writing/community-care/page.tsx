import type { Metadata } from "next";
import CommunityCarePage from "../../ideas/community-care/page";

const title = "Community care in action";
const description = "What a neighbourhood institution can contribute to Vancouver's response to homelessness, mental health, and substance use, and where its role should end.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/writing/community-care" },
  openGraph: {
    title: `${title} | Yatin Dua`,
    description,
    url: "/writing/community-care",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: `${title} | Yatin Dua`,
    description,
  },
};

export default CommunityCarePage;
