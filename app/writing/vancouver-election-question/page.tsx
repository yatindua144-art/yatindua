import type { Metadata } from "next";
import VancouverElectionQuestionPage from "../../ideas/vancouver-election-question/page";

const title = "The Vancouver election question nobody is asking";
const description = "The mayoral race will dominate Vancouver's 2026 election. For organizations with a file at City Hall, the more useful question is what will still move after October 17.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/writing/vancouver-election-question" },
  openGraph: {
    title: `${title} | Yatin Dua`,
    description,
    url: "/writing/vancouver-election-question",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: `${title} | Yatin Dua`,
    description,
  },
};

export default VancouverElectionQuestionPage;
