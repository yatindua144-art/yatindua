import type { Metadata } from "next";
import PassRatePage from "../../ideas/pass-rate/page";

const title = "The pass rate is not the outcome";
const description = "A practical evaluation blueprint for moving British Columbia's Mandatory Entry-Level Training conversation from test completion to first-job readiness and early safety performance.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/writing/pass-rate" },
  openGraph: {
    title: `${title} | Yatin Dua`,
    description,
    url: "/writing/pass-rate",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: `${title} | Yatin Dua`,
    description,
  },
};

export default PassRatePage;
