import type { Metadata } from "next";
import ImportantSentencePage from "../../ideas/important-sentence/page";

const title = "The most important sentence is usually buried";
const description = "What policy and academic writing taught me about editing research for a public reader.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/writing/important-sentence" },
  openGraph: {
    title: `${title} | Yatin Dua`,
    description,
    url: "/writing/important-sentence",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: `${title} | Yatin Dua`,
    description,
  },
};

export default ImportantSentencePage;
